<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <electricityHeader></electricityHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>Sertifikat No. : {{no_cert}}</p>
              <p>Halaman 1 dari 2</p>
            </v-layout>

            <p class="text-xs-center b title my-4">LEMBAR KERJA BATTERY CHARGE / DISCHARGE TESTER</p>

            <table class="tableizer-table">
              <thead>
                <tr class="tableizer-firstrow">
                  <td>Nama Alat</td>
                  <td>:</td>
                  <td colspan="4">Mesin Las SMAW</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="150px">Rentang</td>
                  <td>:</td>
                  <td>10-400 A, Resolusi : 1 A</td>
                  <td width="150px">Alat Standar</td>
                  <td>:</td>
                  <td>PORTABLE LOAD BANK TO LOAD TEST AC OR DC WELDING POWER SOURCES</td>
                </tr>
                <tr>
                  <td>Tipe/Model</td>
                  <td>:</td>
                  <td>CC400-S Plus</td>
                  <td>No. Seri</td>
                  <td>:</td>
                  <td>LC 391251</td>
                </tr>
                <tr>
                  <td>Merek</td>
                  <td>:</td>
                  <td>Invertec</td>
                  <td>Ketelusuran</td>
                  <td>:</td>
                  <td>MILLER ELECTRIC / NIST USA</td>
                </tr>
                <tr>
                  <td>No. Seri</td>
                  <td>:</td>
                  <td>Z 1150801213</td>
                  <td>Suhu ruang</td>
                  <td>:</td>
                  <td>27 ± 2 °C</td>
                </tr>
                <tr>
                  <td>Buatan</td>
                  <td>:</td>
                  <td>China</td>
                  <td>Lokasi Kalibrasi</td>
                  <td>:</td>
                  <td>Workshop Las - PT. PJ TEK Mandiri, Tangerang.</td>
                </tr>
              </tbody>
            </table>

            <table class="my-2">
              <tr>
                <td width="150px" rowspan="2">Standar Acuan</td>
                <td width="10px">:</td>
                <td colspan="4">BRITISH STANDARD 7570 : 2000 CODE OF PRACTICE FOR VALIDATION OF ARC WELDING EQUIPMENT</td>
              </tr>
              <tr>
                <td>:</td>
                <td colspan="4">OWNER MANUAL PORTABLE LOAD BANK TO BO LOAD TEST AC OR DC WELDING POWER SOURCES ;Januari 2000,Miller</td>
              </tr>
            </table>

            <table class="my-2">
              <tr>
                <td width="150px">Metoda Kalibrasi</td>
                <td width="10px">:</td>
                <td>PC-314-01</td>
              </tr>
            </table>

            <p class="mt-4 mb-1 b">DATA MASUKAN SEBELUM DILAKUKAN KOREKSI BERDASARKAN SERTIFIKAT KALIBRASI</p>
            <table class="text-xs-center">
              <thead>
                <tr class="">
                  <th rowspan="2">SETTING</th>
                  <th colspan="8">PENUNJUKAN  STANDAR ( A )</th>
                  <th rowspan="2">PERBEDAAN NAIK-TURUN</th>
                  <th colspan="4">AKURASI</th>
                </tr>
                <tr>
                  <td colspan="2">RUN I</td>
                  <td colspan="2">RUN II</td>
                  <td colspan="2">RUN III</td>
                  <td colspan="2">RATA-RATA</td>
                  <td colspan="2">(A)</td>
                  <td colspan="2">(%)</td>
                </tr>
                <tr>
                  <td>(A)</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>(A)</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50</td>
                  <td>51</td>
                  <td>52</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51.3</td>
                  <td>0.3</td>
                  <td>-1</td>
                  <td>-1.3</td>
                  <td>-2</td>
                  <td>-2.6</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>72</td>
                  <td>72</td>
                  <td>72</td>
                  <td>71</td>
                  <td>72</td>
                  <td>72</td>
                  <td>72</td>
                  <td>71.7</td>
                  <td>0.3</td>
                  <td>-2</td>
                  <td>-1.7</td>
                  <td>-2.8</td>
                  <td>-2.3</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>102</td>
                  <td>102</td>
                  <td>102</td>
                  <td>102</td>
                  <td>101</td>
                  <td>102</td>
                  <td>101.7</td>
                  <td>102</td>
                  <td>0.3</td>
                  <td>-1.7</td>
                  <td>-2</td>
                  <td>-1.6</td>
                  <td>-2</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>122</td>
                  <td>123</td>
                  <td>123</td>
                  <td>122</td>
                  <td>122</td>
                  <td>122</td>
                  <td>122.3</td>
                  <td>122.3</td>
                  <td>0</td>
                  <td>-2.3</td>
                  <td>-2.3</td>
                  <td>-1.9</td>
                  <td>-1.9</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>162</td>
                  <td>163</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162.3</td>
                  <td>0.3</td>
                  <td>-2</td>
                  <td>-2.3</td>
                  <td>-1.2</td>
                  <td>-1.4</td>
                </tr>
              </tbody>
            </table>

            <p class="mt-4 mb-1 b">DATA MASUKAN SEDUDAH DILAKUKAN KOREKSI BERDASARKAN SERTIFIKAT KALIBRASI</p>
            <p class="ml-3 mb-1">Dengan menggunakan persamaan polynom :</p>
            <p class="ml-4 mb-1">y = -0.0000004x3 +0.0001x2 + 1.0097x + 0.1214</p>
            <table class="text-xs-center">
              <thead>
                <tr class="">
                  <th rowspan="2">SETTING</th>
                  <th colspan="8">PENUNJUKAN  STANDAR ( A )</th>
                  <th rowspan="2">PERBEDAAN NAIK-TURUN</th>
                  <th colspan="4">AKURASI</th>
                </tr>
                <tr>
                  <td colspan="2">RUN I</td>
                  <td colspan="2">RUN II</td>
                  <td colspan="2">RUN III</td>
                  <td colspan="2">RATA-RATA</td>
                  <td colspan="2">(A)</td>
                  <td colspan="2">(%)</td>
                </tr>
                <tr>
                  <td>(A)</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>(A)</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                  <td>NAIK</td>
                  <td>TURUN</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50</td>
                  <td>51</td>
                  <td>52</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51</td>
                  <td>51.3</td>
                  <td>0.3</td>
                  <td>-1</td>
                  <td>-1.3</td>
                  <td>-2</td>
                  <td>-2.6</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>72</td>
                  <td>72</td>
                  <td>72</td>
                  <td>71</td>
                  <td>72</td>
                  <td>72</td>
                  <td>72</td>
                  <td>71.7</td>
                  <td>0.3</td>
                  <td>-2</td>
                  <td>-1.7</td>
                  <td>-2.8</td>
                  <td>-2.3</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>102</td>
                  <td>102</td>
                  <td>102</td>
                  <td>102</td>
                  <td>101</td>
                  <td>102</td>
                  <td>101.7</td>
                  <td>102</td>
                  <td>0.3</td>
                  <td>-1.7</td>
                  <td>-2</td>
                  <td>-1.6</td>
                  <td>-2</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>122</td>
                  <td>123</td>
                  <td>123</td>
                  <td>122</td>
                  <td>122</td>
                  <td>122</td>
                  <td>122.3</td>
                  <td>122.3</td>
                  <td>0</td>
                  <td>-2.3</td>
                  <td>-2.3</td>
                  <td>-1.9</td>
                  <td>-1.9</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>162</td>
                  <td>163</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162</td>
                  <td>162.3</td>
                  <td>0.3</td>
                  <td>-2</td>
                  <td>-2.3</td>
                  <td>-1.2</td>
                  <td>-1.4</td>
                </tr>
              </tbody>
            </table>

          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>Sertifikat No. : {{no_cert}}</p>
              <p>Halaman 2 dari 2</p>
            </v-layout>

            <p class="b">b. Perhitungan Ketidakpastian</p>

            <p class="mt-3 mb-1 b">1. PENGUKURAN ARUS DC (CHARGE)</p>
            <table>
              <tr>
                <td align="center">Komponen</td>
                <td align="center">Satuan</td>
                <td align="center">Distribusi</td>
                <td align="center">U</td>
                <td align="center">Pembagi</td>
                <td align="center">ui</td>
                <td align="center">Ci</td>
                <td align="center">ui.Ci</td>
                <td align="center">(ui.Ci)2</td>
              </tr>
              <template v-if="data_ktp['v-dc'].v_dc_data">
                <tr v-for="x in 5" :key="x">
                  <td>{{data_ktp['v-dc'].v_dc_data['komponen'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['satuan'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['distribusi'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['U'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['pembagi'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['ui'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['Ci'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['uiCi'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['uiCi2'][x-1]}}</td>
                </tr>
              </template>
              <tr>
                <td colspan="7">Jumlah</td>
                <td colspan="2" align="center">{{data_ktp['v-dc'].vdc_jumlah}}</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian baku gabungan, uc, V</td>
                <td colspan="2" align="center">{{data_ktp['v-dc'].vdc_gab}}</td>
              </tr>
              <tr>
                <td colspan="7">Faktor cakupan, k untuk Veff & CL 95%</td>
                <td colspan="2" align="center">{{data_ktp['v-dc'].vdc_f_cakupan}}</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian bentangan, U = k.uc,</td>
                <td align="center">{{data_ktp['v-dc'].vdc_ktp_bentang.v}} V</td>
                <td align="center">{{data_ktp['v-dc'].vdc_ktp_bentang.persen}} %</td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : Agus Surya Permana <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Sudrajat <br>
                Tanggal :	2 Juni 2017 <br>
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
    /* font-size: 9pt; */
    border-collapse: collapse;  
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  } table.no-grid {
    border-collapse: collapse;
  } table.no-grid, th.th-no-grid, td.td-no-grid  {
    border: 0px solid grey;
    padding: 3px
  }
</style>

<script>
import electricityHeader from '~/components/kelistrikan/mesin_las.vue'

export default {
  components: {
    electricityHeader
  },

  head: {
    title: 'Lembar Kerja Mesin Las | Bidang Kelistrikan',
    meta: [
      {
        hid: 'electricity',
        name: 'electricity',
        content: 'Bidang Kelistrikan'
      }
    ],
  },

  data: () => ({
    no_cert: '',
    data_alat: {
      deskripsi: {},
      alat_kalibrasi: {},
      dikalibrasi: {},
      diperiksa: {},
      metode_kalibrasi: '',
      standar_acuan: ''
    },
    data_kal: {},
    data_ktp: {
      'v-dc': {
        v_dc_data: {
          komponen: [
            'Standar',							
            'Drift Standar',							
            'Res. Alat',			
            'Daya Ulang',						
            'Fitting'				
          ],
          satuan: ['A', 'A', 'A', 'A', 'A'],
          distribusi: [
            'Normal',
            'Rectangular',
            'Rectangular',
            'Rectangular',
            'Rectangular'
          ],
          'Ci': [],
          'U': [],
          'pembagi': [],
          'ui': [],
          'uiCi': [],
          'uiCi2': []
        },
        vdc_f_cakupan: 0,
        vdc_gab: 0,
        vdc_jumlah: 0,
        vdc_ktp_bentang: {}
      },
      'i-dc': {
        v_dc_data: {
          komponen: [
            'Standar',							
            'Drift Standar',							
            'Res. Alat',			
            'Daya Ulang',						
            'Fitting'				
          ],
          satuan: ['V', 'V', 'V', 'V', 'V'],
          distribusi: [
            'Normal',
            'Rectangular',
            'Rectangular',
            'Rectangular',
            'Rectangular'
          ],
          'Ci': [],
          'U': [],
          'pembagi': [],
          'ui': [],
          'uiCi': [],
          'uiCi2': []
        },
        vdc_f_cakupan: 0,
        vdc_gab: 0,
        vdc_jumlah: 0,
        vdc_ktp_bentang: {}
      },
    },

    tanggal: ''
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.result[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat
        this.data_kal = req_data.data_kal
        this.data_ktp = req_data.data_ktp

        this.data_ktp['v-dc'].v_dc_data.komponen = ['Standar', 'Drift Standar', 'Res. Alat', 'Daya Ulang', 'Fitting']
        this.data_ktp['v-dc'].v_dc_data.satuan = ['V', 'V', 'V', 'V', 'V']
        this.data_ktp['v-dc'].v_dc_data.distribusi = ['Normal', 'Rectangular', 'Rectangular', 'Rectangular', 'Rectangular']

        this.tanggal = req_data.pub_date.$date
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },
}
</script>