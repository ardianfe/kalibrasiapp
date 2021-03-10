<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <timbanganHeader></timbanganHeader>

      <v-dialog width="450px" v-model="verification_dialog">
        <v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="f-button" icon @click="verification_dialog = false"><v-icon>close</v-icon></v-btn>
          </v-card-actions>
          <v-card-text class="pt-0">
            <v-checkbox color="primary" label="Verifikasi Sub-Koordinator"></v-checkbox>
            <v-checkbox color="primary" label="Verifikasi Koordinator" readonly></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="f-button primary" @click="verification_dialog = false">Kirim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">FORM LEMBAR KERJA KALIBRASI MESH (AYAKAN)</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <p class="pointer" @click="verification_dialog=true"><span class="b">Status Verifikasi :</span> {{'Belum Terverifikasi'}}</p>

            <v-layout class="mb-2" justify-space-between row fill-height>
              <v-flex xs8>
                <v-text-field box append-icon="attach_file" label="Pilih Berkas Lembar Kerja" readonly @click:append="upload"></v-text-field> <!-- only recieve .pdf file -->
              </v-flex>
              <input type="file" name="file" id="file" hidden>
            </v-layout>
            <v-layout class="mb-2" justify-space-between row fill-height>
              <v-flex xs8>
                <v-text-field box append-icon="attach_file" label="Pilih Berkas Lampiran" readonly @click:append="upload"></v-text-field> <!-- only recieve .pdf file -->
              </v-flex>
              <input type="file" name="file" id="file" hidden>
            </v-layout>
            
            <p class="title mb-1">Data Alat</p>
            <v-layout class="mb-2" row wrap>
              <v-flex xs8 class="mb-4">
                <v-text-field label="No Sertifikat" readonly v-model="no_cert"></v-text-field>
              </v-flex>

              <v-flex xs8 class="">
                <v-text-field label="Nama Alat" v-model="certificate.equipment.name"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Kapasitas" v-model="certificate.equipment.capacity"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Tipe/Model" v-model="certificate.equipment.model"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Nomor Seri" v-model="certificate.equipment.serial_number"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Merk/Buatan" v-model="certificate.equipment.manufacture"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Pengontrol Suhu" v-model="certificate.equipment.temperature"></v-text-field>
              </v-flex>
            </v-layout>
            
            <p class="title mb-1">Pemilik</p>
            <v-layout class="mb-2" row wrap>
              <v-flex xs8 class="">
                <v-text-field label="Nama" v-model="certificate.owner.name" readonly></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Alamat" v-model="certificate.owner.address" readonly></v-text-field>
              </v-flex>
            </v-layout>

            <p class="title mb-1">Standar</p>
            <v-layout class="mb-2" row wrap>
              <v-flex xs8 class="">
                <v-text-field label="Nama" v-model="certificate.standard.name"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Ketelusuran" v-model="certificate.standard.traceability"></v-text-field>
              </v-flex>
            </v-layout>

            <p class="title mb-1">Kondisi Lingkungan</p>
            <v-layout class="mb-2" row wrap>
              <v-flex xs8 class="">
                <v-text-field label="Suhu Ruang" v-model="certificate.env_condition.room_temp"></v-text-field>
              </v-flex>
              <v-flex xs8 class="">
                <v-text-field label="Kelembaban" v-model="certificate.env_condition.humidity"></v-text-field>
              </v-flex>
            </v-layout>
            
            <p class="title mb-1">Lokasi Kalibrasi</p>
            <v-layout class="mb-2" row wrap>
              <v-flex xs8 class="">
                <v-text-field label="Lokasi" v-model="certificate.calibration_location"></v-text-field>
              </v-flex>
            </v-layout>
            
            <p class="title mb-1">Metoda Kalibrasi</p>
            <v-layout class="mb-2" row wrap>
              <v-flex xs8 class="">
                <v-text-field label="Metoda" v-model="certificate.calibration_method"></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <!-- <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI AYAKAN</p> -->

            <!-- <p class="b">No. Laporan : {{no_cert}}</p>
            <p>Data Hasil Pengamatan</p>
            <p class="mb-1">Nominal {{hp_nominal.nilai.nilai}} {{hp_nominal.nilai.satuan}}</p>
            <table width="100%" class="mb-3">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>Width Opening</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              <tr v-for="(item, index) in hp_nominal.data_table['1'].length" :key="index">
                <td>{{hp_nominal.data_table['width opening'] ? hp_nominal.data_table['width opening'][index] : ''}}</td>
                <td v-for="x in 10" :key="x">
                  {{hp_nominal.data_table[''+x] ? hp_nominal.data_table[''+x][index] : ''}}
                </td>
              </tr>
              <tr>
                <td>Rata Rata ( mm )</td>
                <td colspan="5">0.621</td>
                <td colspan="3">Persyaratan</td>
                <td>0.575</td>
                <td>0.625</td>
              </tr>
            </table>

            <p class="mb-1">Nominal {{hp_diameter.nilai.nilai}} {{hp_diameter.nilai.satuan}}</p>
            <table width="100%" class="mb-3">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>Width Opening</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              <tr v-for="(item, index) in hp_diameter.data_table['1'].length" :key="index">
                <td>{{hp_diameter.data_table['diameter of wire'] ? hp_diameter.data_table['diameter of wire'][index] : ''}}</td>
                <td v-for="x in 10" :key="x">
                  {{hp_diameter.data_table[''+x] ? hp_diameter.data_table[''+x][index] : ''}}
                </td>
              </tr>
              <tr>
                <td>Rata Rata ( mm )</td>
                <td colspan="5">0.621</td>
                <td colspan="3">Persyaratan</td>
                <td>0.340</td>
                <td>0.460</td>
              </tr>
            </table>

            <table width="100%">
              <thead>
                <tr>
                  <th>Ketidakpastian</th>
                  <th>Alat Standar</th>
                  <th>Selisih Suhu</th>
                  <th>Resolusi Profil Projec</th>
                  <th>Pengaruh Mekanik</th>
                  <th>Standar Deviasi</th>
                  <th>Uc</th>
                  <th>U95</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Width Opening <br> (um)</th>
                  <td>{{ width_opening.alat_std }}</td>
                  <td>{{ width_opening.selisih_suhu }}</td>
                  <td>{{ width_opening.resolusi_project }}</td>
                  <td>{{ width_opening.pengaruh_mekanik }}</td>
                  <td>{{ width_opening.stdv.toExponential(4) }}</td>
                  <td>{{ width_opening.uc }}</td>
                  <td>{{ width_opening.u95 }}</td>
                </tr>
                <tr>
                  <th>Diameter of Wire <br> (mm)</th>
                  <td>{{ diameter_of_wire.alat_std }}</td>
                  <td>{{ diameter_of_wire.selisih_suhu }}</td>
                  <td>{{ diameter_of_wire.resolusi_project }}</td>
                  <td>{{ diameter_of_wire.pengaruh_mekanik }}</td>
                  <td>{{ diameter_of_wire.stdv.toExponential(4) }}</td>
                  <td>{{ diameter_of_wire.uc }}</td>
                  <td>{{ diameter_of_wire.u95 }}</td>
                </tr>
              </tbody>
            </table> -->

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{data_alat.diperiksa.date}} <br>
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

      <!-- <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-right">Halaman : 1 dari 4 lembar</p>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI <br> TIMBANGAN MEKANIK INDUSTRI</p>
            <p>No. Sertifikat : 3-06-19-00319</p>
            <table class="tableizer-table">
              <tr>
                <td colspan="4">Diskripsi Alat :</td>
              </tr>
              <tr>
                <td>Merek :</td>
                <td>OHAUS</td>
                <td>Model :</td>
                <td>-</td>
              </tr>
              <tr>
                <td>No. Seri :</td>
                <td>1552585</td>
                <td>Buatan :</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>Tipe :</td>
                <td>Triple Beam</td>
                <td>Kapasitas :</td>
                <td>2610 g</td>
              </tr>
              <tr>
                <td>Daerah Skala :</td>
                <td>0 - 2610 g</td>
                <td>Divisi Skala:</td>
                <td>0,1 g</td>
              </tr>
              <tr>
                <td>Resolusi :</td>
                <td>0,1 g</td>
                <td>Suhu :</td>
                <td>28 °C</td>
              </tr>
              <tr>
                <td>Lokasi Kal :</td>
                <td>Laboratorium Beton <br> PT Multibrata Anugrah Utama</td>
                <td>Kelembaban</td>
                <td>57 %</td>
              </tr>
            </table>
            
            <table>  
              <tr>
                <td>Metoda Kalibrasi :</td>
                <td>PC-306-08</td>
              </tr>
            </table>
            
            <table>  
              <tr>
                <td>Acuan :</td>
                <td>
                  1. "The Calibration of Weights and Balances" E.C Morris,and Kitty M.K Fen, <br> NMI,Third Edition,Australia, 2010, Butir 7.
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  2. ASTM D4753-87, Standar Specification for Evaluating, <br> Selecting and specifying Balances and Scale for use in Soil and Rock Testing
                </td>
              </tr>
            </table>
            
            <table> 
              <tr>
                <td colspan="3">Alat Kalibrasi yang digunakan :</td>
              </tr>
              <tr>
                <td>Massa Standar, Kelas F1</td>
                <td>No. Seri :</td>
                <td>11117804</td>
              </tr>
              <tr>
                <td>Massa Standar, Kelas E2</td>
                <td>No. Seri :</td>
                <td>710121212</td>
              </tr>
            </table>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>No. Sertifikat : 3-06-19-00319</p>
              <p class="text-xs-right">Halaman : 2 dari 4 lembar</p>
            </v-layout>
            
            <p>1. KEMAMPUAN BACA KEMBALI</p>
            <table>
              <tr>
                <td colspan="3">Beban Nol & Skala 1/10 <br> ( 25 g )</td>
                <td colspan="3">Beban setengan & Skala setengah <br> ( 1250 g )</td>
                <td colspan="3">Beban penuh & Skala penuh <br> ( 2500 g)</td>
              </tr>
              <tr>
                <td>Nol</td>
                <td>Pembacaan</td>
                <td>Perbedaan</td>
                <td>Nol</td>
                <td>Pembacaan</td>
                <td>Perbedaan</td>
                <td>Nol</td>
                <td>Pembacaan</td>
                <td>Perbedaan</td>
              </tr>
              <tr>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
                <td>( g )</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2499,9</td>
                <td>-0,1</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,1</td>
                <td>0,1</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,1</td>
                <td>0,1</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td>0,0</td>
                <td>25,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>1250,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>2500,0</td>
                <td>0,0</td>
              </tr>
              <tr>
                <td colspan="2">Standar Deviasi ( g )</td>
                <td colspan="3">0,032</td>
                <td colspan="3">0,032</td>
                <td colspan="3">0,032</td>
              </tr>
              <tr>
                <td colspan="2">Perbedaan maks <br>antara pembacaan <br>berikutnya, rmaks (g)</td>
                <td colspan="3">0,1</td>
                <td colspan="3">0,1</td>
                <td colspan="3">0,1</td>
              </tr>
            </table>
              
            <p class="mt-3">Nilai Maksimum dari standar deviasi = 0,032 g</p>
            <p>Std.dev=(E(ri-r)2/(n-1)1/2</p>
            <p>Keterangan : 1,...............................n</p>

            <p class="mb-0">ri = mi - zi</p>
            <p class="mb-0">r = nilai rata-rata dari r</p>
            <p class="mb-0">n = Jumlah Pembacaan</p>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <v-layout align-center justify-space-between row fill-height>
              <p>No. Sertifikat : 3-06-19-00319</p>
              <p class="text-xs-right">Halaman : 3 dari 4 lembar</p>
            </v-layout>

            <p>2. KESALAHAN LINIER</p>            
            <table class="text-xs-center">
              <thead class="b">
                <tr>
                  <td rowspan="2">No</td>
                  <td colspan="2">Nilai Massa Yang digunakan</td>
                  <td rowspan="2">Beban diatas pan</td>
                  <td rowspan="2">pembacaan</td>
                  <td rowspan="2">rata-rata</td>
                  <td rowspan="2">Perbedaan</td>
                  <td rowspan="2">Koreksi</td>
                  <td rowspan="2">Ketidakpastian</td>
                </tr>
                <tr>
                  <td>Nilai Sebenarnya</td>
                  <td>Ketidakpastian</td>
                </tr>
                <tr>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                  <td>( g )</td>
                </tr>
              </thead>
              <tr>
                <td rowspan="6">20</td>
                <td rowspan="6">20,00005</td>
                <td rowspan="6">0,000047</td>
                <td rowspan="3">0,0</td>
                <td rowspan="2">0,0</td>
                <td rowspan="3">0,0</td>
              </tr>
              <tr>
                <td rowspan="2">20,1</td>
                <td rowspan="6">20,1</td>
                <td rowspan="6">-0,1</td>
                <td rowspan="6">0,1</td>
              </tr>
              <tr>
                <td rowspan="3">20,0</td>
                <td rowspan="2">20,1</td>
              </tr>
              <tr>
                <td>20,1</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
              
            <table>
              <tr>
                <td rowspan="6">200</td>
                <td>200,00021</td>
                <td>0,000190</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>200,0</td>
                <td>&nbsp;</td>
                <td>200,0</td>
                <td>0,0</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>200,0</td>
                <td>200,0</td>
                <td>200,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>200,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="6">500</td>
                <td>500,00060</td>
                <td>0,000480</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>0,2</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>500,0</td>
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>499,8</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td rowspan="6">1000</td>
                <td>1000,00060</td>
                <td>0,000990</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>0,0</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1000,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>0,0</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>2000</td>
                <td>1999,99785</td>
                <td>0,000240</td>
                <td>&nbsp;</td>
                <td>1999,9</td>
                <td>&nbsp;</td>
                <td>1999,9</td>
                <td>0,1</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>2000,0</td>
                <td>1999,9</td>
                <td>1999,9</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
              
            <table>
              <tr>
                <td>Koreksi minimum =</td>
                <td>&nbsp;</td>
                <td>-0,1</td>
                <td>harga mutlak dari koreksi minimum =</td>
                <td>&nbsp;</td>
                <td>0,1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Koreksi maksimum =</td>
                <td>&nbsp;</td>
                <td>0,2</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  Umaks = 2 ((ómaks)2/k + (ustd/2)2) + (1/2xResolusi)/ 3)2 )1/2
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>ustd = Ketidakpastian dari massa standar</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>= (u1+ u2+.................ui) /2</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  ó = Nilai maksimum dari standar deviasi dari kemampuan baca kembali
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>k = Jumlah pembacaan</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Nilai Koreksi maksimum (Q)= g</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0,2</td>
                <td>g</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Nilai Ketidakpastian maksimum (Umaks) = ±</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0,1</td>
                <td>g</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </v-card-text>
        </v-card>
      </v-layout> -->
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
    margin-top: 24px;
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import timbanganHeader from '~/components/timbangan/timbangan_mekanik_industri.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    timbanganHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Timbangan',
    meta: [
      {
        hid: 'Timbangan',
        name: 'Timbangan',
        content: 'Bidang Timbangan'
      }
    ],
  },

  data: () => ({
    no_cert: '3-09-10-0490',
    data_alat: {
      dikalibrasi: {
        date: "",
        person: ""
      },
      diperiksa: {
        date: "",
        person: ""
      }
    },

    verification_dialog: false,

    certificate: {
      equipment: {
        name: '',
        capacity: '',
        model: '',
        serial_number: '',
        manufacture: '',
        internal_dimension: '',
        temperature: '',
        others: '-',
      },
      owner: {
        name: '',
        address: ''
      },
      standard: {
        name: '',
        traceability: ''
      },
      acceptance_date: '',
      calibration_date: '',
      env_condition: {
        room_temp: '',
        corrected_room_temp: '',
        humidity: '',
        corrected_humidity: ''
      },
      calibration_location: '',
      calibration_method: '',
      refference: '',
      result: '',
      published_date: '',
      director_name: '',
      director_nip: '',
    },
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
        // this.hp_nominal = req_data.data_kal.hp_nominal
        // this.hp_diameter = req_data.data_kal.hp_diameter

        // this.width_opening = req_data.data_ktp.width_opening
        // this.diameter_of_wire = req_data.data_ktp.diameter_of_wire

        this.elementMapping(req_data.data_alat, req_data.data_co)
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    upload(){
      alert('test')
    },

    elementMapping(data, owner) {
      this.certificate.equipment.name = data.deskripsi.nama_alat
      this.certificate.equipment.capacity = data.deskripsi.kapasitas
      this.certificate.equipment.model = data.deskripsi.tipe_model
      this.certificate.equipment.serial_number = data.deskripsi.no_seri
      this.certificate.equipment.manufacture = data.deskripsi.buatan
      this.certificate.equipment.temperature = '-'
      this.certificate.owner.name = owner.nama_co
      this.certificate.owner.address = owner.alamat
      this.certificate.standard.name = data.alat_kalibrasi
      this.certificate.standard.traceability = 'Hasil kalibrasi yang dilaporkan tertelusur ke satuan pengukuran SI melalui Puslit KIM LIPI Serpong'
      this.certificate.env_condition = {
        room_temp: data.deskripsi.suhu_terkoreksi.min.toFixed(2) + ' - ' + data.deskripsi.suhu_terkoreksi.max.toFixed(2) + ' ' + data.deskripsi.suhu_terkoreksi.satuan,
        corrected_room_temp: '',
        humidity: data.deskripsi.kelembaban_terkoreksi.nilai.toFixed(2) + ' %',
        corrected_humidity: ''
      }
      this.certificate.acceptance_date = this.convertDate(data.tgl_diterima)
      this.certificate.calibration_date = this.convertDate(data.dikalibrasi.date)
      // this.certificate.env_condition.room_temp = cert_data
      // this.certificate.env_condition.humidity = cert_data
      this.certificate.calibration_location = data.deskripsi.lokasi
      this.certificate.calibration_method = data.metode_kalibrasi
      this.certificate.refference = data.standar_acuan
      this.certificate.published_date = ''
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