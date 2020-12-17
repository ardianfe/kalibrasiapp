<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <volHeader></volHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI LABU UKUR</p>

            <p>No. Sertifikat : {{no_cert}}</p>
            <v-layout row wrap>
              <table>
                <tbody>
                  <tr>
                    <td colspan="4">Diskripsi Alat</td>
                  </tr>
                  <tr>
                    <td width="20%">Kapasitas Nominal :</td>
                    <td width="30%">{{data_alat.deskripsi.kapasitas}} ml</td>
                  </tr>
                  <tr>
                    <td>Skala Subdivisi :</td>
                    <td>{{data_alat.deskripsi.skala}} ml</td>
                    <td>Suhu vesel :</td>
                    <td>{{data_alat.deskripsi.suhu_vesel}} °C</td>
                  </tr>
                  <tr>
                    <td>Kelas/Toleransi :</td>
                    <td>{{data_alat.deskripsi.kelas_toleransi[0]}} /± {{data_alat.deskripsi.kelas_toleransi[1]}} ml</td>
                    <td>Waktu alir :</td>
                    <td>{{data_alat.deskripsi.waktu_alir}}</td>
                  </tr>
                  <tr>
                    <td rowspan="2">Toleransi acuan :</td>
                    <td>Kelas A :± {{data_alat.deskripsi.toleransi_acuan.KelasA}} ml</td>
                    <td>Bahan :</td>
                    <td>{{data_alat.deskripsi.bahan}}</td>
                  </tr>
                  <tr>
                    <td>Kelas B :± {{data_alat.deskripsi.toleransi_acuan.KelasB}} ml</td>
                    <td>Koefesien muai panas kubik bahan (J) :</td>
                    <td>{{ktp_poripropilen}} /°C</td>
                  </tr>
                  <tr>
                    <td>Merek/Buatan :</td>
                    <td>{{data_alat.deskripsi.merk_Buatan}}</td>
                    <td>Lokasi Kalibrasi :</td>
                    <td>{{data_alat.lokasi}}</td>
                  </tr>
                  <tr>
                    <td>No.Seri :</td>
                    <td>{{data_alat.deskripsi.no_seri}}</td>
                  </tr>
                  <tr>
                    <td>Metoda Kalibrasi :</td>
                    <td colspan="3">{{data_alat.metode_kalibrasi}}</td>
                  </tr>
                  <tr>
                    <td rowspan="2">Standar Acuan :</td>
                    <td colspan="3">{{data_alat.standar_acuan[0]}}</td>
                  </tr>
                  <tr>
                    <td colspan="3">{{data_alat.standar_acuan[1]}}</td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" class="mt-3">
                <thead>
                  <tr>
                    <td class="b" colspan="4">Alat kalibrasi yang digunakan :</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. {{data_alat.alat_kalibrasi.alat1}},</td>
                    <td>No.seri  :</td>
                    <td>{{data_alat.alat_kalibrasi.value1}}</td>
                  </tr>
                  <tr>
                    <td>2. {{data_alat.alat_kalibrasi.alat2}},</td>
                    <td>No.seri  :</td>
                    <td>{{data_alat.alat_kalibrasi.value2}}</td>
                  </tr>
                  <tr>
                    <td>3. {{data_alat.alat_kalibrasi.alat3}},</td>
                    <td>No.seri  :</td>
                    <td>{{data_alat.alat_kalibrasi.value3}}</td>
                  </tr>
                  <tr>
                    <td>4. {{data_alat.alat_kalibrasi.alat4}}, </td>
                    <td>No.seri  :</td>
                    <td>{{data_alat.alat_kalibrasi.value4}}</td>
                  </tr>
                </tbody>
              </table>

              <table class="mt-3" width="100%">
                <tr>
                  <td class="b">Pemilik / Perusahaan </td>
                  <td>:</td>
                  <td>{{data_co.nama_co}}</td>
                </tr>
                <tr>
                  <td class="b">Alamat</td>
                  <td>:</td>
                  <td>{{data_co.alamat}}</td>
                </tr>
                <tr>
                  <td class="b">Ketelusuran</td>
                  <td>:</td>
                  <td>
                    {{data_alat.ketelusuran}}
                  </td>
                </tr>
                <tr>
                  <td class="b">Tanggal Pendaftaran</td>
                  <td>:</td>
                  <td>{{data_alat.tgl_daftar}}</td>
                </tr>
              </table>

              <p class="mb-0 mt-3 b">Kondisi Lingkungan :</p>
              <table width="100%">
                <thead>
                  <tr>
                    <th rowspan="2">Parameter</th>
                    <th colspan="2">penunjukan alat</th>
                    <th rowspan="2">Rata - rata</th>
                    <th rowspan="2">Selisih</th>
                    <th rowspan="2">Koreksi</th>
                    <th rowspan="2">nilai µ sertifikat</th>
                  </tr>
                  <tr>
                    <th>Awal</th>
                    <th>akhir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data_alat.kondisi_ling.parameter" :key="index">
                    <td>{{item}}</td>
                    <td>{{data_alat.kondisi_ling.penunjuk_alat_awal[index]}}</td>
                    <td>{{data_alat.kondisi_ling.penunjuk_alat_akhir[index]}}</td>
                    <td>{{data_alat.kondisi_ling['rata-rata'][index]}}</td>
                    <td>{{data_alat.kondisi_ling.selisih[index]}}</td>
                    <td>{{data_alat.kondisi_ling.koreksi[index]}}</td>
                    <td>{{data_alat.kondisi_ling.nilaiM_sertf[index]}}</td>
                  </tr>
                </tbody>
              </table>
            </v-layout>

            <v-layout column>
              <div style="width: 32mm" class="mt-3">
                <p class="u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">1. Hasil Kalibrasi</p>
                <p class="i" style="font-size: 9pt; margin: 0; height: 18px;">Result of Calibration</p>
              </div>

              <table width="80%" class="text-xs-center">
                <thead>
                  <tr>
                    <th>Volume Nominal <br> ( ml )</th>
                    <th>Volume sebenarnya pada <br> suhu {{data_alat.deskripsi.suhu_vesel}} &deg;C <br> (ml)</th>
                    <th>Koreksi <br> ( ml )</th>
                    <th>Ketidakpastian *) <br> ( ml )</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{data_kal.hasil_kalibrasi.volume_nominal}}</td>
                    <td>{{data_kal.hasil_kalibrasi.volume_sebenarnya_pada_suhu}}</td>
                    <td>{{data_kal.hasil_kalibrasi.koreksi}}</td>
                    <td>{{data_kal.hasil_kalibrasi.ketidakpastian}}</td>
                  </tr>
                </tbody>
              </table>

              <p class="i">Catatan :  *) Ketidakpastian yang dilaporkan aadalah ketidakpastian bentangan pada tingkat <br> Kepercayaan 95%, dengan faktor cakupan k=2</p>

              <p>
                DATA HASIL PENGUKURAN DAN PERHITUNGAN : <br>
                PERIKSA TITIK	1	(	100	)	ml
              </p>
              <table class="tableizer-table">
                <thead>
                  <tr class="tableizer-firstrow">
                    <th>RUN</th>
                    <th>BERAT AIR, g <br> (Iw)</th>
                    <th>SUHU UDARA, °C <br> (tu)</th>
                    <th>SUHU AIR, °C <br> (ta)</th>
                    <th>TEKANAN UDARA,mmHg <br> (ρ)</th>
                    <th>KELEMBABAN, % <br> (H)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data_kal.hasil_pengukuran.table.run" :key="index">
                    <td>{{item}}</td>
                    <td>{{data_kal.hasil_pengukuran.table.berat_air[index]}}</td>
                    <td>{{data_kal.hasil_pengukuran.table.suhu_udara[index]}}</td>
                    <td>{{data_kal.hasil_pengukuran.table.suhu_air[index]}}</td>
                    <td>{{data_kal.hasil_pengukuran.table.tekanan_udara[index]}}</td>
                    <td>{{data_kal.hasil_pengukuran.table.kelembaban[index]}}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Densitas udara, (pu) g/cm<sup>3</sup> </td>
                    <td colspan="3">
                      <span class="u">K1ru + hr (K2tu+K3)</span> <br>
                      ta + 273,15
                    </td>
                    <td>{{data_kal.hasil_pengukuran.densitas_air}}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Densitas air, (pa)  g/cm<sup>3</sup></td>
                    <td colspan="3">
                      <span class="u">a5[1 - (t-a1)2x(t+a2) ]</span> <br>
                      a3(t-a4)
                    </td>
                    <td>{{data_kal.hasil_pengukuran.densitas_udara}}</td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      <v-img src="/volumetri/buret1.png" height="30px" contain></v-img>
                    </td>
                    <td>{{data_kal.hasil_pengukuran.ia}}</td>
                  </tr>
                  <tr>
                    <td colspan="5">Periksa toleransi, (V20 - kapasitas nominal),  ml </td>
                    <td>{{data_kal.hasil_pengukuran.periksa_toleransi}}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Volume air pada suhu vesel 27.5 °C),</td>
                    <td colspan="3">Vt<sub>2</sub>, ml = Vt<sub>1</sub> { 1 + J ( t<sub>2</sub> - t<sub>1</sub> )} </td>
                    <td>{{data_kal.hasil_pengukuran.v_air_suhu_vesel}}</td>
                  </tr>
                </tbody>
              </table>
            </v-layout>

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

        <!-- <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="mt-3 mb-0">
              PERIKSA TITIK	2	(	200	)	ml
            </p>
            <table width="100%">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>RUN</th>
                  <th>BERAT AIR, g <br> (Iw)</th>
                  <th>SUHU UDARA, °C <br> (tu)</th>
                  <th>SUHU AIR, °C <br> (ta)</th>
                  <th>TEKANAN UDARA,mmHg <br> (ρ)</th>
                  <th>KELEMBABAN, % <br> (H)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>101.1400</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>55.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>101.1500</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>101.1500</td>
                  <td>20.1</td>
                  <td>20.2</td>
                  <td>751.9</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>RATA2</td>
                  <td>101.1467</td>
                  <td>20.0</td>
                  <td>20.1</td>
                  <td>751.8</td>
                  <td>52</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas udara, (pu) g/cm<sup>3</sup> </td>
                  <td colspan="3">
                    <span class="u">K1ru + hr (K2tu+K3)</span> <br>
                    ta + 273,15
                  </td>
                  <td>0.0011850</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas air, (pa)  g/cm<sup>3</sup></td>
                  <td colspan="3">
                    <span class="u">a5[1 - (t-a1)2x(t+a2) ]</span> <br>
                    a3(t-a4)
                  </td>
                  <td>0.998193</td>
                </tr>
                <tr>
                  <td colspan="5">
                    <v-img src="/volumetri/buret1.png" height="30px" contain></v-img>
                  </td>
                  <td>101.435</td>
                </tr>
                <tr>
                  <td colspan="5">Periksa toleransi, (V20 - kapasitas nominal),  ml </td>
                  <td>1.435</td>
                </tr>
                <tr>
                  <td colspan="2">Volume air pada suhu vesel 27.5 °C),</td>
                  <td colspan="3">Vt<sub>2</sub>, ml = Vt<sub>1</sub> { 1 + J ( t<sub>2</sub> - t<sub>1</sub> )} </td>
                  <td>101.4426</td>
                </tr>
              </tbody>
            </table>
            <p class="mt-3 mb-0">
              PERIKSA TITIK	3	(	300	)	ml
            </p>
            <table width="100%">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>RUN</th>
                  <th>BERAT AIR, g <br> (Iw)</th>
                  <th>SUHU UDARA, °C <br> (tu)</th>
                  <th>SUHU AIR, °C <br> (ta)</th>
                  <th>TEKANAN UDARA,mmHg <br> (ρ)</th>
                  <th>KELEMBABAN, % <br> (H)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>101.1400</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>55.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>101.1500</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>101.1500</td>
                  <td>20.1</td>
                  <td>20.2</td>
                  <td>751.9</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>RATA2</td>
                  <td>101.1467</td>
                  <td>20.0</td>
                  <td>20.1</td>
                  <td>751.8</td>
                  <td>52</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas udara, (pu) g/cm<sup>3</sup> </td>
                  <td colspan="3">
                    <span class="u">K1ru + hr (K2tu+K3)</span> <br>
                    ta + 273,15
                  </td>
                  <td>0.0011850</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas air, (pa)  g/cm<sup>3</sup></td>
                  <td colspan="3">
                    <span class="u">a5[1 - (t-a1)2x(t+a2) ]</span> <br>
                    a3(t-a4)
                  </td>
                  <td>0.998193</td>
                </tr>
                <tr>
                  <td colspan="5">
                    <v-img src="/volumetri/buret1.png" height="30px" contain></v-img>
                  </td>
                  <td>101.435</td>
                </tr>
                <tr>
                  <td colspan="5">Periksa toleransi, (V20 - kapasitas nominal),  ml </td>
                  <td>1.435</td>
                </tr>
                <tr>
                  <td colspan="2">Volume air pada suhu vesel 27.5 °C),</td>
                  <td colspan="3">Vt<sub>2</sub>, ml = Vt<sub>1</sub> { 1 + J ( t<sub>2</sub> - t<sub>1</sub> )} </td>
                  <td>101.4426</td>
                </tr>
              </tbody>
            </table>

            <p class="mt-3 mb-0">
              PERIKSA TITIK	4	(	400	)	ml
            </p>
            <table width="100%">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>RUN</th>
                  <th>BERAT AIR, g <br> (Iw)</th>
                  <th>SUHU UDARA, °C <br> (tu)</th>
                  <th>SUHU AIR, °C <br> (ta)</th>
                  <th>TEKANAN UDARA,mmHg <br> (ρ)</th>
                  <th>KELEMBABAN, % <br> (H)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>101.1400</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>55.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>101.1500</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>101.1500</td>
                  <td>20.1</td>
                  <td>20.2</td>
                  <td>751.9</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>RATA2</td>
                  <td>101.1467</td>
                  <td>20.0</td>
                  <td>20.1</td>
                  <td>751.8</td>
                  <td>52</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas udara, (pu) g/cm<sup>3</sup> </td>
                  <td colspan="3">
                    <span class="u">K1ru + hr (K2tu+K3)</span> <br>
                    ta + 273,15
                  </td>
                  <td>0.0011850</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas air, (pa)  g/cm<sup>3</sup></td>
                  <td colspan="3">
                    <span class="u">a5[1 - (t-a1)2x(t+a2) ]</span> <br>
                    a3(t-a4)
                  </td>
                  <td>0.998193</td>
                </tr>
                <tr>
                  <td colspan="5">
                    <v-img src="/volumetri/buret1.png" height="30px" contain></v-img>
                  </td>
                  <td>101.435</td>
                </tr>
                <tr>
                  <td colspan="5">Periksa toleransi, (V20 - kapasitas nominal),  ml </td>
                  <td>1.435</td>
                </tr>
                <tr>
                  <td colspan="2">Volume air pada suhu vesel 27.5 °C),</td>
                  <td colspan="3">Vt<sub>2</sub>, ml = Vt<sub>1</sub> { 1 + J ( t<sub>2</sub> - t<sub>1</sub> )} </td>
                  <td>101.4426</td>
                </tr>
              </tbody>
            </table>

            <p class="mt-3 mb-0">
              PERIKSA TITIK	5	(	500	)	ml
            </p>
            <table width="100%">
              <thead>
                <tr class="tableizer-firstrow">
                  <th>RUN</th>
                  <th>BERAT AIR, g <br> (Iw)</th>
                  <th>SUHU UDARA, °C <br> (tu)</th>
                  <th>SUHU AIR, °C <br> (ta)</th>
                  <th>TEKANAN UDARA,mmHg <br> (ρ)</th>
                  <th>KELEMBABAN, % <br> (H)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>101.1400</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>55.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>101.1500</td>
                  <td>20.0</td>
                  <td>20</td>
                  <td>751.8</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>101.1500</td>
                  <td>20.1</td>
                  <td>20.2</td>
                  <td>751.9</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td>RATA2</td>
                  <td>101.1467</td>
                  <td>20.0</td>
                  <td>20.1</td>
                  <td>751.8</td>
                  <td>52</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas udara, (pu) g/cm<sup>3</sup> </td>
                  <td colspan="3">
                    <span class="u">K1ru + hr (K2tu+K3)</span> <br>
                    ta + 273,15
                  </td>
                  <td>0.0011850</td>
                </tr>
                <tr>
                  <td colspan="2">Densitas air, (pa)  g/cm<sup>3</sup></td>
                  <td colspan="3">
                    <span class="u">a5[1 - (t-a1)2x(t+a2) ]</span> <br>
                    a3(t-a4)
                  </td>
                  <td>0.998193</td>
                </tr>
                <tr>
                  <td colspan="5">
                    <v-img src="/volumetri/buret1.png" height="30px" contain></v-img>
                  </td>
                  <td>101.435</td>
                </tr>
                <tr>
                  <td colspan="5">Periksa toleransi, (V20 - kapasitas nominal),  ml </td>
                  <td>1.435</td>
                </tr>
                <tr>
                  <td colspan="2">Volume air pada suhu vesel 27.5 °C),</td>
                  <td colspan="3">Vt<sub>2</sub>, ml = Vt<sub>1</sub> { 1 + J ( t<sub>2</sub> - t<sub>1</sub> )} </td>
                  <td>101.4426</td>
                </tr>
              </tbody>
            </table>
          </v-card-text>
        </v-card> -->
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  #wrapper {
    overflow-x: hidden;
    /* overflow: scroll; */
  } table {
    font-size: 9pt;
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import volHeader from '~/components/volumetrik/piknometer.vue'

export default {
  components: {
    volHeader
  },

  head: {
    title: 'Lembar Kerja Piknometer | Bidang Volumetrik',
    meta: [
      {
        hid: 'Volumetrik',
        name: 'Volumetrik',
        content: 'Bidang Volumetrik'
      }
    ],
  },

  data: () => ({
    no_cert: '-',
    
    data_alat: {
      alat_kalibrasi: {
        alat1: "Timbangan Elektronik",
        alat2: "Termometer Digital",
        alat3: "Barometer  ",
        alat4: "Hygrometer  ",
        value1: "30505123",
        value2: "5750384",
        value3: "UZ - 0001",
        value4: "L-KAL 8"
      },
      deskripsi: {
        bahan: "Polipropilen",
        kapasitas: 100,
        kelas_toleransi: ["-", 0.3],
        koofesien_muai: "0.0000086",
        merk_Buatan: "MC / China",
        no_seri: "LUP.100.1",
        skala: "-",
        suhu_vesel: 20,
        toleransi_acuan: {
          KelasA: 0.1,
          KelasB: 0.3
        },
        waktu_alir: "-"
      },
      dikalibrasi: {
        date: "2020-08-31 14:50:26",
        person: "Satrio O."
      },
      diperiksa: {
        date: "5 Mei 2020",
        person: "Agus Surya P"
      },
      ketelusuran: "Hasil Kalibrasi yang dilaporkan tertelusur kesatuan Pengukuran SI melalui  Puslit  KIM  LIPI  Serpong  Tangerang, LK 022-IDN dan LK 001-IDN",
      kondisi_ling: {
        koreksi: [
          0.6477653896280661,
          3.3526109228480423,
          0.9
        ],
        nilaiM_sertf: [
          0.64,
          3.2,
          0.9
        ],
        parameter: ["Suhu udara \u00b0C", "Kelemb udara %", "Tek. Udara mmHg"],
        penunjuk_alat_akhir: [19.6, 60, 759],
        penunjuk_alat_awal: [19.5, 59, 759],
        "rata-rata": [19.55, 59.5, 759],
        selisih: [-0.142, -1, 0]
      },
      lokasi: "Laboratorium Kalibrasi B4T",
      metode_kalibrasi: "PC 304-01",
      standar_acuan: [
        "1. ISO 4787-2010 : Laboratoty glassware-Volumetric Methods for testing of capacity and for use.",
        "2. ISO 1042-1998  : Laboratory glassware- One mark volumetric flasks."
      ],
      tgl_daftar: "30 April 2020",
      tgl_diterima: "2020-08-31"
    },

    data_kal: {
      hasil_kalibrasi: {
        ketidakpastian: 0,
        koreksi: 0,
        volume_nominal: 0,
        volume_sebenarnya_pada_suhu: 0
      },
      hasil_pengukuran: {
        densitas_air: 0,
        densitas_udara: 0,
        ia: 0,
        periksa_toleransi: 0,
        table: {
          berat_air: [ 0, 0, 0, 0 ],
          kelembaban: [ 0, 0, 0, 0 ],
          run: [ 0, 0, 0, 0 ],
          suhu_air: [ 0, 0, 0, 0 ],
          suhu_udara: [ 0, 0, 0, 0 ],
          tekanan_udara: [ 0, 0, 0, 0 ]
        },
        v_air_suhu_vesel: 0
      }
    },

    data_co: {
      alamat: '',
      nama_co: ''
    },
    ktp_poripropilen: 0
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
        this.ktp_poripropilen = req_data.data_ktp.koofesien_muai_bahan.poripropilen
        this.data_co = req_data.data_co
        this.data_kal = req_data.data_kal
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