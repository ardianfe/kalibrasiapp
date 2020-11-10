<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <tekananHeader></tekananHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>

            <table width="100%" class="fixed">
              <thead>
                <tr>
                  <th>Komponen</th>
                  <th>Satuan</th>
                  <th>Distribusi</th>
                  <th>U</th>
                  <th>Pembagi</th>
                  <th>vi</th>
                  <th>ui</th>
                  <th>ci</th>
                  <th>ui.ci</th>
                  <th>(ui.ci)²</th>
                  <th>(ui.ci)4/vi</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="(item, x) in komponen" :key="x">
                  <td>{{item.nama}}</td>
                  <td>{{item.satuan}}</td>
                  <td>{{item.distribusi}}</td>
                  <td>
                    <span v-if="data_ktp.ktp_matrix.u[x]">{{data_ktp.ktp_matrix.u[x].toFixed(3)}}</span></td>
                  <td>
                    <span v-if="data_ktp.ktp_matrix.pembagi[x]">{{data_ktp.ktp_matrix.pembagi[x].toFixed(2)}}</span></td>
                  <td>{{data_ktp.ktp_matrix.vi[x]}}</td>
                  <td>{{data_ktp.ktp_matrix.ui[x]}}</td>
                  <td>{{data_ktp.ktp_matrix.ci[x]}}</td>
                  <td>{{data_ktp.ktp_matrix.uici[x]}}</td>
                  <td>{{data_ktp.ktp_matrix.uici2[x]}}</td>
                  <td>{{data_ktp.ktp_matrix.uici4pervi[x]}}</td>
                </tr> -->
                <!-- <tr>
                  <td colspan="11">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Sums</td>
                  <td>{{data_ktp.sums_ktp2.uici2}}</td>
                  <td>{{data_ktp.sums_ktp2.uici4pervi}}</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian baku gabungan, uc, ppm</td>
                  <td>{{data_ktp.ktp_gabungan.toFixed(4)}}</td>
                  <td>ppm</td>
                </tr>
                <tr>
                  <td colspan="9">Derajat kebebasan efektif, veff</td>
                  <td>{{data_ktp.der_bebas_efektif.toFixed(4)}}</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Faktor cakupan, k-student's for veff and CL 95%</td>
                  <td>{{data_ktp.faktor_cakupan}}</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian bentangan, U = k.uc, ppm</td>
                  <td>{{data_ktp.ktp_bentangan.toFixed(5)}}</td>
                  <td>ppm</td>
                </tr> -->
              </tbody>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{convertDate(data_alat.diperiksa.date)}} <br>
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
    font-size: 9pt;
  } table, th, td {
    border: 1px solid grey;
    padding: 2px
  }
  table.fixed { table-layout:fixed; }
  table.fixed td { overflow: hidden; }
</style>

<script>
import tekananHeader from '~/components/tekanan/pressure.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    tekananHeader
  },

  head: {
    title: 'Ketidakpastian Durometer | Bidang Gaya',
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
    // Penguji  Bobot  Mati  No.	25/213, 
    // var suhu	
    // beda level oli	
    // var g-lokal	
    // daya baca	
    // Daya ulang Pembacaan	


    komponen: [
      { nama: 'Larutan Standar', satuan: 'mg/l', distribusi: 'normal'},
      { nama: 'Labu Ukur', satuan: 'ml', distribusi: 'normal'},
      { nama: 'Buret', satuan: 'ml', distribusi: 'normal'},
      { nama: 'Pipet Ukur', satuan: 'ml', distribusi: 'normal'},
      { nama: 'Linearitas kons Larutan std.', satuan: 'abs', distribusi: 'rectangular'},
      { nama: 'Readability', satuan: 'abs', distribusi: 'rectangular'},
      { nama: 'Daya ulang Pembacaan', satuan: 'abs', distribusi: 'rectangular'},
    ],

    data_alat: {
      alat_kalibrasi: {
        larutan_standar: []
      },
      deskripsi: {
        buatan: "", 
        kondisi_ling: {
          kelembaban_udara: "", 
          suhu_ruang: ""
        },
        lokasi: "",
        merk: "",
        model: "",
        nama_alat: "",
        no_seri: "",
      },
      dikalibrasi: {
        date: "0000-00-00 00:00:00", 
        person: ""
      },
      diperiksa: [{
        date: "0000-00-00 00:00:00", 
        person: ""
      }],
      kondisi_pengamatan: [],
      metode_kalibrasi: "PC-307-03",
      standar_acuan: []
    },
  
    data_ktp: {
      der_bebas_efektif: 0,
      faktor_cakupan: 0,
      ktp_bentangan: 0,
      ktp_gabungan: 0,
      ktp_matrix: {
        ci: [],
        pembagi: [],
        u: [],
        ui: [],
        uici: [],
        uici2: [],
        uici4pervi: [],
        vi: []
      },
      sums_ktp2: {
        uici2: 0, 
        uici4pervi: 0
      },
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
        this.data_ktp = req_data.data_ktp['ktp-2']
        this.data_alat = req_data.data_alat
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
</script>