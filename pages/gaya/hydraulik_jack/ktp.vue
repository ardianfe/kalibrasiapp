<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PENGUKUR GAYA <br>
              HYDRAULIK JACK
            </p>
            <p class="font-weight-bold">Perhitungan Ketidakpastian Pengukuran</p>
            <!-- <p class="font-weight-bold">Analisa Tipe B :</p> -->

            <p class="mt-3 mb-0">1. Analisa Tipe B (ub)</p>
            <table>
              <tr>
                <td>a.</td>
                <td colspan="3">Pada Alat Kalibrasi (ub1)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi)</td>
                <td width="40px">=</td>
                <td>2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>ketidakpastian standar dari sertifikat</td>
                <td>=</td>
                <td>0.065 %</td>
              </tr>
              <tr>
                <td>b.</td>
                <td colspan="3">Ketidakpastian Drift alat standar (ub2)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih residual maksimum</td>
                <td>=</td>
                <td>0.13 %</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian Standar Drift (Ub2)</td>
                <td>=</td>
                <td>0.07506 %</td>
              </tr>
              <tr>
                <td>c.</td>
                <td colspan="3">Pada pengaruh perubahan suhu (ub3)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih suhu pengamatan</td>
                <td>=</td>
                <td>0.2 °C</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Tingkat kepercayaan 95 %, faktor cakupan k (asumsi)</td>
                <td>=</td>
                <td>2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar pengaruh perubahan suhu (ub3) </td>
                <td>=</td>
                <td>0.00006 %</td>
              </tr>
              <tr>
                <td>d.</td>
                <td colspan="3">Pada indikator Hidraulik Jack  (ub4)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Julat ukur</td>
                <td>=</td>
                <td>= 0 -80 Mpa</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Readability</td>
                <td>=</td>
                <td>0.2Mpa</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Distribusi rectangular (a)</td>
                <td>=</td>
                <td>0.2 Mpa</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar indikator hidraulik jack (ub4)</td>
                <td>=</td>
                <td>0.19245 >%</td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">2. Analisa Tipe A (ua)</p>
            <table>
              <tr>
                <td>- Pada pengukuran (ketidakpastian Standar Deviasi)</td>
                <td>=</td>
                <td>#REF! %</td>
              </tr>
              <tr>
                <td>- Ketidakpastian standar pengukuran (ua)</td>
                <td>=</td>
                <td>#REF! %</td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">3. Ketidakpastian gabungan (uc) </p>
            <table>
              <tr>
                <td> =</td>
                <td>(Tipe A)2 + (Tipe)2</td>
              </tr>
              <tr>
                <td> =</td>
                <td>#REF!</td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">4. Ketidakpastian diperluas (U95)</p>
            <table>
              <tr>
                <td colspan="4">Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0</td>
              </tr>
              <tr>
                <td>Maka ketidakpastian diperluass (U95)     =   </td>
                <td>&nbsp;</td>
                <td>k  x  uc</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>2 x uc</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>#REF!</td>
                <td>%</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>#REF!</td>
                <td>%</td>
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

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PENGUKUR GAYA <br>
              HYDRAULIK JACK
            </p>
            <p class="font-weight-bold">Perhitungan Ketidakpastian Pengukuran</p>
            <!-- <p class="font-weight-bold">Analisa Tipe B :</p> -->

            <p class="mt-3 mb-0">1. Analisa Tipe B (ub)</p>
            <table>
              <tr>
                <td>a.</td>
                <td colspan="3">Pada Alat Kalibrasi (ub1)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi)</td>
                <td width="40px">=</td>
                <td>2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>ketidakpastian standar dari sertifikat</td>
                <td>=</td>
                <td>0.065 %</td>
              </tr>
              <tr>
                <td>b.</td>
                <td colspan="3">Ketidakpastian Drift alat standar (ub2)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih residual maksimum</td>
                <td>=</td>
                <td>0.13 %</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian Standar Drift (Ub2)</td>
                <td>=</td>
                <td>0.07506 %</td>
              </tr>
              <tr>
                <td>c.</td>
                <td colspan="3">Pada pengaruh perubahan suhu (ub3)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih suhu pengamatan</td>
                <td>=</td>
                <td>0.2 °C</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Tingkat kepercayaan 95 %, faktor cakupan k (asumsi)</td>
                <td>=</td>
                <td>2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar pengaruh perubahan suhu (ub3) </td>
                <td>=</td>
                <td>0.00006 %</td>
              </tr>
              <tr>
                <td>d.</td>
                <td colspan="3">Pada indikator Hidraulik Jack  (ub4)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Julat ukur</td>
                <td>=</td>
                <td>= 0 -80 Mpa</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Readability</td>
                <td>=</td>
                <td>0.2Mpa</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Distribusi rectangular (a)</td>
                <td>=</td>
                <td>0.2 Mpa</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar indikator hidraulik jack (ub4)</td>
                <td>=</td>
                <td>0.19245 >%</td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">2. Analisa Tipe A (ua)</p>
            <table>
              <tr>
                <td>- Pada pengukuran (ketidakpastian Standar Deviasi)</td>
                <td>=</td>
                <td>#REF! %</td>
              </tr>
              <tr>
                <td>- Ketidakpastian standar pengukuran (ua)</td>
                <td>=</td>
                <td>#REF! %</td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">3. Ketidakpastian gabungan (uc) </p>
            <table>
              <tr>
                <td> =</td>
                <td>(Tipe A)2 + (Tipe)2</td>
              </tr>
              <tr>
                <td> =</td>
                <td>#REF!</td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">4. Ketidakpastian diperluas (U95)</p>
            <table>
              <tr>
                <td colspan="4">Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0</td>
              </tr>
              <tr>
                <td>Maka ketidakpastian diperluass (U95)     =   </td>
                <td>&nbsp;</td>
                <td>k  x  uc</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>2 x uc</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>#REF!</td>
                <td>%</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>#REF!</td>
                <td>%</td>
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
    padding: 3px
  }
</style>

<script>
import gayaHeader from '~/components/gaya/hydraulik_jack.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
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