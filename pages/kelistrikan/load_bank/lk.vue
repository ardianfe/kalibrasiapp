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

            <p class="text-xs-center b title my-4">LEMBAR KERJA PORTABLE LOAD BANK</p>

            <table class="no-grid">
              <tr>
                <td class="td-no-grid" colspan="9">Nama Alat</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="51">{{data_alat.deskripsi.nama_alat}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Rentang</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">
                  <span v-if="data_alat.deskripsi.rentang">
                    {{data_alat.deskripsi.rentang[0]}}
                  </span>
                </td>
                <td class="td-no-grid" colspan="12">Alat Standar</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="22">1. {{data_alat.alat_kalibrasi.alat1}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="10"></td>
                <td class="td-no-grid" colspan="16">
                  <span v-if="data_alat.deskripsi.rentang">
                    {{data_alat.deskripsi.rentang[1]}}
                  </span>
                </td>
                <td class="td-no-grid" colspan="13"> </td>
                <td class="td-no-grid" colspan="22">s/n: {{data_alat.alat_kalibrasi.sn1}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Tipe/Model</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">{{data_alat.deskripsi.model}}</td>
                <td class="td-no-grid" colspan="13">&nbsp;</td>
                <td class="td-no-grid" colspan="22">2. {{data_alat.alat_kalibrasi.alat2}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Merek</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">{{data_alat.deskripsi.merk}} </td>
                <td class="td-no-grid" colspan="13">&nbsp;</td>
                <td class="td-no-grid" colspan="22">s/n: {{data_alat.alat_kalibrasi.sn2}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="60">&nbsp;</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">No. Seri</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">{{data_alat.deskripsi.no_seri}}</td>
                <td class="td-no-grid" colspan="12">Suhu ruang</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="22">
                  <span v-if="data_alat.deskripsi.kondisi_ling">
                    {{data_alat.deskripsi.kondisi_ling.suhu_ruang}} : {{data_alat.deskripsi.kondisi_ling.kelembaban_udara}}
                  </span>
                </td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Buatan </td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">{{data_alat.deskripsi.buatan}}</td>
                <td class="td-no-grid" colspan="12">Lokasi Kalibrasi</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="22">{{data_alat.deskripsi.lokasi}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Standar Acuan</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="51">{{data_alat.standar_acuan}}</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Metoda Kalibrasi</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="51">{{data_alat.metode_kalibrasi}}</td>
              </tr>
            </table>
              
            <p class="b mt-3 mb-1">1. PENGUKURAN TEGANGAN KELUARAN (V-DC)</p>
            <table class="text-xs-center">
              <tr>
                <td width="45px" rowspan="3">PENUNJUKAN ALAT (V)</td>
                <td colspan="6">PENUNJUKAN  STANDAR ( V )</td>
                <td width="13%" rowspan="3">RATA-RATA(v)</td>
                <td width="13%" rowspan="3">KOREKSI(v)</td>
              </tr>
              <tr>
                <td colspan="3">SEBELUM KOREKSI</td>
                <td colspan="3">SESUDAH KOREKSI</td>
              </tr>
              <tr>
                <td>I</td>
                <td>II</td>
                <td>III</td>
                <td>I</td>
                <td>II</td>
                <td>III</td>
              </tr>

              <template v-if="data_kal['v-dc']">
                <tr v-for="x in 7" :key="x">
                  <td>{{data_kal['v-dc']['V'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['sblmkoreksi-I'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['sblmkoreksi-II'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['sblmkoreksi-III'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['setelahkoreksi-I'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['setelahkoreksi-II'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['setelahkoreksi-III'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['rataan'][x].toFixed(1)}}</td>
                  <td>{{data_kal['v-dc']['koreksi'][x].toFixed(1)}}</td>
                </tr>
              </template>
            </table>

            <p class="b mt-3 mb-1">2. PENGUKURAN ARUS KELUARAN (I-DC)</p>
            <table class="text-xs-center">
              <tr>
                <td width="45px" rowspan="3" align="center">PENUNJUKAN ALAT (A)</td>
                <td colspan="6" align="center">PENUNJUKAN  STANDAR ( A )</td>
                <td width="13%" rowspan="3" align="center">RATA-RATA</td>
                <td width="13%" rowspan="3" align="center">KOREKSI</td>
              </tr>
              <tr>
                <td colspan="3" align="center">SEBELUM KOREKSI</td>
                <td colspan="3" align="center">SESUDAH KOREKSI</td>
              </tr>
              <tr>
                <td>I</td>
                <td>II</td>
                <td>III</td>
                <td>I</td>
                <td>II</td>
                <td>III</td>
              </tr>
              <template v-if="data_kal['i-dc']">
                <tr v-for="x in 7" :key="x">
                  <td>{{data_kal['i-dc']['V'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['sblmkoreksi-I'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['sblmkoreksi-II'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['sblmkoreksi-III'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['setelahkoreksi-I'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['setelahkoreksi-II'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['setelahkoreksi-III'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['rataan'][x].toFixed(1)}}</td>
                  <td>{{data_kal['i-dc']['koreksi'][x].toFixed(1)}}</td>
                </tr>
              </template>
            </table>
            <p class="mt-2">Catatan : Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan 95% <br> dengan faktor cakupan k=2</p>

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
            <p class="mt-3">F.179/03/REV.02/13.01.2016</p>
          </v-card-text>
        </v-card>

        <!-- <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>Sertifikat No. : 3-12-18-0013</p>
              <p>Halaman 2 dari 3</p>
            </v-layout>
              
            <p class="b mt-3 mb-1">3. PENGUKURAN TEGANGAN KELUARAN (V-AC)</p>
            <table class="text-xs-center">
              <tr>
                <td width="45px" rowspan="3">PENUNJUKAN ALAT (V)</td>
                <td colspan="6">PENUNJUKAN  STANDAR ( V )</td>
                <td width="13%" rowspan="3">RATA-RATA(v)</td>
                <td width="13%" rowspan="3">KOREKSI(v)</td>
              </tr>
              <tr>
                <td colspan="3">SEBELUM KOREKSI</td>
                <td colspan="3">SESUDAH KOREKSI</td>
              </tr>
              <tr>
                <td>I</td>
                <td>II</td>
                <td>III</td>
                <td>I</td>
                <td>II</td>
                <td>III</td>
              </tr>
              <tr>
                <td>10</td>
                <td>9,8</td>
                <td>9,9</td>
                <td>9,8</td>
                <td>9,8</td>
                <td>9,8</td>
                <td>9,8</td>
                <td>9,8</td>
                <td>-0,2</td>
              </tr>
              <tr>
                <td>15</td>
                <td>14,7</td>
                <td>14,7</td>
                <td>14,7</td>
                <td>14,7</td>
                <td>14,7</td>
                <td>14,7</td>
                <td>14,7</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>20</td>
                <td>19,8</td>
                <td>19,8</td>
                <td>19,7</td>
                <td>19,8</td>
                <td>19,8</td>
                <td>19,7</td>
                <td>19,7</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>25</td>
                <td>24,8</td>
                <td>24,8</td>
                <td>24,7</td>
                <td>24,8</td>
                <td>24,8</td>
                <td>24,7</td>
                <td>24,7</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>30</td>
                <td>29,7</td>
                <td>29,8</td>
                <td>29,7</td>
                <td>29,7</td>
                <td>29,8</td>
                <td>29,7</td>
                <td>29,7</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>35</td>
                <td>34,7</td>
                <td>34,8</td>
                <td>34,8</td>
                <td>34,7</td>
                <td>34,8</td>
                <td>34,8</td>
                <td>34,7</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>40</td>
                <td>39,7</td>
                <td>39,8</td>
                <td>39,8</td>
                <td>39,7</td>
                <td>39,8</td>
                <td>39,8</td>
                <td>39,7</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>45</td>
                <td>44,6</td>
                <td>44,7</td>
                <td>44,7</td>
                <td>44,6</td>
                <td>44,7</td>
                <td>44,7</td>
                <td>44,7</td>
                <td>-0,3</td>
              </tr>
            </table>

            <p class="b mt-3 mb-1">4. PENGUKURAN ARUS KELUARAN (I-AC)</p>
            <table class="text-xs-center">
              <tr>
                <td width="45px" rowspan="3" align="center">PENUNJUKAN ALAT (A)</td>
                <td colspan="6" align="center">PENUNJUKAN  STANDAR ( A )</td>
                <td width="13%" rowspan="3" align="center">RATA-RATA</td>
                <td width="13%" rowspan="3" align="center">KOREKSI</td>
              </tr>
              <tr>
                <td colspan="3" align="center">SEBELUM KOREKSI</td>
                <td colspan="3" align="center">SESUDAH KOREKSI</td>
              </tr>
              <tr>
                <td>I</td>
                <td>II</td>
                <td>III</td>
                <td>I</td>
                <td>II</td>
                <td>III</td>
              </tr>
              <tr>
                <td>50</td>
                <td>50,4</td>
                <td>50,3</td>
                <td>50,4</td>
                <td>50,4</td>
                <td>50,3</td>
                <td>50,4</td>
                <td>50,4</td>
                <td>-0,4</td>
              </tr>
              <tr>
                <td>100</td>
                <td>100,4</td>
                <td>100,4</td>
                <td>100,3</td>
                <td>100,4</td>
                <td>100,4</td>
                <td>100,3</td>
                <td>100,4</td>
                <td>-0,4</td>
              </tr>
              <tr>
                <td>150</td>
                <td>150,4</td>
                <td>150,4</td>
                <td>150,3</td>
                <td>150,4</td>
                <td>150,4</td>
                <td>150,3</td>
                <td>150,4</td>
                <td>-0,4</td>
              </tr>
              <tr>
                <td>200</td>
                <td>200,1</td>
                <td>200,1</td>
                <td>200,3</td>
                <td>200,1</td>
                <td>200,1</td>
                <td>200,3</td>
                <td>200,2</td>
                <td>-0,4</td>
              </tr>
              <tr>
                <td>250</td>
                <td>250,4</td>
                <td>250,3</td>
                <td>250,3</td>
                <td>250,4</td>
                <td>250,3</td>
                <td>250,3</td>
                <td>250,3</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>300</td>
                <td>300,4</td>
                <td>300,4</td>
                <td>300,3</td>
                <td>300,4</td>
                <td>300,4</td>
                <td>300,3</td>
                <td>300,4</td>
                <td>-0,4</td>
              </tr>
              <tr>
                <td>350</td>
                <td>350,2</td>
                <td>350,3</td>
                <td>350,3</td>
                <td>350,2</td>
                <td>350,3</td>
                <td>350,3</td>
                <td>350,3</td>
                <td>-0,3</td>
              </tr>
              <tr>
                <td>400</td>
                <td>400,2</td>
                <td>400,2</td>
                <td>400,3</td>
                <td>400,2</td>
                <td>400,2</td>
                <td>400,3</td>
                <td>400,2</td>
                <td>-0,2</td>
              </tr>
            </table>
            <p class="mt-2">Catatan : Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan 95% <br> dengan faktor cakupan k=2</p>

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
            <p class="mt-3">F.179/03/REV.02/13.01.2016</p>
          </v-card-text>
        </v-card> -->

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>Sertifikat No. : {{no_cert}}</p>
              <p>Halaman 2 dari 2</p>
            </v-layout>

            <p class="b">b. Perhitungan Ketidakpastian</p>

            <p class="mt-3 mb-1 b"> 1. KETIDAKPASTIAN KALIBRASI TEGANGAN KELUARAN (V-DC) </p>
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
              
            <p class="mt-3 mb-1 b">2. KETIDAKPATIAN KALIBRASI ARUS DENGAN BEBAN (I-DC)</p>
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
import electricityHeader from '~/components/kelistrikan/load_bank.vue'

export default {
  components: {
    electricityHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Kelistrikan',
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
        const req = await this.$category.getLembarKerja({id: '20091089001'})

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