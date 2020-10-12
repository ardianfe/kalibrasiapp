<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instrumenHeader></instrumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>

            <table>
              <thead>
                <tr>
                  <th>Komponen</th>
                  <th>Satuan</th>
                  <th>Distribusi</th>
                  <th>U</th>
                  <th>Pembagi</th>
                  <th>vi</th>
                  <th>ui</th>
                  <th>ci</th>
                  <th>ui.ci</th>
                  <th>(ui.ci)²</th>
                  <th>(ui.ci)4/vi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Larutan standar</td>
                  <td>mg/l</td>
                  <td>normal</td>
                  <td>0.002</td>
                  <td>1.732050808</td>
                  <td>60</td>
                  <td>0.0012</td>
                  <td>1</td>
                  <td>0.001154701</td>
                  <td>1.33333E-06</td>
                  <td>2.96296E-14</td>
                </tr>
                <tr>
                  <td>Labu Ukur</td>
                  <td>ml</td>
                  <td>normal</td>
                  <td>0.005</td>
                  <td>2</td>
                  <td>60</td>
                  <td>0.0025</td>
                  <td>0.000005</td>
                  <td>1.25E-08</td>
                  <td>1.5625E-16</td>
                  <td>4.06901E-34</td>
                </tr>
                <tr>
                  <td>Buret</td>
                  <td>ml</td>
                  <td>normal</td>
                  <td>0.002</td>
                  <td>2</td>
                  <td>60</td>
                  <td>0.001</td>
                  <td>0.000002</td>
                  <td>2.31E-09</td>
                  <td>5.33333E-18</td>
                  <td>4.74074E-37</td>
                </tr>
                <tr>
                  <td>Pipet ukur</td>
                  <td>ml</td>
                  <td>normal</td>
                  <td>0.002</td>
                  <td>2</td>
                  <td>60</td>
                  <td>0.001</td>
                  <td>0.000002</td>
                  <td>2.31E-09</td>
                  <td>5.33333E-18</td>
                  <td>4.74074E-37</td>
                </tr>
                <tr>
                  <td>Linieritas kons Larutan std.</td>
                  <td>abs</td>
                  <td>rectangular</td>
                  <td>0.0023</td>
                  <td>1.732051</td>
                  <td>60</td>
                  <td>0.001331693</td>
                  <td>0.012185523</td>
                  <td>1.62274E-05</td>
                  <td>2.63328E-10</td>
                  <td>1.15569E-21</td>
                </tr>
                <tr>
                  <td>Readability</td>
                  <td>abs</td>
                  <td>rectangular</td>
                  <td>0.0001</td>
                  <td>1.732051</td>
                  <td>60</td>
                  <td>5.7735E-05</td>
                  <td>1</td>
                  <td>5.7735E-05</td>
                  <td>3.33333E-09</td>
                  <td>1.85185E-19</td>
                </tr>
                <tr>
                  <td>Daya ulang Pembacaan</td>
                  <td>abs</td>
                  <td>rectangular</td>
                  <td>0.00368</td>
                  <td>1.732051</td>
                  <td>5</td>
                  <td>0.002127414</td>
                  <td>0.012185523</td>
                  <td>2.59236E-05</td>
                  <td>6.72035E-10</td>
                  <td>9.03263E-20</td>
                </tr>
                <tr>
                  <td colspan="11">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Sums</td>
                  <td>0.000</td>
                  <td>2.96299E-14</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian baku gabungan, uc, ppm</td>
                  <td>0.001</td>
                  <td>ppm</td>
                </tr>
                <tr>
                  <td colspan="9">Derajat kebebasan efektif, veff</td>
                  <td>60.4</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Faktor cakupan, k-student's for veff and CL 95%</td>
                  <td>2.02</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian bentangan, U = k.uc, ppm</td>
                  <td>0.00234</td>
                  <td>ppm</td>
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
    font-size: 9pt;
  } table, th, td {
    border: 1px solid grey;
    padding: 2px
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