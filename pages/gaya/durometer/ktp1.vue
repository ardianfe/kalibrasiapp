<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>
            <p class="font-weight-bold title">Ketidakpastian Pengukuran</p>
            <p class="font-weight-bold">Analisa Tipe B :</p>

            <div style="border: 1px solid grey; padding: 10px; margin-bottom: 16px">
              <table width="100%">
                <tbody>
                  <tr class="tableizer-firstrow">
                    <td class="font-weight-bold">1.</td>
                    <td class="font-weight-bold" colspan="4">Ketidakpastian baku kalibrasi timbangan</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Dari Sertifikat Kalibrasi : U95 = </td>
                    <td>{{ktp[0]}}</td>
                    <td>g, asumsi k = 2</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>µb1=U95/2 =</td>
                    <td>{{ktp[1]}}</td>
                    <td>g, dimana maksimum beban durometer 750 g, sehingga µb1 = </td>
                    <td>{{ktp[2].toFixed(5)}} %</td>
                  </tr>
                </tbody>
              </table>
              <br>

              <table width="100%">
                <tbody>  
                  <tr>
                    <td class="font-weight-bold">2.</td>
                    <td class="font-weight-bold" colspan="4">Ketidakpastian baku dari drift timbangan</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Drift termokopel standar =</td>
                    <td colspan="3">{{ktp[3]}} g</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td colspan="4">
                      Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular,
                      maka :
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>µb2 = </td>
                    <td>{{ktp[4]}} / (31/2) =</td>
                    <td>{{ktp[5].toFixed(3)}} g =</td>
                    <td>{{ktp[6].toFixed(4)}} %</td>
                  </tr>
                </tbody>
              </table>
              <br>

              <table width="100%">
                <tbody>
                  <tr>
                    <td class="font-weight-bold">3.</td>
                    <td class="font-weight-bold" colspan="4">Ketidakpastian baku pengaruh perubahan suhu</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Selisih suhu pengamatan :</td>
                    <td>{{ktp[7]}}</td>
                    <td>°C, dimana 1 °C = 1.4E-5 g, maka ut = </td>
                    <td>{{ktp[8].toFixed(7)}} g</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>µb3 = ut</td>
                    <td>/ (31/2) =</td>
                    <td>{{ktp[9]}} g =</td>
                    <td>{{ktp[10]}} %</td>
                  </tr>
                  </tbody>
              </table>
              <br>

              <table width="100%">
                <tbody>
                  <tr>
                    <td class="font-weight-bold">4.</td>
                    <td class="font-weight-bold" colspan="4">Ketidakpastian baku dari indikator durometer</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Readability =</td>
                    <td>{{ktp[11]}}</td>
                    <td>HA</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td colspan="4">
                      Dengan asumsi sebagai semi-range dan mempunyai distribusi rectangular,
                      maka :
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>µb4 = </td>
                    <td>{{ktp[12]}} / (31/2) =</td>
                    <td>{{ktp[13].toFixed(3)}} HA = </td>
                    <td>{{ktp[14].toFixed(5)}} %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="border: 1px solid grey; padding: 10px">
              <p class="font-weight-bold">Analisa Tipe A :</p>
              <table width="100%">    
                <tbody>
                  <tr>
                    <td class="font-weight-bold">1.</td>
                    <td class="font-weight-bold" colspan="9">Ketidakpastian baku daya ulang pembacaan</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Standar deviasi daya ulang pembacaan diperoleh :</td>
                    <td>{{ktp[15]}} %,</td>
                    <td>sehingga :</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td colspan="3">µa = {{ktp[16]}} / (31/2) = {{ktp[17].toFixed(6)}} %</td>
                  </tr>
                </tbody>
              </table>
            </div>

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
    border: 0px solid grey;
    padding: 1px
  }
</style>

<script>
import gayaHeader from '~/components/gaya/durometer.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Ketidakpastian Durometer | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '-',
    ktp: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('Lembar Kerja Durometer :', req);

        this.no_cert = req.result[0].no_laporan
        this.ktp = req.result[0].data_ktp.newktp_1['Unnamed: 4']
      } catch (error) {
        console.log('Gagal : ', error.response);
      }
    },
  },
}
</script>