<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instumenHeader></instumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <p class="ma-3">No. Laporan : {{no_cert}}</p>
          <v-card-text v-for="(item, ph_index) in data_ktp" :key="ph_index">
            <table>
              <thead>
                <tr>
                  <td class="b" colspan="11">Ketidakpastian parameter buffer {{ph_index}}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="b">Komponen</td>
                  <td class="b">Satuan</td>
                  <td class="b">Distribusi</td>
                  <td class="b">U</td>
                  <td class="b">Pembagi</td>
                  <td class="b">vi</td>
                  <td class="b">ui</td>
                  <td class="b">ci</td>
                  <td class="b">ui.ci</td>
                  <td class="b">( ui.ci )^2</td>
                  <td class="b">( ui.ci )^4/vi</td>
                </tr>
                <tr v-for="(item, index) in data_ktp[ph_index].data_table.komponen" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_ktp[ph_index].data_table.satuan[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.distribusi[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.u[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.pembagi[index] ? data_ktp[ph_index].data_table.pembagi[index].toFixed(3) : data_ktp[ph_index].data_table.pembagi[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.vi[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.ui[index] ? data_ktp[ph_index].data_table.ui[index].toFixed(3) : data_ktp[ph_index].data_table.ui[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.ci[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.uici[index] ? data_ktp[ph_index].data_table.uici[index].toExponential(3) : data_ktp[ph_index].data_table.uici[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.uici2[index] ? data_ktp[ph_index].data_table.uici2[index].toExponential(3) : data_ktp[ph_index].data_table.uici2[index]}}</td>
                  <td>{{data_ktp[ph_index].data_table.uici4_per_vi[index] ? data_ktp[ph_index].data_table.uici4_per_vi[index].toExponential(3) : data_ktp[ph_index].data_table.uici4_per_vi[index]}}</td>
                </tr>
                <tr>
                  <td colspan="9">Sums</td>
                  <td>{{data_ktp[ph_index].sums[0].toExponential(3)}}</td>
                  <td>{{data_ktp[ph_index].sums[1].toExponential(3)}}</td>
                </tr>
                <tr>
                  <td colspan="10">Ketidakpastian baku gabungan, uc, pH</td>
                  <td>{{data_ktp[ph_index].gabungan.toExponential(3)}}</td>
                </tr>
                <tr>
                  <td colspan="10">Derajat kebebasan effektif, Veff</td>
                  <td>{{data_ktp[ph_index].drjt_kbbs_eff.toExponential(3)}}</td>
                </tr>
                <tr>
                  <td colspan="10">Faktor cakupan, k-student's for Veff and CL 95%</td>
                  <td>{{data_ktp[ph_index].faktor_cakupan}}</td>
                </tr>
                <tr>
                  <td colspan="10">Ketidakpastian betangan, U = k.uc, pH</td>
                  <td>{{data_ktp[ph_index].betangan.toExponential(3)}}</td>
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
  table.no-grid, th.no-grid, td.no-grid {
    border: 0px solid grey;
    padding: 3px
  }
</style>

<script>
import instumenHeader from '~/components/instrumen/ph.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    instumenHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Instrumen Analisa',
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
      ph918: {
        betangan: 0,
        data_table: {
          ci: [],
          distribusi: [],
          komponen: [],
          pembagi: [],
          satuan: [],
          u: [],
          ui: [],
          uici: [],
          uici2: [],
          uici4_per_vi: [],
          vi: []
        },
        drjt_kbbs_eff: 0,
        faktor_cakupan: 0,
        gabungan: 0,
        sums: [0,0]
      }
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
        let req_data = req.results[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat
        this.data_ktp = req_data.data_ktp.buffer_ktdkpstian
        this.data_co = req_data.data_co
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>