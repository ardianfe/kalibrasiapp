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
                    <td>0.1</td>
                    <td>g, asumsi k = 2</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>µb1=U95/2 =</td>
                    <td>0.05</td>
                    <td>g, dimana maksimum beban durometer 750 g, sehingga µb1 = </td>
                    <td>0.006666667 %</td>
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
                    <td colspan="3">0.1 g</td>
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
                    <td>0.1 / (31/2) =</td>
                    <td>0.058 g =</td>
                    <td>0.007698004 %</td>
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
                    <td>0.2</td>
                    <td>°C, dimana 1 °C = 1.4E-5 g, maka ut = </td>
                    <td>0.0000028 g</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>µb3 = ut</td>
                    <td>/ (31/2) =</td>
                    <td>1.61658E-06 g =</td>
                    <td>2.155E-07 %</td>
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
                    <td>0.2</td>
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
                    <td>0.2 / (31/2) =</td>
                    <td>0.115 HA = </td>
                    <td>0.115470054 %</td>
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
                    <td>0.34 %,</td>
                    <td>sehingga :</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td colspan="3">µa = 0.34 / (31/2) = 0.196299 %</td>
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