<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <dimensiHeader></dimensiHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI DIAL INDIKATOR</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat.deskripsi.nama_alat }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat.deskripsi.model }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat.deskripsi.merk }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat.deskripsi.kapasitas }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat.deskripsi.no_seri }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat.deskripsi.buatan }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat.deskripsi.lokasi_kalibrasi }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ data_alat.deskripsi.suhu_ruangan[0] }} - {{ data_alat.deskripsi.suhu_ruangan[1] }} {{ data_alat.deskripsi.suhu_ruangan[2] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembaban : {{ data_alat.deskripsi['kelembaban_%'] + ' %' }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan Terkoreksi : {{ data_alat.deskripsi.suhu_terkoreksi[0].toFixed(4) }} - {{ data_alat.deskripsi.suhu_terkoreksi[1].toFixed(4) }} {{ data_alat.deskripsi.suhu_terkoreksi[2] }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembaban Terkoreksi : {{ data_alat.deskripsi['kelembaban_terkoreksi_%'] + ' %' }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: {{ data_alat.alat_kalibrasi[0] }}, {{ data_alat.alat_kalibrasi[1] }} </p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat.metode_kalibrasi }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ data_alat.standar_acuan }}</p>
                </v-layout>                
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI DIAL INDIKATOR</p>

            <p class="b">No. Laporan : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs6 class="pa-2">
                <table width="100%">
                  <thead>
                    <tr>
                      <th></th>
                      <th colspan="3">N A I K</th>
                      <th>&nbsp;</th>
                      <th colspan="3">T U R U N</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 30" :key="index">
                      <td>10</td>
                      <td>99.0 </td>
                      <td>99.0 </td>
                      <td>100.0 </td>
                      <td>&nbsp;</td>
                      <td>101.0 </td>
                      <td>101.0 </td>
                      <td>100.0 </td>
                    </tr>
                  </tbody>
                </table>
              </v-flex>
              <v-flex xs6 class="pa-2">
                <table width="100%">
                  <thead>
                    <tr>
                      <th colspan="2">Pengukuran Berulang</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 5" :key="index">
                      <td>10</td>
                      <td>99.0 </td>
                    </tr>
                  </tbody>
                </table>
              </v-flex>
            </v-layout>
            
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa}} <br>
                Tanggal :	{{convertDate(data_alat.tgl_diterima)}} <br>
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
            <table width="100%">
              <thead>
                <tr class="tableizer-firstrow">
                  <th colspan="3">Perhitungan Ketidakpastian Pengukuran</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>a. </td>
                  <td>Pada alat kalibrasi </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Tingkat kepercayaan 95 %, Faktor cakupan k (asumsi) = 2</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>- Gauge Block No Seri 516-970-01, Ketidakpastian dari Sertifikat  Ub1   =  0.19 / 2  =</td>
                  <td>{{data_ktp[0]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>b.</td>
                  <td>Resolusi jangka sorong</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub3  = ( (10) / 1.73205 ) =</td>
                  <td>{{data_ktp[1]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>c.</td>
                  <td>Selisih koefisien muai</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub7  = ( 2e-6 / 1.73205  )  x 150000           =</td>
                  <td>{{data_ktp[2]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>d.</td>
                  <td>Selisih suhu antara jangka sorong dan gauge block</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub2 = (0.1/ 1.73205) x 3,45 =</td>
                  <td>{{data_ktp[3]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>e.</td>
                  <td>Drift Standar</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub5  = ((0.05 + 0.5e-6.L) x Y) / 1.73205 =  ((0.05+0.5e-6x200000)x2 / 1.73205 =</td>
                  <td>{{data_ktp[4]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>f.</td>
                  <td>Lapisan Wringing</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub6  = Ö ( k x 0.052) / 1.73205 =  Ö ( 3 x 0.052 ) /  1.73205  =</td>
                  <td>{{data_ktp[5]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>g.</td>
                  <td>Kesalahan geometric</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>ub4 = ( 10  / 1.73205 ) =</td>
                  <td>{{data_ktp[6]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>h.</td>
                  <td>Standar deviasi 0.00000 =</td>
                  <td>{{data_ktp[7]}} um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Ketidakpastian Gabungan (uc) = </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>#REF!</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= 8.1774223</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Ketidakpastian diperluas (U95) =</td>
                  <td>{{ktp_u95[0]}}</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= {{ktp_u95[1]}}</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= {{ktp_u95[2]}}</td>
                  <td>um</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>= {{ktp_u95[3]}}</td>
                  <td>mm</td>
                </tr>
              </tbody>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa}} <br>
                Tanggal :	{{convertDate(data_alat.tgl_diterima)}} <br>
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
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px;
    font-size: 10pt
  }
</style>

<script>
import dimensiHeader from '~/components/dimensi/dial_indikator.vue'
// import durometer from '~/static/durometer.json' 

export default {
  components: {
    dimensiHeader
  },

  head: {
    title: 'Lembar Kerja Dial Indikator | Bidang Dimensi',
    meta: [
      {
        hid: 'dimensi',
        name: 'dimensi',
        content: 'Bidang Dimensi'
      }
    ],
  },

  data: () => ({
    no_cert: '',

    ktp_u95: [],
    uc: 0,
    data_ktp: {
      ktp_gab: 0,
      ktp_u95: [],
      stdev: {
        key: 0,
        value: 0
      },
      ub1: 0,
      ub2: 0,
      ub3: {
        key: "",
        value: 0
      },
      ub4: {
        key: "",
        value: 0
      },
      ub5: {
        key: "",
        value: 0
      },
      ub6: {
        key: "",
        value: 0
      },
      ub7: {
        key: "",
        value: 0
      },
      ub8: {
        key: "",
        value: 0
      }
    },

    data_kal: {
      "Kesalahan ": [],
      "Mampu Ulang ": [],
      "Nilai Aktual": [],
      "Pembacaan": [],
      "Pembacaan Alat ": [],
      "Rata-rata": [],
      "Unnamed: 4": [],
      "Unnamed: 6": [],
      "Unnamed: 8": [],
      "Unnamed: 10": []
    },

    data_alat: {
      alat_kalibrasi: [],
      deskripsi: {
        buatan: "",
        kapasitas: "",
        'kelembaban_%':  0,
        'kelembaban_terkoreksi_%':  0,
        lokasi_kalibrasi: "",
        merk: "",
        nama_alat: "",
        no_seri:  0,
        suhu_ruangan: [],
        suhu_terkoreksi: [ 0.1000, 0.1000, '%'],
        tipe_model: "-"
      },
      dikalibrasi: {
        date: "",
        person: ""
      },
      diperiksa: "",
      metode_kalibrasi: "",
      standar_acuan: "",
      tgl_diterima: ""
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
        this.data_kal = req_data.data_kal.hasil

        this.ktp_u95 = req_data.data_ktp.hasil.ktp_u95
        this.uc = req_data.data_ktp.hasil.uc
        this.data_ktp = req_data.data_ktp.data['Unnamed: 8']
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