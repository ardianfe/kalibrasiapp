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
              Nama laboratorium :	{{data_co.nama_co}} <br>			
              Alamat : {{data_co.alamat}}				
            </p>

            <p>
              <span class="b">UNCERTAINTY BUDGET SEBAGAI PENDUKUNG KLAIM CMC</span> <br>
              Besaran yang diukur : {{cmc.deskripsi['Besaran yang diukur ']}} <br>
              Jenis alat yang dikalibrasi : {{cmc.deskripsi['Jenis alat yang dikalibrasi']}} <br>
              Standar yang digunakan : {{cmc.deskripsi['Standar yang digunakan']}} <br>
              Model matematis pengukuran : {{cmc.deskripsi['Model matematis pengukuran']}} <br>
              Rentang ukur : {{cmc.deskripsi['Rentang ukur']}} <br>
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
                <template v-if="cmc.data['Unnamed: 5']">
                  <tr v-for="(item, index) in header[0]" :key="index">
                    <td>{{item}}</td>
                    <td>{{header[1][index]}}</td>
                    <td>{{header[2][index]}}</td>
                    <td>{{header[3][index]}}</td>
                    <td v-if="cmc.data['Unnamed: 5'][index]">{{cmc.data['Unnamed: 5'][index].toFixed(2)}}</td>
                    <td v-if="cmc.data['Unnamed: 6'][index]">{{cmc.data['Unnamed: 6'][index].toFixed(2)}}</td>
                    <td v-if="cmc.data['Unnamed: 7'][index]">{{cmc.data['Unnamed: 7'][index]}}</td>
                    <td v-if="cmc.data['Unnamed: 8'][index]">{{cmc.data['Unnamed: 8'][index].toFixed(2)}}</td>
                    <td v-if="cmc.data['Unnamed: 9'][index]">{{cmc.data['Unnamed: 9'][index]}}</td>
                    <td v-if="cmc.data['Unnamed: 10'][index]">{{cmc.data['Unnamed: 10'][index].toFixed(2)}}</td>
                    <td v-if="cmc.data['Unnamed: 11'][index]">{{cmc.data['Unnamed: 11'][index].toFixed(2)}}</td>
                    <td v-if="cmc.data['Unnamed: 12'][index]">{{cmc.data['Unnamed: 12'][index]}}</td>
                  </tr>
                </template>
                  <tr>
                    <td colspan="12">&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="10">Sums</td>
                    <td v-if="cmc.sum.uc2">{{cmc.sum.uc2.toFixed(4)}}</td>
                    <td v-if="cmc.sum.uc4">{{cmc.sum.uc4.toFixed(4)}}</td>
                  </tr>
                  <tr>
                    <td colspan="10">Ketidakpastian baku gabungan, uc, um</td>
                    <td colspan="2">{{cmc.ktp_uc_um}} um</td>
                  </tr>
                  <tr>
                    <td colspan="10">Derajat kebebasan efektif, veff</td>
                    <td colspan="2">{{cmc.der_kebbs_effective}}</td>
                  </tr>
                  <tr>
                    <td colspan="10">Faktor cakupan, k-student's for veff and CL 95%</td>
                    <td colspan="2">{{cmc.faktor_k}}</td>
                  </tr>
                  <tr>
                    <td colspan="10">Ketidakpastian bentangan, U = k.uc, um</td>
                    <td colspan="2">{{cmc.ktp_bentang.um}} um</td>
                  </tr>
                  <tr>
                    <td colspan="10"></td>
                    <td colspan="2">{{cmc.ktp_bentang.mm}} mm</td>
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
    title: 'CMC Jangka Sorong | Bidang Dimensi',
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
    cmc: {
      data: {
        "Unnamed: 5:": [],
        "Unnamed: 6:": [],
        "Unnamed: 7:": [],
        "Unnamed: 8:": [],
        "Unnamed: 9:": [],
        "Unnamed: 10:": [],
        "Unnamed: 11:": [],
        "Unnamed: 12:": []
      },
      der_kebbs_effective: {},
      deskripsi: {
        "Besaran yang diukur ": "", 
        "Jenis alat yang dikalibrasi": "", 
        "Model matematis pengukuran": "", 
        "Rentang ukur": "", 
        "Standar yang digunakan": ""
      },
      faktor_k: {},
      ktp_bentang: {},
      ktp_uc_um: {},
      sum: {},
    },
    data_ktp: {
      cmc: {
        data: {
          "Unnamed: 5:": {},
          "Unnamed: 6:": {},
          "Unnamed: 7:": {},
          "Unnamed: 8:": {},
          "Unnamed: 9:": {},
          "Unnamed: 10:": {},
          "Unnamed: 11:": {},
          "Unnamed: 12:": {}
        },
        der_kebbs_effective: {},
        deskripsi: {},
        faktor_k: {},
        ktp_bentang: {},
        ktp_uc_um: {},
        sum: {},
      }
    },
    data_kal: {
      nilai_gauge: {}
    },

    header: [
      ["Repeatability", "Readability", "Gauge Block (Sertifikat)", "Selisih Koefisien muai", "Selisih temperatur", "Drift", "Wringing", "Geometrik"],
      ["mm", "mm", "mm", "/° C", "°C", "mm", "mm", "mm"],
      ["normal", "rectangular", "normal", "rectangular", "rectangular", "rectangular", "rectangular", "rectangular"],
      ["m(L1)", "m(L2)", "m(Ls1)", "m(da)", "m(qs)", "m(LD)", "m(Lw)", "m(LG)"]
    ],

    data_co: {}
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
        this.cmc = req_data.data_ktp.cmc
        this.data_kal = req_data.data_kal
        this.data_co = req_data.data_co
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },
}
</script>