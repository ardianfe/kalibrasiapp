<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instumenHeader></instumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI <br> SPECTROFOTOMETER SERAPAN ATOM</p>

            <v-layout row wrap>
              <table style="font-size: 9pt" width="100%">
                <tr>
                  <td colspan="2" width="20%">No. Sertifikat</td>
                  <td>:</td>
                  <td>3-07-20-00017</td>
                </tr>
                <tr>
                  <td colspan="2">Diskripsi Alat</td>
                  <td>:</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Nama Alat</td>
                  <td>:</td>
                  <td>ATOMIC ABSORPTION SPECTROTOMETER</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Merek</td>
                  <td>:</td>
                  <td>Varian</td>
                  <td>No. Seri :</td>
                  <td>EL08043388</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Model</td>
                  <td>:</td>
                  <td>AA240FS</td>
                  <td>Buatan :</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Lokasi Kalibrasi</td>
                  <td>:</td>
                  <td>Lab. PT Sucofindo</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Kondisi Lingkungan</td>
                  <td>:</td>
                  <td>1. Suhu Ruang : ( 23,6 - 23,7 )°C</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>:</td>
                  <td>2. Kelembaban Udara : 62 - 64 % RH</td>
                </tr>
              </table>

              <table class="mt-2" style="font-size: 9pt" width="100%">
                <tr>
                  <td colspan="2" width="20%">Metoda Kalibrasi</td>
                  <td>:</td>
                  <td>PC-307-03</td>
                </tr>
                <tr>
                  <td colspan="2">Acuan</td>
                  <td>:</td>
                  <td>1. ASTM D 1976 -1991: Standard Test Method for Elemennts in Water <br>by Inductivly Coupled Argon Plasma Atomic Emission Spectroscopy </td>
                </tr>
                <tr>
                  <td colspan="2">&nbsp;</td>
                  <td>: </td>
                  <td>2. ASTM E 1452 - 1992 : Standard Practice for Preparation of Calibration <br>solution for Spectro photometric and Spectroscopie Atomic Analysis</td>
                </tr>
                <tr>
                  <td colspan="2">&nbsp;</td>
                  <td>: </td>
                  <td>3. ASTM  E 663-1991 : Standard Practice for Flame Atomic Absorption Analysis</td>
                </tr>
                <tr>
                  <td colspan="2">&nbsp;</td>
                  <td>: </td>
                  <td>4. Atomic Absorption Spectrophotometers Operation Manual Model : </td>
                </tr>
              </table>

              <table class="mt-3" width="100%">
                <thead>
                  <tr>
                    <td class="b" colspan="5">Alat / Bahan Kalibrasi yang digunakan :</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Larutan standar :</td>
                    <td>Cooper</td>
                    <td>&nbsp;</td>
                    <td>1000 mg/l ±2 mg/l.</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Kondisi Pengamatan :</td>
                    <td>Lamp Current</td>
                    <td>=</td>
                    <td>8.0 mA</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Oxidant flow</td>
                    <td>=</td>
                    <td>15 L/min</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Fuel flow (Acetilent)</td>
                    <td>=</td>
                    <td>1.8 L/min</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Slit :</td>
                    <td>=</td>
                    <td>0.7 nm</td>
                  </tr>
                </tbody>
              </table>

            </v-layout>

            <p class="b mt-3 mb-1">Data Hasil Pengamatan :</p>
            <p>1. Penentuan kepekaan AAS untuk pengukuran Cu pada 324.8 nm</p>
            <v-layout row wrap>
              <table width="100%" class="text-xs-center">
                <thead>
                  <tr>
                    <th colspan="3">Larutan Standar Copper</th>
                    <th rowspan="2">Kepekaan <br> ( ppm )</th>
                    <th rowspan="2">Syarat Acuan <br> ( ppm )</th>
                    <th rowspan="2">Ketidakpastian *) <br> ± ( ppm )</th>
                  </tr>
                  <tr>
                    <td>Konsentrasi ( ppm )</td>
                    <td>Absorban</td>
                    <td>Rata-rata</td>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td rowspan="3">1.500</td>
                      <td>0.1550</td>
                      <td rowspan="3">0.1551</td>
                      <td rowspan="3">0.043</td>
                      <td rowspan="3">maks. 0,033</td>
                      <td rowspan="3">0.0023</td>
                    </tr>
                    <tr>
                      <td>0.1554</td>
                    </tr>
                    <tr>
                      <td>0.1548</td>
                    </tr>
                </tbody>
              </table>
            </v-layout>
            <p>*)  Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan 95% <br>dengan faktor cakupan k = 2.</p>

            <p class="b mt-3 mb-1">Data Hasil Pengamatan :</p>
            <p>2. Penentuan Presisi Pengukuran Cu pada panjang gelombang 324.8 nm</p>
            <table width="100%" class="text-xs-center">
              <thead>
                <tr>
                  <th colspan="3">Larutan Standar</th>
                  <th rowspan="2">Simpangan Baku</th>
                  <th rowspan="2">Simpangan Baku Relatif ( % )</th>
                  <th rowspan="2">Syarat Acuan ( % )</th>
                </tr>
                <tr>
                  <td>Konsentrasi (ppm)</td>
                  <td>Absorban</td>
                  <td>Rata-rata</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.5</td>
                  <td rowspan="6">0.155</td>
                  <td rowspan="6">0.154</td>
                  <td rowspan="6">0.00101</td>
                  <td rowspan="6">0.66</td>
                  <td rowspan="6">maks. 1,0</td>
                </tr>
                <tr>
                  <td>0.153</td>
                </tr>
                <tr>
                  <td>0.155</td>
                </tr>
                <tr>
                  <td>0.155</td>
                </tr>
                <tr>
                  <td>0.154</td>
                </tr>
                <tr>
                  <td>0.153</td>
                </tr>
              </tbody>
            </table>

            <p class="mt-3">3. Penentuan Linieritas</p>
            <table class="tableizer-table">
              <thead>
                <tr class="tableizer-firstrow">
                  <th rowspan="2">Konsentrasi Larutan Standar (ppm)</th>
                  <th colspan="6">Pengukuran Absorban </th>
                  <th rowspan="2">Rata - rata  </th>
                  <th rowspan="2">RSD ( % )</th>
                  <th rowspan="2">STD Deviasi</th>
                </tr>
                <tr>
                  <td>A1</td>
                  <td>A2</td>
                  <td>A3</td>
                  <td>A4</td>
                  <td>A5</td>
                  <td>A6</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.01</td>
                  <td>0.0013</td>
                  <td>0.0014</td>
                  <td>0.0016</td>
                  <td>0.0015</td>
                  <td>0.0013</td>
                  <td>0.0014</td>
                  <td>0.0014</td>
                  <td>8.25</td>
                  <td>0.0001</td>
                </tr>
                <tr>
                  <td>0.05</td>
                  <td>0.0053</td>
                  <td>0.0054</td>
                  <td>0.0053</td>
                  <td>0.0051</td>
                  <td>0.0051</td>
                  <td>0.0059</td>
                  <td>0.0054</td>
                  <td>5.51</td>
                  <td>0.0003</td>
                </tr>
                <tr>
                  <td>0.1</td>
                  <td>0.0101</td>
                  <td>0.0099</td>
                  <td>0.0097</td>
                  <td>0.0096</td>
                  <td>0.0097</td>
                  <td>0.0096</td>
                  <td>0.0098</td>
                  <td>2.01</td>
                  <td>0.0002</td>
                </tr>
                <tr>
                  <td>0.5</td>
                  <td>0.0507</td>
                  <td>0.0500</td>
                  <td>0.0499</td>
                  <td>0.0503</td>
                  <td>0.0502</td>
                  <td>0.0500</td>
                  <td>0.0502</td>
                  <td>0.58</td>
                  <td>0.0003</td>
                </tr>
                <tr>
                  <td>1.0</td>
                  <td>0.1013</td>
                  <td>0.1017</td>
                  <td>0.1016</td>
                  <td>0.1010</td>
                  <td>0.1010</td>
                  <td>0.1015</td>
                  <td>0.1014</td>
                  <td>0.30</td>
                  <td>0.0003</td>
                </tr>
                <tr>
                  <td>1.5</td>
                  <td>0.1550</td>
                  <td>0.1541</td>
                  <td>0.1548</td>
                  <td>0.1518</td>
                  <td>0.1537</td>
                  <td>0.1541</td>
                  <td>0.1539</td>
                  <td>0.74</td>
                  <td>0.0011</td>
                </tr>
                <tr>
                  <td>2.0</td>
                  <td>0.2023</td>
                  <td>0.2035</td>
                  <td>0.2028</td>
                  <td>0.2027</td>
                  <td>0.2016</td>
                  <td>0.2034</td>
                  <td>0.2027</td>
                  <td>0.35</td>
                  <td>0.0007</td>
                </tr>
                <tr>
                  <td>3.0</td>
                  <td>0.2971</td>
                  <td>0.2959</td>
                  <td>0.2984</td>
                  <td>0.2999</td>
                  <td>0.2985</td>
                  <td>0.2979</td>
                  <td>0.2980</td>
                  <td>0.46</td>
                  <td>0.0014</td>
                </tr>
                <tr>
                  <td>4.0</td>
                  <td>0.3911</td>
                  <td>0.3895</td>
                  <td>0.3917</td>
                  <td>0.3942</td>
                  <td>0.3948</td>
                  <td>0.3925</td>
                  <td>0.3923</td>
                  <td>0.50</td>
                  <td>0.0020</td>
                </tr>
                <tr>
                  <td>6.0</td>
                  <td>0.5755</td>
                  <td>0.5779</td>
                  <td>0.5785</td>
                  <td>0.5729</td>
                  <td>0.5710</td>
                  <td>0.5695</td>
                  <td>0.5742</td>
                  <td>0.64</td>
                  <td>0.0037</td>
                </tr>
                <tr>
                  <td>8.0</td>
                  <td>0.7379</td>
                  <td>0.7444</td>
                  <td>0.7449</td>
                  <td>0.7467</td>
                  <td>0.7460</td>
                  <td>0.7437</td>
                  <td>0.7439</td>
                  <td>0.42</td>
                  <td>0.0031</td>
                </tr>
                <tr>
                  <td>10.0</td>
                  <td>0.8849</td>
                  <td>0.8874</td>
                  <td>0.8854</td>
                  <td>0.8885</td>
                  <td>0.8886</td>
                  <td>0.8863</td>
                  <td>0.8869</td>
                  <td>0.18</td>
                  <td>0.0016</td>
                </tr>
                <tr>
                  <td>12.0</td>
                  <td>1.0253</td>
                  <td>1.0226</td>
                  <td>1.0212</td>
                  <td>1.0161</td>
                  <td>1.0229</td>
                  <td>1.0189</td>
                  <td>1.0212</td>
                  <td>0.32</td>
                  <td>0.0033</td>
                </tr>
                <tr>
                  <td>15.0</td>
                  <td>1.2126</td>
                  <td>1.2268</td>
                  <td>1.2313</td>
                  <td>1.2236</td>
                  <td>1.2171</td>
                  <td>1.2133</td>
                  <td>1.2208</td>
                  <td>0.63</td>
                  <td>0.0076</td>
                </tr>
                <tr>
                  <td colspan="6" class="pt-3 b">Daerah Linier dari kurva standar adalah : </td>
                  <td colspan="4" class="pt-3">0.01 s/d 8.00 ppm</td>
                </tr>
              </tbody>
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
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import instumenHeader from '~/components/instrumen/aas.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    instumenHeader
  },

  head: {
    title: 'Sebelum Set | Bidang Gaya',
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
  document.getElementById(id).innerHTML = "Hello World";
}
</script>