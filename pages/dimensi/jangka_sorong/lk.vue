<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI JANGKA SORONG</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat['Deskripsi Alat'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat['Tipe'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat['Merek'] }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat['Kapasitas'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat['No Seri'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat['Buatan'] }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat['Lokasi Kalibrasi'] }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ data_alat['Suhu Ruangan'] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan : {{ data_alat['Kelembapan'] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan Terkoreksi : {{ data_alat['Suhu Terkoreksi'] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan Terkoreksi : {{ data_alat['Kelembapan Terkoreksi'] }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: {{ data_alat['Alat Kalibrasi yang digunakan'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat['Metoda Kalibrasi'] }}</p>
                </v-layout>
                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ data_alat['Standar acuan'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Dikondisikan tanggal : {{data_alat['Tanggal kalibrasi']}}</p>
                </v-layout>
                
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI JANGKA SORONG</p>

            <p class="b">No. Laporan : 3-09-19-00757</p>
            <!-- <pre>
              {{data_kal.hasil}}
            </pre> -->
            <table>
              <tbody>
                <tr>
                  <td rowspan="2">Pembacaan Nominal Standar (mm)</td>
                  <td rowspan="2">Nilai Aktual Standar (mm)</td>
                  <td colspan="2">Pembacaan Alat (mm)</td>
                  <td colspan="2">Rata-rata Pembacaan Alat (mm)</td>
                  <td colspan="2">Kesalahan (mm)</td>
                  <td colspan="2">Mampu Ulang (mm)</td>
                </tr>
                <tr>
                  <td>Ukuran Luar</td>
                  <td>Ukuran Dalam</td>
                  <td>Ukuran Luar</td>
                  <td>Ukuran Dalam</td>
                  <td>Ukuran Luar</td>
                  <td>Ukuran Dalam</td>
                  <td>Ukuran Luar</td>
                  <td>Ukuran Dalam</td>
                </tr>
                <template v-if="data_kal.hasil['Pembacaan']">
                  <tr v-for="(item, index) in data_kal.hasil['Pembacaan'].length" :key="index">
                    <td>
                      <span v-if="data_kal.hasil['Pembacaan'][index] != '' && data_kal.hasil['Pembacaan'][index] != null">
                        {{data_kal.hasil['Pembacaan'][index]}}
                      </span>
                      <span v-else>&nbsp;2</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Nilai Aktual'][index] != '' ">
                        {{data_kal.hasil['Nilai Aktual'][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Pembacaan Alat '][index] != '' ">
                        {{data_kal.hasil['Pembacaan Alat '][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Unnamed: 4'][index] != '' ">
                        {{data_kal.hasil['Unnamed: 4'][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Rata-rata'][index] != '' ">
                        {{data_kal.hasil['Rata-rata'][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Unnamed: 6'][index] != '' ">
                        {{data_kal.hasil['Unnamed: 6'][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Kesalahan    '][index] != '' ">
                        {{data_kal.hasil['Kesalahan    '][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Unnamed: 8'][index] != '' ">
                        {{data_kal.hasil['Unnamed: 8'][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Mampu Ulang '][index] != '' ">
                        {{data_kal.hasil['Mampu Ulang '][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                    <td>
                      <span v-if="data_kal.hasil['Unnamed: 10'][index] != '' ">
                        {{data_kal.hasil['Unnamed: 10'][index]}}
                      </span>
                      <span v-else>&nbsp;</span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>

            <p class="mt-3 mb-0">Repeatability</p>
            <table>
              <tr v-for="x in 2" :key="x">
                <td class="text-xs-center" width="80px" v-for="i in 5" :key="i">50.00</td>
              </tr>
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

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <table width="100%">
              <thead>
                <tr class="tableizer-firstrow">
                  <th colspan="3">Perhitungan Ketidakpastian Pengukuran</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>a. </td>
                  <td>Pada alat kalibrasi </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Tingkat kepercayaan 95 %, Faktor cakupan k (asumsi) = 2</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>- Gauge Block No Seri 516-970-01, Ketidakpastian dari Sertifikat  Ub1   =  0.19 / 2  =</td>
                  <td>0.0950000 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>b.</td>
                  <td>Resolusi jangka sorong</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub3  = ( (10) / 1.73205 ) =</td>
                  <td>5.7735027 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>c.</td>
                  <td>Selisih koefisien muai</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub7  = ( 2e-6 / 1.73205  )  x 150000           =</td>
                  <td>0.1732051 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>d.</td>
                  <td>Selisih suhu antara jangka sorong dan gauge block</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub2 = (0.1/ 1.73205) x 3,45 =</td>
                  <td>0.3983717 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>e.</td>
                  <td>Drift Standar</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub5  = ((0.05 + 0.5e-6.L) x Y) / 1.73205 =  ((0.05+0.5e-6x200000)x2 / 1.73205 =</td>
                  <td>0.0578216 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>f.</td>
                  <td>Lapisan Wringing</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub6  = Ö ( k x 0.052) / 1.73205 =  Ö ( 3 x 0.052 ) /  1.73205  =</td>
                  <td>0.0500000 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>g.</td>
                  <td>Kesalahan geometric</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub4 = ( 10  / 1.73205 ) =</td>
                  <td>5.7735027 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>h.</td>
                  <td>Standar deviasi 0.00000 =</td>
                  <td>0.00000 um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Ketidakpastian Gabungan (uc) = </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>#REF!</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= 8.1774223</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Ketidakpastian diperluas (U95) =</td>
                  <td>k x uc</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= 2 x 8.1774223</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= 16.3548446</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= 0.02</td>
                  <td>mm</td>
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
import dimensiHeader from '~/components/dimensi/jangka.vue'
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

    data_alat: {},
    data_ktp: {},
    data_kal: {
      hasil: {
        "Kesalahan ": [],
        "Mampu Ulang ": [],
        "Nilai Aktual": [],
        "Pembacaan": [],
        "Pembacaan Alat ": [],
        "Rata-rata": [],
        "Unnamed: 4": [],
        "Unnamed: 6": [],
        "Unnamed: 8": [],
        "Unnamed: 10": [],
      },
      jis: {},
      nilai_gauge: {}
    }
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
        this.data_kal = req_data.data_kal
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