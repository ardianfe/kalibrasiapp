<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>
              Bidang : GAYA <br>	
              Alat : Durometer Tipe A	
            </p>
            <table>
              <thead>
                <tr class="tableizer-firstrow">
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
                <tr v-for="(item, index) in 5" :key="index">
                  <td v-for="(item_data, data_index) in 11" :key="data_index">
                    <!-- <span v-if="data_index > 2">
                      {{data['Unnamed: '+data_index][index].toFixed(2)}}
                    </span> -->
                    <span>
                      {{data['Unnamed: '+data_index][index]}}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="11">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Sums</td>
                  <td>{{sums['Unnamed: 9'].toFixed(3)}}</td>
                  <td>{{sums['Unnamed: 10'].toFixed(8)}}</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian baku gabungan, uc, %</td>                  
                  <td>{{ktp_gab.toFixed(3)}}</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td colspan="9">Derajat kebebasan efektif, veff</td>
                  <td>{{der_keb_eff.toFixed(1)}}</td>
                  <td>&nbsp;</td>              
                </tr>
                <tr>
                  <td colspan="9">Faktor cakupan, k-student's for veff and CL 95%</td>
                  <td>2.00</td>
                  <td>&nbsp;</td>              
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian bentangan, U = k.uc, %</td>
                  <td>{{ktp_btg.toFixed(2)}}</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian bentangan, U = k.uc, HA</td>
                  <td>{{ktp_btg_ha.toFixed(2)}}</td>
                  <td>HA</td>
                </tr>
              </tbody>
            </table>;
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
import gayaHeader from '~/components/gaya/durometer.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Sebelum Set | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '-',
    data:{
      "Unnamed: 0":[
        "Timbangan",
        "Drift timbangan",
        "Pengaruh suhu",
        "Indikator",
        "Daya Ulang Pembacaan"
      ],
      "Unnamed: 1":["%", "%", "%", "%", "%"],
      "Unnamed: 2":[
        "normal",
        "rectangular",
        "rectangular",
        "rectangular",
        "rectangular"
      ],
      "Unnamed: 3":[0,0,0,0,0],
      "Unnamed: 4":[0,0,0,0,0],
      "Unnamed: 5":[0,0,0,0,0],
      "Unnamed: 6":[0,0,0,0,0],
      "Unnamed: 7":[0,0,0,0,0],
      "Unnamed: 8":[0,0,0,0,0],
      "Unnamed: 9":[0,0,0,0,0],
      "Unnamed: 10":[0,0,0,0,0],
    },

    sums: {
      'Unnamed: 9': 0,
      'Unnamed: 10': 0,
    },
    der_keb_eff: 0,
    ktp_btg: 0,
    ktp_btg_ha: 0,
    ktp_gab: 0,

  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({ id: '200910161001' })

        console.log('Lembar Kerja Durometer :', req);

        var ktp_data = req.result[0].data_ktp.newktp_2

        this.data['Unnamed: 3'] = ktp_data.data['Unnamed: 3']
        this.data['Unnamed: 4'] = ktp_data.data['Unnamed: 4']
        this.data['Unnamed: 5'] = ktp_data.data['Unnamed: 5']
        this.data['Unnamed: 6'] = ktp_data.data['Unnamed: 6']
        this.data['Unnamed: 7'] = ktp_data.data['Unnamed: 7']
        this.data['Unnamed: 8'] = ktp_data.data['Unnamed: 8']
        this.data['Unnamed: 9'] = ktp_data.data['Unnamed: 9']
        this.data['Unnamed: 10'] = ktp_data.data['Unnamed: 10']

        this.sums = ktp_data.sums
        this.der_keb_eff = ktp_data.der_keb_eff
        this.ktp_btg = ktp_data['ktp_btg_%']
        this.ktp_btg_ha = ktp_data.ktp_btg_ha
        this.ktp_gab = ktp_data.ktp_gab

        console.log(ktp_data);
      } catch (error) {
        console.log('Gagal : ', error.response);
      }
    },
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>