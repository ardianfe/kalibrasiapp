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
                  <tr>
                    <td>1</td>
                    <td>-0.22</td>
                    <td>1.00022</td>
                    <td>0.0475</td>
                  </tr>
                  <tr>
                    <td>1.1</td>
                    <td>-0.05</td>
                    <td>1.10005</td>
                    <td>0.04825</td>
                  </tr>
                  <tr>
                    <td>1.2</td>
                    <td>-0.08</td>
                    <td>1.20008</td>
                    <td>0.049</td>
                  </tr>
                  <tr>
                    <td>1.3</td>
                    <td>-0.15</td>
                    <td>1.30015</td>
                    <td>0.04975</td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>0.11</td>
                    <td>1.49989</td>
                    <td>0.05125</td>
                  </tr>
                  <tr>
                    <td>1.6</td>
                    <td>-0.28</td>
                    <td>1.60028</td>
                    <td>0.052</td>
                  </tr>
                  <tr>
                    <td>1.7</td>
                    <td>-0.13</td>
                    <td>1.70013</td>
                    <td>0.05275</td>
                  </tr>
                  <tr>
                    <td>1.8</td>
                    <td>-0.24</td>
                    <td>1.80024</td>
                    <td>0.0535</td>
                  </tr>
                  <tr>
                    <td>1.9</td>
                    <td>0.15</td>
                    <td>1.89985</td>
                    <td>0.05425</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>-0.16</td>
                    <td>2.00016</td>
                    <td>0.055</td>
                  </tr>
                  <tr>
                    <td>2.5</td>
                    <td>-0.11</td>
                    <td>2.50011</td>
                    <td>0.05875</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>-0.19</td>
                    <td>3.00019</td>
                    <td>0.0625</td>
                  </tr>
                  <tr>
                    <td>3.5</td>
                    <td>-0.11</td>
                    <td>3.50011</td>
                    <td>0.06625</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>-0.18</td>
                    <td>4.00018</td>
                    <td>0.07</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>-0.09</td>
                    <td>5.00009</td>
                    <td>0.0775</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>-0.45</td>
                    <td>6.00045</td>
                    <td>0.085</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>-0.18</td>
                    <td>7.00018</td>
                    <td>0.0925</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>0.21</td>
                    <td>7.99979</td>
                    <td>0.1</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>0.06</td>
                    <td>8.99994</td>
                    <td>0.1075</td>
                  </tr>
                  <tr>
                    <td>9.5</td>
                    <td>0.16</td>
                    <td>9.49984</td>
                    <td>0.11125</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>-0.18</td>
                    <td>10.00018</td>
                    <td>0.115</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>-0.19</td>
                    <td>20.00019</td>
                    <td>0.19</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>-0.4</td>
                    <td>30.0004</td>
                    <td>0.265</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>0.29</td>
                    <td>39.99971</td>
                    <td>0.34</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>-1.63</td>
                    <td>50.00163</td>
                    <td>0.415</td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>0.1</td>
                    <td>59.9999</td>
                    <td>0.49</td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>1.07</td>
                    <td>69.99893</td>
                    <td>0.565</td>
                  </tr>
                  <tr>
                    <td>80</td>
                    <td>0.34</td>
                    <td>79.99966</td>
                    <td>0.64</td>
                  </tr>
                  <tr>
                    <td>90</td>
                    <td>-1.63</td>
                    <td>90.00163</td>
                    <td>0.715</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>1.71</td>
                    <td>99.99829</td>
                    <td>0.79</td>
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