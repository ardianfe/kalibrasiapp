<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="title">
              Nilai Gauge Block sebenarnya <br>		
            </p>

            <p>
              No seri : 516 - 970 - 01 <br>
              Puslit KIM LIPI Serpong <br>
              U95% = ± (0,08+ 15 x L) mm, (k=2)  (L dalam meter) <br>		
            </p>

            <table class="tableizer-table">
              <thead>
                <tr class="tableizer-firstrow">
                  <th width="100px">Nominal <br> (mm)</th>
                  <th width="100px">Penyimpangan <br> (mm)</th>
                  <th width="100px">Nilai Sebenarnya <br> (mm)</th>
                  <th width="100px">Ketidakpastian <br> (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_kal.nilai_gauge" :key="index">
                  <td>{{item[0]}}</td>
                  <td>{{item[1]}}</td>
                  <td>{{item[2].toFixed(4)}}</td>
                  <td>{{item[3].toFixed(4)}}</td>
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
    no_cert: '',

    data_alat: {},
    data_ktp: {},
    data_kal: {
      nilai_gauge: {}
    }
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
        this.data_kal = req_data.data_kal
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },
}
</script>