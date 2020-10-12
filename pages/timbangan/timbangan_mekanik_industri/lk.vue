<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <timbanganHeader></timbanganHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-right">Halaman : 1 dari 4 lembar</p>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI <br> TIMBANGAN MEKANIK INDUSTRI</p>
            <p>No. Sertifikat : 3-06-19-00319</p>
            <table class="tableizer-table">
              <tr>
                <td colspan="4">Diskripsi Alat :</td>
              </tr>
              <tr>
                <td>Merek :</td>
                <td>OHAUS</td>
                <td>Model :</td>
                <td>-</td>
              </tr>
              <tr>
                <td>No. Seri :</td>
                <td>1552585</td>
                <td>Buatan :</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>Tipe :</td>
                <td>Triple Beam</td>
                <td>Kapasitas :</td>
                <td>2610 g</td>
              </tr>
              <tr>
                <td>Daerah Skala :</td>
                <td>0 - 2610 g</td>
                <td>Divisi Skala:</td>
                <td>0,1 g</td>
              </tr>
              <tr>
                <td>Resolusi :</td>
                <td>0,1 g</td>
                <td>Suhu :</td>
                <td>28 °C</td>
              </tr>
              <tr>
                <td>Lokasi Kal :</td>
                <td>Laboratorium Beton <br> PT Multibrata Anugrah Utama</td>
                <td>Kelembaban</td>
                <td>57 %</td>
              </tr>
            </table>
            
            <table>  
              <tr>
                <td>Metoda Kalibrasi :</td>
                <td>PC-306-08</td>
              </tr>
            </table>
            
            <table>  
              <tr>
                <td>Acuan :</td>
                <td>
                  1. "The Calibration of Weights and Balances" E.C Morris,and Kitty M.K Fen, <br> NMI,Third Edition,Australia, 2010, Butir 7.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  2. ASTM D4753-87, Standar Specification for Evaluating, <br> Selecting and specifying Balances and Scale for use in Soil and Rock Testing
                </td>
              </tr>
            </table>
            
            <table> 
              <tr>
                <td colspan="3">Alat Kalibrasi yang digunakan :</td>
              </tr>
              <tr>
                <td>Massa Standar, Kelas F1</td>
                <td>No. Seri :</td>
                <td>11117804</td>
              </tr>
              <tr>
                <td>Massa Standar, Kelas E2</td>
                <td>No. Seri :</td>
                <td>710121212</td>
              </tr>
            </table>
            <!-- <v-layout row class='mt-4'>
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
            </v-layout> -->
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>No. Sertifikat : 3-06-19-00319</p>
              <p class="text-xs-right">Halaman : 2 dari 4 lembar</p>
            </v-layout>
            
            <p>1. KEMAMPUAN BACA KEMBALI</p>
            <table>
              <tr>
                <td colspan="3">Beban Nol & Skala 1/10 <br> ( 25 g )</td>
                <td colspan="3">Beban setengan & Skala setengah <br> ( 1250 g )</td>
                <td colspan="3">Beban penuh & Skala penuh <br> ( 2500 g)</td>
              </tr>
              <tr>
                <td>Nol</td>
                <td>Pembacaan</td>
                <td>Perbedaan</td>
                <td>Nol</td>
                <td>Pembacaan</td>
                <td>Perbedaan</td>
                <td>Nol</td>
                <td>Pembacaan</td>
                <td>Perbedaan</td>
              </tr>
              <tr>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2499,9</td>
                <td>-0,1</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,1</td>
                <td>0,1</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,1</td>
                <td>0,1</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td colspan="2">Standar Deviasi ( g )</td>
                <td colspan="3">0,032</td>
                <td colspan="3">0,032</td>
                <td colspan="3">0,032</td>
              </tr>
              <tr>
                <td colspan="2">Perbedaan maks <br>antara pembacaan <br>berikutnya, rmaks (g)</td>
                <td colspan="3">0,1</td>
                <td colspan="3">0,1</td>
                <td colspan="3">0,1</td>
              </tr>
            </table>
              
            <p class="mt-3">Nilai Maksimum dari standar deviasi = 0,032 g</p>
            <p>Std.dev=(E(ri-r)2/(n-1)1/2</p>
            <p>Keterangan : 1,...............................n</p>

            <p class="mb-0">ri = mi - zi</p>
            <p class="mb-0">r = nilai rata-rata dari r</p>
            <p class="mb-0">n = Jumlah Pembacaan</p>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>No. Sertifikat : 3-06-19-00319</p>
              <p class="text-xs-right">Halaman : 3 dari 4 lembar</p>
            </v-layout>

            <p>2. KESALAHAN LINIER</p>            
            <table class="text-xs-center">
              <thead class="b">
                <tr>
                  <td rowspan="2">No</td>
                  <td colspan="2">Nilai Massa Yang digunakan</td>
                  <td rowspan="2">Beban diatas pan</td>
                  <td rowspan="2">pembacaan</td>
                  <td rowspan="2">rata-rata</td>
                  <td rowspan="2">Perbedaan</td>
                  <td rowspan="2">Koreksi</td>
                  <td rowspan="2">Ketidakpastian</td>
                </tr>
                <tr>
                  <td>Nilai Sebenarnya</td>
                  <td>Ketidakpastian</td>
                </tr>
                <tr>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                </tr>
              </thead>
              <tr>
                <td rowspan="6">20</td>
                <td>20,00005</td>
                <td>0,000047</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>20,1</td>
                <td>&nbsp;</td>
                <td>20,1</td>
                <td>-0,1</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>20,0</td>
                <td>&nbsp;</td>
                <td>20,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>20,1</td>
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
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="6">200</td>
                <td>200,00021</td>
                <td>0,000190</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>&nbsp;</td>
                <td>200,0</td>
                <td>&nbsp;</td>
                <td>200,0</td>
                <td>0,0</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>200,0</td>
                <td>200,0</td>
                <td>200,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>200,1</td>
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
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="6">500</td>
                <td>500,00060</td>
                <td>0,000480</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>0,2</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>500,0</td>
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>499,8</td>
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
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="6">1000</td>
                <td>1000,00060</td>
                <td>0,000990</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>0,0</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
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
                <td>&nbsp;</td>
                <td>0,0</td>
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
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>2000</td>
                <td>1999,99785</td>
                <td>0,000240</td>
                <td>&nbsp;</td>
                <td>1999,9</td>
                <td>&nbsp;</td>
                <td>1999,9</td>
                <td>0,1</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>2000,0</td>
                <td>1999,9</td>
                <td>1999,9</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
              
            <table>
              <tr>
                <td>Koreksi minimum =</td>
                <td>&nbsp;</td>
                <td>-0,1</td>
                <td>harga mutlak dari koreksi minimum =</td>
                <td>&nbsp;</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Koreksi maksimum =</td>
                <td>&nbsp;</td>
                <td>0,2</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  Umaks = 2 ((ómaks)2/k + (ustd/2)2) + (1/2xResolusi)/ 3)2 )1/2
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>ustd = Ketidakpastian dari massa standar</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>= (u1+ u2+.................ui) /2</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>
                  ó = Nilai maksimum dari standar deviasi dari kemampuan baca kembali
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
                <td>k = Jumlah pembacaan</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Nilai Koreksi maksimum (Q)= g</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0,2</td>
                <td>g</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Nilai Ketidakpastian maksimum (Umaks) = ±</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0,1</td>
                <td>g</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
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
    /* font-size: 9pt; */
    border-collapse: collapse;
    margin-top: 24px;
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import timbanganHeader from '~/components/timbangan/timbangan_mekanik_industri.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    timbanganHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Timbangan',
    meta: [
      {
        hid: 'Timbangan',
        name: 'Timbangan',
        content: 'Bidang Timbangan'
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