<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <mainHeader></mainHeader>
      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-progress-linear class="ma-0" indeterminate v-if="isLoading"></v-progress-linear>
          <v-card-text v-if="!isLoading">
            <p class="text-xs-center b title my-4">FORM LEMBAR KERJA {{certificate.equipment.name}}</p>

            <v-layout row wrap>
              <v-flex xs12 sm6>
                <p class="b">No. Laporan : {{no_cert ? no_cert : 'Belum upload'}}</p>
                <p><span class="b">Status Verifikasi :</span> {{verifications[certificate.status]}}</p>
              </v-flex>
              <v-flex xs12 sm6 v-if="certificate.status == 3">
                <v-layout align-right justify-end>
                  <v-btn readonly large class="elevation-0 green white--text">Selesai</v-btn>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 v-if="certificate.uri_attach && certificate.uri_lk">
                <v-layout justify-end align-right>
                  <!-- {{$auth.$state}} -->
                  <!-- {{isNotEmpty}} -->
                  <template v-if="isNotEmpty">
                    <v-btn class="success" @click="changeStatus(1)" v-if="role == 1 && certificate.status == 0">Verifikasi</v-btn>
                    <v-btn class="success" @click="changeStatus(2)" v-if="role == 2 && certificate.status == 1">Verifikasi</v-btn>

                    <!-- verifikasi super admin -->
                    <v-btn class="success" @click="changeStatus(1)" v-if="role == 0 && certificate.status == 0">Verifikasi (Petugas)</v-btn>
                    <v-btn class="success" @click="changeStatus(2)" v-if="role == 0 && certificate.status == 1">Verifikasi (Kasi)</v-btn>

                    <v-btn class="primary" @click="$router.push('/lk/sertifikat?id='+$route.query.id+'&order_id='+$route.query.order_id)" v-if="certificate.status == 2" :disabled="!certificate.uri_attach || !certificate.uri_lk">Buat Laporan</v-btn>
                  </template>
                </v-layout>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <!-- upload file lampiran -->
              <v-flex xs12 v-if="certificate.status <= 2">
                <v-layout class="mb-0 py-2" row wrap>
                  <v-flex xs12>
                    <v-layout row wrap v-if="!certificate.uri_attach">
                      <v-flex xs12 sm10>
                        <v-text-field 
                          v-model="lampiran_file.name" 
                          box readonly clearable 
                          label="Pilih Berkas Lampiran" 
                          append-icon="attach_file" 
                          @click:append=" chooseLampiran"
                          @click:clear="resetLampiran"
                        ></v-text-field> <!-- only recieve .pdf file -->
                      </v-flex>
                      <v-flex xs12 sm2 class="px-2">
                        <v-text-field 
                          required
                          :rules="[v => !!v || 'Jumlah Halaman Lampiran !']"
                          label="Jumlah Halaman"
                          value="0"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <div v-else>
                      <span class="b">File Lampiran :</span> <br>
                      <v-btn class="primary" :href="certificate.uri_attach" target="_blank">
                        <v-icon color="white" left>attachment</v-icon>Lihat File Lampiran
                      </v-btn>
                      <v-btn class="success" v-if="certificate.status < 2" @click=" chooseLampiran">Edit</v-btn>
                    </div>
                  </v-flex>
                  <input type="file" name="lampiran_file" id="lampiran_file" hidden @change="processLampiran" accept="application/pdf">
                </v-layout>
              </v-flex>

              <!-- upload file lk -->
              <v-flex xs12>
                <v-layout class="mb-0 py-2" row wrap>
                  <v-flex xs12>
                    <v-text-field 
                      v-if="!certificate.uri_lk" 
                      v-model="lk_file.name" 
                      readonly box clearable
                      append-icon="attach_file" 
                      label="Pilih Berkas Lembar Kerja"
                      @click:append="chooseLK"
                      @click:clear="resetLK"
                    ></v-text-field>
                    <div v-else>
                      <span class="b">File Lembar Kerja :</span> <br>
                      
                      <v-btn class="primary" :href="certificate.uri_lk" target="_blank">
                        <v-img width="24px" height="24px" style="margin-right: 16px" src="/xlsx.png"></v-img> Lihat File Lembar Kerja
                      </v-btn>
                      <v-btn class="success" v-if="certificate.status < 2">Edit</v-btn>
                    </div>
                  </v-flex>
                  <v-flex xs12 v-if="lk_file.name || lampiran_file.name">
                    <v-layout align-right justify-end>
                      <v-btn @click="upload('lembarkerja')" class="success" :loading="loading.lk">Upload {{filecount}}</v-btn>
                    </v-layout>
                  </v-flex>
                  <input type="file" name="lk_file" id="lk_file" hidden @change="processLK" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
                </v-layout>
              </v-flex>
            </v-layout>

            <v-layout v-if="certificate.uri_report">
              <div>
                <span class="b">File Laporan :</span> <br>
                <v-btn class="primary" :href="certificate.uri_report" target="_blank">
                  <v-icon color="white" left>picture_as_pdf</v-icon> Lihat File Laporan
                </v-btn>
              </div>
              <!-- <div>
                <span class="b">File Lembar Kerja :</span> <br>
                <v-btn class="primary" :href="certificate.uri_lk" target="_blank">Lihat File</v-btn>
                <v-btn class="success" v-if="certificate.status < 2">Edit</v-btn>
              </div> -->
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm" v-if="!isLoading">
          <!-- <v-progress-linear class="ma-0" indeterminate v-if="isLoading"></v-progress-linear> -->
          <v-card-title class="pb-0">
            <p class="title mb-0">Data Alat</p>
            <v-spacer/>
            <v-btn class="primary" small @click="validate" v-if="certificate.status <= 2">
              <v-icon small>save</v-icon> &nbsp; Simpan
            </v-btn>
          </v-card-title>
          <v-card-text v-if="!isLoading">
            <v-form ref="form" v-model="valid" lazy-validation v-if="no_cert != ''">
              <template>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="mb-4">
                    <v-text-field required label="No Laporan" readonly v-model="no_cert"></v-text-field>
                  </v-flex>

                  <v-flex xs8 class="">
                    <v-text-field 
                      required
                      :rules="[v => !!v || 'Nama Alat harus diisi !']"
                      label="Nama Alat"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.name"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field 
                      required
                      :rules="[v => !!v || 'Kapasitas harus diisi !']"
                      label="Kapasitas"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.capacity"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field 
                      required
                      :rules="[v => !!v || 'Tipe/Model harus diisi !']"
                      label="Tipe/Model"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.model"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field 
                      required
                      :rules="[v => !!v || 'Nomor Seri harus diisi !']"
                      label="Nomor Seri"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.serial_number"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field 
                      required
                      :rules="[v => !!v || 'Merk/Buatan harus diisi !']"
                      label="Merk/Buatan"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.manufacture"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field
                      label="Pengontrol Suhu"
                      required :rules="[v => !!v || 'Pengontrol Suhu harus diisi !']"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.temperature"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field
                      label="Ukuran Dalam"
                      required :rules="[v => !!v || 'Ukuran Dalam harus diisi !']"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.internal_dimension"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field
                      label="Lain-lain"
                      required :rules="[v => !!v || 'Lain-lain harus diisi !']"
                      :readonly="certificate.status == 3"
                      v-model="certificate.equipment.others"
                    ></v-text-field>
                  </v-flex>
                  
                </v-layout>
                
                <p class="title mb-1">Pemilik</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="">
                    <v-text-field readonly required label="Nama" v-model="certificate.owner.name"></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field readonly required label="Alamat" v-model="certificate.owner.address"></v-text-field>
                  </v-flex>
                </v-layout>

                <p class="title mb-1">Standar</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="">
                    <v-text-field 
                      required :readonly="certificate.status == 3"
                      label="Nama"
                      :rules="[v => !!v || 'Nama Standar harus diisi !']"
                      v-model="certificate.standard.name">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field 
                      required :readonly="certificate.status == 3"
                      label="Ketelusuran" 
                      :rules="[v => !!v || 'Ketelusuran harus diisi !']"
                      v-model="certificate.standard.traceability">
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <p class="title mb-1">Kondisi Lingkungan</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs4 class="pr-2">
                    <v-text-field 
                      :rules="[v => !!v || 'Suhu Ruang harus diisi !']"
                      required label="Suhu Ruang" :readonly="certificate.status == 3"
                      v-model="certificate.env_cond.room_temp"
                    >
                      <template slot="append">&plusmn;</template>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs4 class="">
                    <v-text-field 
                      :rules="[v => !!v || 'Suhu Ruang harus diisi !']"
                      required label="Suhu Ruang" :readonly="certificate.status == 3"
                      v-model="certificate.env_cond.corrected_room_temp"
                    >
                      <template slot="append">&deg;C</template>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs4 class="pr-2">
                    <v-text-field 
                      :rules="[v => !!v || 'Kelembaban harus diisi !']"
                      required label="Kelembaban" 
                      v-model="certificate.env_cond.humidity"
                      :readonly="certificate.status == 3"
                    >
                      <template slot="append">&plusmn;</template>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field 
                      :rules="[v => !!v || 'Kelembaban harus diisi !']"
                      required label="Kelembaban" 
                      v-model="certificate.env_cond.corrected_humidity"
                      :readonly="certificate.status == 3"
                    >
                      <template slot="append">%</template>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                
                <p class="title mb-1">Tanggal Kalibrasi</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="">
                    <v-menu
                      v-model="cal_date_picker"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="certificate.calibration_date"
                          label="Tanggal Kalibrasi"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="certificate.calibration_date" @input="cal_date_picker = false"></v-date-picker>
                    </v-menu>
                    <!-- <v-text-field required :value="convertDate(certificate.calibration_date)" v-model="certificate.calibration_date"></v-text-field> -->
                  </v-flex>
                </v-layout>
                <p class="title mb-1">Tanggal Terima</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="">
                    <v-text-field required :value="convertDate(certificate.acceptance_date)" readonly></v-text-field>
                  </v-flex>
                </v-layout>

                <p class="title mb-1">Lokasi Kalibrasi</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="">
                    <v-text-field :readonly="certificate.status == 3" required label="Lokasi" v-model="certificate.calibration_loc"></v-text-field>
                  </v-flex>
                </v-layout>
                
                <p class="title mb-1">Metoda Kalibrasi</p>
                <v-layout class="mb-2" row wrap v-for="(item, index) in certificate.calibration_method" :key="index">
                  <v-flex xs8 class="">
                    <v-text-field :readonly="certificate.status == 3" :rules="[v => !!v || 'Metoda Kalibrasi harus diisi !']" required label="Metoda" v-model="certificate.calibration_method[index]"></v-text-field>
                  </v-flex>
                  <v-flex xs2 v-if="certificate.status <= 2">
                    <v-btn small icon class="success" @click="certificate.calibration_method.push('')">
                      <v-icon small>add</v-icon>
                    </v-btn>
                    <v-btn v-if="index > 0" small icon class="warning" @click="certificate.calibration_method.splice(index, 1)">
                      <v-icon small>delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                 
                <p class="title mb-1">Acuan</p>
                <v-layout class="mb-2" row wrap v-for="(item, index) in certificate.reference" :key="index">
                  <v-flex xs8 class="">
                    <v-text-field :rules="[v => !!v || 'Acuan harus diisi !']" :readonly="certificate.status == 3" required label="Standar Acuan" v-model="certificate.reference[index]"></v-text-field>
                  </v-flex>
                  <!-- <v-flex xs2 v-if="certificate.status <= 2">
                    <v-btn small icon class="success" @click="certificate.reference.push('')">
                      <v-icon small>add</v-icon>
                    </v-btn>
                    <v-btn v-if="index > 0" small icon class="warning" @click="certificate.reference.splice(index, 1)">
                      <v-icon small>delete</v-icon>
                    </v-btn>
                  </v-flex> -->
                </v-layout>
              </template>
              <v-scroll-y-transition v-if="certificate.status <= 2">
                <v-btn
                  v-if="savebutton"
                  color="primary"
                  large
                  fixed
                  bottom
                  right
                  fab
                  @click="validate"
                >
                  <v-icon color="white">save</v-icon>
                </v-btn>
              </v-scroll-y-transition>
            </v-form>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  #wrapper {
    overflow-x: hidden;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import mainHeader from '~/components/header.vue'
// import durometer from '~/static/durometer.json' 

export default {
  components: {
    mainHeader
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'dimensi',
          name: 'dimensi',
          content: 'Bidang Dimensi'
        }
      ],
    }
  },

  data: () => ({
    title: '',
    no_cert: '',
    isLoading: true,

    verification_dialog: false,
    verifications: ['Belum Terverifikasi', 'Verifikasi Petugas', 'Sudah Terverifikasi', 'Selesai'],

    lampiran_file: {
      name: ''
    },
    lk_file: {
      name: ''
    },

    loading: {
      lk: false,
      lampiran: false
    },

    valid: true,
    
    sub_verification: false,
    verification: false,

    certificate: {
      equipment: {
        name: '',
        capacity: '',
        model: '',
        serial_number: '',
        manufacture: '',
        internal_dimension: '',
        temperature: '',
        others: '-',
      },
      owner: {
        name: '',
        address: ''
      },
      standard: {
        name: '',
        traceability: ''
      },
      acceptance_date: '',
      calibration_date: '',
      env_cond: {
        room_temp: '',
        corrected_room_temp: '',
        humidity: '',
        corrected_humidity: ''
      },
      calibration_location: '',
      calibration_method: [],
      reference: [],
      result: '',
      published_date: '',
      director_name: '',
      director_nip: '',
      status: 0
    },

    roles: ['Admin', 'Petugas', 'Kasi', 'Verifikasi 2'],

    savebutton: false,
    role: '',
    cal_date_picker: false
  }),

  computed: {
    filecount () {
      if (this.lk_file.name && this.lampiran_file.name) {
        return '(2)';
      } else if (this.lk_file.name || this.lampiran_file.name) {
        return '(1)';
      } else {
        return '(0)';
      }
    },

    isNotEmpty() {
      if (
        this.certificate.equipment.capacity == "" ||
        this.certificate.equipment.model == "" ||
        this.certificate.equipment.serial_number == "" ||
        this.certificate.equipment.manufacture == "" ||
        this.certificate.standard.name == "" ||
        this.certificate.standard.traceability == "" ||
        this.certificate.env_cond.room_temp == "" ||
        this.certificate.env_cond.humidity == "" || 
        this.certificate.calibration_loc == ""
        // this.certificate.refference[0] == "" &&
        // this.certificate.calibration_method[0] == ""
        ) {
        return false
      } else {
        return true
      }
    },
  },

  mounted() {
    this.role = this.$auth.$state.user.role
    this.getLK()

    window.onscroll = () => { 
      if (document.documentElement.scrollTop > 574) {
        this.savebutton = true
      } else {
        this.savebutton = false
      }
    }
  },

  methods: {
    async getLK() {
      this.isLoading = true
      try {
        const req = await this.$calibrate.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);

        this.no_cert = req.no_laporan
        this.certificate = req

        this.title = req.equipment.name + ' - ' + 'Form Lembar Kerja '

        console.log('cert : ', this.certificate);
        // console.log(this.certificate.calibration_method[0]);
        // console.log(this.certificate.reference[0]);
        // this.certificate.calibration_date = convertDate(certificate.calibration_date) 

        if (!this.certificate.calibration_method[0]) {
          this.certificate.calibration_method.push('')  
        }

        if (!this.certificate.reference[0]) {
          this.certificate.reference.push('')  
        }

        this.isLoading = false
      } catch (error) {
        console.log('get LK err: ', error.response);
        this.isLoading = false
      }
    },

    chooseLampiran(e) {
      document.getElementById('lampiran_file').click()
      console.log(e);
    },

    resetLampiran() {
      this.lampiran_file = {
        name: 'wkwkw'
      }
    },

    processLampiran(e) {
      this.lampiran_file = e.target.files[0]
      console.log('Lampiran File : ', e.target.files[0]);
    },

    chooseLK(e) {
      document.getElementById('lk_file').click()
      console.log(e);
    },

    resetLK() {
      this.lk_file = {
        name: ''
      }
    },

    processLK(e) {
      this.lk_file = e.target.files[0]
      console.log('LK File : ', e.target.files[0]);
    },

    async upload(cat){
      this.loading.lk = true
      this.loading.lampiran = true
      let files;

      if (this.lk_file.name && this.lampiran_file.name) {
        files = 'Lembar Kerja & Lampiran'
      } else if (this.lk_file.name) {
        files = 'Lembar Kerja'
      } else if (this.lampiran_file.name) {
        files = 'Lampiran'
      } 

      try {
        if (this.lampiran_file.name) {
          console.log('upload report :' + this.lampiran_file.name);
          const req = await this.$calibrate.uploadReport({id: this.$route.query.id, file: this.lampiran_file, cat: 'report'})
        }

        if (this.lk_file.name) {
          console.log('upload lk' + this.lk_file.name);
          const req = await this.$calibrate.uploadReport({id: this.$route.query.id, file: this.lk_file, cat: 'lembarkerja'})
        }

        alert("Berhasil Upload File "+files+".")

        setTimeout(() => {
          this.loading.lk = false
          this.loading.lampiran = false
          this.lampiran_file = { name: '' }
          this.lk_file = { name: '' }

          this.getLK()
        }, 500);
      } catch (error) {
        alert("Gagal mengupload file "+files+".")
        console.log('upload lk error', error);
        setTimeout(() => {
          this.loading.lk = false
          this.loading.lampiran = false
        }, 500);
      }
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.submitForm()
      }
    },

    async submitForm() {
      // this.certificate.calibration_method = [this.certificate.calibration_method]
      
      try {
        const req = await this.$calibrate.saveForm({
          sample_id: this.$route.query.id,
          certificate: this.certificate
        })

        console.log('success submiting form :', req);

        this.getLK()
      } catch (error) {
        alert(error.response.data.detail[0].msg)
        console.log('error when submitting form :', error.response.data.detail[0].msg);
      }
    },

    async changeStatus(value) {
      this.certificate.status = value      
      try {
        const req = await this.$calibrate.saveForm({
          sample_id: this.$route.query.id,
          certificate: this.certificate
        })

        alert('Verifikasi '+this.roles[this.role]+' Berhasil.')

        console.log('berhasil mengubah status :', req);

        this.getLK()
      } catch (error) {
        alert(error.response.data.detail[0].msg)
        console.log('error when changing status :', error.response.data.detail[0].msg);
      }
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },

}
</script>