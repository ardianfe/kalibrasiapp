<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <volHeader></volHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI TERMOMETER RECORDER</p>

            <p>No. Sertifikat : {{no_cert}}</p>
            <v-layout row wrap>
              <table>
                <tr>
                  <td>Pemilik :</td>
                  <td colspan="3">{{data_co.nama_co}}</td>
                </tr>
                <tr>
                  <td>Nama Alat :</td>
                  <td style="width: 35%">{{data_alat.deskripsi.nama_alat}}</td>
                  <td>Res :</td>
                  <td>0.1 C</td>
                </tr>
                <tr>
                  <td>Rentang Suhu :</td>
                  <td>{{data_alat.deskripsi.rentang_suhu}}</td>
                  <td>Alat Standard:</td>
                  <td>{{data_alat.alat_standard.name}}</td>
                </tr>
                <tr>
                  <td>Tipe/Model :</td>
                  <td>{{data_alat.deskripsi.tipe_model}}</td>
                  <td>No. seri :</td>
                  <td>{{data_alat.alat_standard.no_seri}}</td>
                </tr>
                <tr>
                  <td>Merek :</td>
                  <td>{{data_alat.deskripsi.merk}}</td>
                  <td>Ketelusuran :</td>
                  <td>{{data_alat.ketertelusuran}}</td>
                </tr>
                <tr>
                  <td>No. seri :</td>
                  <td>{{data_alat.deskripsi.no_seri}}</td>
                  <td>Suhu Ruangan :</td>
                  <td>{{data_alat.suhu_ruangan}}</td>
                </tr>
                <tr>
                  <td>Buatan :</td>
                  <td>{{data_alat.deskripsi.buatan}}</td>
                  <td>Lokasi :</td>
                  <td>{{data_alat.deskripsi.lokasi_kalibrasi}}</td>
                </tr>
                <tr>
                  <td>No. Spesifikasi :</td>
                  <td>{{data_alat.deskripsi.no_spesifikasi}}</td>
                  <td>Standar Acuan :</td>
                  <td>{{data_alat.standar_acuan}}</td>
                </tr>
              </table>
            </v-layout>

            <p>
              Metoda Kalibrasi : {{data_alat.metode_kalibrasi}}
            </p>

            <v-layout column>
              <div style="width: 32mm" class="mt-3">
                <p class="u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">1. Hasil Kalibrasi</p>
                <p class="i" style="font-size: 9pt; margin: 0; height: 18px;">Result of Calibration</p>
              </div>

              <table>
                <thead>
                    <tr>
                      <th rowspan="2">Penunjukan Alat<br> (C)</th>
                      <th colspan="5">Penunjukan Standar (C)</th>
                      <th rowspan="2">Rata - rata <br> (C)</th>
                      <th rowspan="2">Kesalahan <br> (C)</th>
                      <th rowspan="2">Ketidakpastian <br> (C)</th>
                    </tr>
                    <tr>
                      <td>I</td>
                      <td>ll</td>
                      <td>lll</td>
                      <td>lV</td>
                      <td>V</td>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data_kal.penunjukan_alat" :key="index">
                    <td>{{item}}</td>
                    <td>{{data_kal.pnjk_std_i[index].toFixed(4)}}</td>
                    <td>{{data_kal.pnjk_std_ii[index].toFixed(4)}}</td>
                    <td>{{data_kal.pnjk_std_iii[index].toFixed(4)}}</td>
                    <td>{{data_kal.pnjk_std_iv[index].toFixed(4)}}</td>
                    <td>{{data_kal.pnjk_std_v[index].toFixed(4)}}</td>
                    <td>{{data_kal.rata_rata[index].toFixed(4)}}</td>
                    <td>{{data_kal.kesalahan[index].toFixed(4)}}</td>
                    <td>{{data_kal.ketidakpastian[index].toFixed(4)}}</td>
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
        
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">KETIDAKPASTIAN PENGUKURAN</p>

            <p>No. Sertifikat : {{no_cert}}</p>
            <p class="b">Analisa Tipe B</p>

            <p class="mb-0">Tingkat Kepercayaan 95%</p>
            <table style="width: 90%">
              <tr>
                <td style="width: 60%">Ketidakpastian termometer acuan, No B86732</td>
                <td style="width: 15%">(dari sertifikat) :</td>
                <td style="width: 15%">{{data_ktp.ktp_termometer_acuan_B86732.dari_sertifikat}}</td>
                <td style="width: 10%">C</td>
              </tr>
              <tr>
                <td>Asumsi k=2,0</td>
                <td>(µb1) :</td>
                <td>{{data_ktp.ktp_termometer_acuan_B86732.mb1}}</td>
                <td>C</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td style="width: 60%">Ketidakpastian termometer acuan, No</td>
                <td style="width: 15%">(dari sertifikat)  :</td>
                <td style="width: 15%">{{data_ktp.ktp_termometer_acuan_007872.dari_sertifikat}}</td>
                <td style="width: 10%">C</td>
              </tr>
              <tr>
                <td>Asumsi k=2,0</td>
                <td>(µb1) :</td>
                <td>{{data_ktp.ktp_termometer_acuan_007872.mb1}}</td>
                <td>C</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td style="width: 60%">Ketidakpastian kesetabilan suhu</td>
                <td style="width: 15%">(dari sertifikat)  :</td>
                <td style="width: 15%">{{data_ktp.ktp_ketidakstabilan_suhu.dari_sertifikat}}</td>
                <td style="width: 10%">C</td>
              </tr>
              <tr>
                <td> Asumsi k=2,0</td>
                <td>(µb2) :</td>
                <td>{{data_ktp.ktp_ketidakstabilan_suhu.mb2}}</td>
                <td>C</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td style="width: 60%">Ketidakpastian keseragaman suhu</td>
                <td style="width: 15%">(dari sertifikat)  :</td>
                <td style="width: 15%">{{data_ktp.ktp_keseragaman_suhu.dari_sertifikat}}</td>
                <td style="width: 10%">C</td>
              </tr>
              <tr>
                <td>Asumsi k=2,0</td>
                <td>(µb3) :</td>
                <td>{{data_ktp.ktp_keseragaman_suhu.mb3}}</td>
                <td>C</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td style="width: 60%">Drift alat</td>
                <td style="width: 15%">(dari sertifikat)  :</td>
                <td style="width: 15%">{{data_ktp.ktp_drift_alat.dari_sertifikat}}</td>
                <td style="width: 10%">C</td>
              </tr>
              <tr>
                <td>Asumsi k=2,0</td>
                <td>(µb4) :</td>
                <td>{{data_ktp.ktp_drift_alat.mb4}}</td>
                <td>C</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td colspan="4">Pada Indikator alat :</td>
              </tr>
              <tr>
                <td style="width:60%">Readibility =</td>
                <td>{{data_ktp.ktp_pada_indikator_alat.readibility}}</td>
                <td>C</td>
                <td>Distribusi rectangular (a) = ±</td>
              </tr>
            <!-- </table>

            <table style="width: 90%" class="mt-2"> -->
              <tr>
                <td colspan="4">Estimasi Reliability (R) = 10%,  Derajat kebebasan v = 50</td>
              </tr>
              <tr>
                <td style="width:60%">Ketidakpastian standar pada indikator</td>
                <td>(µb5) :</td>
                <td>{{data_ktp.ktp_pada_indikator_alat.mb5.toFixed(4)}}</td>
                <td>C</td>
              </tr>
            </table>

            <p class="b my-2">Analisa Tipe A</p>
            <table style="width: 90%" class="mt-2">
              <tr>
                <td>Repeatibility =</td>
                <td>{{data_ktp.ktp_analisis_tipe_A.repeatability}}</td>
                <td>C</td>
                <td>Distribusi rectangular (a) = ±</td>
              </tr>
              <tr>
                <td>Reliability (R) =</td>
                <td>20%.</td>
                <td colspan="2">Derajat kebebasan v = 12,5</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td>Ketidakpastian hasil pengukuran (µA1) =  ±</td>
                <td>{{data_ktp.ktp_analisis_tipe_A.ktp_hasil_ukur_mA1}}</td>
                <td>C</td>
              </tr>
              <tr>
                <td colspan="3">Ketidakpastian Gabungan ( µc ) :</td>
              </tr>
              <tr>
                <td colspan="4">
                  <v-img src="/ktp_termo_digital.png" width="auto" height="80px" contain alt=""></v-img>
                </td>
              </tr>
              <tr>
                <td>µc =</td>
                <td>{{data_ktp.ktp_analisis_tipe_A.ktp_gab_mc}}</td>
                <td>C</td>
              </tr>
            </table>

            <table style="width: 90%" class="mt-2">
              <tr>
                <td colspan="2">Ketidakpastian diperluas (µ95) dan faktor cakupan = 2,0</td>
              </tr>
              <tr>
                <td></td>
                <td>µ95 = k.µc</td>
              </tr>
              <tr>
                <td></td>
                <td>µ95 = ± {{data_ktp.ktp_analisis_tipe_A.ktp_diperluas_m95}} C</td>
              </tr>
            </table>

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
import volHeader from '~/components/suhu/termo_recorder.vue'

export default {
  components: {
    volHeader
  },

  head: {
    title: 'Lembar Kerja Termometer Recorder | Bidang Suhu',
    meta: [
      {
        hid: 'Suhu',
        name: 'Suhu',
        content: 'Bidang Suhu'
      }
    ],
  },

  data: () => ({
    no_cert: '-',
    
    data_alat: {
      alat_standard: {
        name: "",
        no_seri: ""
      },
      deskripsi:{
        buatan: "",
        lokasi_kalibrasi: "",
        merk: "",
        nama_alat: "",
        no_seri: 0,
        no_spesifikasi: "-",
        rentang_suhu: "",
        tipe_model: ""
      },
      dikalibrasi: {
        date: "",
        person: ""
      },
      diperiksa: {
        date: "",
        person: ""
      },
      kelembaban: "",
      ketertelusuran: "",
      metode_kalibrasi: "",
      standar_acuan: "",
      suhu_ruangan: "",
      tgl_terima: ""
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

    data_ktp: {
      ktp_analisis_tipe_A: {
        ktp_diperluas_m95: 0,
        ktp_gab_mc: 0,
        ktp_hasil_ukur_mA1: 0,
        repeatability: 0
      },
      ktp_drift_alat: {
        dari_sertifikat: 0,
        mb4: 0
      },
      ktp_keseragaman_suhu: {
        dari_sertifikat: 0,
        mb3: 0
      },
      ktp_ketidakstabilan_suhu: {
        dari_sertifikat: 0,
        mb2: 0
      },
      ktp_pada_indikator_alat: {
        mb5: 0,
        readibility: 0
      },
      ktp_termometer_acuan_007872: {
        dari_sertifikat: 0,
        mb1: 0
      },
      ktp_termometer_acuan_B86732: {
        dari_sertifikat: 0,
        mb1: 0
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
        this.data_co = req_data.data_co
        this.data_kal = req_data.data_kal.data_pengamatan
        this.data_ktp = req_data.data_ktp
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