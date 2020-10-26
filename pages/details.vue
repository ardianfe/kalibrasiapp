<template>
  <v-layout column>
    <v-card-title>
      <v-hover>
        <v-icon x-large
          :color="`${ hover ? 'primary' : 'grey'}`" 
          slot-scope="{ hover }" 
          @click="$router.go(-1)"
        >keyboard_arrow_left</v-icon>
      </v-hover> &nbsp;
      <p class="headline lato font-weight-bold title mt-3">
        Kembali
      </p>
      <v-spacer></v-spacer>
    </v-card-title>
    
    <template v-if="!loading">
      <template v-if="is_valid">
        <v-layout row wrap>
          <v-flex xs12 sm8 class="pa-2">
            <v-card width="100%" class="white--text mt-1 v-main-card elevation-8 primary">
              <v-card-title class="title">
                No Sampel : {{$route.query.id}}
              </v-card-title>
              <v-card-text>
                <table>
                  <tr>
                    <td>No Laporan : </td>
                    <td>:</td>
                    <td>{{no_lap}}</td>
                  </tr>
                  <tr>
                    <td>Nama Sampel : </td>
                    <td>:</td>
                    <td>{{sampel_name}}</td>
                  </tr>
                  <tr>
                    <td>Kategori : </td>
                    <td>:</td>
                    <td>{{category}}</td>
                  </tr>
                </table>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat large class="white primary--text" @click="$router.push('/'+category+'/'+getSlug(sampel_name)+'/sertifikat?id='+$route.query.id)">Lihat Detail</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 class="pa-2">
            <v-card width="100%" class="mt-1 v-main-card elevation-8">
              <v-card-text>
                <table>
                  <tr>
                    <td>Status : </td>
                    <td>:</td>
                    <td>{{status}}</td>
                  </tr>
                  <tr>
                    <td>Tanggal Upload : </td>
                    <td>:</td>
                    <td>{{pub_date}}</td>
                  </tr>
                </table>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </template>

      <template v-else>
        <v-layout row wrap>
          <v-flex xs12 sm8 class="pa-2">
            <v-card width="100%" class="white--text mt-1 v-main-card elevation-8 primary">
              <v-card-title class="title">
                Data tidak ditemukan
              </v-card-title>
              <v-card-text>
                silakan upload terlebih dahulu.
              </v-card-text>
              <v-card-actions class="pa2">
                <v-spacer></v-spacer>
                <!-- {{$route.query.sample+'-'+$route.query.no_order + ' - ' + $route.query.id}} -->
                <v-btn class="white primary--text" @click="openDialog($route.query.sample, $route.query.no_order, $route.query.id)">Upload</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </template>

    <v-layout row justify-center v-else>
      <v-card width="210mm" class="transparent elevation-0">
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </v-card>
    </v-layout>

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
import uploadDialog from '~/components/uploadDialog.vue'

export default {
  components:{
    uploadDialog
  },

  head: {
    title: 'List Order | B4T Kalibrasi',
    meta: [
      {
        hid: 'list-order',
        name: 'list-order',
        content: 'List Order B4T'
      }
    ]
  },

  data: () => ({
    dibuat_untuk: "",
    diterima_tanggal: "",
    no_order: "",
    tanggal_pengujian: "",
    daftar_sampel: [],

    loading: true,

    is_valid: false,

    no_lap: '',
    sampel_name: '',
    category: '',
    status: '',

    pub_date: '',

    urls: {
      'Anak Timbangan F1/F2': 'anak_timbangan/lk',
      'Jangka Sorong': 'jangka_sorong/lk',
      'Hammer Tester': 'hammer_tester/'
    }
  }),

  mounted() {
    this.getLembarKerja()

    console.log('store :', this.$store.state.dialog.display);
  },

  methods: {
    async getLembarKerja() {
      this.loading = true
      try {
        const req = await this.$category.getLembarKerja({
          id: this.$route.query.id
        })

        console.log('test cors', req.results);


        if (req.results[0]) {
          this.is_valid = req.results[0]._id ? true : false
          
          this.no_lap = req.results[0].no_laporan
          this.sampel_name = req.results[0].nama_sample
          this.category = req.results[0].cat
          this.status = req.results[0].status
          this.pub_date = this.convertDate(req.results[0].pub_date.$date)
        }
        

        setTimeout(() => {
          this.loading = false
        }, 500);
      } catch (error) {
        console.log(error.response);
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
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    },

    getSlug(name) {
      let string_name = name.toLowerCase();
      return string_name.replace(' ', '_')
    }
  },
}
</script>
