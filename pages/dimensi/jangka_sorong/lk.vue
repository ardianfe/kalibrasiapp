<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI JANGKA SORONG</p>

            <p class="b">No. Laporan : 3-09-19-00757</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ equipment.name }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model: {{ equipment.type }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ equipment.brand }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ equipment.capacity }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ equipment.serial_number }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ equipment.made_in }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ equipment.location }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ equipment.temperature }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan : {{ equipment.temperature }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan Terkoreksi : {{ equipment.temperature }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan Terkoreksi : {{ equipment.temperature }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: {{ equipment.standard }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ equipment.standard }}</p>
                </v-layout>
                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ equipment.standard }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">DIkonsikan tanggal : { equipment.position }</p>
                </v-layout>
                
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI JANGKA SORONG</p>

            <p class="b">No. Laporan : 3-09-19-00757</p>
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
                  <tr>
                    <td>10</td>
                    <td>10.00018</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>10.02</td>
                    <td>10.00</td>
                    <td>0.01982</td>
                    <td>-0.00018</td>
                    <td>0.05</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>50.00163</td>
                    <td>50.00</td>
                    <td>50.00</td>
                    <td>50.00</td>
                    <td>50.02</td>
                    <td>-0.00163</td>
                    <td>0.01837</td>
                    <td>0.00</td>
                    <td>0.05</td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>69.99893</td>
                    <td>70.00</td>
                    <td>70.00</td>
                    <td>70.00</td>
                    <td>70.00</td>
                    <td>0.00107</td>
                    <td>0.00107</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>99.99829</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>0.00171</td>
                    <td>0.00171</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>150</td>
                    <td>149.99992</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>0.00008</td>
                    <td>0.00008</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>170</td>
                    <td>169.99722</td>
                    <td>170.00</td>
                    <td>170.00</td>
                    <td>170.00</td>
                    <td>170.00</td>
                    <td>0.00278</td>
                    <td>0.00278</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>199.99658</td>
                    <td>200.00</td>
                    <td>200.00</td>
                    <td>200.00</td>
                    <td>200.00</td>
                    <td>0.00342</td>
                    <td>0.00342</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>250</td>
                    <td>249.99821</td>
                    <td>250.00</td>
                    <td>250.00</td>
                    <td>250.00</td>
                    <td>250.00</td>
                    <td>0.00179</td>
                    <td>0.00179</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>270</td>
                    <td>269.99551</td>
                    <td>270.00</td>
                    <td>270.00</td>
                    <td>270.00</td>
                    <td>270.00</td>
                    <td>0.00449</td>
                    <td>0.00449</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>299.99487</td>
                    <td>300.00</td>
                    <td>300.00</td>
                    <td>300.00</td>
                    <td>300.00</td>
                    <td>0.00513</td>
                    <td>0.00513</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>50.00</td>
                    <td>50.05</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>70.00</td>
                    <td>70.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>170.00</td>
                    <td>170.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>200.00</td>
                    <td>200.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>250.00</td>
                    <td>250.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>270.00</td>
                    <td>270.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>300.00</td>
                    <td>300.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>10.05</td>
                    <td>10.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>50.00</td>
                    <td>50.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>70.00</td>
                    <td>70.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>170.00</td>
                    <td>170.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>200.00</td>
                    <td>200.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>250.00</td>
                    <td>250.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>270.00</td>
                    <td>270.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>300.00</td>
                    <td>300.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
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
                Diperiksa oleh : Aji MS <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Agung Tri S S <br>
                Tanggal :	2 Juni 2017 <br>
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
                Diperiksa oleh : Aji MS <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Agung Tri S S <br>
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
    padding: 3px
  }
</style>

<script>
import dimensiHeader from '~/components/dimensi/jangka.vue'
import durometer from '~/static/durometer.json'

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
    no_cert: '3-09-10-0490',
    equipment: {
      name : '',
      capacity : '',
      brand : '',
      serial_number : '',
      type : '',
      made_in : '',
      location : '',
      temperature : '',
      standard : '',
      methods : '',
    },

    hk: {
      d_min: [0,0],
      d_max: [0,0],
      h_minumum: 401,
      h_rata_rata: 401.6,
      hasil: {
        unnamed7: [],
        unnamed9: [],
        unnamed11: [],
        unnamed13: [],
      }
    }
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }

    this.cekCORS()

    console.log('cal?', durometer);
    var data = durometer.result[0].data_alat
    this.equipment.name = data['Deskripsi Alat']
    this.equipment.capacity = data['Kapasitas']
    this.equipment.brand = data['Merek']
    this.equipment.serial_number = data['No Seri']
    this.equipment.type = data['Tipe']
    this.equipment.made_in = data['Buatan']
    this.equipment.location = data['Lokasi Kalibrasi']
    this.equipment.temperature = data['Suhu']
    this.equipment.standard = data['Standar acuan']
    this.equipment.methods = data['Metoda verifikasi']

    console.log('eq ', this.equipment);

    this.ketidakpastian = durometer.result

    // this.hk.d_min = durometer.result[0].data_kal.d_minimum_1
    // this.hk.d_max = durometer.result[0].data_kal.d_maksimum_1

    // this.hk.hasil.unnamed7 = durometer.result[0].data_kal.hk1['Unnamed: 7']
    // this.hk.hasil.unnamed9 = durometer.result[0].data_kal.hk1['Unnamed: 9']
    // this.hk.hasil.unnamed11 = durometer.result[0].data_kal.hk1['Unnamed: 11']
    // this.hk.hasil.unnamed13 = durometer.result[0].data_kal.hk1['Unnamed: 13']
  },

  methods: {
    async cekCORS() {
      try {
        const req = await this.$calibrate.testCors()

        console.log('test cors', req);
      } catch (error) {
        console.log('cek cors :', error.response);
      }
    },
    fileSelected(e) {
      var reader = new FileReader();
      console.log(e.target.files[0]);
      this.filename = e.target.files[0].name
      this.file = e.target.files[0]
    },

    async fileUpload() {
      this.uploading = true
      try {
        const req = await this.$calibrate.uploadFile({
          file: this.file,
          category: this.selected
        })

        // console.log(this.file);

        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
        
      } catch (error) {
        alert('gagal mengupload file')
        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
      }
    },

    sheetPush(id, name, str) {
      this.sheets.push({'id': id, 'name': name, 'htmlstr': str})
      // document.getElementById(''+id).innerHTML += str;
    },

    createElement() {
      for (const key in this.sheets) {
        if (this.sheets.hasOwnProperty(key)) {
          const element = this.sheets[key];
          
          document.getElementById(''+element.id).innerHTML += element.htmlstr;
          console.log(document.getElementById(element.id));
        }
      }

      let tds = document.querySelectorAll('td')
      // console.log(tds);
      tds.remove()
      
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>