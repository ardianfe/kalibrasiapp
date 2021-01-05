<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="250mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI MIXER</p>

            <p>No. Sertifikat: 3-09-18-0157</p>
            <table class="no-border">
              <tr>
                <td>Deskripsi Alat :</td>
                <td>Cement Mortar Mixer</td>
                <td>kapasitas :</td>
                <td>0 - 140 rpm</td>
              </tr>
              <tr>
                <td>Model :</td>
                <td>JJ-5</td>
                <td>nomor seri :</td>
                <td>184</td>
              </tr>
              <tr>
                <td>Merek :</td>
                <td>WUXI JIANYI /</td>
                <td>buatan :</td>
                <td>CHINA</td>
              </tr>
              <tr>
                <td>Lokasi kalibrasi :</td>
                <td>Lab. Fisika, PT Conch North Sulawesi Cement, Bolaang Mangondow</td>
                <td>No Seri :</td>
                <td>957582</td>
              </tr>
              <tr>
                <td>Alat Kalibrasi :</td>
                <td>Tachometer</td>
              </tr>
              <tr>
                <td>Suhu ruangan :</td>
                <td>25.8 - 26.0 °C</td>
              </tr>
              <tr>
                <td>Kelembaban 59 % RH : </td>
                <td>27.9 - 28.1 °C</td>
              </tr>
              <tr>
                <td>Metoda Kalibrasi :</td>
                <td>PC-314-04</td>
              </tr>
              <tr>
                <td>Standar Acuan : </td>
                <td>ASTM C305 : 13</td>
              </tr>
            </table>

            <p class="mt-4 mb-0 b">DATA HASIL PENGAMATAN</p> 
            <table class="text-xs-center">
              <thead>
                  <tr class="tableizer-firstrow">
                    <td rowspan="2">Kecepatan <br> Putaran</td>
                    <td colspan="3">Penunjukan Standar</td>
                    <td rowspan="2">Syarat <br> ASTM C305 : 13</td>
                    <td rowspan="2">Repeatability</td>
                  </tr>
                  <tr>
                    <td>Individual</td>
                    <td>Nilai sebenarnya</td>
                    <td>Rata-rata</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  </tr>
                  <tr>
                    <td>( rpm )</td>
                    <td>( rpm )</td>
                    <td>( rpm )</td>
                    <td>( rpm )</td>
                    <td>( rpm )</td>
                    <td>( rpm )</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>125.5</td>
                    <td>125.7</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>126.0</td>
                    <td>126.2</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>126.4</td>
                    <td>126.6</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>125.6</td>
                    <td>125.8</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>125</td>
                    <td>125.0</td>
                    <td>125.2</td>
                    <td>125.8</td>
                    <td>125 ±  5</td>
                    <td>1.4 </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>125.4</td>
                    <td>125.6</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>125.8</td>
                    <td>126.0</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>126.0</td>
                    <td>126.2</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>125.0</td>
                    <td>125.2</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>125.2</td>
                    <td>125.4</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td></td>
                  </tr>
              </tbody>
            </table>
          </v-card-text>

          <v-card-text>
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.dikalibrasi.person[1]}} <br>
                Tanggal :	{{data_alat.tanggal_diterima}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person[0]}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card my-4" style="margin: auto" width="250mm">
          <v-card-text>
            <p class="b my-2">PERHITUNGAN KETIDAKPASTIAN PENGUKURAN</p>

            <p class="b my-2">1. ANALISA TIPE B</p>
            <table class="tableizer-table">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>a. Pada alat kalibrasi</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>    Tingkat kepercayaan 95%, faktor cakupan k (asumsi) = 2,0</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Tachometer No Seri 0728544        , ketidakpastian (ub1) : </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.271</td>
                    <td>rpm</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>b. Readability alat kalibrasi (ub2) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Readability = </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Distribusi rectangular (a) =</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Ketidakpastian standar readability  (ub2) =</td>
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
                  </tr>
                  <tr>
                    <td>c. Pada termometer (ub3) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    Tingkat kepercayaan 95%, faktor cakupan k (asumsi) = 2,0</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    Ketidakpastian standar termometer dari sertifikat (ub3) =</td>
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
                  </tr>
                  <tr>
                    <td>d. Pada Alat Pengukur  (ub4) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Julat ukur =</td>
                    <td>0 - 4000 rpm</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Readability  =</td>
                    <td>50</td>
                    <td>rpm</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Distribusi Rectangular (a) =</td>
                    <td>&nbsp;</td>
                    <td>50</td>
                    <td>rpm</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>    - Ketidakpastian standar indikator alat yang dikalibrasi  (ub4) = </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0.004</td>
                    <td>rpm</td>
                  </tr>
              </tbody>
            </table>
            <p class="b my-2">2. ANALISA TIPE A</p>
            <p class="pl-4">
              - Standar deviasi pengukuran           =  			0.46299	rpm <br>
              - Ketidakpaastian pengukuran (ua1)  =      			0.14641000	rpm
            </p>

            <p class="b my-2">3. Ketidakpastian Gabungan (uc)</p>
            <p class="pl-4">
              =    (Tipe A)² + (Tipe B)² <br>			
              =    		0.30804	rpm
            </p>

            <p class="b my-2">4. Ketidakpaasstian Diperluas (U95)</p>
            <p class="pl-4">
              = k. x uc <br>
              = 0.30804	rpm <br>
              = 0.61608	rpm <br>
              =	0.6	rpm
            </p>
          </v-card-text>

          <v-card-text>
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.dikalibrasi.person[1]}} <br>
                Tanggal :	{{data_alat.tanggal_diterima}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person[0]}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
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
import gayaHeader from '~/components/gaya/mixer.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Lembar Kerja Mixer | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '',
    
    data_alat: {
      alat_kalibrasi: [],
      deskripsi: {
        indikator: {
          alat: "",
          buatan: "",
          merek: "",
          nilai: "",
          no_seri: "",
          tipe: ""
        },
        kapasitas: "",
        lokasi: "",
        nama_alat: "",
        no_seri: "",
        suhu: {
          atas: 0,
          bawah: 0
        },
        tipe: ""
      },
      dikalibrasi: {
        date: "",
        person: []
      },
      metode_kalibrasi: "",
      standar_acuan: "",
      tanggal_diterima: ""
    },

    data_kal: {
      rata_rata_faktor_kalibrasi: 0,
      table: {
        faktor_kalibrasi: [],
        individual: [],
        kesalahan_nol_rel: [],
        koreksi_nol: [],
        koreksi_suhu: [],
        ktp_stdv: [],
        mampu_ulang: [],
        penyimpangan: [],
        rata_gaya: [],
        rata_rata: [],
        saat_pemberian_gaya: [],
        sebenarnya: [],
        setelah_pemberian_gaya: []
      }
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
        this.data_kal = req_data.data_kal.pemeriksaan_indikator_pengukur_gaya
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