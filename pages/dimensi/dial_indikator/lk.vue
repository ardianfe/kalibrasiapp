<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI DIAL INDIKATOR</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat.deskripsi.nama_alat }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat.deskripsi.model }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat.deskripsi.merk }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat.deskripsi.kapasitas }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat.deskripsi.no_seri }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat.deskripsi.buatan }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat.deskripsi.lokasi_kalibrasi }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ data_alat.deskripsi.suhu_ruangan[0] }} - {{ data_alat.deskripsi.suhu_ruangan[1] }} {{ data_alat.deskripsi.suhu_ruangan[2] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan : {{ data_alat.deskripsi['kelembaban_%'] + ' %' }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan Terkoreksi : {{ data_alat.deskripsi.suhu_terkoreksi[0].toFixed(4) }} - {{ data_alat.deskripsi.suhu_terkoreksi[1].toFixed(4) }} {{ data_alat.deskripsi.suhu_terkoreksi[2] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan Terkoreksi : {{ data_alat.deskripsi['kelembaban_terkoreksi_%'] + ' %' }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: {{ data_alat.alat_kalibrasi[0] }}, {{ data_alat.alat_kalibrasi[1] }} </p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat.metode_kalibrasi }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ data_alat.standar_acuan }}</p>
                </v-layout>                
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <p class="b">No. Laporan : {{no_cert}}</p>
            <!-- <pre>
              {{data_kal.hasil}}
            </pre> -->
            <table style="font-size: 9pt;">
              <tbody>
                <tr>
                  <th rowspan="2">Penunjukan <br> Dial <br> (X 0,01 mm)</th>
                  <th colspan="2">Penunjukan Standar <br> (x 0,001 mm)</th>
                  <th colspan="2">Setelah Koreksi</th>
                  <th colspan="2">Rata-rata</th>
                  <th colspan="2">Kesalahan (mm)</th>
                  <th rowspan="2">Kesalahan <br> Retrace <br> (x 0,001mm)</th>
                  <th colspan="2">Kesalahan Adjacent (mm)</th>
                </tr>
                <tr>
                  <th>Naik</th>
                  <th>Turun</th>
                  <th>Naik <br>(x 0.001 mm)</th>
                  <th>Turun <br>(x 0.001 mm)</th>
                  <th>Naik <br>(x 0.001 mm)</th>
                  <th>Turun <br>(x 0.001 mm)</th>
                  <th>Naik <br>(x 0.01 mm)</th>
                  <th>Turun <br>(x 0.01 mm)</th>
                  <th>Naik <br>(x 0.01 mm)</th>
                  <th>Turun <br>(x 0.01 mm)</th>
                </tr>
                <template v-if="data_kal.table_lk_graph['penunjukan dial']">
                  <tr v-for="(item, index) in data_kal.table_lk_graph['penunjukan dial']" :key="index">
                    <td>{{item}}</td>
                    <td>{{data_kal.table_lk_graph.pnjukan_std_naik[index]}}</td>
                    <td>{{data_kal.table_lk_graph.pnjukan_std_turun[index]}}</td>
                    <td>{{data_kal.table_lk_graph.stlh_koreksi_naik[index]}}</td>
                    <td>{{data_kal.table_lk_graph.stlh_koreksi_turun[index]}}</td>
                    <td>{{data_kal.table_lk_graph.rata2_naik[index]}}</td>
                    <td>{{data_kal.table_lk_graph.rata2_naik[index]}}</td>
                    <td>{{data_kal.table_lk_graph.kesalahan_naik[index] ? data_kal.table_lk_graph.kesalahan_naik[index].toFixed(1) : ''}}</td>
                    <td>{{data_kal.table_lk_graph.kesalahan_turun[index] ? data_kal.table_lk_graph.kesalahan_turun[index].toFixed(1) : ''}}</td>
                    <td>{{data_kal.table_lk_graph.kesalahan_retrace[index]}}</td>
                    <td>{{data_kal.table_lk_graph.kesalahan_adj_naik[index] ? data_kal.table_lk_graph.kesalahan_adj_naik[index].toFixed(1) : ''}}</td>
                    <td>{{data_kal.table_lk_graph.kesalahan_adj_turun[index] ? data_kal.table_lk_graph.kesalahan_adj_turun[index].toFixed(1) : ''}}</td>
                  </tr>
                </template>
              </tbody>
            </table>
            
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa}} <br>
                Tanggal :	{{convertDate(data_alat.tgl_diterima)}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout row wrap>
              <v-flex sm6 xs12 class="px-2">
                <table class="tableizer-table" width="100%">
                  <thead>
                    <tr class="tableizer-firstrow">
                      <th>X</th>
                      <th>Y1</th>
                      <th>Y2</th>
                      <th>kesalahan <br> retrace</th>
                      <th colspan="3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="data_kal.kesalahan_retrace">
                      <tr v-for="(item, index) in data_kal.kesalahan_retrace.kesalahan_retrace" :key="index">
                        <td>{{data_kal.kesalahan_retrace['X'][index]}}</td>
                        <td>{{data_kal.kesalahan_retrace['Y1'][index].toFixed(1)}}</td>
                        <td>{{data_kal.kesalahan_retrace['Y2'][index].toFixed(1)}}</td>
                        <td>{{item.toFixed(1)}} </td>
                        <td></td>
                        <td>{{data_kal.kesalahan_retrace['Y1'][index].toFixed(1)}}</td>
                        <td>{{data_kal.kesalahan_retrace['Y2'][index].toFixed(1)}}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </v-flex>

              <v-flex sm6 xs12 class="px-2">
                <table class="tableizer-table">
                  <thead>
                    <tr class="tableizer-firstrow">
                      <th colspan="2">kesalahan adjacent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="data_kal.kesalahan_adj">
                      <tr v-for="(item, index) in data_kal.kesalahan_adj.col1" :key="index">
                        <td style="height: 23.33px">{{item ? item.toFixed(1) : item}}</td>
                        <td>{{data_kal.kesalahan_adj.col2[index] ? data_kal.kesalahan_adj.col2[index].toFixed(1) : data_kal.kesalahan_adj.col2[index]}}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </v-flex>
            </v-layout>
            

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa}} <br>
                Tanggal :	{{convertDate(data_alat.tgl_diterima)}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI DIAL INDIKATOR</p>
            <p>Grafik putaran vs kesalahan indikator</p>

            <canvas id="myChart"></canvas>
            <p class="text-xs-center">Putaran</p>

            <canvas id="myChart2"></canvas>
            <p class="text-xs-center">Putaran</p>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa}} <br>
                Tanggal :	{{convertDate(data_alat.tgl_diterima)}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
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
  } table, th, td {
    border: 1px solid grey;
    padding: 3px;
    font-size: 9pt
  }
</style>

<script>
import dimensiHeader from '~/components/dimensi/dial_indikator.vue'
import dial from '~/static/dial_indicator.json' 

import Chart from 'chart.js'  

export default {
  components: {
    dimensiHeader
  },

  head: {
    title: 'Lembar Kerja Dial Indikator | Bidang Dimensi',
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

    ktp_u95: [],
    uc: 0,
    data_ktp: [],

    data_kal: {
      "graph_besar":{},
      "graph_kecil":{},
      "kesalahan_adj":{},
      "kesalahan_indikator":{},
      "kesalahan_indikator_lk":{},
      "kesalahan_retrace":{},
      "pengukuran_berulang":[],
      "table_lk_graph":{},
      "table_lk_ringkas":{},
    },
    
    data_alat: {
      alat_kalibrasi: [],
      deskripsi: {
        buatan: "",
        kapasitas: "",
        'kelembaban_%':  0,
        'kelembaban_terkoreksi_%':  0,
        lokasi_kalibrasi: "",
        merk: "",
        nama_alat: "",
        no_seri:  0,
        suhu_ruangan: [],
        suhu_terkoreksi: [ 0.1000, 0.1000, '%'],
        tipe_model: "-"
      },
      dikalibrasi: {
        date: "",
        person: ""
      },
      diperiksa: "",
      metode_kalibrasi: "",
      standar_acuan: "",
      tgl_diterima: ""
    },

    kesalahan_indikator: {
      type: 'line',
      data: {
        labels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10],
        datasets: [
          { 
            label: 'Naik',
            data: [],
            borderColor: [ '#1E88E5' ],
            borderWidth: 3
          },
          { 
            label: 'Turun',
            data: [],
            backgroundColor: [ '#ffe5e5' ],
            borderColor: [ '#ff4c4c' ],
            borderWidth: 3
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: false
          }]
        }
      }
    },
    kesalahan_indikator2: {
      type: 'line',
      data: {
        labels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2],
        datasets: [
          { 
            label: 'Naik',
            data: [],
            borderColor: [ '#1E88E5' ],
            borderWidth: 3
          },
          { 
            label: 'Turun',
            data: [],
            backgroundColor: [ '#ffe5e5' ],
            borderColor: [ '#ff4c4c' ],
            borderWidth: 3
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: false
          }]
        }
      }
    },
  }),

  mounted() {
    this.getLK()

    console.log("KAL", dial.results[0].data_kal);

    this.data_kal = dial.results[0].data_kal
    this.data_alat = dial.results[0].data_alat

  },

  methods: {    
    drawBarChart() {
      this.kesalahan_indikator.data.labels = this.data_kal.graph_besar['X']
      this.kesalahan_indikator.data.datasets[0].data = this.data_kal.graph_besar['Y1']
      this.kesalahan_indikator.data.datasets[1].data = this.data_kal.graph_besar['Y2']
      const ctx = document.getElementById('myChart')
      const myBarChart = new Chart(ctx, this.kesalahan_indikator);

      this.kesalahan_indikator2.data.labels = this.data_kal.graph_kecil['X']
      this.kesalahan_indikator2.data.datasets[0].data = this.data_kal.graph_kecil['Y1']
      this.kesalahan_indikator2.data.datasets[1].data = this.data_kal.graph_kecil['Y2']
      const ctx2 = document.getElementById('myChart2')
      const myBarChart2 = new Chart(ctx2, this.kesalahan_indikator2);
    },

    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.results[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat
        this.data_kal = req_data.data_kal
        this.drawBarChart()

        this.ktp_u95 = req_data.data_ktp.hasil.ktp_u95
        this.uc = req_data.data_ktp.hasil.uc
        this.data_ktp = req_data.data_ktp.data['Unnamed: 8']
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