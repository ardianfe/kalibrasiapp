<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
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
      <p class="text-xs-right">Untuk input data silakan klik daftar sample</p>
      <template v-if="$store.state.isLoggedIn">
        <table style="width: 100%" class="f-table my-2">
          <tr class="tr-head white--text pt-sans font-weight-bold">
            <td class="primary td-header">No Order</td>
            <td class="primary td-header">Nama Pelanggan</td>
            <td class="primary td-header">Tanggal Order</td>
            <td class="primary td-header">Tanggal Kalibrasi</td>
            <td class="primary td-header">Daftar Sample</td>
          </tr>
          
          <template v-if="!loading">
            <tr class="tr-body" v-for="item in lo" :key="item.id">
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
              <td class="td-body">{{item.tanggal_terima}}</td>
              <td class="td-body">{{item.tanggal_kalibrasi}}</td>
              <td class="td-body">
                <p v-for="(data, x) in item.daftar_sampel" :key="x">
                  <v-hover v-for="(no_sample) in data.no_sample" :key="no_sample">
                    <span slot-scope="{ hover }" :class="`${ hover ? 'primary--text pointer' : 'black--text'}`" @click="openDialog(data.sampel, item.id, no_sample)">{{data.sampel}} ({{no_sample}}) <br></span>
                  </v-hover>
                </p>
              </td>
            </tr>
          </template>

          <tr class="tr-body" v-else>
            <td class="td-body" colspan="6">
              <v-progress-linear indeterminate color="primary"></v-progress-linear>
            </td>
          </tr>
        </table>     
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
    padding: 7px;
  }
</style>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import uploadDialog from '~/components/uploadDialog.vue'

export default {
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

  components:{
    uploadDialog
  },

  data: () => ({
    lo: {},
    sample_name: '',
    sample_number: '',
    order_number: '',
    dialog: false,

    file: {},

    loading: true,
    is_uploading: false,

    cats: [
      { name: 'Dimensi', value: 'dimensi'},
      { name: 'Tekanan', value: 'tekanan'},
      { name: 'Gaya', value: 'gaya'},
      { name: 'Instrumen Analisa', value: 'instrumen_analisa'},
      { name: 'Kelistrikan', value: 'kelistrikan'},
      { name: 'Massa', value: 'massa'},
      { name: 'Suhu', value: 'suhu'},
      { name: 'Timbangan', value: 'timbangan'},
      { name: 'Volumetrik', value: 'volumetrik'}
    ],

    cat: ''
  }),

  mounted() {
    this.getListOrder()
  },

  methods: {
    async getListOrder() {
      try {
        const req = await this.$calibrate.getListOrders()

        console.log('test cors', req);
        this.lo = req.result

        this.loading = false
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

    openDialog(sample_name, order_number, sample_number) {
      this.$store.commit('openDialog', {
        sample_name: sample_name,
        order_number: order_number,
        sample_number: sample_number
      })
    },

    chooseFile() {
      document.getElementById('file').click()
    },

    processFile(e) {
      this.file = e.target.files[0]
      console.log(e.target.files[0]);
    },

    async submit() {
      this.is_uploading = true
      try {
        const req = await this.$calibrate.upload({
          file: this.file,
          cat: this.cat,
          sample: this.sample_name,

          order_id: this.order_number,
          sample_number: this.sample_number
        })

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
