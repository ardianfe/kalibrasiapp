<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="title">
              Perhitungan Ketidakpastian Untuk Jangka sorong		
            </p>

            <p>
              Sertifikat No. 1609/KAL/BBLM/11/14 <br>
              Tanggal  :  4 Nopember 2014			
            </p>

            <table class="tableizer-table">
              <thead>
                <tr class="tableizer-firstrow">
                  <th rowspan="2">Nominal Gauge Block</th>
                  <th rowspan="2">Kombinasi Gauge Block</th>
                  <th colspan="4">Ketidakpastian pada sertifikat</th>
                  <th rowspan="2">ketidakpastian gabungan <br> &#8730;(u12 + u22 +u32+u42)</th>
                </tr>
                <tr>
                  <td>u1</td>
                  <td>u2</td>
                  <td>u3</td>
                  <td>u4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30 </td>
                  <td>30 </td>
                  <td>0.12 </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.12 </td>
                </tr>
                <tr>
                  <td>60 </td>
                  <td>60 </td>
                  <td>0.13 </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.13 </td>
                </tr>
                <tr>
                  <td>90 </td>
                  <td>90 </td>
                  <td>0.14 </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.14 </td>
                </tr>
                <tr>
                  <td>120 </td>
                  <td>100+20</td>
                  <td>0.14 </td>
                  <td>0.11 </td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.18 </td>
                </tr>
                <tr>
                  <td>150 </td>
                  <td>100+50</td>
                  <td>0.14 </td>
                  <td>0.12 </td>
                  <td>-</td>
                  <td>&nbsp;</td>
                  <td>0.18 </td>
                </tr>
                <tr>
                  <td>180 </td>
                  <td>100+80</td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.20 </td>
                </tr>
                <tr>
                  <td>210 </td>
                  <td>100+80+30</td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>0.12 </td>
                  <td>-</td>
                  <td>0.23 </td>
                </tr>
                <tr>
                  <td>240 </td>
                  <td>100+80+60</td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>0.13 </td>
                  <td>-</td>
                  <td>0.24 </td>
                </tr>
                <tr>
                  <td>270 </td>
                  <td>100+90+80</td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>-</td>
                  <td>0.24 </td>
                </tr>
                <tr>
                  <td>300 </td>
                  <td>100+90+80+30</td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>0.14 </td>
                  <td>0.12 </td>
                  <td>0.27 </td>
                </tr>
              </tbody>
            </table>

            <p class="b mt-3">Tabel Kesalahan Jangka Sorong, berdasar JIS B 7507 - 1993, butir 6.1</p>
            <table class="tableizer-table">
            <thead>
              <tr class="tableizer-firstrow">
                <th rowspan="2">Measuring length</th>
                <th colspan='2'>Scale intervals, minimum indicating <br> quantities or minimum reading values</th>
              </tr>
              <tr>
                <td>0.1 or 0.05</td>
                <td>0.02 or 0.01</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>50 or under</td>
                  <td>0.05</td>
                  <td>0.02</td>
                </tr>
                <tr>
                  <td>Over 50 to 100 or under</td>
                  <td>0.06</td>
                  <td rowspan='2'> &plusmn; 0.03</td>
                </tr>
                <tr>
                  <td>Over 100 to 200 or under</td>
                  <td>0.07</td>
                </tr>
                <tr>
                  <td>Over 200 to 300 or under</td>
                  <td>0.08</td>
                  <td rowspan='2'> &plusmn; 0.04</td>
                </tr>
                <tr>
                  <td>Over 300 to 400 or under</td>
                  <td>0.09</td>
                </tr>
                <tr>
                  <td>Over 400 to 500 or under</td>
                  <td>0.10</td>
                  <td rowspan='2'> &plusmn; 0.05</td>
                </tr>
                <tr>
                  <td>Over 500 to 600 or under</td>
                  <td>0.11</td>
                </tr>
                <tr>
                  <td>Over 600 to 700 or under</td>
                  <td>0.12</td>
                  <td rowspan='2'> &plusmn; 0.06</td>
                </tr>
                <tr>
                  <td>Over 700 to 800 or under</td>
                  <td>0.13</td>
                </tr>
                <tr>
                  <td>Over 800 to 900 or under</td>
                  <td>0.14</td>
                  <td rowspan='2'> &plusmn; 0.07</td>
                </tr>
                <tr>
                  <td>Over 900 to 1000 or under</td>
                  <td>0.15</td>
                </tr>
            </tbody>
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
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import dimensiHeader from '~/components/dimensi/jangka.vue'

export default {
  components: {
    dimensiHeader
  },

  head: {
    title: 'Nilai Gauge Jangka Sorong | Bidang Dimensi',
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
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }
  },

  methods: {
  },
}
</script>