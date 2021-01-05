<template>
  <v-layout
    column
  >
    <v-flex xs12 sm8 md6>
      <suhuHeader></suhuHeader>

      <p class="accent--text lato font-weight-bold title mt-5 mb-0">Lembar Kerja</p>
      <v-card class="mt-3 elevation-4 v-main-card">
        <!-- <v-card flat> -->
          <v-card-text>
            <div class="pa-1">
              <p>No. Sertifikat : {{cert_no}}</p>
              <table class="tableizer-table">
                <thead>
                  <tr class="tableizer-firstrow">
                    <td>Pemilik :</td>
                    <td colspan="3">PEMPROV JABAR - DINAS KELAUTAN DAN PERIKANAN</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width:10%">Nama Alat :</td>
                    <td style="width:40%">AUTOCLAVE</td>
                    <td style="width:10%">Resolusi :</td>
                    <td style="width:40%">Tekanan : 0,4 Mpa</td>
                  </tr>
                  <tr>
                    <td>Rentang Suhu :</td>
                    <td>138 ⁰C</td>
                    <td>Kalibrator :</td>
                    <td>
                      1. Digital Thermometer Fluke 52 II S/N : 37430639WS
                      <br>
                      2. Thermocouple Wire Tipe K, S/N : K1
                    </td>
                  </tr>
                  <tr>
                    <td>Tipe/Model :</td>
                    <td>HVE 50</td>
                    <td>Ketelusuran :</td>
                    <td>Hasil Kalibrasi yang dilaporkan tertelusur kesatuan pengukuran SI melalui LK-032-IDN dan LK-0172-IDN</td>
                  </tr>
                  <tr>
                    <td>Merek :</td>
                    <td>Hirayama</td>
                    <td>Suhu Ruangan :</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>No. seri :</td>
                    <td>787226</td>
                    <td>Lokasi :</td>
                    <td>Laboratorium Mikrobiologi - Dinas Kelautan dan Perikanan, Cirebon</td>
                  </tr>
                  <tr>
                    <td>Buatan :</td>
                    <td colspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="4">&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Standar Acuan :</td>
                    <td colspan="3">Monitoring Maintenance Calibration of Autoclaves (For The Purpose of UKAS Acreditation ) QSOP 6" Tahun 2005</td>
                  </tr>
                  <tr>
                    <td>Metoda Kalibrasi :</td>
                    <td colspan="3">PC-301-06</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-card-text>
        <!-- </v-card> -->
      </v-card>
      
      <v-card class="mt-3 elevation-4 v-main-card">
        <v-card-text>
          <div class="pa-1">
            <p class="b">1. Hasil Pengukuran</p>

            <table>
              <thead>
                  <tr>
                    <th colspan="2" rowspan="2">Penunjukan Alat </th>
                    <th colspan="10">Penunjukan Standar (°C)</th>
                    <th rowspan="2">Koreksi</th>
                    <th rowspan="2">Std Deviasi</th>
                  </tr>
                  <tr>
                    <td colspan="3">I</td>
                    <td colspan="3">II</td>
                    <td colspan="3">III</td>
                    <td>Rata-rata</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Mpa</td>
                    <td> (°C)</td>
                    <td>Max</td>
                    <td>Min</td>
                    <td>rata-rata</td>
                    <td>Max</td>
                    <td>Min</td>
                    <td>rata-rata</td>
                    <td>Max</td>
                    <td>Min</td>
                    <td>rata-rata</td>
                    <td>I, II dan III</td>
                    <td>(°C)</td>
                    <td>(°C)</td>
                  </tr>
                  <tr>
                    <td rowspan="5">0.1</td>
                    <td rowspan="5">121</td>
                    <td>120.6</td>
                    <td>120.5</td>
                    <td>120.6</td>
                    <td>120.6</td>
                    <td>120.5</td>
                    <td>120.6</td>
                    <td>120.7</td>
                    <td>120.5</td>
                    <td>120.6</td>
                    <td rowspan="5">120.5</td>
                    <td rowspan="5">-0.5</td>
                    <td>0.08</td>
                  </tr>
                  <tr>
                    <td>120.5</td>
                    <td>120.3</td>
                    <td>120.4</td>
                    <td>120.6</td>
                    <td>120.5</td>
                    <td>120.6</td>
                    <td>120.6</td>
                    <td>120.4</td>
                    <td>120.5</td>
                    <td>0.12</td>
                  </tr>
                  <tr>
                    <td>120.7</td>
                    <td>120.5</td>
                    <td>120.6</td>
                    <td>120.7</td>
                    <td>120.5</td>
                    <td>120.6</td>
                    <td>120.6</td>
                    <td>120.4</td>
                    <td>120.5</td>
                    <td>0.12</td>
                  </tr>
                  <tr>
                    <td>120.4</td>
                    <td>120.2</td>
                    <td>120.3</td>
                    <td>120.4</td>
                    <td>120.2</td>
                    <td>120.3</td>
                    <td>120.5</td>
                    <td>120.3</td>
                    <td>120.4</td>
                    <td>0.12</td>
                  </tr>
                  <tr>
                    <td>120.6</td>
                    <td>120.4</td>
                    <td>120.5</td>
                    <td>120.5</td>
                    <td>120.3</td>
                    <td>120.4</td>
                    <td>120.6</td>
                    <td>120.4</td>
                    <td>120.5</td>
                    <td>0.12</td>
                  </tr>
              </tbody>
            </table>
            <p>Catatan :	Nilai rata-rata telah dibulatkan ke  0,1 °C</p>
          </div>
        </v-card-text>
      </v-card>

      <p class="accent--text lato font-weight-bold title mt-5 mb-0">Ketidakpastian</p>
      <v-card class="mt-3 elevation-4 v-main-card">
        <v-card-text>
          <div class="pa-1">
            <p class="b">Perhitungan Ketidakpastian</p>

            <table class="tableizer-table">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>Komponen</th>
                    <th>Satuan</th>
                    <th>Sebaran</th>
                    <th>U</th>
                    <th>Pembagi</th>
                    <th>Vi</th>
                    <th>Ui</th>
                    <th>Ci</th>
                    <th>UiCi</th>
                    <th>(UiCi)2</th>
                    <th>(Ui.Ci)4/Vi</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  </tr>
                  <tr>
                    <td>Kalibrator Ind  </td>
                    <td>°C</td>
                    <td>Normal</td>
                    <td>0.2</td>
                    <td>2.0</td>
                    <td>30</td>
                    <td>0.10</td>
                    <td>1.00</td>
                    <td>0.10</td>
                    <td>0.01</td>
                    <td>3.33333E-06</td>
                  </tr>
                  <tr>
                    <td>Drift Kalibrator</td>
                    <td>°C</td>
                    <td>Rectangular</td>
                    <td>0.02</td>
                    <td>1.73</td>
                    <td>50</td>
                    <td>0.01</td>
                    <td>1.00</td>
                    <td>0.01</td>
                    <td>0.00</td>
                    <td>3.57245E-10</td>
                  </tr>
                  <tr>
                    <td>Termokopel</td>
                    <td>°C</td>
                    <td>Normal</td>
                    <td>0.52</td>
                    <td>2.0</td>
                    <td>50</td>
                    <td>0.26</td>
                    <td>1.00</td>
                    <td>0.26</td>
                    <td>0.07</td>
                    <td>9.13952E-05</td>
                  </tr>
                  <tr>
                    <td>Drift Termokopel</td>
                    <td>°C</td>
                    <td>Rectangular</td>
                    <td>0.1</td>
                    <td>1.73</td>
                    <td>30</td>
                    <td>0.03</td>
                    <td>1.00</td>
                    <td>0.03</td>
                    <td>0.00</td>
                    <td>2.72087E-08</td>
                  </tr>
                  <tr>
                    <td>Pembacaan ulang</td>
                    <td>°C</td>
                    <td>Normal</td>
                    <td>0.1</td>
                    <td>1.73</td>
                    <td>5</td>
                    <td>0.07</td>
                    <td>1.00</td>
                    <td>0.07</td>
                    <td>0.00</td>
                    <td>4.78025E-06</td>
                  </tr>
                  <tr>
                    <td>Resolusi Alat</td>
                    <td>°C</td>
                    <td>Rectangular</td>
                    <td>1</td>
                    <td>1.73</td>
                    <td>30</td>
                    <td>0.58</td>
                    <td>1.00</td>
                    <td>0.58</td>
                    <td>0.33</td>
                    <td>0.003703704</td>
                  </tr>
                  <tr>
                    <td colspan="9">Sums</td>
                    <td>0.42</td>
                    <td>0.00380324</td>
                  </tr>
                  <tr>
                    <td colspan="9">Ketidakpastian baku gabungan, uc, (mg)</td>
                    <td>0.65</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td colspan="9">Faktor cakupan (k) pada tingkat kepercayaan 95% (dari tabel )</td>
                    <td>2.00</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td colspan="9">Ketidak pastian bentangan, U = k.uc</td>
                    <td>1.3</td>
                    <td>°C</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </v-card-text>
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
import suhuHeader from '~/components/suhu/auto_clave.vue'

export default {
  components: {
    suhuHeader
  },

  head: {
    title: 'Lembar Kerja Auto Clave | Bidang Suhu',
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
    temps: [ "110", "150" ],
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

    cert_no: ''

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
