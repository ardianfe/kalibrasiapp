<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI STOPWATCH</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <table width="100%" class="nogrid">
              <tr>
                <td class="nogrid">Deskripsi Alat : </td>
                <td class="nogrid">Digital Stopwatch</td>
                <td class="nogrid">kapasitas : </td>
                <td class="nogrid">23 h 59 min 59 s / 0,01 s</td>
              </tr>
              <tr>
                <td class="nogrid">tipe/model : </td>
                <td class="nogrid">-</td>
                <td class="nogrid">Resolusi :</td>
                <td class="nogrid">0.01 s</td>
              </tr>
              <tr>
                <td class="nogrid">merek : </td>
                <td class="nogrid">Seiko /</td>
                <td class="nogrid">nomor seri : </td>
                <td class="nogrid">970302</td>
              </tr>
              <tr>
                <td class="nogrid">Lokasi kalibrasi :</td>
                <td class="nogrid">Lab. Kalibrasi B4T Bandung</td>
                <td class="nogrid">buatan :</td>
                <td class="nogrid">China</td>
              </tr>
              <tr>
                <td class="nogrid">Alat Kalibrasi :</td>
                <td class="nogrid" colspan="3">Universal Counter No Seri : 11110351</td>
              </tr>
              <tr>
                <td class="nogrid">Suhu ruangan : </td>
                <td class="nogrid">20.3 - 20.4 °C</td>
                <td class="nogrid">Kelembaban : </td>
                <td class="nogrid">62 %</td>
              </tr>
              <tr>
                <td class="nogrid">Suhu terkoreksi :</td>
                <td class="nogrid">21.1 - 21.2 °C</td>
                <td class="nogrid">Kelembaban terkoreksi:</td>
                <td class="nogrid">58 %</td>
              </tr>
              <tr>
                <td class="nogrid">Metoda Kalibrasi : </td>
                <td class="nogrid" colspan="3">PC-314-04</td>
              </tr>
              <tr>
                <td class="nogrid">Standar Acuan : </td>
                <td class="nogrid" colspan="3">NIST 960-12 : 2009 : Stopwatch and Timer Calibration</td>
              </tr>
            </table>
          </v-card-text>

          <v-card-text>
            <p class="mt-3 mb-0 b">DATA HASIL KALIBRASI</p>
            <table width="100%" class="text-xs-center">
              <thead>
                  <tr class="tableizer-firstrow">
                    <td rowspan="3">No</td>
                    <td colspan="16">Penunjukan Alat</td>
                  </tr>
                  <tr>
                    <td colspan="3">1</td>
                    <td colspan="3">2</td>
                    <td colspan="3">3</td>
                    <td colspan="3">4</td>
                    <td colspan="3">5</td>
                    <td rowspan="2">Rata rata</td>
                  </tr>
                  <tr>
                    <td>Jam</td>
                    <td>mnt</td>
                    <td>dtk</td>
                    <td>Jam</td>
                    <td>mnt</td>
                    <td>dtk</td>
                    <td>Jam</td>
                    <td>mnt</td>
                    <td>dtk</td>
                    <td>Jam</td>
                    <td>mnt</td>
                    <td>dtk</td>
                    <td>Jam</td>
                    <td>mnt</td>
                    <td>dtk</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>10</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>10</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>10</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>10</td>
                    <td>0.02</td>
                    <td>0</td>
                    <td>10</td>
                    <td>0.03</td>
                    <td>600.01</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>600.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>600.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>600.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>600.02</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>600.03</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0</td>
                    <td>20</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>20</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>20</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>20</td>
                    <td>0.02</td>
                    <td>0</td>
                    <td>20</td>
                    <td>0.02</td>
                    <td>1200.01</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1200.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1200.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1200.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1200.02</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1200.02</td>
                    <td>20.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>0</td>
                    <td>30</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>30</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>30</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>30</td>
                    <td>0.02</td>
                    <td>0</td>
                    <td>30</td>
                    <td>0.02</td>
                    <td>1800.01</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1800.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1800.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1800.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1800.02</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1800.02</td>
                    <td>30.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>0</td>
                    <td>40</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>40</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>40</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>40</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>40</td>
                    <td>0.01</td>
                    <td>2400.01</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2400.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2400.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2400.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2400.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2400.01</td>
                    <td>40.00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>0</td>
                    <td>50</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>50</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>50</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>50</td>
                    <td>0.02</td>
                    <td>0</td>
                    <td>50</td>
                    <td>0.02</td>
                    <td>3000.01</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3000.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3000.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3000.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3000.02</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3000.02</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>0</td>
                    <td>60</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>60</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>60</td>
                    <td>0.01</td>
                    <td>0</td>
                    <td>60</td>
                    <td>0.02</td>
                    <td>0</td>
                    <td>60</td>
                    <td>0.02</td>
                    <td>3600.01</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3600.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3600.00</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3600.01</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3600.02</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3600.02</td>
                    <td>60.00</td>
                  </tr>
              </tbody>
            </table>

            <table class="mt-4 text-xs-center" width="100%">
              <thead>
                  <tr>
                    <td rowspan="3">No</td>
                    <td colspan="6">Penunjukan Standar</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td rowspan="2">Rata rata</td>
                  </tr>
                  <tr>
                    <td>menit</td>
                    <td>menit</td>
                    <td>menit</td>
                    <td>menit</td>
                    <td>menit</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>1</td>
                    <td>600.294</td>
                    <td>601.130</td>
                    <td>601.916</td>
                    <td>602.530</td>
                    <td>603.415</td>
                    <td>601.857</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1200.268</td>
                    <td>1201.152</td>
                    <td>1201.840</td>
                    <td>1202.455</td>
                    <td>1203.045</td>
                    <td>1201.752</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1800.413</td>
                    <td>1800.052</td>
                    <td>1801.715</td>
                    <td>1802.403</td>
                    <td>1802.895</td>
                    <td>1801.496</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>2401.788</td>
                    <td>2402.353</td>
                    <td>2402.943</td>
                    <td>2403.533</td>
                    <td>2404.025</td>
                    <td>2402.928</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>3000.730</td>
                    <td>3001.738</td>
                    <td>3001.475</td>
                    <td>3002.114</td>
                    <td>3002.778</td>
                    <td>3001.767</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>3600.581</td>
                    <td>3601.048</td>
                    <td>3601.859</td>
                    <td>3602.498</td>
                    <td>3602.888</td>
                    <td>3601.775</td>
                  </tr>
              </tbody>
            </table>

            <p class="mt-3 mb-0 b">Analisa Hasil Pengukuran - kalibrasi</p>
            <table class="text-xs-center" width="100%">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>No</th>
                    <th>Nilai Standar ( menit)</th>
                    <th>Penunjukan Alat (menit)</th>
                    <th>Koreksi (menit)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>1</td>
                    <td>601.857</td>
                    <td>600.01</td>
                    <td>1.843</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1201.752</td>
                    <td>1200.01</td>
                    <td>1.74</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1801.496</td>
                    <td>1800.01</td>
                    <td>1.484</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>2402.928</td>
                    <td>2400.01</td>
                    <td>2.922</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>3001.767</td>
                    <td>3000.01</td>
                    <td>1.755</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>3601.775</td>
                    <td>3600.01</td>
                    <td>1.765</td>
                  </tr>
              </tbody>
            </table>

            <p class="mt-3 mb-0 b">Koreksi = Nilai Standar - Penunjukan Alat (UUT)</p>
            <table class="text-xs-center">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>No</th>
                    <th>Nilai Standar (menit)</th>
                    <th>Penunjukan Alat (menit)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>1</td>
                    <td>10</td>
                    <td>8.157</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20</td>
                    <td>18.26</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>30</td>
                    <td>28.516</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>40</td>
                    <td>37.078</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>50</td>
                    <td>48.245</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>60</td>
                    <td>58.235</td>
                  </tr>
              </tbody>
            </table>
            
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat['Diperiksa']}} <br>
                Tanggal :	{{data_alat['Tanggal periksa']}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat['Dikalibrasi']}} <br>
                Tanggal :	{{convertDate(data_alat['Tanggal kalibrasi'])}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="b">Perhitungan Ketidakpastian Pengukuran</p>
            <table class="tableizer-table">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>Penunjukan Alat</th>
                    <th>Urep</th>
                    <th>U resolusi</th>
                    <th>U universal</th>
                    <th>U resolusi</th>
                    <th>HRTB</th>
                    <th>HRTSD</th>
                    <th>Ucomb</th>
                    <th>Uexp =</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>UUT</td>
                    <td>Counter</td>
                    <td>Univ Counter</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>k. Ucomb</td>
                  </tr>
                  <tr>
                    <td>8.157</td>
                    <td>0.00509902</td>
                    <td>0.0029</td>
                    <td>0.00081</td>
                    <td>0.00029</td>
                    <td>0.016</td>
                    <td>0.01</td>
                    <td>0.019</td>
                    <td>0.039</td>
                  </tr>
                  <tr>
                    <td>18.26</td>
                    <td>0.003741657</td>
                    <td>0.0029</td>
                    <td>0.00081</td>
                    <td>0.00029</td>
                    <td>0.016</td>
                    <td>0.01</td>
                    <td>0.019</td>
                    <td>0.038</td>
                  </tr>
                  <tr>
                    <td>28.516</td>
                    <td>0.003741657</td>
                    <td>0.0029</td>
                    <td>0.00081</td>
                    <td>0.00029</td>
                    <td>0.016</td>
                    <td>0.01</td>
                    <td>0.019</td>
                    <td>0.038</td>
                  </tr>
                  <tr>
                    <td>37.078</td>
                    <td>0.00244949</td>
                    <td>0.0029</td>
                    <td>0.00081</td>
                    <td>0.00029</td>
                    <td>0.016</td>
                    <td>0.01</td>
                    <td>0.019</td>
                    <td>0.038</td>
                  </tr>
                  <tr>
                    <td>48.245</td>
                    <td>0.003741657</td>
                    <td>0.0029</td>
                    <td>0.00081</td>
                    <td>0.00029</td>
                    <td>0.016</td>
                    <td>0.01</td>
                    <td>0.019</td>
                    <td>0.038</td>
                  </tr>
                  <tr>
                    <td>58.235</td>
                    <td>0.004472136</td>
                    <td>0.0029</td>
                    <td>0.00081</td>
                    <td>0.00029</td>
                    <td>0.016</td>
                    <td>0.01</td>
                    <td>0.019</td>
                    <td>0.039</td>
                  </tr>
              </tbody>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat['Diperiksa']}} <br>
                Tanggal :	{{data_alat['Tanggal periksa']}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat['Dikalibrasi']}} <br>
                Tanggal :	{{convertDate(data_alat['Tanggal kalibrasi'])}} <br>
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
    padding: 3px
  } .nogrid{
    border: 0px solid grey;
    padding: 3px
  }
</style>

<script>
import dimensiHeader from '~/components/dimensi/stopwatch.vue'
// import durometer from '~/static/durometer.json' 

export default {
  components: {
    dimensiHeader
  },

  head: {
    title: 'Lembar Kerja Stopwatch | Bidang Dimensi',
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
    ktp_u95: [],
    uc: 0,
    data_ktp: [],

    data_kal: {
      "Kesalahan ": [],
      "Mampu Ulang ": [],
      "Nilai Aktual": [],
      "Pembacaan": [],
      "Pembacaan Alat ": [],
      "Rata-rata": [],
      "Unnamed: 4": [],
      "Unnamed: 6": [],
      "Unnamed: 8": [],
      "Unnamed: 10": []
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
        this.data_kal = req_data.data_kal.hasil

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