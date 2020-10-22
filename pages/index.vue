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
          <v-flex xs12 sm6 class="pa-1">
            <table style="width: 100%" class="f-table my-2">
              <tr class="tr-head white--text pt-sans font-weight-bold">
                <td class="primary td-header">No Order</td>
                <td class="primary td-header">Nama Perusahaan</td>
                <td class="primary td-header">Aksi</td>
              </tr>

              <template v-for="(item, x) in lo">
                <tr class="tr-body" v-if="x < 8" :key="item.id">
                  <td class="td-body">
                    <v-hover>
                      <div class="pointer"
                        :style="`${ hover ? 'color: blue' : 'color: black'}`" 
                        slot-scope="{ hover }"
                        @click="$router.push('/detail_list_orders?id='+item.id)"
                      >
                        <span>{{item.id}}</span>
                      </div>
                    </v-hover>
                  </td>
                  <td class="td-body">{{item.nama_perusahaan}}</td>
                  <td class="td-body">
                    <a @click="$router.push('/detail_list_orders?id='+item.id)">lihat</a>
                  </td>
                </tr>
              </template>
              
              <tr v-if="loading.lo">
                <td class="td-body" colspan="6">
                  <v-progress-linear indeterminate color="primary"></v-progress-linear>
                </td>
              </tr>

            </table>
            <p class="text-xs-right">
              <a @click="$router.push('/list-order')">Lihat Lebih Banyak</a>
            </p>
          </v-flex>
          <v-flex xs12 sm6 class="pa-1">
            <table style="width: 100%" class="f-table my-2">
              <tr class="tr-head white--text pt-sans font-weight-bold">
                <td class="primary td-header">No Sampel</td>
                <td class="primary td-header">Nama Sampel</td>
                <td class="primary td-header" width="20%">Tanggal Terbit</td>
                <td class="primary td-header">Status</td>
              </tr>

              <template v-for="(item, x) in laporan">
                <tr class="tr-body" :key="x" v-if="x < 8">
                  <td class="td-body">{{item.no}}</td>
                  <td class="td-body">{{item.nama}}</td>
                  <td class="td-body">{{item.tanggal}}</td>
                  <td class="td-body">
                    <v-hover>
                      <div class="pointer"
                        :style="`${ hover ? 'color: blue' : 'color: black'}`" 
                        slot-scope="{ hover }"
                      >
                        <span @click="openDialog(item.nama, item.no_order, item.no)" v-if="item.status == 'on-going'">{{ hover ? 'upload' : 'On Going'}}</span>
                        <span @click="$router.push('/details?id='+item.no)" v-if="item.status == 'printed'">{{ hover ? 'lihat' : 'Printed'}}</span>
                      </div>
                    </v-hover>
                  </td>
                </tr>
              </template>

              <tr v-if="loading.laporan">
                <td class="td-body" colspan="6">
                  <v-progress-linear indeterminate color="primary"></v-progress-linear>
                </td>
              </tr>
            </table>
            <p class="text-xs-right">
              <a @click="$router.push('/list-laporan')">Lihat Lebih Banyak</a>
            </p>
          </v-flex>
        </v-layout>        
      </template>
    </v-flex>

    <uploadDialog></uploadDialog>
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
import uploadDialog from '~/components/uploadDialog.vue'

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

  components:{
    uploadDialog
  },

  data: () => ({
    fields: [],

    companies: [],

    loading: {
      lo: true,
      laporan: true
    },

    lo: [
      // { id: '', nama_perusahaan: '', }
    ],

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
    ],

    laporan: []
  }),

  mounted() {
    // this.getOnGoing()
    // this.companies = this.$slots
    this.getLO()
  },

  methods: {
    async getLO() {
      this.loading.lo = true
      this.loading.laporan = true
      try {
        const req = await this.$calibrate.getListOrders()

        console.log('get lo', req.result);
        this.lo = req.result

        let sampel = []

        for (const key in this.lo) {
          if (this.lo.hasOwnProperty(key)) {
            const element = this.lo[key];
            console.log('lo element', element);
            sampel.push({
              no: element.daftar_sampel[0].no_sample[0],
              tanggal: element.tanggal_terima,
              nama: element.daftar_sampel[0].sampel,
              status: 'printed',
              no_order: element.id
            })
          }
        }

        this.laporan = sampel

        setTimeout(() => {
          this.loading.lo = false
          this.loading.laporan = false
        }, 500);
      } catch (error) {
        console.log(error.response);
      }
    },

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

    openDialog(sample_name, order_number, sample_number) {
      this.$store.commit('openDialog', {
        sample_name: sample_name,
        order_number: order_number,
        sample_number: sample_number
      })
    },

    convertDate(date_string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}
</script>
