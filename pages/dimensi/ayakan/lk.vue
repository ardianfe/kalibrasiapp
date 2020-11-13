<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI MESH (AYAKAN)</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat.deskripsi.nama_alat }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat.deskripsi.model }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat.deskripsi.merk }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat.deskripsi.kapasitas }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat.deskripsi.no_seri }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat.deskripsi.buatan }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat.deskripsi.lokasi }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ data_alat.deskripsi.suhu_ruang.min }} - {{ data_alat.deskripsi.suhu_ruang.max }} {{ data_alat.deskripsi.suhu_ruang.satuan }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan : {{ data_alat.deskripsi.kelembaban.nilai }} {{ data_alat.deskripsi.kelembaban.satuan }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan Terkoreksi : {{ data_alat.deskripsi.suhu_terkoreksi.min }} - {{ data_alat.deskripsi.suhu_terkoreksi.max }} {{ data_alat.deskripsi.suhu_terkoreksi.satuan }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan Terkoreksi : {{ data_alat.deskripsi.kelembaban_terkoreksi.nilai }} {{ data_alat.deskripsi.kelembaban_terkoreksi.satuan }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: {{ data_alat.alat_kalibrasi }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat.metode_kalibrasi }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ data_alat.standar_acuan[0] }} &emsp; {{ data_alat.standar_acuan[1] }}</p>
                </v-layout>                
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI AYAKAN</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <!-- <pre>
              {{data_kal.hasil}}
            </pre> -->
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
              <!-- alat_std
              selisih_suhu
              resolusi_project
              pengaruh_mekanik
              stdv
              uc
              u95 -->
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
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat['Diperiksa']}} <br>
                Tanggal :	{{data_alat['Tanggal periksa']}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat['Dikalibrasi']}} <br>
                Tanggal :	{{convertDate(data_alat['Tanggal kalibrasi'])}} <br>
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
        this.hp_nominal = req_data.data_kal.hp_nominal
        this.hp_diameter = req_data.data_kal.hp_diameter

        this.width_opening = req_data.data_ktp.width_opening
        this.diameter_of_wire = req_data.data_ktp.diameter_of_wire
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
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