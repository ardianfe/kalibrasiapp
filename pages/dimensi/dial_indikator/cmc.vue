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
              Besaran yang diukur : {{cmc.besaran_diukur}} <br>
              Jenis alat yang dikalibrasi : {{cmc.jenis_kalibrasi}} <br>
              Standar yang digunakan : {{cmc.standar_digunakan}} <br>
              Model matematis pengukuran : {{cmc.model_matematis}} <br>
              Rentang ukur : {{cmc.rentang_ukur}} <br>
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
                
                <template v-if="cmc.data_tbl.data.komponen">
                  <tr v-for="(item, index) in cmc.data_tbl.data.komponen" :key="index">
                    <td>{{item}}</td>
                    <td>{{cmc.data_tbl.data.satuan[index]}}</td>
                    <td>{{cmc.data_tbl.data.tipe_distrubusi[index]}}</td>
                    <td>{{cmc.data_tbl.data.simbol[index]}}</td>
                    <td>{{cmc.data_tbl.data.var_interval[index].toFixed(2)}}</td>
                    <td>{{cmc.data_tbl.data.pembagi[index].toFixed(2)}}</td>
                    <!-- <td v-if="cmc.data_tbl.data.vi[index]">{{cmc.data_tbl.data.vi[index]}}</td> -->
                    <td v-if="cmc.data_tbl.data.vi[index]">{{cmc.data_tbl.data.vi[index].length > 2 ? parseInt(cmc.data_tbl.data.vi[index]).toExponential() : cmc.data_tbl.data.vi[index]}}
                    </td>
                    <td>{{cmc.data_tbl.data.ui[index].toFixed(2)}}</td>
                    <td>{{koef[index]}}</td>
                    <td>{{cmc.data_tbl.data.uici[index].toFixed(2)}}</td>
                    <td>{{cmc.data_tbl.data.uici2[index].toFixed(2)}}</td>
                    <td>{{cmc.data_tbl.data.uici4pervi[index].toFixed(2)}}</td>
                  </tr>
                </template>
                  <tr>
                    <td colspan="12">&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="10">Sums</td>
                    <td>{{cmc.data_tbl.sums[0].toFixed(4)}}</td>
                    <td>{{cmc.data_tbl.sums[1].toFixed(4)}}</td>
                  </tr>
                  <tr>
                    <td colspan="10">Ketidakpastian baku gabungan, uc, um</td>
                    <td colspan="2">{{cmc.data_tbl.uc_um[0].toFixed(2)}} um</td>
                  </tr>
                  <tr>
                    <td colspan="10">Derajat kebebasan efektif, veff</td>
                    <td colspan="2">{{cmc.data_tbl.veff.toFixed(2)}}</td>
                  </tr>
                  <tr>
                    <td colspan="10">Faktor cakupan, k-student's for veff and CL 95%</td>
                    <td colspan="2">{{cmc.data_tbl.faktor_cakupan}}</td>
                  </tr>
                  <tr>
                    <td colspan="10">Ketidakpastian bentangan, U = k.uc, um</td>
                    <td colspan="2">{{cmc.data_tbl.ktp_bentang[0].toFixed(2)}} um</td>
                  </tr>
                  <tr>
                    <td colspan="10"></td>
                    <td colspan="2">{{cmc.data_tbl.nilai_ktp[0].toFixed(4)}} mm</td>
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
import dimensiHeader from '~/components/dimensi/dial_indikator.vue'

export default {
  components: {
    dimensiHeader
  },

  head: {
    title: 'CMC Dial Indikator | Bidang Dimensi',
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
      besaran_diukur: "Dimensi ",
      data_tbl: {
        data: {
          ci: [],
          komponen: [],
          tipe_distrubusi: [],
          satuan: [],
          simbol: [],
          var_interval: [],
          pembagi: [],
          vi: [],
          ui: [],
          uici: [],
          uici2: [],
          uici4pervi: [],
        }, 
        faktor_cakupan: 2, 
        ktp_bentang: [8.324508311988382, "um"], 
        nilai_ktp: [0.008324508311988381, "mm"], 
        sums: [17.324359659090916, 0.005282631810529538], 
        uc_um: [4.162254155994191, "um"], 
        veff: 56815.13464544311
      },
      jenis_kalibrasi: "Dial Indikator",
      model_matematis: "E = L – Ls + Ls (qs da +as dq ) – LD  - LW + LG",
      rentang_ukur: "0 - 25 mm",
      standar_digunakan: "Calibration Tester"
    },

    koef: [1, 1, 1, 25000, 2.875, 1, 1, 1],
    data_ktp: {},
    data_kal: {
      nilai_gauge: {}
    },

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

        this.data_co = req_data.data_co
        this.cmc = req_data.data_ktp.cmc

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