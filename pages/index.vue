<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <template v-if="$store.state.isLoggedIn">
        <p class="accent--text lato font-weight-bold title">Dashboard</p>
        <v-card class="v-main-card elevation-9 primary">
          <!-- {{$store.state.company}}
          {{$store.state.dashboard}} -->
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 class="pa-2">
                <p class="white--text display-1 pt-4 pb-2 font-weight-bold lato">Selamat Datang di 
                  <br> Portal Kalibrasi!</p>
                  <hr style="border: 2px solid white; width: 27%">
                <!-- <v-card style="height: 300px; width: 100%" class="v-main-card success" flat></v-card> -->
              </v-flex>
              <v-flex xs12 sm6 md3 class="pa-2">
                <v-hover>
                  <v-card @click="$router.push('#process')"
                    slot-scope="{hover}" flat
                    style="width: 90%" 
                    class="pointer primary--text v-main-card text-xs-center"
                    :class="`${hover ? 'elevation-4 white darken-2' : 'elevation-0 white darken-3'}`"
                  >
                    <v-card-text class="pt-4" style="min-height: 200px; max-height: 200px;">
                      <p v-if="$store.state.dashboard.jumlah && $store.state.certified.jumlah" color="primary" class="primary--text display-4 ma-0 bebas-neue">{{$store.state.dashboard.jumlah + $store.state.certified.jumlah}}</p>
                      <div class="text-xs-center" v-else>
                        <v-progress-circular
                          :size="50"
                          color="primary"
                          indeterminate class="my-2"
                        ></v-progress-circular>
                      </div>
                      <p class="primary--text ma-0 pt-sans headline">Sertifikat</p>
                      <!-- <p color="primary" class="primary--text title px-2 pt-sans">Sertifikat</p> -->
                    </v-card-text>
                    <v-card-actions class="pa-0">
                      <v-spacer></v-spacer>
                      <v-icon color="primary">keyboard_arrow_down</v-icon>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>

              <v-flex xs12 sm6 md3 class="pa-2">
                <v-hover>
                  <v-card @click="$router.push('#printed')"
                    slot-scope="{hover}" flat
                    style="width: 90%" 
                    class="pointer primary--text v-main-card text-xs-center"
                    :class="`${hover ? 'elevation-4 white darken-2' : 'elevation-0 white darken-3'}`"
                  >
                    <v-card-text class="pt-4" style="min-height: 200px; max-height: 200px;">
                      <p v-if="$store.state.company" class="primary--text display-4 ma-0 bebas-neue">{{$store.state.company}}</p>
                      <div class="text-xs-center" v-else>
                        <v-progress-circular
                          :size="50"
                          color="primary"
                          indeterminate class="my-2"
                        ></v-progress-circular>
                      </div>
                      <p class="primary--text ma-0 pt-sans headline">Perusahaan</p>
                    </v-card-text>
                    <v-card-actions class="pa-0">
                      <v-spacer></v-spacer>
                      <v-icon color="primary">keyboard_arrow_down</v-icon>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <p class="accent--text lato font-weight-bold title mt-5">Bidang</p>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex class="pa-1" xs6 sm3 v-for="(field, index) in fields" :key="index">
                <v-hover>
                  <v-card 
                    slot-scope="{hover}" flat
                    @click="field.id == 1 ? $router.push('/bidang' + field.url) : ''"
                    :class="`${hover ? 'elevation-8 pointer lighten-1 '+field.color : 'elevation-0 '+ field.color }`" 
                    class="v-main-card white--text pa-0"
                  >
                    <v-card-title>
                      <p class="pt-sans ma-0 text-truncate">{{field.name}}</p>
                    </v-card-title>
                    <v-card-text style="width: 100%; height: 80px; max-height: 80px;" class="d-flex">
                      <p class="display-1 pt-sans yellow--text text-xs-center">{{field.count}}</p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="pa-1 darken-1" :class="field.color">
                      <v-spacer></v-spacer>
                      <v-btn class="" icon flat>
                        <v-icon color="white" large>keyboard_arrow_right</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout row class="mt-5" id="process">
          <v-flex>
            <p class="accent--text lato font-weight-bold title mt-3">Sedang Proses</p>
          </v-flex>
          <v-flex class="text-xs-right">
            <v-btn class="primary info" flat to="/ongoing">Lihat Semuanya</v-btn>
          </v-flex>
        </v-layout>
        <table style="width: 100%" class="f-table my-2">
          <tr class="tr-head white--text pt-sans font-weight-bold">
            <td class="primary td-header">Nama Perusahaan</td>
            <td class="primary td-header">Tgl Terima</td>
            <td class="primary td-header">Status Kalibrasi</td>
          </tr>

          <tr class="tr-body" v-for="(item, index) in $store.state.dashboard.data" :key="index">
            <td class="td-body">{{item['Nama Perusahaan'][0]}}</td>
            <td class="td-body">{{convertDate(item['Tanggal Diterima'][0]['$date'])}}</td>
            <td class="td-body">Sudah Kalibrasi</td>
          </tr>
        </table>

        <v-layout row class="mt-5" id="printed">
          <v-flex>
            <p class="accent--text lato font-weight-bold title mt-3">Sudah Cetak</p>
          </v-flex>
          <v-flex class="text-xs-right">
            <v-btn class="primary info" flat to="/certified">Lihat Semuanya</v-btn>
          </v-flex>
        </v-layout>
        <table style="width: 100%" class="f-table my-2">
          <tr class="tr-head white--text pt-sans font-weight-bold">
            <td class="primary td-header">Nama Perusahaan</td>
            <td class="primary td-header">Tanggal Terima</td>
            <td class="primary td-header">Tanggal Kalibrasi</td>
            <td class="primary td-header">Tanggal Terbit</td>
            <td class="primary td-header">Status</td>
          </tr>

          <tr class="tr-body" v-for="(item, index) in $store.state.certified.data" :key="index">
            <td class="td-body">{{item['Nama Perusahaan'][0]}}</td>
            <td class="td-body">{{convertDate(item['Tanggal Diterima'][0]['$date'])}}</td>
            <td class="td-body">{{convertDate(item['Tanggal Kalibrasi'][0]['$date'])}}</td>
            <td class="td-body">{{convertDate(item['Tanggal Terbit'][0]['$date'])}}</td>
            <td class="td-body">Sudah Dicetak</td>
          </tr>
        </table>
        <v-card class="v-main-card white" style="border: 1px solid #dcdcdc !important" flat>
          <v-card-text>
            <v-layout row wrap>
              <v-flex style="margin: 20px 0 10px 0;" xs12 class="pt-0 px-3">
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        
      </template>
      <v-card class="v-main-card blue darken-2 white--text" flat v-else>
        <v-card-title>
          <p class="headline pt-3 font-weight-bold lato">Selamat Datang di Portal Kalibrasi!</p>
        </v-card-title>
        <v-card-text>Silakan Login untuk melanjutkan.</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
  #wrapper {
    overflow-x: scroll;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    padding: 1px 4px;
  }
</style>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data: () => ({
    fields: [
      { id: 1, name: 'Suhu', desc: '-', url: '?bid=temperatur&sub=oven', count: 3, color: 'blue ' },
      { id: 2, name: 'Dimensi', desc: '-', url: '?bid=dimensi', count: 0, color: 'success' },
      { id: 3, name: 'Tekanan', desc: '-', url: '?bid=tekanan', count: 0, color: 'warning' },
      { id: 4, name: 'Gaya', desc: '-', url: '?bid=gaya', count: 0, color: 'error' }, 
      { id: 5, name: 'Masa dan Timbangan', desc: '-', url: '?bid=masa dan timbangan', count: 0, color: 'blue' },
      { id: 6, name: 'Optik / Instrumen Analisa', desc: '-', url: '?bid=optik \/ instrumen analisa', count: 0, color: 'success' },
      { id: 7, name: 'Alat-alat Gelas Volumetri', desc: '-', url: '?bid=alat-alat gelas volumetri', count: 0, color: 'warning' },
      { id: 8, name: 'Kelistrikan (Mesin Las)', desc: '-', url: '?bid=kelistrikan (mesin las)', count: 0, color: 'error' },
    ],

    companies: []

  }),

  mounted() {
    // this.getOnGoing()
    // this.companies = this.$slots
  },

  methods: {
    async getOnGoing() {
      try {
        const req = await this.$calibrate.getDashboard({
          status: 'ongoing', page: 1
        })
      } catch (error) {
        console.log(error.response);
        alert('failed to retreive data from server')
      }
    },

    convertDate(date_string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}
</script>
