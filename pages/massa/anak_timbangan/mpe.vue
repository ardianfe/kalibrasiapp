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
                <!-- <tr>
                  <td>50</td>
                  <td>kg</td>
                  <td>25</td>
                  <td>80</td>
                  <td>250</td>
                  <td>800</td>
                  <td>2500</td>
                  <td>8000</td>
                  <td>25000</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>kg</td>
                  <td>12.5</td>
                  <td>40</td>
                  <td>125</td>
                  <td>400</td>
                  <td>1250</td>
                  <td>4000</td>
                  <td>12500</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>kg</td>
                  <td>10</td>
                  <td>30</td>
                  <td>100</td>
                  <td>300</td>
                  <td>1000</td>
                  <td>3000</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>kg</td>
                  <td>5</td>
                  <td>16</td>
                  <td>50</td>
                  <td>160</td>
                  <td>500</td>
                  <td>1600</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>kg</td>
                  <td>2.5</td>
                  <td>8</td>
                  <td>25</td>
                  <td>80</td>
                  <td>250</td>
                  <td>800</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>kg</td>
                  <td>1.0</td>
                  <td>3</td>
                  <td>10</td>
                  <td>30</td>
                  <td>100</td>
                  <td>300</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>kg</td>
                  <td>0.5</td>
                  <td>1.6</td>
                  <td>5</td>
                  <td>16</td>
                  <td>50</td>
                  <td>160</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>g</td>
                  <td>0.5</td>
                  <td>1.6</td>
                  <td>5</td>
                  <td>16</td>
                  <td>50</td>
                  <td>160</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>g</td>
                  <td>0.25</td>
                  <td>0.8</td>
                  <td>2.5</td>
                  <td>8</td>
                  <td>25</td>
                  <td>80</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>g</td>
                  <td>0.10</td>
                  <td>0.3</td>
                  <td>1.0</td>
                  <td>3</td>
                  <td>10</td>
                  <td>30</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>g</td>
                  <td>0.05</td>
                  <td>0.16</td>
                  <td>0.5</td>
                  <td>1.6</td>
                  <td>5</td>
                  <td>16</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>g</td>
                  <td>0.03</td>
                  <td>0.10</td>
                  <td>0.3</td>
                  <td>1.0</td>
                  <td>3</td>
                  <td>10</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>g</td>
                  <td>0.025</td>
                  <td>0.08</td>
                  <td>0.25</td>
                  <td>0.8</td>
                  <td>2.5</td>
                  <td>8</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>g</td>
                  <td>0.020</td>
                  <td>0.06</td>
                  <td>0.20</td>
                  <td>0.6</td>
                  <td>2.0</td>
                  <td>6</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>g</td>
                  <td>0.016</td>
                  <td>0.05</td>
                  <td>0.16</td>
                  <td>0.5</td>
                  <td>1.6</td>
                  <td>5</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>g</td>
                  <td>0.012</td>
                  <td>0.04</td>
                  <td>0.12</td>
                  <td>0.4</td>
                  <td>1.2</td>
                  <td>4</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>g</td>
                  <td>0.010</td>
                  <td>0.03</td>
                  <td>0.10</td>
                  <td>0.3</td>
                  <td>1.0</td>
                  <td>3</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>mg</td>
                  <td>0.010</td>
                  <td>0.03</td>
                  <td>0.10</td>
                  <td>0.3</td>
                  <td>1.0</td>
                  <td>3</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>mg</td>
                  <td>0.008</td>
                  <td>0.025</td>
                  <td>0.08</td>
                  <td>0.25</td>
                  <td>0.8</td>
                  <td>2.5</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>mg</td>
                  <td>0.006</td>
                  <td>0.020</td>
                  <td>0.06</td>
                  <td>0.20</td>
                  <td>0.6</td>
                  <td>2.0</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>mg</td>
                  <td>0.005</td>
                  <td>0.016</td>
                  <td>0.05</td>
                  <td>0.16</td>
                  <td>0.5</td>
                  <td>1.6</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>mg</td>
                  <td>0.004</td>
                  <td>0.012</td>
                  <td>0.04</td>
                  <td>0.12</td>
                  <td>0.4</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>mg</td>
                  <td>0.003</td>
                  <td>0.010</td>
                  <td>0.03</td>
                  <td>0.10</td>
                  <td>0.3</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>mg</td>
                  <td>0.003</td>
                  <td>0.008</td>
                  <td>0.025</td>
                  <td>0.08</td>
                  <td>0.25</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>mg</td>
                  <td>0.003</td>
                  <td>0.006</td>
                  <td>0.020</td>
                  <td>0.06</td>
                  <td>0.20</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>mg</td>
                  <td>0.003</td>
                  <td>0.006</td>
                  <td>0.020</td>
                  <td>0.06</td>
                  <td>0.20</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>mg</td>
                  <td>0.003</td>
                  <td>0.006</td>
                  <td>0.020</td>
                  <td>0.06</td>
                  <td>0.20</td>
                  <td>&nbsp;</td>
                  <td></td>
                </tr> -->
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
        const req = await this.$category.getLembarKerja({id: '20083192001'})

        console.log('get LK: ', req);
        let req_data = req.result[0]

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