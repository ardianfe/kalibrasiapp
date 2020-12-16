<template>
  <v-layout
    column
  >
    <v-flex xs12 sm8 md6>
      <suhuHeader></suhuHeader>

      <p class="accent--text lato font-weight-bold title mt-5 mb-0">Lembar Kerja</p>
      <v-card style="overflow-x: scroll;" class="mt-3 elevation-4 v-main-card">
        <v-card-text xs12 sm6 class="mt-3">
          <label for="mass">Pilih ukuran suhu</label>
          <v-select
            :items="temps"
            id="temp"
            v-model="selected_temp"
            label="Pilih ukuran suhu"
            solo
            background-color="white"
          ></v-select>
        </v-card-text>

        <v-card flat>
          <v-card-text>
            <div class="pa-1">
              
              <!-- {{sheets}} -->
              <table width="100%">
                <template>
                  <tr v-for="(tp_header, index) in tp_headers" :key="index">
                    <th v-for="(header, index2) in tp_header" :key="index2" :colspan="header.cspan" :rowspan="header.rspan">{{header.text}}</th>
                  </tr>
                  <template v-if="data_kal['hk'+selected_temp]">
                    <tr v-for="(item, index) in titik_uji" :key="index">
                      <td>{{item}}</td>
                      <td v-for="(key, keyindex) in hk_keys" :key="keyindex">
                        {{data_kal['hk'+selected_temp][key][index].toFixed(2)}}
                      </td>
                    </tr>
                    <tr>
                      <td>Indikator</td>
                      <td v-for="(key, keyindex) in hk_keys" :key="keyindex">
                        {{data_kal['hk'+selected_temp][key][titik_uji]}}
                      </td>
                    </tr>
                    <tr>
                      <td>Ambient</td>
                      <td v-for="(key, keyindex) in hk_keys" :key="keyindex">
                        {{data_kal['hk'+selected_temp][key][titik_uji+1]}}
                      </td>
                    </tr>
                  </template>
                  <tr v-else>
                    <td colspan="15" class="text-xs-center b">Silakan pilih pengaturan suhu</td>
                  </tr>
                </template>
              </table>

              <!-- ketidakpastian -->
              <p class="font-weight-bold" style="margin-top: 50px">Ketidakpastian</p>
              <table v-if="selected_temp == '300'" width="100%">
                <template v-if="selected_temp">
                  <tr>
                    <th v-for="(header2, index) in header2" :key="index">
                      {{header2}}
                    </th>
                  </tr>

                  <tr v-for="(key, index) in ktp_110_komponen[0].length" :key="index">
                    <td>
                      {{data_ktp['ktp_'+selected_temp].table_ktp.komponen[index]}}
                    </td>
                    <td>°C</td>
                    <td>{{ktp_110_komponen[1][index]}}</td>
                    <td>{{data_ktp['ktp_'+selected_temp].table_ktp['U'][index]}}</td>
                    <td>{{data_ktp['ktp_'+selected_temp].table_ktp['pembagi'][index]}}</td>
                    <td>{{data_ktp['ktp_'+selected_temp].table_ktp['ui'][index]}}</td>
                    <td>{{data_ktp['ktp_'+selected_temp].table_ktp['ci'][index]}}</td>
                    <td>{{data_ktp['ktp_'+selected_temp].table_ktp['uici'][index]}}</td>
                    <td>{{data_ktp['ktp_'+selected_temp].table_ktp['uici2'][index]}}</td>
                  </tr>
                  
                  <tr>
                    <td colspan="8">Sums</td>
                    <td>{{data_ktp['ktp_'+selected_temp].sums}}</td>
                  </tr>
                  <tr>
                    <td colspan="8">Ketidakpastian baku gabungan, uc, (mg)</td>
                    <td>{{data_ktp['ktp_'+selected_temp].ktp_gab.nilai.toFixed(4)}} {{data_ktp['ktp_'+selected_temp].ktp_gab.besaran}}</td>
                  </tr>
                  <tr>
                    <td colspan="8">Faktor cakupan, k-student’s untuk neff dan CL 95 %</td>
                    <td>{{data_ktp['ktp_'+selected_temp].ktp_fc}}</td>
                  </tr>
                  <tr>
                    <td colspan="8">Ketidak pastian bentangan, U = k.uc</td>
                    <td>{{data_ktp['ktp_'+selected_temp].ktp_bentangan.nilai.toFixed(4)}} {{data_ktp['ktp_'+selected_temp].ktp_bentangan.besaran}}</td>
                  </tr>
                </template>

              </table>

              <table v-if="selected_temp && selected_temp != '300'" width="50%">
                <tr>
                  <th v-for="(header, index) in ktpheader" :key="index">
                    {{header}}
                  </th>
                </tr>
                <tr v-for="(key, index) in ktp_150_komponen.length" :key="index">
                  <td>{{ktp_150_komponen[index]}}</td>
                  <td>°C</td>
                  <td>{{data_ktp['ktp_'+selected_temp].table_ktp['UiCi'][index].toFixed(3)}}</td>
                  <td>{{data_ktp['ktp_'+selected_temp].table_ktp['UiCi2'][index].toFixed(3)}}</td>
                </tr>
                <tr>
                  <td colspan="3">Ketidak pastian bentangan, U = k.uc</td>
                  <td>{{data_ktp['ktp_'+selected_temp].ktp_bentangan}}</td>
                </tr>
                <!-- <tr v-for="(item, index) in 4" :key="index">
                  <td>{{sheets.ktp[index]['Komponen']}}</td>
                  <td>{{sheets.ktp[index]['Satuan']}}</td>
                  <td>{{sheets.ktp[index]['UiCi']}}</td>
                  <td v-if="sheets.ktp[index]['(UiCi)2'].toFixed(2)">{{sheets.ktp[index]['(UiCi)2'].toFixed(2)}}</td>
                </tr>
                <tr>
                  <th colspan="3">{{sheets.ktp[4]["Komponen"]}}</th>
                  <th>{{sheets.ktp[4]["(UiCi)2"]}}</th>
                </tr> -->
              </table>
            </div>
          </v-card-text>
        </v-card>
      </v-card>

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
    padding: 4px;
  }
</style>

<script>
import suhuHeader from '~/components/suhu/water_bath.vue'

export default {
  components: {
    suhuHeader
  },

  head: {
    title: 'Lembar Kerja Water Bath | Bidang Suhu',
    meta: [
      {
        hid: 'Suhu',
        name: 'Suhu',
        content: 'Bidang Suhu'
      }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },

  data: () => ({
    active: null,
    temps: [ "150", "200", "300" ],
    selected_temp: '',
    titik_uji: 0,
    ktp_110_komponen: [
      [
        "Ketidakpastian Standar",
        "Ketidakpastian Thermocouple ",
        "Drift",
        "Readibility",
        "Repeatibility",
        "Ketidapkastian Temporal",
        "Ketidakpastian Spasial",
      ],
      [ "Normal", "Normal", "Rectangular", "Rectangular", "T-Student", "Rectangular", "Rectangular" ]
    ],
    ktp_150_komponen: [
      "Ketidakpastian Thermocouple", "Repeatibility", "Ketidapkastian Temporal", "Ketidakpastian Spasial"
    ],
    hk_keys: [ '1max', '1min', '2max', '2min', '3max', '3min', '4max', '4min', '5max', '5min', 'mid_range', 'variasi_tempora' ],
    ktpheader: [ "Komponen", "Satuan", "UiCi", "(UiCi)2" ],
    header2: [ "Komponen", "Satuan", "Distribusi", "U", "Pembagi", "Ui", "Ci", "UiCi", "(UiCi)2" ],

    tp_headers: {
      0: [
        { text: 'Titik Uji', cspan: 1, rspan: 3},
        { text: 'PENGAMATAN KE ( °C )', cspan: 10, rspan: 1},
        { text: 'MID RANGE (°C)', cspan: 1, rspan: 3},
        { text: 'VARIASI TEMPORAL (°C)', cspan: 1, rspan: 3},
      ],
      1: [
        { text: '1', cspan: 2, rspan: 1},
        { text: '2', cspan: 2, rspan: 1},
        { text: '3', cspan: 2, rspan: 1},
        { text: '4', cspan: 2, rspan: 1},
        { text: '5', cspan: 2, rspan: 1},
      ],
      2: [
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
      ],
    },

    sheets: {},

    data_kal: {},
    data_ktp: {},

  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        let req_data = req.results[0]

        console.log(req_data);

        this.data_kal = req_data.data_kal
        this.data_ktp = req_data.data_ktp

        this.titik_uji = req_data.data_alat.deskripsi.jumlah_titik
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
