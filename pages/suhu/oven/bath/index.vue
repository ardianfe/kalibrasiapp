<template>
  <v-layout
    column
  >
    <v-flex xs12 sm8 md6>
      <ovenHeader></ovenHeader>

      <p class="accent--text lato font-weight-bold title mt-5 mb-0">Identitas</p>
      <v-layout column>
        <v-flex class="py-3">
          <table v-if="cert_data" class="elevation-4 f-table">
            <tr class="primary tr-head white--text pt-sans font-weight-bold">
              <td class="td-header" colspan="3">REGISTRASI ORDER</td>
            </tr>
            
            <tr class="tr-body">
              <td class="td-body b">Nama Perusahaan</td>
              <td class="td-body">:</td>
              <td class="td-body">{{data_co.nama_co}}</td>
            </tr>

            <tr class="tr-body">
              <td class="td-body b">Alamat</td>
              <td class="td-body">:</td>
              <td class="td-body">{{data_co.alamat}}</td>
            </tr>

            <tr class="tr-body" v-if="data_alat.dikalibrasi">
              <td class="td-body b">Petugas Kalibrasi</td>
              <td class="td-body">:</td>
              <td class="td-body">{{data_alat.dikalibrasi.person}}</td>
            </tr>

            <tr class="tr-body">
              <td class="td-body b">Pemeriksa</td>
              <td class="td-body">:</td>
              <td class="td-body">{{data_alat.diperiksa}}</td>
            </tr>

            <!-- <tr class="tr-body" v-if="cert_data['Disiapkan Oleh']">
              <td class="td-body b">Disiapkan Oleh</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Disiapkan Oleh'][0]}}</td>
            </tr> -->

            <!-- <tr class="tr-body" v-if="cert_data['Disetujui Oleh']">
              <td class="td-body b">Disetujui Oleh</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Disetujui Oleh'][0]}}</td>
            </tr> -->

            <tr class="tr-body">
              <td class="td-body b">Tanggal Diterima</td>
              <td class="td-body">:</td>
              <td class="td-body">{{convertDate(data_alat.tgl_terima)}}</td>
            </tr>

            <tr class="tr-body" v-if="data_alat.dikalibrasi">
              <td class="td-body b">Tanggal Kalibrasi</td>
              <td class="td-body">:</td>
              <td class="td-body">{{convertDate(data_alat.dikalibrasi.date)}}</td>
            </tr>

            <tr class="tr-body">
              <td class="td-body b">Tanggal Terbit </td>
              <td class="td-body">:</td>
              <td class="td-body">{{convertDate(data_alat.tanggal_terbit)}}</td>
            </tr>
          </table>
        </v-flex>

        <v-flex class="py-3">
          <table v-if="cert_data" class="elevation-4 f-table">
            <tr class="tr-head primary">
              <td class="td-header white--text pt-sans font-weight-bold" colspan="8">IDENTITAS ALAT MASUK</td>
            </tr>
            
            <template v-if="data_alat.deskripsi">
              <tr class="tr-body">
                <td class="td-body b">Nama Alat</td>
                <td>:</td>
                <td class="td-body" colspan="6">{{data_alat.deskripsi.nama_alat}}</td>
              </tr>

              <!-- <tr class="tr-body">
                <td class="td-body b">Kapasitas</td>
                <td>:</td>
                <td class="td-body">{{cert_data['Kapasitas'][0]}} {{cert_data['Kapasitas'][1]}}</td>
                <td class="td-body">/</td>
                <td class="td-body" colspan="4">{{cert_data['Resolusi'][0]}} {{cert_data['Resolusi'][1]}}</td>
              </tr> -->

              <tr class="tr-body">
                <td class="td-body b">Tipe / Model</td>
                <td>:</td>
                <td class="td-body" colspan="6">{{data_alat.deskripsi.model}}</td>
              </tr>

              <tr class="tr-body">
                <td class="td-body b">Nomor Seri</td>
                <td>:</td>
                <td class="td-body" colspan="6">{{data_alat.deskripsi.no_seri}}</td>
              </tr>

              <tr class="tr-body">
                <td class="td-body b">Merk / Buatan</td>
                <td>:</td>
                <td class="td-body" colspan="6">{{data_alat.deskripsi.merk}} {{data_alat.deskripsi.model}}</td>
              </tr>

              <tr class="tr-body" v-if="data_alat.deskripsi.dimensi">
                <td class="td-body b">Dimensi Alat</td>
                <td>:</td>
                <td class="">{{data_alat.deskripsi.dimensi.lebar}}</td>
                <td class=" b">mm(l)X</td>
                <td class="">{{data_alat.deskripsi.dimensi.panjang}}</td>
                <td class=" b">mm(p)X</td>
                <td class="">{{data_alat.deskripsi.dimensi.tinggi}}</td>
                <td class="td-body b">mm(t)X</td>
              </tr>

              <tr class="tr-body">
                <td class="td-body b">Pengontrol Suhu</td>
                <td>:</td>
                <td class="td-body" colspan="6">{{data_alat.deskripsi.pengontrol_suhu}}</td>
              </tr>

              <tr class="tr-body">
                <td class="td-body b">Jumlah Titik Uji</td>
                <td>:</td>
                <td class="td-body" colspan="6">{{data_alat.deskripsi.jumlah_titik}} Titik</td>
              </tr>
            </template>

            <tr class="tr-body" v-else>
              <td class="td-body" colspan="8">
                <v-progress-linear indeterminate color="primary"></v-progress-linear>
              </td>
            </tr>

          </table>
        </v-flex>

        <v-flex class="py-3">
          <table v-if="cert_data" class="elevation-4 f-table">
            <tr class="tr-head primary">
              <td class="td-header white--text pt-sans font-weight-bold" colspan="3">IDENTITAS STANDAR</td>
            </tr>
            
            <tr class="tr-body">
              <td class="td-body b">Standar Yang Dipakai</td>
              <td>:</td>
              <td class="td-body">{{data_alat.standar_dipakai}}</td>
            </tr>

            <tr class="tr-body">
              <td class="td-body b">Ketertelusuran</td>
              <td>:</td>
              <td class="td-body">{{data_alat.ketertelusuran}}</td>
            </tr>

            <tr class="tr-body">
              <td class="td-body b">Metode Kalibrasi</td>
              <td>:</td>
              <td class="td-body">{{data_alat.metode_kalibrasi}}</td>
            </tr>

            <tr class="tr-body">
              <td class="td-body b">Standar Acuan</td>
              <td>:</td>
              <td class="td-body">{{data_alat.standar_acuan}}</td>
            </tr>
          </table>
        </v-flex>

        <v-flex class="py-3">
          <table v-if="cert_data" class="elevation-4 f-table">
            <tr class="tr-head">
              <td class="td-header primary white--text pt-sans b" colspan="3">LOKASI</td>
            </tr>
            
            <tr class="tr-body" v-if="data_alat.deskripsi">
              <td class="td-body b">Lokasi Kalibrasi</td>
              <td>:</td>
              <td class="td-body">{{data_alat.deskripsi.lokasi}}</td>
            </tr>
          </table>
        </v-flex>
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
  } .b {
    font-weight: 600;
  }
</style>

<script>
import ovenHeader from '~/components/oven.vue'

export default {
  head: {
    title: 'Temperatur',
    meta: [
      {
        hid: 'temperature',
        name: 'temperature',
        content: 'Bidang Temperatur - Oven'
      }
    ]
  },

  components: {
    ovenHeader
  },

  data: () => ({
    fields: [
      { id: 1, name: '150', desc: '-', url: '/temperatur/oven/150' },
      { id: 2, name: '110', desc: '-', url: '/temperatur/oven/110' },
    ],

    menus: [
      { id: 1, text: 'Identitas', url: '' },
      { id: 2, text: 'Lembar Kerja', url: 'lembar-kerja' },
      // { id: 3, text: 'Sertifikat', url: '/print/sertifikat' },
      // { id: 4, text: 'Lampiran', url: '/print/lmapiran' },
    ],

    sheets: [],

    cert_data: {},

    data_alat: {},
    data_co: {}
  }),

  mounted() {
    // console.log(this.$route);
    
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }

    // this.getCert(this.$route.query.cert_no)
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        let req_data = req.results[0]

        console.log(req_data);

        this.data_co = req_data.data_co
        this.data_alat = req_data.data_alat
        // this.data_kal = req_data.data_kal
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    async getCert(no_cert) {
      try {
        const request = await this.$calibrate.getDataCertificate({
          id: this.$route.query.cert_no
        })

        console.log('req :', request);
        this.cert_data = request.data_perusahaan
        
      } catch (error) {
        console.log(error);
        
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
