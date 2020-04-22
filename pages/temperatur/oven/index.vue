<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          <v-btn icon large class="primary" @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn> &nbsp;
          <p class="ma-0">
            Bidang Temperatur - Oven |  
            <span class="font-weight-bold">
              {{ $route.query.cert_no }}
            </span>
          </p>
        </v-card-title>
        <v-card-text v-if="$store.state.isLoggedIn">
          <v-layout row wrap>
            <v-flex class="pa-3" xs6 sm3>
              <v-card class="grey" style="padding: 40px 0;">
                <v-card-text class="title">
                  <p style="margin:0; color: white; text-align: center">Identitas</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="pa-3" xs6 sm3>
              <v-card class="primary" style="padding: 40px 0; cursor: pointer" @click="$router.push($route.path +'/lembar-kerja?cert_no='+ $route.query.cert_no)">
                <v-card-text class="title">
                  <p style="margin:0; color: white; text-align: center">Lembar Kerja</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="pa-3" xs6 sm3>
              <v-card class="primary" style="padding: 40px 0; cursor: pointer" @click="$router.push('/print/sertifikat?cert_no='+ $route.query.cert_no)">
                <v-card-text class="title">
                  <p style="margin:0; color: white; text-align: center">Cetak Sertifikat</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="pa-3" xs6 sm3>
              <v-card class="primary" style="padding: 40px 0; cursor: pointer" @click="$router.push('/print/lampiran?cert_no='+ $route.query.cert_no)">
                <v-card-text class="title">
                  <p style="margin:0; color: white; text-align: center">Cetak Lampiran</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text>
          <table v-if="cert_data">
            <tr>
              <th colspan="3">REGISTRASI ORDER</th>
            </tr>
            
            <tr v-if="cert_data['Nama Perusahaan']">
              <td class="b">Nama Perusahaan</td>
              <td>:</td>
              <td>{{cert_data['Nama Perusahaan'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Alamat']">
              <td class="b">Alamat</td>
              <td>:</td>
              <td>{{cert_data['Alamat'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Petugas Kalibrasi']">
              <td class="b">Petugas Kalibrasi</td>
              <td>:</td>
              <td>{{cert_data['Petugas Kalibrasi'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Pemeriksa']">
              <td class="b">Pemeriksa</td>
              <td>:</td>
              <td>{{cert_data['Pemeriksa'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Disiapkan Oleh']">
              <td class="b">Disiapkan Oleh</td>
              <td>:</td>
              <td>{{cert_data['Disiapkan Oleh'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Disetujui Oleh']">
              <td class="b">Disetujui Oleh</td>
              <td>:</td>
              <td>{{cert_data['Disetujui Oleh'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Tanggal Diterima']">
              <td class="b">Tanggal Diterima</td>
              <td>:</td>
              <td>{{convertDate(cert_data['Tanggal Diterima'][0].slice(0, 10))}}</td>
            </tr>

            <tr v-if="cert_data['Tanggal Kalibrasi']">
              <td class="b">Tanggal Kalibrasi</td>
              <td>:</td>
              <td>{{convertDate(cert_data['Tanggal Kalibrasi'][0].slice(0, 10))}}</td>
            </tr>

            <tr v-if="cert_data['Tanggal Terbit ']">
              <td class="b">Tanggal Terbit </td>
              <td>:</td>
              <td>{{convertDate(cert_data['Tanggal Terbit '][0].slice(0, 10))}}</td>
            </tr>
          </table>
          <br>

          <table v-if="cert_data">
            <tr>
              <th colspan="8">IDENTITAS ALAT MASUK</th>
            </tr>
            
            <tr v-if="cert_data['Nama Alat']">
              <td class="b">Nama Alat</td>
              <td>:</td>
              <td colspan="6">{{cert_data['Nama Alat'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Kapasitas']">
              <td class="b">Kapasitas</td>
              <td>:</td>
              <td>{{cert_data['Kapasitas'][0]}} {{cert_data['Kapasitas'][1]}}</td>
              <td>/</td>
              <td colspan="4">{{cert_data['Resolusi'][0]}} {{cert_data['Resolusi'][1]}}</td>
            </tr>

            <tr v-if="cert_data['Tipe / Model']">
              <td class="b">Tipe / Model</td>
              <td>:</td>
              <td colspan="6">{{cert_data['Tipe / Model'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Nomor Seri']">
              <td class="b">Nomor Seri</td>
              <td>:</td>
              <td colspan="6">{{cert_data['Nomor Seri'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Merk / Buatan']">
              <td class="b">Merk / Buatan</td>
              <td>:</td>
              <td colspan="6">{{cert_data['Merk / Buatan'][0]}} {{cert_data['Merk / Buatan'][1]}}</td>
            </tr>

            <tr v-if="cert_data['Dimensi Alat']">
              <td class="b">Dimensi Alat</td>
              <td>:</td>
              <td>{{cert_data['lebar'][0]}}</td>
              <td class="b">mm(l)X</td>
              <td>{{cert_data['panjang'][0]}}</td>
              <td class="b">mm(p)X</td>
              <td>{{cert_data['tinggi'][0]}}</td>
              <td class="b">mm(t)X</td>
            </tr>

            <tr v-if="cert_data['Pengontrol Suhu']">
              <td class="b">Pengontrol Suhu</td>
              <td>:</td>
              <td colspan="6">{{cert_data['Pengontrol Suhu'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Jumlah Titik Uji']">
              <td class="b">Jumlah Titik Uji</td>
              <td>:</td>
              <td colspan="6">{{cert_data['Jumlah Titik Uji'][0]}} Titik</td>
            </tr>
          </table>
          <br>

          <table v-if="cert_data">
            <tr>
              <th colspan="3">IDENTITAS STANDAR</th>
            </tr>
            
            <tr v-if="cert_data['Standar Yang Dipakai']">
              <td class="b">Standar Yang Dipakai</td>
              <td>:</td>
              <td>{{cert_data['Standar Yang Dipakai'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Ketertelusuran']">
              <td class="b">Ketertelusuran</td>
              <td>:</td>
              <td>{{cert_data['Ketertelusuran'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Metode Kalibrasi']">
              <td class="b">Metode Kalibrasi</td>
              <td>:</td>
              <td>{{cert_data['Metode Kalibrasi'][0]}}</td>
            </tr>

            <tr v-if="cert_data['Standar Acuan']">
              <td class="b">Standar Acuan</td>
              <td>:</td>
              <td>{{cert_data['Standar Acuan'][0]}}</td>
            </tr>
          </table>
          <br>
          
          <table v-if="cert_data">
            <tr>
              <th colspan="3">LOKASI</th>
            </tr>
            
            <tr v-if="cert_data['Lokasi Kalibrasi']">
              <td class="b">Lokasi Kalibrasi</td>
              <td>:</td>
              <td>{{cert_data['Lokasi Kalibrasi'][0]}}</td>
            </tr>
          </table>
          <br>
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
    padding: 4px 8px;
  } .b {
    font-weight: 600;
  }
</style>

<script>
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
