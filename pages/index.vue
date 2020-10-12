<template>
  <v-layout column>
    <v-navigation-drawer permanent app>
      <v-toolbar flat>
        <v-list class="primary">
          <v-list-tile>
            <v-list-tile-title class="white--text title lato font-weight-bold">
              Dashboard Admin
            </v-list-tile-title>
            <v-icon large class="white--text pointer">menu_open</v-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-4">
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          prepend-icon="folder"
          value="true" no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Bidang</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile v-for="(item, index) in bidang" :key="index" :to="item.url">
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-flex xs12 sm8 md6>
      <template v-if="$store.state.isLoggedIn">
        <p class="accent--text lato font-weight-bold title">Overview</p>
        <v-layout row wrap>
          <v-flex xs12 sm4 class="pa-1">
            <v-card class="v-main-card elevation-9 primary">
              <v-card-text style="font-size: 26px; height: 102px;" class="px-5 text-xs-center white--text pt-sans headline">
                <span>
                  Jumlah Pelanggan Perusahaan
                </span>
              </v-card-text>

              <v-card-text style="font-size: 26px; height: 182px;" class="px-5 text-xs-center white--text pt-sans headline">
                <p class="white--text display-4 ma-0 pt-sans">10</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 class="pa-1">
            <v-card class="v-main-card elevation-9 overview1">
              <v-card-text style="font-size: 26px; height: 102px;" class="px-5 text-xs-center white--text pt-sans headline">
                <span>
                  Jumlah Order
                </span>
              </v-card-text>

              <v-card-text style="font-size: 26px; height: 182px;" class="px-5 text-xs-center white--text pt-sans headline">
                <p class="white--text display-4 ma-0 pt-sans">30</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 class="pa-1">
            <v-card class="v-main-card elevation-9 overview2">
              <v-card-text style="font-size: 26px; height: 102px;" class="px-5 text-xs-center white--text pt-sans headline">
                <span>
                  Telah diterbitkan sertifikat sebanyak
                </span>
              </v-card-text>

              <v-card-text style="font-size: 26px; height: 182px;" class="px-5 text-xs-center white--text pt-sans headline">
                <p class="white--text display-4 ma-0 pt-sans">11</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="pt-4">
          <v-flex xs12 sm4 class="pa-1">
            <table style="width: 100%" class="f-table my-2">
              <tr class="tr-head white--text pt-sans font-weight-bold">
                <td class="primary td-header">No Order</td>
                <td class="primary td-header">Aksi</td>
              </tr>

              <tr class="tr-body" v-for="item in 7" :key="item">
                <td class="td-body">{{item}}</td>
                <td class="td-body">ini</td>
              </tr>
            </table>
            <p class="text-xs-right">
              <a @click="$router.push('/list-order')">Lihat Lebih Banyak</a>
            </p>
          </v-flex>
          <v-flex xs12 sm8 class="pa-1">
            <table style="width: 100%" class="f-table my-2">
              <tr class="tr-head white--text pt-sans font-weight-bold">
                <td class="primary td-header">No Laporan</td>
                <td class="primary td-header">Nama Sampel</td>
                <td class="primary td-header">Tanggal Terbit</td>
                <td class="primary td-header">Status SPM</td>
              </tr>

              <tr class="tr-body" v-for="item in 7" :key="item">
                <td class="td-body">{{item}}</td>
                <td class="td-body">ini</td>
                <td class="td-body">ts</td>
                <td class="td-body">asdf</td>
              </tr>
            </table>
            <p class="text-xs-right">
              <a @click="$router.push('/list-laporan')">Lihat Lebih Banyak</a>
            </p>
          </v-flex>
        </v-layout>        
      </template>
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
  head: {
    title: 'Dashboard | B4T Kalibrasi',
    meta: [
      {
        hid: 'dashboard',
        name: 'dashboard',
        content: 'B4T Dashboard'
      }
    ]
  },

  data: () => ({
    fields: [],

    companies: [],

    bidang: [
      { title: 'Dimensi', url: '/dimensi', icon: '' },
      { title: 'Tekanan', url: '/tekanan', icon: '' },
      { title: 'Suhu', url: '/bidang?bid=temperatur&sub=oven', icon: '' },
      { title: 'Gaya', url: '/gaya', icon: '' },
      { title: 'Gelas Volumetri', url: '/volumetrik', icon: '' },
      { title: 'Massa', url: '/massa', icon: '' },
      { title: 'Timbangan', url: '/timbangan', icon: '' },
      { title: 'Instrumen Analisa', url: '/instrumen', icon: '' },
      { title: 'Kelistrikan', url: '/kelistrikan', icon: 'electrical_services' },
    ]
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
