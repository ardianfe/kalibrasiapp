<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PENGUKUR GAYA <br>
              HYDRAULIK JACK
            </p>

            <p>No. Sertifikat: 3-09-18-0157</p>
            <table class="mt-3 no-border" style="font-size: 9pt">
              <tr>
                <td>Diskripsi Alat: </td>
                <td>Hidraulic Jack</td>
                <td>&nbsp;</td>
                <td>kapasitas: </td>
                <td>400 tf</td>
                <td>tipe: </td>
                <td>YCW 400B</td>
                <td>&nbsp;</td>
                <td>no. seri: </td>
                <td colspan="3">1358</td>
              </tr>
              <tr>
                <td>Indikator:</td>
                <td>Pressure Gauge 0- 60 Mpa
                  <br> 1 di = 1 Mpa (4,5 mm)
                </td>
                <td>&nbsp;</td>
                <td>merek: </td>
                <td>MC</td>
                <td>tipe: </td>
                <td>-</td>
                <td>&nbsp;</td>
                <td>no. seri: </td>
                <td>04</td>
                <td>buatan:</td>
                <td>cina</td>
              </tr>
            </table>

            <table class="mt-3 no-border" style="font-size: 9pt">
              <tr>
                <td width="20%">Lokasi kalibrasi:</td>
                <td colspan="2">Laboratorium Beton, B4T, Bandung.</td>
              </tr>
              <tr>
                <td rowspan="2">Alat kalibrasi :</td>
                <td colspan="2">Calibrating Box 2824</td>
              </tr>
              <tr>
                <td colspan="2">Termometer No. Kal-1.</td>
              </tr>
              <tr>
                <td>Metoda kalibrasi: </td>
                <td colspan="2">PC-309-09</td>
              </tr>
              <tr>
                <td>Standar acuan: </td>
                <td colspan="2">BS 1377: Part 1: 1990, butir 4.4.4.6. : Methods of test for soils for civil engineering purposes</td>
              </tr>
              <tr>
                <td>Suhu : </td>
                <td>26.2 °C - 26.4 °C</td>
                <td>Kelembaban 63% RH</td>
              </tr>
            </table>

            <p class="mt-2">Pemeriksaan Indikator Pengukur Gaya</p> 
            <table class="tableizer-table" style="font-size: 9pt">
              <thead>
                <tr class="tableizer-firstrow">
                  <!-- <th colspan="3">Pembacaan </th> -->
                  <th colspan="6">Pembacaan Alat kalibrasi</th>
                  <th colspan="2">Gaya Sebenarnya</th>
                  <th rowspan="2">Faktor Kalibrasi</th>
                  <th rowspan="2">Penyimpangan Faktor Kalibrasi</th>
                  <th rowspan="2">Repeatability</th>
                  <th rowspan="2">KETIDAK-PASTIAN STANDAR DEVIASI</th>
                  <th rowspan="2">Error of Zero</th>
                </tr>
                <tr>
                  <td>Pressure Gauge</td>
                  <td>Rata rata</td>
                  <td>Residual of Zero</td>
                  <td>Sebenarnya</td>
                  <td>Koreksi Nol 22.80  </td>
                  <td>Koreksi  suhu 26.3 </td>
                  <td>Individual</td>
                  <td>Rata rata</td>
                </tr>
                <tr>
                  <td>(MPa)</td>
                  <td>(MPa)</td>
                  <td>(MPa)</td>
                  <td>(DIVISI)</td>
                  <td>(DIVISI)</td>
                  <td>(Divisi)</td>
                  <td>(tf)</td>
                  <td>(tf)</td>
                  <td>(tf/MPa)</td>
                  <td>%</td>
                  <td>%</td>
                  <td>%</td>
                  <td>%</td>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
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
                    <td>5 </td>
                    <td>5 </td>
                    <td>&nbsp;</td>
                    <td>501.0 </td>
                    <td>501.00</td>
                    <td>5.0053 </td>
                    <td>44.522 </td>
                    <td>44.492 </td>
                    <td>8.89840 </td>
                    <td>4.19 </td>
                    <td>0.20 </td>
                    <td>0.06668 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>10 </td>
                    <td>10 </td>
                    <td>&nbsp;</td>
                    <td>998.0 </td>
                    <td>998.00</td>
                    <td>9.9706 </td>
                    <td>89.002 </td>
                    <td>88.883 </td>
                    <td>8.88830 </td>
                    <td>4.07 </td>
                    <td>0.20 </td>
                    <td>0.06713 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>15 </td>
                    <td>15 </td>
                    <td>&nbsp;</td>
                    <td>1,460.0 </td>
                    <td>1,460.00</td>
                    <td>14.5862 </td>
                    <td>130.539 </td>
                    <td>130.419 </td>
                    <td>8.69460 </td>
                    <td>1.80 </td>
                    <td>0.14 </td>
                    <td>0.04601 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>20 </td>
                    <td>20 </td>
                    <td>&nbsp;</td>
                    <td>1,915.0 </td>
                    <td>1,915.00</td>
                    <td>19.1319 </td>
                    <td>171.624 </td>
                    <td>171.503 </td>
                    <td>8.57515 </td>
                    <td>0.40 </td>
                    <td>0.11 </td>
                    <td>0.03518 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>25 </td>
                    <td>25 </td>
                    <td>&nbsp;</td>
                    <td>2,346.0 </td>
                    <td>2,346.00</td>
                    <td>23.4378 </td>
                    <td>210.705 </td>
                    <td>210.584 </td>
                    <td>8.42336 </td>
                    <td>-1.38 </td>
                    <td>0.09 </td>
                    <td>0.02881 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>30 </td>
                    <td>30 </td>
                    <td>&nbsp;</td>
                    <td>2,777.0 </td>
                    <td>2,777.00</td>
                    <td>27.7438 </td>
                    <td>249.944 </td>
                    <td>249.822 </td>
                    <td>8.32740 </td>
                    <td>-2.50 </td>
                    <td>0.07 </td>
                    <td>0.02442 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>35 </td>
                    <td>35 </td>
                    <td>&nbsp;</td>
                    <td>3,208.0 </td>
                    <td>3,208.00</td>
                    <td>32.0497 </td>
                    <td>289.341 </td>
                    <td>289.219 </td>
                    <td>8.26340 </td>
                    <td>-3.25 </td>
                    <td>0.06 </td>
                    <td>0.02109 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>36 </td>
                    <td>36 </td>
                    <td>&nbsp;</td>
                    <td>3,294.0 </td>
                    <td>3,294.00</td>
                    <td>32.9089 </td>
                    <td>297.221 </td>
                    <td>297.221 </td>
                    <td>8.25614 </td>
                    <td>-3.33 </td>
                    <td>0.00 </td>
                    <td>0.00000 </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
                  </tr>
                  <tr>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
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
                    <td>5 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>501.0 </td>
                    <td>501.00</td>
                    <td>5.0053 </td>
                    <td>44.522 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>10 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>996.0 </td>
                    <td>996.00</td>
                    <td>9.9506 </td>
                    <td>88.823 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>15 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1,458.0 </td>
                    <td>1,458.00</td>
                    <td>14.5662 </td>
                    <td>130.359 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>20 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1,913.0 </td>
                    <td>1,913.00</td>
                    <td>19.1119 </td>
                    <td>171.443 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>25 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2,344.0 </td>
                    <td>2,344.00</td>
                    <td>23.4178 </td>
                    <td>210.523 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>30 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2,775.0 </td>
                    <td>2,775.00</td>
                    <td>27.7238 </td>
                    <td>249.761 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>35 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3,206.0 </td>
                    <td>3,206.00</td>
                    <td>32.0297 </td>
                    <td>289.158 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>36 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3,294.0 </td>
                    <td>3,294.00</td>
                    <td>32.9089 </td>
                    <td>297.221 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
                  </tr>
                  <tr>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
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
                    <td>5 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>500.0 </td>
                    <td>500.00</td>
                    <td>4.9953 </td>
                    <td>44.433 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>10 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>996.0 </td>
                    <td>996.00</td>
                    <td>9.9506 </td>
                    <td>88.823 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>15 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1,458.0 </td>
                    <td>1,458.00</td>
                    <td>14.5662 </td>
                    <td>130.359 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>20 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>1,913.0 </td>
                    <td>1,913.00</td>
                    <td>19.1119 </td>
                    <td>171.443 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>25 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2,344.0 </td>
                    <td>2,344.00</td>
                    <td>23.4178 </td>
                    <td>210.523 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>30 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>2,775.0 </td>
                    <td>2,775.00</td>
                    <td>27.7238 </td>
                    <td>249.761 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>35 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3,206.0 </td>
                    <td>3,206.00</td>
                    <td>32.0297 </td>
                    <td>289.158 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>36 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>3,294.0 </td>
                    <td>3,294.00</td>
                    <td>32.9089 </td>
                    <td>297.221 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
                    <td>0.0 </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.0 </td>
                  </tr>
                  <tr>
                    <td>,</td>
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
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="7">Rata-rata Faktor Kalibrasi</td>
                    <td colspan="6">8.54084 </td>
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
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  } .no-border {
    border: 0px !important;
  }
</style>

<script>
import gayaHeader from '~/components/gaya/hydraulik_jack.vue'
import durometer from '~/static/durometer.json'

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