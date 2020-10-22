<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text v-if="$store.state.isLoggedIn">
            <p class="text-xs-center b title my-4">
              LEMBAR KERJA KALIBRASI CONCRETE TEST HAMMER TIPE N DAN L
            </p>

            <p class="b">Sertifikat No : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Nama Alat : {{ data_alat['Deskripsi Alat'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat['Kapasitas'] }} unit</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merk : {{ data_alat['Merek'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat['No Seri'] }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Resolusi : {{ data_alat['Resolusi'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Tipe : {{ data_alat['Tipe'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat['Buatan'] }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat['Lokasi Kalibrasi'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Suhu : {{ data_alat['Suhu'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Standar Acuan : {{ data_alat['Standar acuan'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : PC-309-10</p>
                </v-layout>
              </v-flex>
            </v-layout>

          </v-card-text>
        </v-card>
        
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="title mt-4 b">
              SETELAH SETTING
            </p>

            <table width="100%">
              <tr>
                <th style="width: 33%">JENIS KALIBRASI</th>
                <th style="width: 33%">HASIL KALIBRASI SEBELUM SETING</th>
                <td class="text-xs-center" style="font-size: 11px">SYARAT ASTM C 805:2002 <br> MANUAL CONCRETE <br> TEST HAMMER</td>
              </tr>
              <tr style="font-size: 12px">
                <td>
                  1. Kalibrasi dengan blok standar <br>
                  Anvil No. E04/193 <br>
                  Nilai Kekerasan pukulan <br>
                  Tipe N	81.0	unit
                </td>
                <td>
                  <span v-for="(item, x) in data_kal.hk2['Unnamed: 5']" :key="x">
                    Posisi {{x+1}} :	{{item}}	Unit	Posisi 6  :	{{data_kal.hk2['Unnamed: 8'][x]}}	Unit <br>
                  </span> <br>
                            
                  H rata-rata :	{{data_kal.havg_2}} Unit	<br>
                  H Minimum :	{{data_kal.hmin_2}} Unit	<br>
                  H Maksimum : {{data_kal.h_max_2}} Unit	<br>
                </td>
                <td></td>
              </tr>
              <tr style="font-size: 12px">
                <td>2. Repeatability</td>
                <td>
                  Repeatability = H Maksi - H Min <br>				
                  H Maksimum : {{data_kal.h_max_2}} Unit <br>
                  H Minimun :	{{data_kal.hmin_2}} Unit <br><br>
                  Repeatability :	{{data_kal.repeatability_2}} Unit
                </td>
                <td>Maksimum  4,0 unit</td>
              </tr>
              <tr style="font-size: 12px">
                <td>3. Kesalahan</td>
                <td>
                  Kesalahan = H rata-rata - H Standar <br>
                  H rata-rata :	{{data_kal.havg_2}} Unit <br>
                  H Standar :	{{data_kal.h_standar_2}} Unit <br><br>
                  Kesalahan :	{{data_kal.kesalahan_2}} Unit
                </td>
                <td> ± 3.0 unit</td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : Agus Surya Permana <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Sudrajat <br>
                Tanggal :	2 Juni 2017 <br>
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
    padding: 3px;
  }
</style>

<script>
import gayaHeader from '~/components/gaya/hammer.vue'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Setelah Set | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '',

    data_kal: {
      h_max_2: 0,
      h_max_3: 0,
      h_standar_2: 0,
      h_standar_3: 0,
      havg_2: 0,
      havg_3: 0,
      hk2: {
        "Unnamed: 5": [], 
        "Unnamed: 8": []},
      hk3: {  
        "Unnamed: 5": [], 
        "Unnamed: 8": []},
      hmin_2: 0,
      hmin_3: 0,
      kesalahan_2: 0,
      kesalahan_3: 0,
      repeatability_2: 0,
      repeatability_3: 0
    },

    data_alat: {
      "Buatan": "",
      "Deskripsi Alat": "",
      "Dikalibrasi": "",
      "Diperiksa": "",
      "Kapasitas": "",
      "Lokasi Kalibrasi": "",
      "Merek": "",
      "Metoda verifikasi": "",
      "No Seri": "",
      "Resolusi": "",
      "Standar acuan": "",
      "Standar dipakai": "",
      "Suhu": "",
      "Tanggal kalibrasi": "",
      "Tanggal periksa": "",
      "Tipe": "",
      "Tipe penetrator": ""
    }
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: '20090851001'})

        console.log('get LK: ', req);
        let req_data = req.result[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat
        this.data_kal = req_data.data_kal
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>