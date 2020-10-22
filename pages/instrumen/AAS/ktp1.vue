<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instrumenHeader></instrumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : {{no_cert}}</p>

            <p class="b">KETIDAKPASTIAN PENGUKURAN :</p>

            <table class="tableizer-table">
              <tr>
                <td>1.</td>
                <td colspan="3">Ketidakpastian baku kalibrasi larutan standar</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Toleransi larutan standar Cu =</td>
                <td>{{data_ktp.ktp_baku_lar_std.cu}}</td>
                <td> mg/l</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb1 = </td>
                <td>0.002 / (3)1/2 =</td>
                <td>{{data_ktp.ktp_baku_lar_std.mb1_mgl.toFixed(9)}}</td>
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
                <td>{{data_ktp.ktp_baku_labu_ukur.u95}}</td>
                <td>ml</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb2 = </td>
                <td>{{data_ktp.ktp_baku_labu_ukur.u95}}</td>
                <td>/ 2 =</td>
                <td>{{data_ktp.ktp_baku_labu_ukur.mb2_ml}}</td>
                <td>ml        =</td>
                <td>{{data_ktp.ktp_baku_labu_ukur.mb2_mgl}}</td>
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
                <td>{{data_ktp.ktp_baku_buret.u95}}</td>
                <td>ml, Asumsi k = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb3 = </td>
                <td>{{data_ktp.ktp_baku_buret.u95}}</td>
                <td>/ 2 =</td>
                <td>{{data_ktp.ktp_baku_buret.mb3_ml}}</td>
                <td>ml        =</td>
                <td>{{data_ktp.ktp_baku_buret.mb3_mgl}}</td>
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
                <td>{{data_ktp.ktp_baku_pipet.u95}}</td>
                <td>ml, Asumsi k = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb4 = </td>
                <td>{{data_ktp.ktp_baku_pipet.u95}}</td>
                <td>/ 2 =</td>
                <td>{{data_ktp.ktp_baku_pipet.mb4_ml}}</td>
                <td>ml        =</td>
                <td>{{data_ktp.ktp_baku_pipet.mb4_mgl}}</td>
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
                <td>{{data_ktp.ktp_baku_linearitas_std.dev_maks.toFixed(6)}}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb5 = </td>
                <td>{{data_ktp.ktp_baku_linearitas_std.dev_maks.toFixed(6)}}</td>
                <td>/ (31/2) =</td>
                <td>{{data_ktp.ktp_baku_linearitas_std.mb5_abs.toFixed(6)}}</td>
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
                <td>{{data_ktp.ktp_readability.daya_baca}}</td>
                <td>abs</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb6 = </td>
                <td>{{data_ktp.ktp_readability.daya_baca}}</td>
                <td>/ (31/2) =</td>
                <td>{{data_ktp.ktp_readability.mb6_abs.toFixed(7)}}</td>
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
                <td>{{data_ktp.ktp_daya_ulang_baca.dev_maks.toFixed(5)}}</td>
                <td>abs</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>µb6 = </td>
                <td>{{data_ktp.ktp_daya_ulang_baca.dev_maks.toFixed(5)}}</td>
                <td>/ (31/2) =</td>
                <td>{{data_ktp.ktp_daya_ulang_baca.mb7_abs.toFixed(5)}}</td>
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
    no_cert: '',

    data_ktp: {
      ktp_baku_buret: {
        mb3_mgl: 0, 
        mb3_ml: 0, 
        u95: 0
      },
      ktp_baku_labu_ukur: {
        mb2_mgl: 0, 
        mb2_ml: 0, 
        u95: 0
      },
      ktp_baku_lar_std: {
        cu: 0, 
        mb1_mgl: 0
      },
      ktp_baku_linearitas_std: {
        dev_maks: 0, 
        mb5_abs: 0
      },
      ktp_baku_pipet: {
        mb4_mgl: 0,
        mb4_ml: 0,
        u95: 0
      },
      ktp_daya_ulang_baca: {
        dev_maks: 0, 
        mb7_abs: 0
      },
      ktp_readability: {
        daya_baca: 0,
        mb6_abs: 0
      },
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
        let req_data = req.result[0]

        this.no_cert = req_data.no_laporan
        this.data_ktp = req_data.data_ktp['ktp-1']
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },

}
</script>