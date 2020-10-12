<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instrumenHeader></instrumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>

            <p class="b">KETIDAKPASTIAN PENGUKURAN :</p>

            <table class="tableizer-table">
              <tr>
                <td>1.</td>
                <td colspan="3">Ketidakpastian baku kalibrasi larutan standar</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Toleransi larutan standar Cu =</td>
                <td>0.002</td>
                <td> mg/l</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb1 = </td>
                <td>0.002 / (3)1/2 =</td>
                <td>0.001154701</td>
              </tr>
            </table>

            <table>
              <tr>
                <td>2.</td>
                <td>Ketidakpastian baku dari kalibrasi labu ukur</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dari sertifikat kalibrasi diperoleh U95 = </td>
                <td>0.005</td>
                <td>ml</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb2 = </td>
                <td>0.005</td>
                <td>/ 2 =</td>
                <td>0.0025</td>
                <td>ml        =</td>
                <td>5.77E-09</td>
                <td>mg/l</td>
              </tr>
            </table>

            <table>
              <tr>
                <td>3.</td>
                <td>Ketidakpastian baku dari kalibrasi buret</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dari Sertifikat Kalibrasi : U95 = </td>
                <td>0.002</td>
                <td>ml, Asumsi k = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb3 = </td>
                <td>0.002</td>
                <td>/ 2 =</td>
                <td>0.001</td>
                <td>ml        =</td>
                <td>2.31E-09</td>
                <td>mg/l</td>
              </tr>
            </table>

            <table>
              <tr>
                <td>4.</td>
                <td>Ketidakpastian baku dari kalibrasi pipet ukur</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dari Sertifikat Kalibrasi : U95 = </td>
                <td>0.002</td>
                <td>ml, Asumsi k = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb4 = </td>
                <td>0.002</td>
                <td>/ 2 =</td>
                <td>0.001</td>
                <td>ml        =</td>
                <td>2.31E-09</td>
                <td>mg/l</td>
              </tr>
            </table>

            <table>
              <tr>
                <td>5.</td>
                <td>Ketidakpastian baku dari linieritas konsentrasi larutan standar</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Deviasi maksimum dari linieritas konsentrasi larutan standar adalah</td>
                <td>0.002306559</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb5 = </td>
                <td>0.002306559</td>
                <td>/ (31/2) =</td>
                <td>0.0013</td>
                <td>abs        </td>
              </tr>
            </table>

            <table>
              <tr>
                <td>6.</td>
                <td>Ketidakpastian baku dari readability</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Daya baca, dimana 1 reolusi  diperoleh </td>
                <td>0.0001</td>
                <td>abs</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb6 = </td>
                <td>0.0001</td>
                <td>/ (31/2) =</td>
                <td>0.0000577</td>
                <td>abs</td>
              </tr>
            </table>

            <table>
              <tr>
                <td>7.</td>
                <td>Ketidakpastian baku daya ulang pembacaan</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Standar deviasimaksium  daya ulang pembacaan diperoleh :</td>
                <td>0.003684789</td>
                <td>abs</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb6 = </td>
                <td>0.0037</td>
                <td>/ (31/2) =</td>
                <td>0.00213</td>
                <td>abs</td>
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
    margin-top: 16px;
    /* width: 100% */
  } table, th, td {
    border: 0px solid grey;
    padding: 1px
  }
</style>

<script>
import instrumenHeader from '~/components/instrumen/aas.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    instrumenHeader
  },

  head: {
    title: 'Ketidakpastian AAS | Bidang Instrumen Analisa',
    meta: [
      {
        hid: 'Instrumen Analisa',
        name: 'Instrumen Analisa',
        content: 'Bidang Instrumen Analisa'
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
  },
}
</script>