<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <mainHeader></mainHeader>

      <v-dialog width="450px" v-model="verification_dialog">
        <v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="f-button" icon @click="verification_dialog = false"><v-icon>close</v-icon></v-btn>
          </v-card-actions>
          <v-card-text class="pt-0">
            <v-checkbox color="primary" label="Verifikasi Sub-Koordinator"></v-checkbox>
            <v-checkbox color="primary" label="Verifikasi Koordinator"></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="f-button primary" @click="() => {verification_dialog = false, certificate.status = 2}">Kirim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-progress-linear class="ma-0" indeterminate v-if="isLoading"></v-progress-linear>
          <v-card-text v-if="!isLoading">
            <p class="text-xs-center b title my-4">FORM LEMBAR KERJA {{certificate.equipment.name}}</p>

            <v-layout row wrap>
              <v-flex xs12 sm6>
                <p class="b">No. Laporan : {{no_cert ? no_cert : 'Belum upload'}}</p>
                <p><span class="b">Status Verifikasi :</span> {{ certificate.status == 2 ? 'Sudah Terverifikasi' : 'Belum Terverifikasi'}}</p>
              </v-flex>
              <v-flex xs12 sm6>
                <v-layout justify-end align-right>
                  <v-btn class="success" @click="verification_dialog=true">Verifikasi</v-btn>
                  <v-btn class="primary" @click="$router.push('/lk/sertifikat?id='+$route.query.id)" v-if="certificate.status == 2" :disabled="!certificate.uri_report || !certificate.uri_lk">Cetak</v-btn>
                </v-layout>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <!-- upload file lampiran -->
              <v-flex xs12 sm6>
                <v-layout class="mb-0 pa-2" row wrap>
                  <v-flex xs12>
                    <v-text-field v-if="!certificate.uri_report" v-model="lampiran_file.name" box append-icon="attach_file" label="Pilih Berkas Lampiran" readonly @click:append="chooseLampiran"></v-text-field> <!-- only recieve .pdf file -->
                    <div v-else>
                      <span class="b">File Lampiran :</span> <br>
                      <v-btn class="primary" :href="certificate.uri_report" target="_blank">Lihat File</v-btn>
                      <v-btn class="success" v-if="certificate.status < 2">Edit</v-btn>
                    </div>
                  </v-flex>
                  <v-flex xs12 v-if="lampiran_file.name">
                    <v-layout align-right justify-end>
                      <v-btn @click="upload('report')" class="success" :loading="loading.lampiran">Upload</v-btn>
                    </v-layout>
                  </v-flex>
                  <input type="file" name="lampiran_file" id="lampiran_file" hidden @change="processLampiran">
                </v-layout>
              </v-flex>

              <!-- upload file lk -->
              <v-flex xs12 sm6>
                <v-layout class="mb-0 pa-2" row wrap>
                  <v-flex xs12>
                    <v-text-field v-if="!certificate.uri_lk" v-model="lk_file.name" box append-icon="attach_file" label="Pilih Berkas Lembar Kerja" readonly @click:append="chooseLK"></v-text-field>
                    <div v-else>
                      <span class="b">File Lembar Kerja :</span> <br>
                      <v-btn class="primary" :href="certificate.uri_lk" target="_blank">Lihat File</v-btn>
                      <v-btn class="success" v-if="certificate.status < 2">Edit</v-btn>
                    </div>
                  </v-flex>
                  <v-flex xs12 v-if="lk_file.name">
                    <v-layout align-right justify-end>
                      <v-btn @click="upload('lembarkerja')" class="success" :loading="loading.lk">Upload</v-btn>
                    </v-layout>
                  </v-flex>
                  <input type="file" name="lk_file" id="lk_file" hidden @change="processLK">
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-progress-linear class="ma-0" indeterminate v-if="isLoading"></v-progress-linear>
          <v-card-title class="pb-0">
            <p class="title mb-0">Data Alat</p>
            <v-spacer/>
            <v-btn class="primary" small @click="submitForm">
              <v-icon small>save</v-icon> &nbsp; Simpan
            </v-btn>
          </v-card-title>
          <v-card-text v-if="!isLoading">
            <template v-if="no_cert != ''">
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="mb-4">
                  <v-text-field label="No Laporan" readonly v-model="no_cert"></v-text-field>
                </v-flex>

                <v-flex xs8 class="">
                  <v-text-field label="Nama Alat" v-model="certificate.equipment.name"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Kapasitas" v-model="certificate.equipment.capacity"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Tipe/Model" v-model="certificate.equipment.model"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Nomor Seri" v-model="certificate.equipment.serial_number"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Merk/Buatan" v-model="certificate.equipment.manufacture"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Pengontrol Suhu" v-model="certificate.equipment.temperature"></v-text-field>
                </v-flex>
              </v-layout>
              
              <p class="title mb-1">Pemilik</p>
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="">
                  <v-text-field label="Nama" v-model="certificate.owner.name" readonly></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Alamat" v-model="certificate.owner.address" readonly></v-text-field>
                </v-flex>
              </v-layout>

              <p class="title mb-1">Standar</p>
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="">
                  <v-text-field label="Nama" v-model="certificate.standard.name"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Ketelusuran" v-model="certificate.standard.traceability"></v-text-field>
                </v-flex>
              </v-layout>

              <p class="title mb-1">Kondisi Lingkungan</p>
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="">
                  <v-text-field label="Suhu Ruang" v-model="certificate.env_cond.room_temp"></v-text-field>
                </v-flex>
                <v-flex xs8 class="">
                  <v-text-field label="Kelembaban" v-model="certificate.env_cond.humidity"></v-text-field>
                </v-flex>
              </v-layout>
              
              <p class="title mb-1">Lokasi Kalibrasi</p>
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="">
                  <v-text-field label="Lokasi" v-model="certificate.calibration_location"></v-text-field>
                </v-flex>
              </v-layout>
              
              <p class="title mb-1">Metoda Kalibrasi</p>
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="">
                  <v-text-field label="Metoda" v-model="certificate.calibration_method"></v-text-field>
                </v-flex>
              </v-layout>
              
              <p class="title mb-1">Acuan</p>
              <v-layout class="mb-2" row wrap>
                <v-flex xs8 class="">
                  <v-text-field label="Standar Acuan" v-model="certificate.refference"></v-text-field>
                </v-flex>
              </v-layout>
            </template>
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

  head: {
    title: 'Lembar Kerja Jangka Sorong | Bidang Dimensi',
    meta: [
      {
        hid: 'dimensi',
        name: 'dimensi',
        content: 'Bidang Dimensi'
      }
    ],
  },

  data: () => ({
    no_cert: '',
    isLoading: true,

    verification_dialog: false,

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
      calibration_method: '',
      refference: '',
      result: '',
      published_date: '',
      director_name: '',
      director_nip: '',
      status: 0
    },
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$calibrate.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        // let req_data = req.results[0]

        this.no_cert = req.no_laporan
        this.certificate = req

        console.log('cert : ', this.certificate);
        // this.data_alat = req_data.data_alat
        // this.hp_nominal = req_data.data_kal.hp_nominal
        // this.hp_diameter = req_data.data_kal.hp_diameter

        // this.width_opening = req_data.data_ktp.width_opening
        // this.diameter_of_wire = req_data.data_ktp.diameter_of_wire

        this.isLoading = false
        // this.elementMapping(req_data.data_alat, req_data.data_co)
      } catch (error) {
        console.log('get LK err: ', error.response);
        this.isLoading = false
      }
    },

    chooseLampiran(e) {
      document.getElementById('lampiran_file').click()
      console.log(e);
    },

    processLampiran(e) {
      this.lampiran_file = e.target.files[0]
      console.log('Lampiran File : ', e.target.files[0]);
    },

    chooseLK(e) {
      document.getElementById('lk_file').click()
      console.log(e);
    },

    processLK(e) {
      this.lk_file = e.target.files[0]
      console.log('LK File : ', e.target.files[0]);
    },

    async upload(cat){
      this.loading.lk = true
      this.loading.lampiran = true
      let selected_file
      let cat_string
      cat_string = cat == 'report' ? 'Lampiran' : 'Lembar Kerja'

      if (cat == 'report') {
        selected_file = this.lampiran_file
      } else if (cat == 'lembarkerja') {
        selected_file = this.lk_file
      } else {
        alert('Kategori tidak tersedia')
        abort()
      }
      try {
        console.log('selected_file:', selected_file);
        // const req = await this.$calibrate.uploadReport({id: this.$route.query.id, file: selected_file, cat: cat})

        alert("Berhasil Upload File " + cat_string + ".")
        console.log('success upload lk file :', req);

        setTimeout(() => {
          this.loading.lk = false
          this.loading.lampiran = false
        }, 500);
      } catch (error) {
        alert("Gagal mengupload file " + cat_string + ".")
        console.log('upload lk error', error);
        setTimeout(() => {
          this.loading.lk = false
          this.loading.lampiran = false
        }, 500);
      }
    },

    async submitForm() {
      try {
        const req = await this.$calibrate.saveForm({
          certificate: this.certificate
        })

        console.log('success submiting form :', req);
      } catch (error) {
        alert('error when submitting form')
        console.log('error when submitting form :', error);
      }
    },

    elementMapping(data, owner) {
      this.certificate.equipment.name = data.deskripsi.nama_alat
      this.certificate.equipment.capacity = data.deskripsi.kapasitas
      this.certificate.equipment.model = data.deskripsi.tipe_model
      this.certificate.equipment.serial_number = data.deskripsi.no_seri
      this.certificate.equipment.manufacture = data.deskripsi.buatan
      this.certificate.equipment.temperature = '-'
      this.certificate.owner.name = owner.nama_co
      this.certificate.owner.address = owner.alamat
      this.certificate.standard.name = data.alat_kalibrasi
      this.certificate.standard.traceability = 'Hasil kalibrasi yang dilaporkan tertelusur ke satuan pengukuran SI melalui Puslit KIM LIPI Serpong'
      this.certificate.env_cond = {
        room_temp: data.deskripsi.suhu_terkoreksi.min.toFixed(2) + ' - ' + data.deskripsi.suhu_terkoreksi.max.toFixed(2) + ' ' + data.deskripsi.suhu_terkoreksi.satuan,
        corrected_room_temp: '',
        humidity: data.deskripsi.kelembaban_terkoreksi.nilai.toFixed(2) + ' %',
        corrected_humidity: ''
      }
      this.certificate.acceptance_date = this.convertDate(data.tgl_diterima)
      this.certificate.calibration_date = this.convertDate(data.dikalibrasi.date)
      // this.certificate.env_cond.room_temp = cert_data
      // this.certificate.env_cond.humidity = cert_data
      this.certificate.calibration_location = data.deskripsi.lokasi
      this.certificate.calibration_method = data.metode_kalibrasi
      this.certificate.refference = data.standar_acuan
      this.certificate.published_date = ''
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },

}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>