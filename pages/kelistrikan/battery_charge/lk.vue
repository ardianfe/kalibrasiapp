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
              <tr>
                <td>Nama Alat</td>
                <td>:</td>
                <td colspan="4">Battery Life Cycle Tester</td>
              </tr>
              <tr>
                <td>Kapasitas</td>
                <td>:</td>
                <td>100 A DC / 20 V</td>
                <td>Alat Standar</td>
                <td>:</td>
                <td>1. True RMS Multimeter, Fluke 289</td>
              </tr>
              <tr>
                <td>Resolusi</td>
                <td>:</td>
                <td colspan="4">0V / 1A</td>
              </tr>
              <tr>
                <td>Tipe/Model</td>
                <td>:</td>
                <td>SYE-NCCDR 20/25/25,20/50/50</td>
                <td>No. Seri</td>
                <td>:</td>
                <td>18620056</td>
              </tr>
              <tr>
                <td>Merek</td>
                <td>:</td>
                <td>Shinying Electric</td>
                <td>Ketelusuran</td>
                <td>:</td>
                <td>LK-016-IDN</td>
              </tr>
              <tr>
                <td>No. Seri</td>
                <td>:</td>
                <td>S-94144</td>
                <td>Suhu ruang</td>
                <td>:</td>
                <td>26 ± 2 °C, Kelembaban : 66 ± 2 %RH</td>
              </tr>
              <tr>
                <td>Buatan</td>
                <td>:</td>
                <td>Taiwan</td>
                <td>Lokasi Kalibrasi</td>
                <td>:</td>
                <td>Ruang Uji Aki Kendaraan Bermotor</td>
              </tr>
            </table>
            <p class="my-2">Standar Acuan : IEC 51-1/1984 dan IEC 51-9/ 1988</p>
            <p class="my-2">Metoda Kalibrasi :	PC-314-02</p>

            <p class="mt-4 mb-1 b">A. HASIL KALIBRASI (ID/PANEL 1)</p>
            <p class="my-1 ml-3 b">1. PENGUKURAN ARUS DC (DISCHARGE)</p>
            <table class="text-xs-center">
              <tr>
                <th>Range Alat</th>
                <th>Penunjukan Alat</th>
                <th colspan="5">Penunjukan Standar</th>
                <th>Rata-Rata</th>
                <th>Kesalahan</th>
                <th>Ketidakpastian Pengukuran</th>
              </tr>
              <tr>
                <td>(A)</td>
                <td>(A)</td>
                <td colspan="5">(A)</td>
                <td>(A)</td>
                <td>(A)</td>
                <td>(A)</td>
              </tr>
              <tr>
                <td rowspan="11">25</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>8</td>
                <td>8</td>
                <td>8</td>
                <td>8</td>
                <td>8</td>
                <td>8</td>
                <td>8</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>13</td>
                <td>13.1</td>
                <td>13.1</td>
                <td>13.1</td>
                <td>13.1</td>
                <td>13.1</td>
                <td>13.1</td>
                <td>-0.1</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>18</td>
                <td>18.1</td>
                <td>18.1</td>
                <td>18.1</td>
                <td>18.1</td>
                <td>18.1</td>
                <td>18.1</td>
                <td>-0.1</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>22</td>
                <td>22.1</td>
                <td>22.1</td>
                <td>22.1</td>
                <td>22.1</td>
                <td>22.1</td>
                <td>22.1</td>
                <td>-0.1</td>
                <td>1.2</td>
              </tr>
              <tr>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>0</td>
                <td>1.2</td>
              </tr>
            </table>

            <p class="mt-4 mb-1 b">2. PENGUKURAN TEGANGAN DC</p>
            <table class="text-xs-center">
              <tr class="">
                <th>Range Alat</th>
                <th>Penunjukan Alat</th>
                <th colspan="5">Penunjukan Standar</th>
                <th>Rata-Rata</th>
                <th>Kesalahan</th>
              </tr>
              <tr>
                <td>V</td>
                <td>V</td>
                <td colspan="5">V</td>
                <td>V</td>
                <td>V</td>
              </tr>
              <tr>
                <td rowspan="6">13</td>
                <td>8.569</td>
                <td>8.567</td>
                <td>8.569</td>
                <td>8.559</td>
                <td>8.561</td>
                <td>8.563</td>
                <td>8.6</td>
                <td>-0.005</td>
              </tr>
              <tr>
                <td>12.043</td>
                <td>12.039</td>
                <td>12.038</td>
                <td>12.039</td>
                <td>12.04</td>
                <td>12.041</td>
                <td>12</td>
                <td>-0.004</td>
              </tr>
              <tr>
                <td>12.247</td>
                <td>12.244</td>
                <td>12.246</td>
                <td>12.246</td>
                <td>12.241</td>
                <td>12.245</td>
                <td>12.2</td>
                <td>-0.003</td>
              </tr>
              <tr>
                <td>12.462</td>
                <td>12.459</td>
                <td>12.459</td>
                <td>12.451</td>
                <td>12.452</td>
                <td>12.45</td>
                <td>12.5</td>
                <td>-0.008</td>
              </tr>
              <tr>
                <td>12.942</td>
                <td>12.939</td>
                <td>12.939</td>
                <td>12.938</td>
                <td>12.937</td>
                <td>12.936</td>
                <td>12.9</td>
                <td>-0.004</td>
              </tr>
              <tr>
                <td>12.952</td>
                <td>12.948</td>
                <td>12.948</td>
                <td>12.945</td>
                <td>12.943</td>
                <td>12.946</td>
                <td>12.9</td>
                <td>-0.006</td>
              </tr>
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
              
            <p class="mt-3 mb-1 b">2. PENGUKURAN TEGANGAN DC</p>
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
              <template v-if="data_ktp['i-dc'].v_dc_data">
                <tr v-for="x in 5" :key="x">
                  <td>{{data_ktp['v-dc'].v_dc_data['komponen'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['satuan'][x-1]}}</td>
                  <td>{{data_ktp['v-dc'].v_dc_data['distribusi'][x-1]}}</td>
                  <td>{{data_ktp['i-dc'].v_dc_data['U'][x-1]}}</td>
                  <td>{{data_ktp['i-dc'].v_dc_data['pembagi'][x-1]}}</td>
                  <td>{{data_ktp['i-dc'].v_dc_data['ui'][x-1]}}</td>
                  <td>{{data_ktp['i-dc'].v_dc_data['Ci'][x-1]}}</td>
                  <td>{{data_ktp['i-dc'].v_dc_data['uiCi'][x-1]}}</td>
                  <td>{{data_ktp['i-dc'].v_dc_data['uiCi2'][x-1]}}</td>
                </tr>
              </template>
              <tr>
                <td colspan="7">Jumlah</td>
                <td colspan="2" align="center">{{data_ktp['i-dc'].vdc_jumlah}}</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian baku gabungan, uc, V</td>
                <td colspan="2" align="center">{{data_ktp['i-dc'].vdc_gab}}</td>
              </tr>
              <tr>
                <td colspan="7">Faktor cakupan, k untuk Veff & CL 95%</td>
                <td colspan="2" align="center">{{data_ktp['i-dc'].vdc_f_cakupan}}</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian bentangan, U = k.uc,</td>
                <td align="center">{{data_ktp['i-dc'].vdc_ktp_bentang.A}} V</td>
                <td align="center">{{data_ktp['i-dc'].vdc_ktp_bentang.persen}} %</td>
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
import electricityHeader from '~/components/kelistrikan/battery.vue'

export default {
  components: {
    electricityHeader
  },

  head: {
    title: 'Lembar Kerja Battery Charge | Bidang Kelistrikan',
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