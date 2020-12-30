<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instumenHeader></instumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm" v-for="(item, ph_index) in data_ktp" :key="ph_index">
          <v-card-text>
            <p>No. Laporan : {{no_cert}}</p>
            <p class="b my-4">KETIDAKPASTIAN PENGUKURAN</p>
            <p>Buffer {{ph_index}}</p>

            <p class="b mb-1">1. Ketidakpastian larutan Buffer pH </p>
            <p class="ml-3">
              Dari Sertifikat Kalibrasi :Buffer pH = {{data_ktp[ph_index].ktp_pengukuran.dari_sertifikat}}	pH, asumsi k=2,	<br>
              µb1a = m larutan buffer / k = {{data_ktp[ph_index].ktp_pengukuran.mb_1a}}	pH
            </p>

            <p class="b mb-1">2. Ketidakpastian baku D suhu : </p>
            <p class="ml-3">
              dari perhitungan Ketidakpastian baku D suhu (dpH / dt x d t )	<br>
              yaitu : <br>
              µb2 = {{data_ktp[ph_index].ktp_pengukuran.mb_2.nd}} / (31/2) =	{{data_ktp[ph_index].ktp_pengukuran.mb_2.ha}}	pH
            </p>
            
            <p class="b mb-1">3. Ketidakpastian baku Resolusi alat : </p>
            <p class="ml-3">
              dari perhitungan Ketidakpastian baku Resolusi alat (Resolusi / 2 x(3)1/2 ) <br>	
              µb3 = {{data_ktp[ph_index].ktp_pengukuran.mb_3.nd}} /2x(3)1/2	{{data_ktp[ph_index].ktp_pengukuran.mb_3.ha}}	pH	
            </p>

            <p class="b mb-1">4. Ketidakpastian baku dari daya ulang pembacaan alat yang di kalibrasi : </p>
            <p class="ml-3">
              dari perhitungan Ketidakpastian baku dari daya ulang pembacaan alat yang di kalibrasi (Sd.maks/(5)1/2 ) <br>
              µb4 = {{data_ktp[ph_index].ktp_pengukuran.mb_4.nd}} /(5)1/2	{{data_ktp[ph_index].ktp_pengukuran.mb_4.ha}}	pH	
            </p>

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
                <tr v-for="(item, index) in data_ktp[ph_index].ktp_param_ph.data_table.komponen" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.satuan[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.distribusi[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.u[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.pembagi[index] ? data_ktp[ph_index].ktp_param_ph.data_table.pembagi[index].toFixed(3) : data_ktp[ph_index].ktp_param_ph.data_table.pembagi[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.vi[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.ui[index] ? data_ktp[ph_index].ktp_param_ph.data_table.ui[index].toFixed(3) : data_ktp[ph_index].ktp_param_ph.data_table.ui[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.ci[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.uici[index] ? data_ktp[ph_index].ktp_param_ph.data_table.uici[index].toExponential(3) : data_ktp[ph_index].ktp_param_ph.data_table.uici[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.uici2[index] ? data_ktp[ph_index].ktp_param_ph.data_table.uici2[index].toExponential(3) : data_ktp[ph_index].ktp_param_ph.data_table.uici2[index]}}</td>
                  <td>{{data_ktp[ph_index].ktp_param_ph.data_table.uici4_per_vi[index] ? data_ktp[ph_index].ktp_param_ph.data_table.uici4_per_vi[index].toExponential(3) : data_ktp[ph_index].ktp_param_ph.data_table.uici4_per_vi[index]}}</td>
                </tr>
                <tr>
                  <td colspan="9">Sums</td>
                  <td>1.815E-04</td>
                  <td>5.38889E-12</td>
                </tr>
                <tr>
                  <td colspan="10">Ketidakpastian baku gabungan, uc, pH</td>
                  <td>0.01347</td>
                </tr>
                <tr>
                  <td colspan="10">Derajat kebebasan effektif, Veff</td>
                  <td>6116</td>
                </tr>
                <tr>
                  <td colspan="10">Faktor cakupan, k-student's for Veff and CL 95%</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td colspan="10">Ketidakpastian betangan, U = k.uc, pH</td>
                  <td>0.027</td>
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
      ph4: {
        ktp_param_ph: {
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
          sums: []
        },
        ktp_pengukuran: {
          dari_sertifikat: 0,
          mb_1a: 0,
          mb_2: {
            ha: 0,
            nd: 0
          },
          mb_3: {
            ha: 0,
            nd: 0
          },
          mb_4: {
            ha: 0,
            nd: 0
          }
        }
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
        this.data_ktp = req_data.data_ktp.ktp_buffer
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