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

        <v-list-tile to="/list-order">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>List Order</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/on-going">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>List Sertifikat</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-group
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
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>
    <v-flex xs12 sm8 md6>
      <template v-if="$store.state.isLoggedIn">
        <p class="accent--text lato font-weight-bold title">Overview</p>
        <v-layout row wrap>
          <v-flex xs12 sm4 class="pa-1">
            <v-card class="v-main-card elevation-9 primary">
              <v-card-text style="font-size: 26px; height: 80px;" class="px-5 text-xs-center white--text pt-sans">
                <span>
                  JUMLAH ORDER
                </span>
              </v-card-text>

              <v-card-text style="font-size: 26px; height: 182px;" class="px-5 text-xs-center white--text pt-sans headline">
                <p class="white--text display-4 ma-0 pt-sans">{{on_going_items}}</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 class="pa-1">
            <v-card class="v-main-card elevation-9 overview1">
              <v-card-text style="font-size: 26px; height: 80px;" class="px-5 text-xs-center white--text pt-sans">
                <span>
                  JUMLAH TERBIT
                </span>
              </v-card-text>

              <v-card-text style="font-size: 26px; height: 182px;" class="px-5 text-xs-center white--text pt-sans headline">
                <p class="white--text display-4 ma-0 pt-sans">{{printed}}</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 class="pa-1 pointer" @click="$router.push('/on-going')">
            <v-card class="v-main-card elevation-9 overview2">
              <v-card-text style="font-size: 26px; height: 80px;" class="px-5 text-xs-center white--text pt-sans">
                <span>
                  JUMLAH ON-GOING
                </span>
              </v-card-text>

              <v-card-text style="font-size: 26px; height: 182px;" class="px-5 text-xs-center white--text pt-sans headline">
                <p class="white--text display-4 ma-0 pt-sans">{{in_progres}}</p>
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
                <!-- <td class="primary td-header">Aksi</td> -->
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
                  <!-- <td class="td-body">
                    <a @click="$router.push('/detail_list_orders?id='+item.id)">lihat</a>
                  </td> -->
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
                <!-- <td class="primary td-header">No Sampel</td> -->
                <td class="primary td-header">Nama <br> Sampel</td>
                <td class="primary td-header">Tanggal Terbit</td>
                <td class="primary td-header">Status</td>
              </tr>

              <template v-for="(item, x) in laporan">
                <tr class="tr-body" :key="x" v-if="x < 8">
                  <!-- <td class="td-body">{{item._id}}</td> -->
                  <td class="td-body">{{item.equipment.name}} ({{item._id}})</td>
                  <td class="td-body">{{convertDate(item.calibration_date)}}</td>
                  <td class="td-body">{{verifications[item.status]}}</td>
                </tr>
              </template>

              <tr v-if="loading.laporan">
                <td class="td-body" colspan="6">
                  <v-progress-linear indeterminate color="primary"></v-progress-linear>
                </td>
              </tr>
            </table>
            <p class="text-xs-right">
              <a @click="$router.push('/on-going')">Lihat Lebih Banyak</a>
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

    on_going_items: 0,

    lo: [
      // { id: '', nama_perusahaan: '', }
    ],

    laporan: [],
    verifications: ['Belum Terverifikasi', 'Verifikasi Petugas', 'Sudah Terverifikasi', 'Sudah Cetak'],

    in_progres: 0,
    printed: 0
  }),

  mounted() {
    // this.getOnGoing()
    // this.companies = this.$slots
    this.getOnGoings()
    this.getLO()
  },

  methods: {
    async getOnGoings() {
      try {
        const req = await this.$calibrate.getOnGoings()

        let inProgres = []
        let printed = []

        for (const key in req) {
          if (Object.hasOwnProperty.call(req, key)) {
            const element = req[key];

            if (element.status <= 2) {
              inProgres.push(element)
            } else if (element.status == 3) {
              printed.push(element)
            }
          }
        }
        
        console.log('printed', printed);
        console.log('inProgres', inProgres);
        // const req0 = await this.$calibrate.getOnGoings()
        // const req1 = await this.$calibrate.getOnGoings()
        // const req2 = await this.$calibrate.getOnGoings()
        // const req3 = await this.$calibrate.getOnGoings()

        // status 0 -> create
        // status 1 -> verif petugas
        // status 2 -> verif kasi
        // status 3 -> cetak
        this.in_progres = inProgres.length
        this.printed = printed.length
        this.on_going_items = req.length
        this.laporan = req
        setTimeout(() => {
          this.loading.lo = false
          this.loading.laporan = false
        }, 500);
      } catch (error) {
        this.on_going_items = 0
        console.log(error.response);
        setTimeout(() => {
          this.loading.lo = false
          this.loading.laporan = false
        }, 500);
      }
    },

    async getLO() {
      this.loading.lo = true
      this.loading.laporan = true
      try {
        const req = await this.$calibrate.getListOrders({page: 1, perpage: 10})

        // console.log('get lo', req.result);
        this.lo = req.result

        let sampel = []

        for (const key in this.lo) {
          if (this.lo.hasOwnProperty(key)) {
            const element = this.lo[key];
            // console.log('lo element', element);
            sampel.push({
              no: element.daftar_sampel[0].no_sample[0],
              tanggal: element.tanggal_terima,
              nama: element.daftar_sampel[0].sampel,
              status: 'on-going',
              no_order: element.id
            })
          }
        }

        // this.laporan = sampel

        setTimeout(() => {
          this.loading.lo = false
          this.loading.laporan = false
        }, 500);
      } catch (error) {
        console.log(error.response);
        setTimeout(() => {
          this.loading.lo = false
          this.loading.laporan = false
        }, 500);
      }
    },

    convertDate(date_string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}
</script>
