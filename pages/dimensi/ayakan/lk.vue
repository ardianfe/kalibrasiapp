<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-dialog width="450px" v-model="verification_dialog">
        <v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="f-button" icon @click="verification_dialog = false"><v-icon>close</v-icon></v-btn>
          </v-card-actions>
          <v-card-text class="pt-0">
            <v-checkbox color="primary" label="Verifikasi Sub-Koordinator"></v-checkbox>
            <v-checkbox color="primary" label="Verifikasi Koordinator" readonly></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="f-button primary" @click="verification_dialog = false">Kirim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-progress-linear class="ma-0" indeterminate v-if="isLoading"></v-progress-linear>
          <v-card-text>
            <p class="text-xs-center b title my-4">FORM LEMBAR KERJA KALIBRASI MESH (AYAKAN)</p>

            <p class="b">No. Laporan : {{no_cert ? no_cert : 'Belum upload'}}</p>
            <p class="pointer" @click="verification_dialog=true"><span class="b">Status Verifikasi :</span> {{'Belum Terverifikasi'}}</p>

            <template v-if="!isLoading">
              <v-layout class="mb-2" justify-space-between row fill-height>
                <v-flex xs8>
                  <v-text-field box append-icon="attach_file" label="Pilih Berkas Lembar Kerja" readonly @click:append="upload"></v-text-field> <!-- only recieve .pdf file -->
                </v-flex>
                <input type="file" name="file" id="file" hidden>
              </v-layout>
              <v-layout class="mb-2" justify-space-between row fill-height>
                <v-flex xs8>
                  <v-text-field box append-icon="attach_file" label="Pilih Berkas Lampiran" readonly @click:append="upload"></v-text-field> <!-- only recieve .pdf file -->
                </v-flex>
                <input type="file" name="file" id="file" hidden>
              </v-layout>

              <template v-if="no_cert != ''">
                <p class="title mb-1">Data Alat</p>
                <v-layout class="mb-2" row wrap>
                  <v-flex xs8 class="mb-4">
                    <v-text-field label="No Sertifikat" readonly v-model="no_cert"></v-text-field>
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
                    <v-text-field label="Suhu Ruang" v-model="certificate.env_condition.room_temp"></v-text-field>
                  </v-flex>
                  <v-flex xs8 class="">
                    <v-text-field label="Kelembaban" v-model="certificate.env_condition.humidity"></v-text-field>
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
              </template>
            </template>

            
          </v-card-text>

          <v-card-text v-if="no_cert != ''">
            <!-- <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI AYAKAN</p> -->

            <!-- <p class="b">No. Laporan : {{no_cert}}</p>
            <p>Data Hasil Pengamatan</p>
            <p class="mb-1">Nominal {{hp_nominal.nilai.nilai}} {{hp_nominal.nilai.satuan}}</p>
            <table width="100%" class="mb-3">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>Width Opening</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              <tr v-for="(item, index) in hp_nominal.data_table['1'].length" :key="index">
                <td>{{hp_nominal.data_table['width opening'] ? hp_nominal.data_table['width opening'][index] : ''}}</td>
                <td v-for="x in 10" :key="x">
                  {{hp_nominal.data_table[''+x] ? hp_nominal.data_table[''+x][index] : ''}}
                </td>
              </tr>
              <tr>
                <td>Rata Rata ( mm )</td>
                <td colspan="5">0.621</td>
                <td colspan="3">Persyaratan</td>
                <td>0.575</td>
                <td>0.625</td>
              </tr>
            </table>

            <p class="mb-1">Nominal {{hp_diameter.nilai.nilai}} {{hp_diameter.nilai.satuan}}</p>
            <table width="100%" class="mb-3">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>Width Opening</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              <tr v-for="(item, index) in hp_diameter.data_table['1'].length" :key="index">
                <td>{{hp_diameter.data_table['diameter of wire'] ? hp_diameter.data_table['diameter of wire'][index] : ''}}</td>
                <td v-for="x in 10" :key="x">
                  {{hp_diameter.data_table[''+x] ? hp_diameter.data_table[''+x][index] : ''}}
                </td>
              </tr>
              <tr>
                <td>Rata Rata ( mm )</td>
                <td colspan="5">0.621</td>
                <td colspan="3">Persyaratan</td>
                <td>0.340</td>
                <td>0.460</td>
              </tr>
            </table>

            <table width="100%">
              <thead>
                <tr>
                  <th>Ketidakpastian</th>
                  <th>Alat Standar</th>
                  <th>Selisih Suhu</th>
                  <th>Resolusi Profil Projec</th>
                  <th>Pengaruh Mekanik</th>
                  <th>Standar Deviasi</th>
                  <th>Uc</th>
                  <th>U95</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Width Opening <br> (um)</th>
                  <td>{{ width_opening.alat_std }}</td>
                  <td>{{ width_opening.selisih_suhu }}</td>
                  <td>{{ width_opening.resolusi_project }}</td>
                  <td>{{ width_opening.pengaruh_mekanik }}</td>
                  <td>{{ width_opening.stdv.toExponential(4) }}</td>
                  <td>{{ width_opening.uc }}</td>
                  <td>{{ width_opening.u95 }}</td>
                </tr>
                <tr>
                  <th>Diameter of Wire <br> (mm)</th>
                  <td>{{ diameter_of_wire.alat_std }}</td>
                  <td>{{ diameter_of_wire.selisih_suhu }}</td>
                  <td>{{ diameter_of_wire.resolusi_project }}</td>
                  <td>{{ diameter_of_wire.pengaruh_mekanik }}</td>
                  <td>{{ diameter_of_wire.stdv.toExponential(4) }}</td>
                  <td>{{ diameter_of_wire.uc }}</td>
                  <td>{{ diameter_of_wire.u95 }}</td>
                </tr>
              </tbody>
            </table> -->

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{data_alat.diperiksa.date}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
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
import dimensiHeader from '~/components/dimensi/ayakan.vue'
// import durometer from '~/static/durometer.json' 

export default {
  components: {
    dimensiHeader
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
      env_condition: {
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
    },

    ktp_u95: [],
    uc: 0,
    data_ktp: [],

    diameter_of_wire: {
      alat_std: 0,
      pengaruh_mekanik: 0,
      resolusi_project: 0,
      selisih_suhu: 0,
      stdv: 0,
      u95: 0,
      uc: 0
    },
    width_opening: {
      alat_std: 0,
      pengaruh_mekanik: 0,
      resolusi_project: 0,
      selisih_suhu: 0,
      stdv: 0,
      u95: 0,
      uc: 0
    },

    hp_nominal: {
      data_table: {
        "1": [],
        "2": [],
        "3": [],
        "4": [],
        "5": [],
        "6": [],
        "7": [],
        "8": [],
        "9": [],
        "10": [],
        "width opening": []
      },
      nilai: {
        "nilai": 0,
        "satuan": "mm"
      }
    },
    hp_diameter: {
      data_table: {
        "1": [],
        "2": [],
        "3": [],
        "4": [],
        "5": [],
        "6": [],
        "7": [],
        "8": [],
        "9": [],
        "10": [],
        "diameter of wire": []
      },
      nilai: {
        "nilai": 0,
        "satuan": "mm"
      }
    },

    data_alat:{
      alat_kalibrasi: "",
      deskripsi: {
          buatan: "",
          kapasitas: "",
          kelembaban: {
            nilai: 0,
            satuan: ""
          },
          kelembaban_terkoreksi:{
            nilai: 0,
            satuan: ""
          },
          lokasi: "",
          merk: "",
          model: "",
          nama_alat: "",
          no_seri: 0,
          suhu_ruang: {
            max: 0,
            min: 0,
            satuan: ""
          },
          suhu_terkoreksi: {
            max: 0,
            min: 0,
            satuan: ""
          }
      },
      dikalibrasi: {
          date: "",
         person: ""
      },
      diperiksa: {
          date: "",
          person: ""
      },
      metode_kalibrasi: "",
      standar_acuan: [],
      tgl_diterima: ""
    },
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.results[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat
        // this.hp_nominal = req_data.data_kal.hp_nominal
        // this.hp_diameter = req_data.data_kal.hp_diameter

        // this.width_opening = req_data.data_ktp.width_opening
        // this.diameter_of_wire = req_data.data_ktp.diameter_of_wire

        this.isLoading = false
        this.elementMapping(req_data.data_alat, req_data.data_co)
      } catch (error) {
        console.log('get LK err: ', error.response);
        this.isLoading = false
      }
    },

    upload(){
      alert('test')
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
      this.certificate.env_condition = {
        room_temp: data.deskripsi.suhu_terkoreksi.min.toFixed(2) + ' - ' + data.deskripsi.suhu_terkoreksi.max.toFixed(2) + ' ' + data.deskripsi.suhu_terkoreksi.satuan,
        corrected_room_temp: '',
        humidity: data.deskripsi.kelembaban_terkoreksi.nilai.toFixed(2) + ' %',
        corrected_humidity: ''
      }
      this.certificate.acceptance_date = this.convertDate(data.tgl_diterima)
      this.certificate.calibration_date = this.convertDate(data.dikalibrasi.date)
      // this.certificate.env_condition.room_temp = cert_data
      // this.certificate.env_condition.humidity = cert_data
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