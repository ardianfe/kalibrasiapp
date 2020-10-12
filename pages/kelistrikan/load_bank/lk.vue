<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <electricityHeader></electricityHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>Sertifikat No. : 3-12-18-0013</p>
              <p>Halaman 1 dari 3</p>
            </v-layout>

            <p class="text-xs-center b title my-4">LEMBAR KERJA PORTABLE LOAD BANK</p>

            <table class="no-grid">
              <tr>
                <td class="td-no-grid" colspan="9">Nama Alat</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="51">PORTABEL LOAD BANK</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Rentang</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">0 s/d 750 A, Res. 1 A</td>
                <td class="td-no-grid" colspan="12">Alat Standar</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="22">1. Clamp Meter Digital, YOKOGAWA/CL 255</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="10"></td>
                <td class="td-no-grid" colspan="16">20 s/d 40 V, Res. 0,1 V</td>
                <td class="td-no-grid" colspan="13"> </td>
                <td class="td-no-grid" colspan="22">s/n: TKG 2059, Japan</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Tipe/Model</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">902804-01-2</td>
                <td class="td-no-grid" colspan="13">&nbsp;</td>
                <td class="td-no-grid" colspan="22">2. True RMS Clamp Meters</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Merek</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">MILLER ELECTRIC </td>
                <td class="td-no-grid" colspan="13">&nbsp;</td>
                <td class="td-no-grid" colspan="22">    s/n: 376/26240014WS, USA</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="60">&nbsp;</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">No. Seri</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">LC 391251</td>
                <td class="td-no-grid" colspan="12">Suhu ruang</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="22">27 ± 2  °C, Kelembaban : 58 ± 2 %RH</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Buatan </td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="16">USA</td>
                <td class="td-no-grid" colspan="12">Lokasi Kalibrasi</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="22">Workshop Diklat B4T Bandung</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Standar Acuan</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="51">BS 7570: 2000, Code of Practice for Validation of Arc Welding Equipment.</td>
              </tr>
              <tr>
                <td class="td-no-grid" colspan="9">Metoda Kalibrasi</td>
                <td class="td-no-grid">:</td>
                <td class="td-no-grid" colspan="51">PC-314-02</td>
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
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
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
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>Sertifikat No. : 3-12-18-0013</p>
              <p>Halaman 3 dari 3</p>
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
              <tr>
                <td>Standar</td>
                <td align="center">V</td>
                <td align="center">Normal</td>
                <td align="center">0.0077</td>
                <td align="center">2</td>
                <td align="center">0.0039</td>
                <td align="center">1</td>
                <td align="center">0.0039</td>
                <td align="center">0.00001</td>
              </tr>
              <tr>
                <td>Drift Standar</td>
                <td align="center">V</td>
                <td align="center">Rectangular</td>
                <td align="center">0.0001</td>
                <td align="center">1.732</td>
                <td align="center">0.0001</td>
                <td align="center">1</td>
                <td align="center">0.0001</td>
                <td align="center">0.00000</td>
              </tr>
              <tr>
                <td>Res. Alat</td>
                <td align="center">V</td>
                <td align="center">Rectangular</td>
                <td align="center">0.1</td>
                <td align="center">1.732</td>
                <td align="center">0.0577</td>
                <td align="center">1</td>
                <td align="center">0.0577</td>
                <td align="center">0.00333</td>
              </tr>
              <tr>
                <td>Daya Ulang</td>
                <td align="center">V</td>
                <td align="center">Rectangular</td>
                <td align="center">0.058</td>
                <td align="center">1.732</td>
                <td align="center">0.0336</td>
                <td align="center">1</td>
                <td align="center">0.0336</td>
                <td align="center">0.00113</td>
              </tr>
              <tr>
                <td>Fitting</td>
                <td align="center">V</td>
                <td align="center">Rectangular</td>
                <td align="center">0.049</td>
                <td align="center">1.732</td>
                <td align="center">0.0280</td>
                <td align="center">1</td>
                <td align="center">0.0280</td>
                <td align="center">0.00079</td>
              </tr>
              <tr>
                <td colspan="7">Jumlah</td>
                <td colspan="2" align="center">0.005</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian baku gabungan, uc, V</td>
                <td colspan="2" align="center">0.07</td>
              </tr>
              <tr>
                <td colspan="7">Faktor cakupan, k untuk Veff & CL 95%</td>
                <td colspan="2" align="center">2</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian bentangan, U = k.uc,</td>
                <td align="center">0.15 V</td>
                <td align="center">0.32 %</td>
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
              <tr>
                <td>Standar</td>
                <td align="center">A</td>
                <td align="center">Normal</td>
                <td align="center">1.0</td>
                <td align="center">2</td>
                <td align="center">0.5000</td>
                <td align="center">1</td>
                <td align="center">0.5000</td>
                <td align="center">0.25000</td>
              </tr>
              <tr>
                <td>Drift Standar</td>
                <td align="center">A</td>
                <td align="center">Rectangular</td>
                <td align="center">1.2</td>
                <td align="center">1.732</td>
                <td align="center">0.6928</td>
                <td align="center">1</td>
                <td align="center">0.6928</td>
                <td align="center">0.48000</td>
              </tr>
              <tr>
                <td>Res. Alat</td>
                <td align="center">A</td>
                <td align="center">Rectangular</td>
                <td align="center">1.0</td>
                <td align="center">1.732</td>
                <td align="center">0.5774</td>
                <td align="center">1</td>
                <td align="center">0.5774</td>
                <td align="center">0.33333</td>
              </tr>
              <tr>
                <td>Daya Ulang</td>
                <td align="center">A</td>
                <td align="center">Rectangular</td>
                <td align="center">0.12</td>
                <td align="center">1.732</td>
                <td align="center">0.0667</td>
                <td align="center">1</td>
                <td align="center">0.0667</td>
                <td align="center">0.00444</td>
              </tr>
              <tr>
                <td>Fitting</td>
                <td align="center">A</td>
                <td align="center">Rectangular</td>
                <td align="center">0.089</td>
                <td align="center">1.732</td>
                <td align="center">0.0512</td>
                <td align="center">1</td>
                <td align="center">0.0512</td>
                <td align="center">0.00262</td>
              </tr>
              <tr>
                <td colspan="7">Jumlah</td>
                <td colspan="2" align="center">1.070</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian baku gabungan, uc, V</td>
                <td colspan="2" align="center">1.0</td>
              </tr>
              <tr>
                <td colspan="7">Faktor cakupan, k untuk Veff & CL 95%</td>
                <td colspan="2" align="center">2</td>
              </tr>
              <tr>
                <td colspan="7">Ketidakpastian bentangan, U = k.uc, A</td>
                <td align="center">2.1 A</td>
                <td align="center">0.60 %</td>
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
import durometer from '~/static/durometer.json'

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
    no_cert: '3-09-10-0490',
    equipment: {
      name : '',
      capacity : '',
      brand : '',
      serial_number : '',
      type : '',
      made_in : '',
      location : '',
      temperature : '',
      standard : '',
      methods : '',
    },

    hk: {
      d_min: [0,0],
      d_max: [0,0],
      h_minumum: 401,
      h_rata_rata: 401.6,
      hasil: {
        unnamed7: [],
        unnamed9: [],
        unnamed11: [],
        unnamed13: [],
      }
    }
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }

    this.cekCORS()

    console.log('cal?', durometer);
    var data = durometer.result[0].data_alat
    this.equipment.name = data['Deskripsi Alat']
    this.equipment.capacity = data['Kapasitas']
    this.equipment.brand = data['Merek']
    this.equipment.serial_number = data['No Seri']
    this.equipment.type = data['Tipe']
    this.equipment.made_in = data['Buatan']
    this.equipment.location = data['Lokasi Kalibrasi']
    this.equipment.temperature = data['Suhu']
    this.equipment.standard = data['Standar acuan']
    this.equipment.methods = data['Metoda verifikasi']

    console.log('eq ', this.equipment);

    this.ketidakpastian = durometer.result

    // this.hk.d_min = durometer.result[0].data_kal.d_minimum_1
    // this.hk.d_max = durometer.result[0].data_kal.d_maksimum_1

    // this.hk.hasil.unnamed7 = durometer.result[0].data_kal.hk1['Unnamed: 7']
    // this.hk.hasil.unnamed9 = durometer.result[0].data_kal.hk1['Unnamed: 9']
    // this.hk.hasil.unnamed11 = durometer.result[0].data_kal.hk1['Unnamed: 11']
    // this.hk.hasil.unnamed13 = durometer.result[0].data_kal.hk1['Unnamed: 13']
  },

  methods: {
    async cekCORS() {
      try {
        const req = await this.$calibrate.testCors()

        console.log('test cors', req);
      } catch (error) {
        console.log('cek cors :', error.response);
      }
    },
    fileSelected(e) {
      var reader = new FileReader();
      console.log(e.target.files[0]);
      this.filename = e.target.files[0].name
      this.file = e.target.files[0]
    },

    async fileUpload() {
      this.uploading = true
      try {
        const req = await this.$calibrate.uploadFile({
          file: this.file,
          category: this.selected
        })

        // console.log(this.file);

        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
        
      } catch (error) {
        alert('gagal mengupload file')
        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
      }
    },

    sheetPush(id, name, str) {
      this.sheets.push({'id': id, 'name': name, 'htmlstr': str})
      // document.getElementById(''+id).innerHTML += str;
    },

    createElement() {
      for (const key in this.sheets) {
        if (this.sheets.hasOwnProperty(key)) {
          const element = this.sheets[key];
          
          document.getElementById(''+element.id).innerHTML += element.htmlstr;
          console.log(document.getElementById(element.id));
        }
      }

      let tds = document.querySelectorAll('td')
      // console.log(tds);
      tds.remove()
      
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World"
}
</script>