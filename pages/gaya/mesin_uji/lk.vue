<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI MESIN UJI UNIVERSAL</p>

            <p>No. Sertifikat: 3-09-18-0157</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat['Deskripsi Alat'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat['Tipe'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat['Merek'] }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat['Kapasitas'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat['No Seri'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat['Buatan'] }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat['Lokasi Kalibrasi'] }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ data_alat['Suhu Ruangan'] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan : {{ data_alat['Kelembapan'] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan Terkoreksi : {{ data_alat['Suhu Terkoreksi'] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan Terkoreksi : {{ data_alat['Kelembapan Terkoreksi'] }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: {{ data_alat['Alat Kalibrasi yang digunakan'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat['Metoda Kalibrasi'] }}</p>
                </v-layout>
                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ data_alat['Standar acuan'] }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Dikondisikan tanggal : {{data_alat['Tanggal kalibrasi']}}</p>
                </v-layout>
                
              </v-flex>
            </v-layout>
            
            <table cellspacing="0" border="0" style="font-size: 9pt; max-width: 100%">
              <tr>
                <th colspan="13">Pemeriksaan Indikator Pengukur Gaya</th>
              </tr>
              <tr>
                <th colspan="3">Pembacaan Mesin</th>
                <th colspan="3">Pembacaan Alat Verifikasi</th>
                <th colspan="2">Gaya Sebenarnya</th>
                <th colspan="5">Posisi :   Tekan</th>
              </tr>
              <tr>
                <td colspan="3">Julat Ukur (FN):0- 1000 kN</td>
                <td colspan="3">Resolusi (r):1 Digit = 0.5 kN</td>
                <td colspan="2">Suhu (t) : 25,0 - 25,4 &deg;C</td>
                <td colspan="4">Kesalahan Relatif</td>
                <td>Ketidakpastian</td>
              </tr>
              <tr>
                <td>Saat Pemberian Gaya</td>
                <td>Rata-rata</td>
                <td>Setelah Pemberian Gaya</td>
                <td>Sebenarnya</td>
                <td>Koreksi Nol 23.1</td>
                <td>Koreksi Suhu 25.2</td>
                <td>Individual</td>
                <td>Rata-rata</td>
                <td>Ketelitian</td>
                <td>Mampu Ulang</td>
                <td>Pengulangan Balik</td>
                <td>Nol</td>
                <td>Standar Deviasi</td>
              </tr>
              <tr>
                <td>(kN)</td>
                <td>(kN)</td>
                <td>(kN)</td>
                <td>(DIVISI)</td>
                <td>(DIVISI)</td>
                <td>(Divisi)</td>
                <td>(kN)</td>
                <td>(kN)</td>
                <td>%</td>
                <td>%</td>
                <td>%</td>
                <td>%</td>
                <td>%</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="-11" sdnum="1033;">-11</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="100" sdnum="1033;">100</td>
                <td align="right" valign=bottom sdval="100" sdnum="1033;">100</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="367.7" sdnum="1033;">367.7</td>
                <td align="right" valign=bottom sdval="378.7" sdnum="1033;">378.7</td>
                <td align="right" valign=bottom sdval="378.49" sdnum="1033;">378.49</td>
                <td align="right" valign=bottom sdval="99.29" sdnum="1033;">99.29</td>
                <td align="right" valign=bottom sdval="99.41" sdnum="1033;">99.41</td>
                <td align="right" valign=bottom sdval="0.59" sdnum="1033;">0.59</td>
                <td align="right" valign=bottom sdval="0.18" sdnum="1033;">0.18</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.06036" sdnum="1033;">0.06036</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="200" sdnum="1033;">200</td>
                <td align="right" valign=bottom sdval="200" sdnum="1033;">200</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="754.8" sdnum="1033;">754.8</td>
                <td align="right" valign=bottom sdval="765.8" sdnum="1033;">765.8</td>
                <td align="right" valign=bottom sdval="765.366" sdnum="1033;">765.366</td>
                <td align="right" valign=bottom sdval="199.34" sdnum="1033;">199.34</td>
                <td align="right" valign=bottom sdval="199.55" sdnum="1033;">199.55</td>
                <td align="right" valign=bottom sdval="0.23" sdnum="1033;">0.23</td>
                <td align="right" valign=bottom sdval="0.16" sdnum="1033;">0.16</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.05178" sdnum="1033;">0.05178</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="-11" sdnum="1033;">-11</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="300" sdnum="1033;">300</td>
                <td align="right" valign=bottom sdval="300" sdnum="1033;">300</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="346" sdnum="1033;">346</td>
                <td align="right" valign=bottom sdval="346" sdnum="1033;">346</td>
                <td align="right" valign=bottom sdval="3.458" sdnum="1033;">3.458</td>
                <td align="right" valign=bottom sdval="301.17" sdnum="1033;">301.17</td>
                <td align="right" valign=bottom sdval="300.18" sdnum="1033;">300.18</td>
                <td align="right" valign=bottom sdval="-0.06" sdnum="1033;">-0.06</td>
                <td align="right" valign=bottom sdval="0.58" sdnum="1033;">0.58</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.17285" sdnum="1033;">0.17285</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="400" sdnum="1033;">400</td>
                <td align="right" valign=bottom sdval="400" sdnum="1033;">400</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="461" sdnum="1033;">461</td>
                <td align="right" valign=bottom sdval="461" sdnum="1033;">461</td>
                <td align="right" valign=bottom sdval="4.607" sdnum="1033;">4.607</td>
                <td align="right" valign=bottom sdval="401.8" sdnum="1033;">401.8</td>
                <td align="right" valign=bottom sdval="401.39" sdnum="1033;">401.39</td>
                <td align="right" valign=bottom sdval="-0.35" sdnum="1033;">-0.35</td>
                <td align="right" valign=bottom sdval="0.22" sdnum="1033;">0.22</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.06373" sdnum="1033;">0.06373</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="500" sdnum="1033;">500</td>
                <td align="right" valign=bottom sdval="500" sdnum="1033;">500</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="574.5" sdnum="1033;">574.5</td>
                <td align="right" valign=bottom sdval="574.5" sdnum="1033;">574.5</td>
                <td align="right" valign=bottom sdval="5.742" sdnum="1033;">5.742</td>
                <td align="right" valign=bottom sdval="501.31" sdnum="1033;">501.31</td>
                <td align="right" valign=bottom sdval="501.31" sdnum="1033;">501.31</td>
                <td align="right" valign=bottom sdval="-0.26" sdnum="1033;">-0.26</td>
                <td align="right" valign=bottom sdval="0.18" sdnum="1033;">0.18</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.05067" sdnum="1033;">0.05067</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="600" sdnum="1033;">600</td>
                <td align="right" valign=bottom sdval="600" sdnum="1033;">600</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="686.8" sdnum="1033;">686.8</td>
                <td align="right" valign=bottom sdval="686.8" sdnum="1033;">686.8</td>
                <td align="right" valign=bottom sdval="6.864" sdnum="1033;">6.864</td>
                <td align="right" valign=bottom sdval="599.79" sdnum="1033;">599.79</td>
                <td align="right" valign=bottom sdval="599.9" sdnum="1033;">599.9</td>
                <td align="right" valign=bottom sdval="0.02" sdnum="1033;">0.02</td>
                <td align="right" valign=bottom sdval="0.03" sdnum="1033;">0.03</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.00945" sdnum="1033;">0.00945</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="700" sdnum="1033;">700</td>
                <td align="right" valign=bottom sdval="700" sdnum="1033;">700</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="799.5" sdnum="1033;">799.5</td>
                <td align="right" valign=bottom sdval="799.5" sdnum="1033;">799.5</td>
                <td align="right" valign=bottom sdval="7.99" sdnum="1033;">7.99</td>
                <td align="right" valign=bottom sdval="698.72" sdnum="1033;">698.72</td>
                <td align="right" valign=bottom sdval="699.01" sdnum="1033;">699.01</td>
                <td align="right" valign=bottom sdval="0.14" sdnum="1033;">0.14</td>
                <td align="right" valign=bottom sdval="0.06" sdnum="1033;">0.06</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.02098" sdnum="1033;">0.02098</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="913.5" sdnum="1033;">913.5</td>
                <td align="right" valign=bottom sdval="913.5" sdnum="1033;">913.5</td>
                <td align="right" valign=bottom sdval="9.13" sdnum="1033;">9.13</td>
                <td align="right" valign=bottom sdval="799" sdnum="1033;">799</td>
                <td align="right" valign=bottom sdval="799.29" sdnum="1033;">799.29</td>
                <td align="right" valign=bottom sdval="0.09" sdnum="1033;">0.09</td>
                <td align="right" valign=bottom sdval="0.06" sdnum="1033;">0.06</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.01835" sdnum="1033;">0.01835</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="900" sdnum="1033;">900</td>
                <td align="right" valign=bottom sdval="900" sdnum="1033;">900</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="1027.6" sdnum="1033;">1027.6</td>
                <td align="right" valign=bottom sdval="1027.6" sdnum="1033;">1027.6</td>
                <td align="right" valign=bottom sdval="10.27" sdnum="1033;">10.27</td>
                <td align="right" valign=bottom sdval="899.38" sdnum="1033;">899.38</td>
                <td align="right" valign=bottom sdval="899.91" sdnum="1033;">899.91</td>
                <td align="right" valign=bottom sdval="0.01" sdnum="1033;">0.01</td>
                <td align="right" valign=bottom sdval="0.14" sdnum="1033;">0.14</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0.04066" sdnum="1033;">0.04066</td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="-11" sdnum="1033;">-11</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="100" sdnum="1033;">100</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="368.4" sdnum="1033;">368.4</td>
                <td align="right" valign=bottom sdval="379.4" sdnum="1033;">379.4</td>
                <td align="right" valign=bottom sdval="379.185" sdnum="1033;">379.185</td>
                <td align="right" valign=bottom sdval="99.47" sdnum="1033;">99.47</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="200" sdnum="1033;">200</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="756" sdnum="1033;">756</td>
                <td align="right" valign=bottom sdval="767" sdnum="1033;">767</td>
                <td align="right" valign=bottom sdval="766.565" sdnum="1033;">766.565</td>
                <td align="right" valign=bottom sdval="199.65" sdnum="1033;">199.65</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="-11" sdnum="1033;">-11</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="300" sdnum="1033;">300</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="344.6" sdnum="1033;">344.6</td>
                <td align="right" valign=bottom sdval="344.6" sdnum="1033;">344.6</td>
                <td align="right" valign=bottom sdval="3.444" sdnum="1033;">3.444</td>
                <td align="right" valign=bottom sdval="299.94" sdnum="1033;">299.94</td>
                <td align="right" valign=bottom sdval="0.02" sdnum="1033;">0.02</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="400" sdnum="1033;">400</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="460.6" sdnum="1033;">460.6</td>
                <td align="right" valign=bottom sdval="460.6" sdnum="1033;">460.6</td>
                <td align="right" valign=bottom sdval="4.603" sdnum="1033;">4.603</td>
                <td align="right" valign=bottom sdval="401.45" sdnum="1033;">401.45</td>
                <td align="right" valign=bottom sdval="-0.36" sdnum="1033;">-0.36</td>
                <td align="right" valign=bottom sdval="-0.36" sdnum="1033;">-0.36</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="500" sdnum="1033;">500</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="575" sdnum="1033;">575</td>
                <td align="right" valign=bottom sdval="575" sdnum="1033;">575</td>
                <td align="right" valign=bottom sdval="5.747" sdnum="1033;">5.747</td>
                <td align="right" valign=bottom sdval="501.75" sdnum="1033;">501.75</td>
                <td align="right" valign=bottom sdval="-0.35" sdnum="1033;">-0.35</td>
                <td align="right" valign=bottom sdval="-0.35" sdnum="1033;">-0.35</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="600" sdnum="1033;">600</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="687" sdnum="1033;">687</td>
                <td align="right" valign=bottom sdval="687" sdnum="1033;">687</td>
                <td align="right" valign=bottom sdval="6.866" sdnum="1033;">6.866</td>
                <td align="right" valign=bottom sdval="599.96" sdnum="1033;">599.96</td>
                <td align="right" valign=bottom sdval="0.01" sdnum="1033;">0.01</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="700" sdnum="1033;">700</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td align="right" valign=bottom sdval="7.995" sdnum="1033;">7.995</td>
                <td align="right" valign=bottom sdval="699.16" sdnum="1033;">699.16</td>
                <td align="right" valign=bottom sdval="0.12" sdnum="1033;">0.12</td>
                <td align="right" valign=bottom sdval="0.12" sdnum="1033;">0.12</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="914" sdnum="1033;">914</td>
                <td align="right" valign=bottom sdval="914" sdnum="1033;">914</td>
                <td align="right" valign=bottom sdval="9.135" sdnum="1033;">9.135</td>
                <td align="right" valign=bottom sdval="799.44" sdnum="1033;">799.44</td>
                <td align="right" valign=bottom sdval="0.07" sdnum="1033;">0.07</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="900" sdnum="1033;">900</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="1029" sdnum="1033;">1029</td>
                <td align="right" valign=bottom sdval="1029" sdnum="1033;">1029</td>
                <td align="right" valign=bottom sdval="10.284" sdnum="1033;">10.284</td>
                <td align="right" valign=bottom sdval="900.61" sdnum="1033;">900.61</td>
                <td align="right" valign=bottom sdval="-0.07" sdnum="1033;">-0.07</td>
                <td align="right" valign=bottom sdval="-0.07" sdnum="1033;">-0.07</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="-11" sdnum="1033;">-11</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="100" sdnum="1033;">100</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="368.4" sdnum="1033;">368.4</td>
                <td align="right" valign=bottom sdval="379.4" sdnum="1033;">379.4</td>
                <td align="right" valign=bottom sdval="379.185" sdnum="1033;">379.185</td>
                <td align="right" valign=bottom sdval="99.47" sdnum="1033;">99.47</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="200" sdnum="1033;">200</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="756" sdnum="1033;">756</td>
                <td align="right" valign=bottom sdval="767" sdnum="1033;">767</td>
                <td align="right" valign=bottom sdval="766.565" sdnum="1033;">766.565</td>
                <td align="right" valign=bottom sdval="199.65" sdnum="1033;">199.65</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="-11" sdnum="1033;">-11</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="300" sdnum="1033;">300</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="344" sdnum="1033;">344</td>
                <td align="right" valign=bottom sdval="344" sdnum="1033;">344</td>
                <td align="right" valign=bottom sdval="3.438" sdnum="1033;">3.438</td>
                <td align="right" valign=bottom sdval="299.42" sdnum="1033;">299.42</td>
                <td align="right" valign=bottom sdval="0.19" sdnum="1033;">0.19</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="400" sdnum="1033;">400</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="460" sdnum="1033;">460</td>
                <td align="right" valign=bottom sdval="460" sdnum="1033;">460</td>
                <td align="right" valign=bottom sdval="4.597" sdnum="1033;">4.597</td>
                <td align="right" valign=bottom sdval="400.92" sdnum="1033;">400.92</td>
                <td align="right" valign=bottom sdval="-0.23" sdnum="1033;">-0.23</td>
                <td align="right" valign=bottom sdval="-0.23" sdnum="1033;">-0.23</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="500" sdnum="1033;">500</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="574" sdnum="1033;">574</td>
                <td align="right" valign=bottom sdval="574" sdnum="1033;">574</td>
                <td align="right" valign=bottom sdval="5.737" sdnum="1033;">5.737</td>
                <td align="right" valign=bottom sdval="500.87" sdnum="1033;">500.87</td>
                <td align="right" valign=bottom sdval="-0.17" sdnum="1033;">-0.17</td>
                <td align="right" valign=bottom sdval="-0.17" sdnum="1033;">-0.17</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="600" sdnum="1033;">600</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="687" sdnum="1033;">687</td>
                <td align="right" valign=bottom sdval="687" sdnum="1033;">687</td>
                <td align="right" valign=bottom sdval="6.866" sdnum="1033;">6.866</td>
                <td align="right" valign=bottom sdval="599.96" sdnum="1033;">599.96</td>
                <td align="right" valign=bottom sdval="0.01" sdnum="1033;">0.01</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="700" sdnum="1033;">700</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td align="right" valign=bottom sdval="7.995" sdnum="1033;">7.995</td>
                <td align="right" valign=bottom sdval="699.16" sdnum="1033;">699.16</td>
                <td align="right" valign=bottom sdval="0.12" sdnum="1033;">0.12</td>
                <td align="right" valign=bottom sdval="0.12" sdnum="1033;">0.12</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="800" sdnum="1033;">800</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="914" sdnum="1033;">914</td>
                <td align="right" valign=bottom sdval="914" sdnum="1033;">914</td>
                <td align="right" valign=bottom sdval="9.135" sdnum="1033;">9.135</td>
                <td align="right" valign=bottom sdval="799.44" sdnum="1033;">799.44</td>
                <td align="right" valign=bottom sdval="0.07" sdnum="1033;">0.07</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="900" sdnum="1033;">900</td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="1028" sdnum="1033;">1028</td>
                <td align="right" valign=bottom sdval="1028" sdnum="1033;">1028</td>
                <td align="right" valign=bottom sdval="10.274" sdnum="1033;">10.274</td>
                <td align="right" valign=bottom sdval="899.73" sdnum="1033;">899.73</td>
                <td align="right" valign=bottom sdval="0.03" sdnum="1033;">0.03</td>
                <td align="right" valign=bottom sdval="0.03" sdnum="1033;">0.03</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td align="right" valign=bottom sdval="0" sdnum="1033;">0</td>
                <td><br></td>
              </tr>
              <tr>
                <td colspan="13">Resolusi relatif (a) 	:	0.50	%</td>
              </tr>
            </table>
          </v-card-text>

          <v-card-text>
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : Aji MS <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Agung Tri S S <br>
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
    border-collapse: collapse;
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  } .no-border {
    border: 0px !important;
  }
</style>

<script>
import gayaHeader from '~/components/gaya/mesin_uji.vue'
export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '3-09-10-0490',
    data_alat: {},

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
  document.getElementById(id).innerHTML = "Hello World";
}
</script>