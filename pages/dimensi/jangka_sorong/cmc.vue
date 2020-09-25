<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" >
          <v-card-text>
            <p class="title">
              Uncertainty Budget sebagai Pendukung Kemampuan Kalibrasi dan Pengukuran (CMC)		
            </p>

            <p>
              Nama laboratorium :		Laboratorium Kalibrasi Balai Besar Bahan dan Barang Teknik <br>			
              Alamat :		Jl. Sangkuriang No. 14 Bandung				
            </p>

            <p>
              <span class="b">UNCERTAINTY BUDGET SEBAGAI PENDUKUNG KLAIM CMC</span> <br>
              Besaran yang diukur : Dimensi <br>
              Jenis alat yang dikalibrasi : Jangka sorong / Vernier Caliper <br>
              Standar yang digunakan : Gauge Block <br>
              Model matematis pengukuran : E = L – Ls + Ls (qs da +as dq ) – LD - LW + LG <br>
              Rentang ukur : 0 - 300 mm <br>
            </p>

            <table class="tableizer-table">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>Komponen</th>
                    <th>Satuan</th>
                    <th>Tipe Distribusi</th>
                    <th>Simbol</th>
                    <th>Var. Intetval a</th>
                    <th>Pembagi</th>
                    <th>Derajat Kebebasan vi</th>
                    <th>Std Uncert ui</th>
                    <th>Koef. sens. ci</th>
                    <th>ui.ci</th>
                    <th>(ui.ci)²</th>
                    <th>(ui.ci)4/vi</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Repeatability</td>
                    <td>mm</td>
                    <td>normal</td>
                    <td>m(L1)</td>
                    <td>3.162</td>
                    <td>3.162</td>
                    <td>9</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1.10E-01</td>
                  </tr>
                  <tr>
                    <td>Readability</td>
                    <td>mm</td>
                    <td>rectangular</td>
                    <td>m(L2)</td>
                    <td>10</td>
                    <td>1.732</td>
                    <td>1.00E+99</td>
                    <td>5.7735</td>
                    <td>1</td>
                    <td>5.7735</td>
                    <td>33.33333</td>
                    <td>1.10E-96</td>
                  </tr>
                  <tr>
                    <td>Gauge Block (Sertifikat)</td>
                    <td>mm</td>
                    <td>normal</td>
                    <td>m(Ls1)</td>
                    <td>0.27</td>
                    <td>2</td>
                    <td>6.00E+01</td>
                    <td>0.135</td>
                    <td>1</td>
                    <td>0.135</td>
                    <td>0.01823</td>
                    <td>5.50E-06</td>
                  </tr>
                  <tr>
                    <td>Selisih Koefisien muai</td>
                    <td>/°C</td>
                    <td>rectangular</td>
                    <td>m(da)</td>
                    <td>2.00E-06</td>
                    <td>1.732</td>
                    <td>6.00E+01</td>
                    <td>1.00E-06</td>
                    <td>300000</td>
                    <td>0.34641</td>
                    <td>0.12</td>
                    <td>2.40E-04</td>
                  </tr>
                  <tr>
                    <td>Selisih temperatur</td>
                    <td>°C</td>
                    <td>rectangular</td>
                    <td>m(qs)</td>
                    <td>0.2</td>
                    <td>1.732</td>
                    <td>1.00E+99</td>
                    <td>0.1155</td>
                    <td>3.45E+00</td>
                    <td>0.39837</td>
                    <td>0.1587</td>
                    <td>2.50E-101</td>
                  </tr>
                  <tr>
                    <td>Drift</td>
                    <td>mm</td>
                    <td>rectangular</td>
                    <td>m(LD)</td>
                    <td>0.1</td>
                    <td>1.732</td>
                    <td>1.00E+99</td>
                    <td>0.0577</td>
                    <td>1</td>
                    <td>0.05774</td>
                    <td>0.00333</td>
                    <td>1.10E-104</td>
                  </tr>
                  <tr>
                    <td>Wringing</td>
                    <td>mm</td>
                    <td>rectangular</td>
                    <td>m(Lw)</td>
                    <td>0.09</td>
                    <td>1.732</td>
                    <td>1.00E+99</td>
                    <td>0.05</td>
                    <td>1</td>
                    <td>0.05</td>
                    <td>0.0025</td>
                    <td>6.30E-105</td>
                  </tr>
                  <tr>
                    <td>Geometrik</td>
                    <td>mm</td>
                    <td>rectangular</td>
                    <td>m(LG)</td>
                    <td>10</td>
                    <td>1.732</td>
                    <td>1.00E+99</td>
                    <td>5.7735</td>
                    <td>1</td>
                    <td>5.7735</td>
                    <td>33.33333</td>
                    <td>1.10E-96</td>
                  </tr>
                  <tr>
                    <td colspan="12">&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="10">Sums</td>
                    <td>67.96943</td>
                    <td>1.11E-01</td>
                  </tr>
                  <tr>
                    <td colspan="10">Ketidakpastian baku gabungan, uc, um</td>
                    <td colspan="2">8.24436 um</td>
                  </tr>
                  <tr>
                    <td colspan="10">Derajat kebebasan efektif, veff</td>
                    <td colspan="2">41486.9</td>
                  </tr>
                  <tr>
                    <td colspan="10">Faktor cakupan, k-student's for veff and CL 95%</td>
                    <td colspan="2">2</td>
                  </tr>
                  <tr>
                    <td colspan="10">Ketidakpastian bentangan, U = k.uc, um</td>
                    <td colspan="2">16.49 um</td>
                  </tr>
                  <tr>
                    <td colspan="10"></td>
                    <td colspan="2">0.016 mm</td>
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