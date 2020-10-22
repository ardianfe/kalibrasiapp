<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <volHeader></volHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI GELAS UKUR</p>

            <v-layout row wrap>
              <table>
                <thead>
                  <tr>
                    <td class="b">No. Sertifikat :</td>
                    <td class="b" colspan="3">3-04-20-00021</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4">Diskripsi Alat</td>
                  </tr>
                  <tr>
                    <td width="20%">Kapasitas Nominal :</td>
                    <td width="30%">500 ml</td>
                  </tr>
                  <tr>
                    <td>Skala Subdivisi :</td>
                    <td>5 ml</td>
                    <td>Suhu vesel :</td>
                    <td>27.5 °C</td>
                  </tr>
                  <tr>
                    <td>Kelas/Toleransi :</td>
                    <td>B /± 3.75 ml</td>
                    <td>Waktu alir :</td>
                    <td>- s</td>
                  </tr>
                  <tr>
                    <td rowspan="2">Toleransi acuan :</td>
                    <td>Kelas A :± 2.000 ml</td>
                    <td>Bahan :</td>
                    <td>Borosilikat</td>
                  </tr>
                  <tr>
                    <td>Kelas B :± 3.000 ml</td>
                    <td>Koefesien muai panas kubik bahan (J) :</td>
                    <td>0.0000099 /°C</td>
                  </tr>
                  <tr>
                    <td>Merek/Buatan :</td>
                    <td>Western / Germany</td>
                    <td>Lokasi Kalibrasi :</td>
                    <td>Laboratorium Volumetrik dan Instrument Analisa Kalibrasi B4T, Bandung</td>
                  </tr>
                  <tr>
                    <td>No.Seri :</td>
                    <td>GU.500.1</td>
                  </tr>
                  <tr>
                    <td>Metoda Kalibrasi :</td>
                    <td colspan="3">PC 304-01</td>
                  </tr>
                  <tr>
                    <td rowspan="2">Standar Acuan :</td>
                    <td colspan="3">1. ISO 4787-2010 : Laboratoty glassware-Volumetric Methods for testing of capacity and for use.</td>
                  </tr>
                  <tr>
                    <td colspan="3">2. ISO 4788-2005 : Laboratory glassware- Graduated Measuring cylinders.</td>
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
                    <td>1. Timbangan Elektronik,</td>
                    <td>No.seri  :</td>
                    <td>1118252662</td>
                  </tr>
                  <tr>
                    <td>2. Termometer Digital,</td>
                    <td>No.seri  :</td>
                    <td>5750384</td>
                  </tr>
                  <tr>
                    <td>3. Barometer,</td>
                    <td>No.seri  :</td>
                    <td>UZ - 0001</td>
                  </tr>
                  <tr>
                    <td>4. Hygrometer, </td>
                    <td>No.seri  :</td>
                    <td>L-KAL 8</td>
                  </tr>
                </tbody>
              </table>

              <table class="mt-3" width="100%">
                <tr>
                  <td class="b">Pemilik / Perusahaan </td>
                  <td>:</td>
                  <td>PEMPROV JABAR - Dinas Kelautan dan Perikanan</td>
                </tr>
                <tr>
                  <td class="b">Alamat</td>
                  <td>:</td>
                  <td>Jl. Sutawinangun No. 2 Cirebon 45131</td>
                </tr>
                <tr>
                  <td class="b">Ketelusuran</td>
                  <td>:</td>
                  <td>
                    Hasil Kalibrasi yang dilaporkan tertelusur kesatuan Pengukuran SI melalui  Puslit  KIM <br>
                    LIPI  Serpong  Tangerang, LK 022-IDN dan LK 001-IDN
                  </td>
                </tr>
                <tr>
                  <td class="b">Tanggal Pendaftaran</td>
                  <td>:</td>
                  <td>12 Februari 2020</td>
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
                  <tr>
                    <td>Suhu udara °C</td>
                    <td>20.8</td>
                    <td>20.7</td>
                    <td>20.75</td>
                    <td>0.10</td>
                    <td>0.64776539</td>
                    <td>0.64</td>
                  </tr>
                  <tr>
                    <td>Kelemb udara %</td>
                    <td>44</td>
                    <td>45</td>
                    <td>44.5</td>
                    <td>-1.00</td>
                    <td>21.24241041</td>
                    <td>3.2</td>
                  </tr>
                  <tr>
                    <td>Tek. Udara mmHg</td>
                    <td>615</td>
                    <td>616</td>
                    <td>615.5</td>
                    <td>-1.00</td>
                    <td>1.345362405</td>
                    <td>0.9</td>
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
                    <th>Volume sebenarnya pada <br> suhu 27.5 &deg;C <br> (ml)</th>
                    <th>Koreksi <br> ( ml )</th>
                    <th>Ketidakpastian *) <br> ( ml )</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>101.443</td>
                    <td>-1.443</td>
                    <td rowspan="5">0.577</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>199.027</td>
                    <td>0.973</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>300.260</td>
                    <td>-0.260</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>399.850</td>
                    <td>0.150</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>501.928</td>
                    <td>-1.928</td>
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
            </v-layout>

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

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
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
    font-size: 9pt;
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import volHeader from '~/components/volumetrik/buret.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    volHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Gelas Volumetri',
    meta: [
      {
        hid: 'mass',
        name: 'mass',
        content: 'Bidang Massa'
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

    this.getLK()

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
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.result[0]
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
  document.getElementById(id).innerHTML = "Hello World";
}
</script>