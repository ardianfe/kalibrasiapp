<template>
  <v-layout
    column
  >
    <v-flex xs12 sm8 md6>
      <suhuHeader></suhuHeader>

      <p class="accent--text lato font-weight-bold title mt-5 mb-0">Lembar Kerja</p>
      <v-card class="mt-3 elevation-4 v-main-card">
        <!-- <v-card flat> -->
          <v-card-text>
            <div class="pa-1">
              <p>No. Sertifikat : {{cert_no}}</p>
              <table class="tableizer-table">
                <thead>
                  <tr class="tableizer-firstrow">
                    <td>Pemilik :</td>
                    <td colspan="3">PEMPROV JABAR - DINAS KELAUTAN DAN PERIKANAN</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width:10%">Nama Alat :</td>
                    <td style="width:40%">{{data_alat.deskripsi.nama_alat}}</td>
                    <td style="width:10%">Resolusi : {{data_alat.deskripsi.resolusi}}</td>
                    <td style="width:40%">{{data_alat.deskripsi.tekanan}}</td>
                  </tr>
                  <tr>
                    <td>Rentang Suhu :</td>
                    <td>{{data_alat.deskripsi.kapasitas}}</td>
                    <td>Kalibrator :</td>
                    <td>
                      {{data_alat.standar_dipakai}}
                    </td>
                  </tr>
                  <tr>
                    <td>Tipe/Model :</td>
                    <td>{{data_alat.deskripsi.tipe_model[0]}}</td>
                    <td>Ketelusuran :</td>
                    <td>{{data_alat.ketertelusuran}}</td>
                  </tr>
                  <tr>
                    <td>Merek :</td>
                    <td>{{data_alat.deskripsi.merk_buatan[0]}}</td>
                    <td>Suhu Ruangan :</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>No. seri :</td>
                    <td>{{data_alat.deskripsi.no_seri}}</td>
                    <td>Lokasi :</td>
                    <td>{{data_alat.kondisi_lingkungan.lokasi_kalibrasi}}</td>
                  </tr>
                  <tr>
                    <td>Buatan :</td>
                    <td colspan="3">{{data_alat.deskripsi.merk_buatan[1]}}</td>
                  </tr>
                  <tr>
                    <td colspan="4">&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Standar Acuan :</td>
                    <td colspan="3"><span v-for="(x, index) in data_alat.standar_acuan" :key="index">{{x}}</span></td>
                  </tr>
                  <tr>
                    <td>Metoda Kalibrasi :</td>
                    <td colspan="3">{{data_alat.metode_kalibrasi}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-card-text>
        <!-- </v-card> -->
      </v-card>
      
      <v-card class="mt-3 elevation-4 v-main-card">
        <v-card-text>
          <div class="pa-1">
            <p class="b">1. Hasil Pengukuran</p>

            <table>
              <thead>
                  <tr>
                    <th colspan="2" rowspan="2">Penunjukan Alat </th>
                    <th colspan="10">Penunjukan Standar (°C)</th>
                    <th rowspan="2">Koreksi</th>
                    <th rowspan="2">Std Deviasi</th>
                  </tr>
                  <tr>
                    <td colspan="3">I</td>
                    <td colspan="3">II</td>
                    <td colspan="3">III</td>
                    <td>Rata-rata</td>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mpa</td>
                  <td> (°C)</td>
                  <td>Max</td>
                  <td>Min</td>
                  <td>rata-rata</td>
                  <td>Max</td>
                  <td>Min</td>
                  <td>rata-rata</td>
                  <td>Max</td>
                  <td>Min</td>
                  <td>rata-rata</td>
                  <td>I, II dan III</td>
                  <td>(°C)</td>
                  <td>(°C)</td>
                </tr>
                <tr v-for="(item, index) in hasil_pengukuran.Mpa" :key="index">
                  <td>{{item}}</td>
                  <td>{{hasil_pengukuran.koreksi_derajat_C[index] ? hasil_pengukuran.koreksi_derajat_C[index].toFixed(2) : hasil_pengukuran.koreksi_derajat_C[index]}}</td>
                  <td>{{hasil_pengukuran.I_max[index] ? hasil_pengukuran.I_max[index].toFixed(2) : hasil_pengukuran.I_max[index]}}</td>
                  <td>{{hasil_pengukuran.I_min[index] ? hasil_pengukuran.I_min[index].toFixed(2) : hasil_pengukuran.I_min[index]}}</td>
                  <td>{{hasil_pengukuran.I_rata[index] ? hasil_pengukuran.I_rata[index].toFixed(2) : hasil_pengukuran.I_rata[index]}}</td>
                  <td>{{hasil_pengukuran.II_max[index] ? hasil_pengukuran.II_max[index].toFixed(2) : hasil_pengukuran.II_max[index]}}</td>
                  <td>{{hasil_pengukuran.II_min[index] ? hasil_pengukuran.II_min[index].toFixed(2) : hasil_pengukuran.II_min[index]}}</td>
                  <td>{{hasil_pengukuran.II_rata[index] ? hasil_pengukuran.II_rata[index].toFixed(2) : hasil_pengukuran.II_rata[index]}}</td>
                  <td>{{hasil_pengukuran.III_max[index] ? hasil_pengukuran.III_max[index].toFixed(2) : hasil_pengukuran.III_max[index]}}</td>
                  <td>{{hasil_pengukuran.III_min[index] ? hasil_pengukuran.III_min[index].toFixed(2) : hasil_pengukuran.III_min[index]}}</td>
                  <td>{{hasil_pengukuran.III_rata[index] ? hasil_pengukuran.III_rata[index].toFixed(2) : hasil_pengukuran.III_rata[index]}}</td>
                  <td>{{hasil_pengukuran.rata_rata[index] ? hasil_pengukuran.rata_rata[index].toFixed(2) : hasil_pengukuran.rata_rata[index]}}</td>
                  <td>{{hasil_pengukuran.derajat_C[index] ? hasil_pengukuran.derajat_C[index].toFixed(2) : hasil_pengukuran.derajat_C[index]}}</td>
                  <td>{{hasil_pengukuran.stdv_C[index] ? hasil_pengukuran.stdv_C[index].toFixed(2) : hasil_pengukuran.stdv_C[index]}}</td>
                </tr>
              </tbody>
            </table>
            <p>Catatan :	Nilai rata-rata telah dibulatkan ke  0,1 °C</p>
          </div>
        </v-card-text>
      </v-card>

      <p class="accent--text lato font-weight-bold title mt-5 mb-0">Ketidakpastian</p>
      <v-card class="mt-3 elevation-4 v-main-card">
        <v-card-text>
          <div class="pa-1">
            <p class="b">Perhitungan Ketidakpastian</p>

            <table class="tableizer-table">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th>Komponen</th>
                    <th>Satuan</th>
                    <th>Sebaran</th>
                    <th>U</th>
                    <th>Pembagi</th>
                    <th>Vi</th>
                    <th>Ui</th>
                    <th>Ci</th>
                    <th>UiCi</th>
                    <th>(UiCi)2</th>
                    <th>(Ui.Ci)4/Vi</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(item, index) in perhitungan_ktp.data_ktp.Komponen" :key="index">
                    <td>{{item}}</td>
                    <td>{{perhitungan_ktp.data_ktp.satuan[index]}}</td>
                    <td>{{perhitungan_ktp.data_ktp.U[index]}}</td>
                    <td>{{perhitungan_ktp.data_ktp.Pembagi[index]}}</td>
                    <td>{{perhitungan_ktp.data_ktp.Sebaran[index]}}</td>
                    <td>{{perhitungan_ktp.data_ktp.Vi[index]}}</td>
                    <td>{{perhitungan_ktp.data_ktp.Ui[index].toExponential(4)}}</td>
                    <td>{{perhitungan_ktp.data_ktp.Ci[index]}}</td>
                    <td>{{perhitungan_ktp.data_ktp.UiCi[index].toExponential(4)}}</td>
                    <td>{{perhitungan_ktp.data_ktp.UiCiSquare[index].toExponential(4)}}</td>
                    <td>{{perhitungan_ktp.data_ktp.UiCi4perVi[index].toExponential(4)}}</td>
                  </tr>
                  <tr>
                    <td colspan="9">Sums</td>
                    <td>0.42</td>
                    <td>0.00380324</td>
                  </tr>
                  <tr>
                    <td colspan="9">Ketidakpastian baku gabungan, uc, (mg)</td>
                    <td>0.65</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td colspan="9">Faktor cakupan (k) pada tingkat kepercayaan 95% (dari tabel )</td>
                    <td>2.00</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td colspan="9">Ketidak pastian bentangan, U = k.uc</td>
                    <td>1.3</td>
                    <td>°C</td>
                  </tr>
              </tbody>
            </table>
          </div>

          <v-layout row class='mt-4'>
            <v-flex xs6>
              Diperiksa oleh : data_alat.diperiksa.person}} <br>
              Tanggal :	data_alat.diperiksa.date}} <br>
              Tanda Tangan :	

              <hr style="width: 50%; margin-top: 100px">	
            </v-flex>
            <v-flex xs6>
              Dikalibrasi oleh : data_alat.dikalibrasi.person}} <br>
              Tanggal :	convertDate(data_alat.dikalibrasi.date)}} <br>
              Tanda-tangan :

              <hr style="width: 50%; margin-top: 100px">	
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>

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
    padding: 4px;
  }
</style>

<script>
import suhuHeader from '~/components/suhu/auto_clave.vue'

export default {
  components: {
    suhuHeader
  },

  head: {
    title: 'Lembar Kerja Auto Clave | Bidang Suhu',
    meta: [
      {
        hid: 'Suhu',
        name: 'Suhu',
        content: 'Bidang Suhu'
      }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },

  data: () => ({
    cert_no: '',

    data_alat: {
      deskripsi: {
        jumlah_titik: 0,
        kapasitas: "",
        merk_buatan: [0,0],
        nama_alat: "",
        no_seri: "",
        pengontrol_suhu: "",
        resolusi: '',
        tekanan: "",
        tipe_model: []
      },
      dikalibrasi: {
        date: "",
        person: ""
      },
      diperiksa: "",
      ketertelusuran: "",
      kondisi_lingkungan: {
        kelembaban: {
          akhir_RH: 0,
          awal_RH: 0
        },
        lokasi_kalibrasi: "",
        suhu: {
          akhir: 0,
          awal: 0
        }
      },
      metode_kalibrasi: "",
      standar_acuan: [],
      standar_dipakai: "",
      tgl_terima: ""
    },

    hasil_pengukuran:{
      III_max:[],
      III_min:[],
      III_rata:[],
      II_max:[],
      II_min:[],
      II_rata:[],
      I_max:[],
      I_min:[],
      I_rata:[],
      Mpa:[],
      derajat_C:[],
      koreksi_derajat_C:[],
      rata_rata:[],
      stdv_C:[]
    },

    perhitungan_ktp: {
      data_ktp: {
        Ci: [],
        Komponen: [],
        Pembagi: [],
        Sebaran: [],
        U: [],
        Ui: [],
        UiCi: [],
        UiCi4perVi: [],
        UiCiSquare: [],
        Vi: [],
        satuan: []
      },
      faktor_cakupan: {
        besaran:  "",
        nilai: 0
      },
      ktp_baku_gabungan: {
        besaran:  "",
        nilai: 0
      },
      ktp_bentangan: {
        besaran: "",
        nilai: 0
      },
      sums: []
    }

  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        let req_data = req.results[0]

        console.log(req_data);

        this.data_alat = req_data.data_alat
        this.hasil_pengukuran = req_data.data_kal.hasil_pengukuran
        this.perhitungan_ktp = req_data.data_ktp.perhitungan_ktp

        this.titik_uji = req_data.data_alat.deskripsi.jumlah_titik
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
