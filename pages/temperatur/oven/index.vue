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
            
            <tr class="tr-body" v-if="cert_data['Nama Perusahaan']">
              <td class="td-body b">Nama Perusahaan</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Nama Perusahaan'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Alamat']">
              <td class="td-body b">Alamat</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Alamat'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Petugas Kalibrasi']">
              <td class="td-body b">Petugas Kalibrasi</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Petugas Kalibrasi'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Pemeriksa']">
              <td class="td-body b">Pemeriksa</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Pemeriksa'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Disiapkan Oleh']">
              <td class="td-body b">Disiapkan Oleh</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Disiapkan Oleh'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Disetujui Oleh']">
              <td class="td-body b">Disetujui Oleh</td>
              <td class="td-body">:</td>
              <td class="td-body">{{cert_data['Disetujui Oleh'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Tanggal Diterima']">
              <td class="td-body b">Tanggal Diterima</td>
              <td class="td-body">:</td>
              <td class="td-body">{{convertDate(cert_data['Tanggal Diterima'][0].slice(0, 10))}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Tanggal Kalibrasi']">
              <td class="td-body b">Tanggal Kalibrasi</td>
              <td class="td-body">:</td>
              <td class="td-body">{{convertDate(cert_data['Tanggal Kalibrasi'][0].slice(0, 10))}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Tanggal Terbit ']">
              <td class="td-body b">Tanggal Terbit </td>
              <td class="td-body">:</td>
              <td class="td-body">{{convertDate(cert_data['Tanggal Terbit '][0].slice(0, 10))}}</td>
            </tr>

            <tr class="tr-body" v-else>
              <td class="td-body" colspan="3">
                <v-progress-linear indeterminate color="primary"></v-progress-linear>
              </td>
            </tr>
          </table>
        </v-flex>

        <v-flex class="py-3">
          <table v-if="cert_data" class="elevation-4 f-table">
            <tr class="tr-head primary">
              <td class="td-header white--text pt-sans font-weight-bold" colspan="8">IDENTITAS ALAT MASUK</td>
            </tr>
            
            <tr class="tr-body" v-if="cert_data['Nama Alat']">
              <td class="td-body b">Nama Alat</td>
              <td>:</td>
              <td class="td-body" colspan="6">{{cert_data['Nama Alat'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Kapasitas']">
              <td class="td-body b">Kapasitas</td>
              <td>:</td>
              <td class="td-body">{{cert_data['Kapasitas'][0]}} {{cert_data['Kapasitas'][1]}}</td>
              <td class="td-body">/</td>
              <td class="td-body" colspan="4">{{cert_data['Resolusi'][0]}} {{cert_data['Resolusi'][1]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Tipe / Model']">
              <td class="td-body b">Tipe / Model</td>
              <td>:</td>
              <td class="td-body" colspan="6">{{cert_data['Tipe / Model'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Nomor Seri']">
              <td class="td-body b">Nomor Seri</td>
              <td>:</td>
              <td class="td-body" colspan="6">{{cert_data['Nomor Seri'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Merk / Buatan']">
              <td class="td-body b">Merk / Buatan</td>
              <td>:</td>
              <td class="td-body" colspan="6">{{cert_data['Merk / Buatan'][0]}} {{cert_data['Merk / Buatan'][1]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Dimensi Alat']">
              <td class="td-body b">Dimensi Alat</td>
              <td>:</td>
              <td class="">{{cert_data['lebar'][0]}}</td>
              <td class=" b">mm(l)X</td>
              <td class="">{{cert_data['panjang'][0]}}</td>
              <td class=" b">mm(p)X</td>
              <td class="">{{cert_data['tinggi'][0]}}</td>
              <td class="td-body b">mm(t)X</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Pengontrol Suhu']">
              <td class="td-body b">Pengontrol Suhu</td>
              <td>:</td>
              <td class="td-body" colspan="6">{{cert_data['Pengontrol Suhu'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Jumlah Titik Uji']">
              <td class="td-body b">Jumlah Titik Uji</td>
              <td>:</td>
              <td class="td-body" colspan="6">{{cert_data['Jumlah Titik Uji'][0]}} Titik</td>
            </tr>

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
            
            <tr class="tr-body" v-if="cert_data['Standar Yang Dipakai']">
              <td class="td-body b">Standar Yang Dipakai</td>
              <td>:</td>
              <td class="td-body">{{cert_data['Standar Yang Dipakai'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Ketertelusuran']">
              <td class="td-body b">Ketertelusuran</td>
              <td>:</td>
              <td class="td-body">{{cert_data['Ketertelusuran'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Metode Kalibrasi']">
              <td class="td-body b">Metode Kalibrasi</td>
              <td>:</td>
              <td class="td-body">{{cert_data['Metode Kalibrasi'][0]}}</td>
            </tr>

            <tr class="tr-body" v-if="cert_data['Standar Acuan']">
              <td class="td-body b">Standar Acuan</td>
              <td>:</td>
              <td class="td-body">{{cert_data['Standar Acuan'][0]}}</td>
            </tr>

            <tr class="tr-body" v-else>
              <td class="td-body" colspan="3">
                <v-progress-linear indeterminate color="primary"></v-progress-linear>
              </td>
            </tr>
          </table>
        </v-flex>

        <v-flex class="py-3">
          <table v-if="cert_data" class="elevation-4 f-table">
            <tr class="tr-head">
              <td class="td-header primary white--text pt-sans b" colspan="3">LOKASI</td>
            </tr>
            
            <tr class="tr-body" v-if="cert_data['Lokasi Kalibrasi']">
              <td class="td-body b">Lokasi Kalibrasi</td>
              <td>:</td>
              <td class="td-body">{{cert_data['Lokasi Kalibrasi'][0]}}</td>
            </tr>

            <tr class="tr-body" v-else>
              <td class="td-body" colspan="3">
                <v-progress-linear indeterminate color="primary"></v-progress-linear>
              </td>
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

    cert_data: {}
  }),

  mounted() {
    console.log(this.$route);
    
    if (!this.$store.state.isLoggedIn) {
      this.$router.push('/')
    }

    this.getCert(this.$route.query.cert_no)
  },

  methods: {
    async getCert(no_cert) {
      try {
        const request = await this.$calibrate.getCertData({
          no_cert: this.$route.query.cert_no
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
