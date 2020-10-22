<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <massaHeader></massaHeader>

      <v-layout justify-center column>
        <v-flex xs12 sm6 class="mt-3">
          <label for="mass">Pilih Ukuran massa</label>
          <v-select
            :items="mass"
            id="mass"
            v-model="selectedMass"
            label="Pilih ukuran massa"
            solo
            background-color="white"
          ></v-select>
        </v-flex>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text class="text-xs-center">
            <p class="b text-xs-center title">
              Maximum Permissible Errors <br>						
              for Weights, OIML R 111 (2004)
            </p>
            <v-layout justify-center align-center>
              <table width="80%">
                <thead>
                  <tr>
                    <th rowspan="2" colspan="2">Nominal Value</th>
                    <th colspan="8">± &delta;m in mg</th>
                  </tr>
                  <tr>
                    <td>E1</td>
                    <td>E2</td>
                    <td>F1</td>
                    <td>F2</td>
                    <td>M1</td>
                    <td>M2</td>
                    <td>M3</td>
                  </tr>
                </thead>
                <tr v-for="(item, index) in mpe['Value']" :key="index">
                  <td>{{item}}</td>
                  <td>{{mpe['Unnamed: 2'][index]}}</td>
                  <td>{{mpe['E1'][index]}}</td>
                  <td>{{mpe['E2'][index]}}</td>
                  <td>{{mpe['F1'][index]}}</td>
                  <td>{{mpe['F2'][index]}}</td>
                  <td>{{mpe['M1'][index]}}</td>
                  <td>{{mpe['M2'][index]}}</td>
                  <td>{{mpe['M3'][index]}}</td>
                </tr>
              </table>
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
  } table, th, td  {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import massaHeader from '~/components/massa/anak_timbangan.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    massaHeader
  },

  head: {
    title: 'Lembar Kerja Anak Timbangan | Bidang Massa',
    meta: [
      {
        hid: 'mass',
        name: 'mass',
        content: 'Bidang Massa'
      }
    ],
  },

  data: () => ({
    no_cert: '',
    mpe: {}
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
        this.mpe = req_data.data_kal.mpe
        // this.data_kal = req_data.data_kal
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>