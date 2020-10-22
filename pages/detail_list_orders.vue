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
      <v-layout row wrap>
        <v-flex xs12 sm8 class="pa-2">
          <v-card width="100%" class="white--text mt-1 v-main-card elevation-8 primary">
            <v-card-title class="title">
              Nomor Order : {{no_order}}
            </v-card-title>
            <v-card-text>
              <table>
                <tr>
                  <td>Dibuat Untuk : </td>
                  <td>:</td>
                  <td>{{dibuat_untuk}}</td>
                </tr>
                <tr>
                  <td>Alamat : </td>
                  <td>:</td>
                  <td>-</td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 class="pa-2">
          <v-card width="100%" class="mt-1 v-main-card elevation-8">
            <v-card-text>
              <table>
                <tr>
                  <td>Tanggal Pengujian : </td>
                  <td>:</td>
                  <td>{{tanggal_pengujian}}</td>
                </tr>
                <tr>
                  <td>Tanggal Diterima : </td>
                  <td>:</td>
                  <td>{{diterima_tanggal}}</td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-3">
        <v-flex xs12 sm6 class="pa-2" v-for="(item, index) in daftar_sampel" :key="index">
          <v-card width="100%" class="v-main-card elevation-8">
            <v-card-title class="title">
              {{item.sampel}}
              <v-spacer></v-spacer>
              <img v-if="item.KAN" contain src="/kan.png" height="auto" width="45" style="object-fit: contain;">
            </v-card-title>
            <v-card-title class="py-0">
              Jumlah Sampel : {{item.jumlah_sample}}
              <v-spacer></v-spacer>
              Jumlah Sertifikat : {{item.jumlah_sertifikat}}
            </v-card-title>
            <v-card-text>
              <table width="100%">
                <tr v-for="(sample, sample_index) in item.no_sample" :key="sample_index">
                  <td width="60%">{{sample}}</td>
                  <td>
                    <v-btn class="primary" @click="openDialog(item.sampel, no_order, sample)">Input Data</v-btn>
                  </td>
                  <td>
                    <v-btn class="primary" @click="$router.push('/details?id='+sample+'&no_order='+no_order+'&sample='+item.sampel)">Lihat Detail</v-btn>
                  </td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
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

    loading: true
  }),

  mounted() {
    this.getDetailListOrder()

    console.log('store :', this.$store.state.dialog.display);
  },

  methods: {
    async getDetailListOrder() {
      this.loading = true
      try {
        const req = await this.$category.getDetailOrders({
          id: this.$route.query.id
        })

        console.log('test cors', req);
        this.lo = req.result

        this.dibuat_untuk = req.dibuat_untuk
        this.diterima_tanggal = req.diterima_tanggal
        this.no_order = req.no_order
        this.tanggal_pengujian = req.tanggal_pengujian
        this.daftar_sampel = req.daftar_sampel

        setTimeout(() => {
          this.loading = false
        }, 500);
      } catch (error) {
        console.log(error.response);
      }
    },

    select_order(order_number, sample_number, sample_name) {
      this.dialog = true
      this.sample_name = sample_name
      this.order_number = order_number
      this.sample_number = sample_number

      console.log(this.dialog, this.order_number, this.sample_name, this.sample_number);
    },

    chooseFile() {
      document.getElementById('file').click()
    },

    processFile(e) {
      this.file = e.target.files[0]
      console.log(e.target.files[0]);
    },

    openDialog(sample_name, order_number, sample_number) {
      this.$store.commit('openDialog', {
        sample_name: sample_name,
        order_number: order_number,
        sample_number: sample_number
      })
    },

    async submit() {
      this.is_uploading = true
      try {
        // const req = await this.$calibrate.upload({
        //   file: this.file,
        //   cat: this.cat,
        //   sample: this.sample_name,

        //   order_id: this.order_number,
        //   sample_number: this.sample_number
        // })

        setTimeout(() => {
          this.is_uploading = false
          this.file = {}
          this.cat = ''
          this.sample_name = ''
          this.order_number = ''
          this.sample_number = ''

          alert('Upload Berhasil')
        }, 500);

      } catch (error) {
        console.log('submit error : ', error.response);
      }
    }
  },
}
</script>
