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
        <v-spacer></v-spacer>
        <v-spacer></v-spacer> 
        <v-select box width="100px" background-color="white" :items="perpage_list" v-model="perpage" @change="()=> {page = 1, getListOrder()}" label="Jumlah Data Per-halaman"></v-select>
      </v-card-title>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <p class="text-xs-left">Jumlah data ditampilkan : {{showed_item_count}}</p>
        </v-flex>
        <v-flex xs12 sm6>
          <p class="text-xs-right">Untuk input data silakan klik daftar sample</p>
        </v-flex>
      </v-layout>
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

        <v-card-actions>
          <v-spacer />
          <div class="text-xs-center pt-2">
            <v-pagination @change="getListOrder" total-visible="5" v-model="page" :length="pages"
            @next="getListOrder"
            @previous="getListOrder"
            @input="getListOrder"
            ></v-pagination>
          </div>
          <v-spacer />
        </v-card-actions>

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
// import path from 'path'
// import Storage from '@google-cloud/storage'

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

    pagination: {},

    perpage: 50,
    perpage_list: [
      10,
      25,
      50,
      75,
      100
    ],
    totalItems: 100,
    showed_item_count: 0,
    page: 1,
    pags: 10,
    file: {},

    loading: false,
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

  computed: {
    pages () {
      if (this.perpage == null ||
        this.totalItems == null
      ) return 0
      return Math.ceil(this.totalItems / this.perpage)
    }
  },

  methods: {
    async getListOrder() {
      this.loading = true
      try {
        const req = await this.$calibrate.getListOrders({
          perpage: this.perpage, page: this.page
        })

        console.log('test cors', req);
        this.lo = req.result
        this.showed_item_count = req.result.length
        this.totalItems = req.total_order

        this.loading = false
      } catch (error) {
        this.loading = false
        this.lo = [{"id": '00000', "nama_perusahaan": "Tidak Ada Data", "tanggal_terima": "", "tanggal_kalibrasi": "", "daftar_sampel": [{"sampel": "Tidak Ada Data", "jumlah_sertifikat": -1, "KAN": false, "jumlah_sample": -1, "no_sample": ['Tidak Ada Data']}]}]
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
      // let index = this.$store.state.nama_bidang[sample_name]
      // let url = this.$store.state.bidang[index].slug

      // alert(order_number+'-'+ sample_number)
      this.getNoLaporan(order_number, sample_number)

      // this.$router.push(url+'?id='+sample_number+'&bid_id='+index)
      // this.$store.commit('openDialog', {
      //   sample_name: sample_name,
      //   order_number: order_number,
      //   sample_number: sample_number
      // })
    },

    async getNoLaporan(id_order, no_sampel) {
      try {
        const req = await this.$calibrate.getNomorLaporan({
          id_order: id_order, no_sample: no_sampel
        })

        this.createReport(id_order, req.Nama_sample, req.no_laporan, 'dibuat_untuk')

        console.log('getNoLaporan :', req);
      } catch (error) {
        alert('gagal mengambil nomor laporan')
        console.log(error.response);
      }
    },

    async createReport(id_order, nama_sample, no_laporan, dibuat_untuk) {
      try {
        const req = await this.$calibrate.createReport({
          _id: id_order,
          nama_sample,
          no_laporan,
          dibuat_untuk: 'Balai Besar Logam'
        })

        console.log('createreport :', req);
      } catch (error) {
        alert('gagal membuat report')
        console.log(error.response);
      }
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
