<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <v-dialog v-model="sample_loading.state" width="400px" persistent>
        <v-card>
          <v-card-title class="pb-0">{{sample_loading.message}}</v-card-title>
          <v-card-actions>
            <v-progress-linear indeterminate color="primary"></v-progress-linear>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog_edit" max-width="500px" width="100%" persistent>
        <v-card>
          <v-card-title class="pb-0">
            <span class="title">Edit Status Laporan</span>
            <v-spacer />
            <v-btn icon small class="transparent" @click="dialog_edit = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="pb-0">
            <p>No Laporan : {{edit_data.no_laporan}}</p>

            <v-select  
              background-color="white" 
              :items="statuses2" 
              v-model="edit_data.status"
              label="Ubah Status Verifikasi"
            ></v-select>
          </v-card-text>
          <v-card-actions class="px-4 pb-4 pt-0">
            <v-spacer/>
            <v-btn class="success elevation-0" @click="submit">Simpan</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card-title>
        <!-- <v-hover>
          <v-icon
            :color="`${ hover ? 'primary' : 'grey'}`" 
            slot-scope="{ hover }" 
            @click="$router.push('/')"
          >home</v-icon>
        </v-hover> -->
        <p class="headline lato font-weight-bold title mt-3">
          On Going Order
        </p>
        <v-spacer></v-spacer>
        <!-- <v-spacer></v-spacer>
        <v-spacer></v-spacer> 
        <v-select box width="100px" background-color="white" :items="perpage_list" v-model="perpage" @change="()=> {page = 1, getListOrder()}" label="Jumlah Data Per-halaman"></v-select> -->
      </v-card-title>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <p class="text-xs-left">Jumlah data ditampilkan : {{showed_item_count}}</p>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select 
            box width="100px" 
            background-color="white" 
            :items="statuses" 
            v-model="status" 
            @change="getOnGoings" 
            label="Pilih Status Verifikasi"
          ></v-select>
        </v-flex>
      </v-layout>
      <template v-if="$store.state.isLoggedIn">
        <table style="width: 100%" class="f-table my-2">
          <tr class="tr-head white--text pt-sans font-weight-bold">
            <td class="primary td-header">No Laporan</td>
            <td class="primary td-header">Nama Alat</td>
            <td class="primary td-header">Nama Perusahaan</td>
            <td class="primary td-header">Tanggal Kalibrasi</td>
            <td class="primary td-header">Tanggal Cetak</td>
            <td class="primary td-header">Status</td>
            <td class="primary td-header">Action</td>
          </tr>
          
          <template v-if="!loading">
            <tr class="tr-body" v-for="item in lo" :key="item._id">
              <td class="td-body">
                <v-hover>
                  <div class="pointer"
                    :style="`${ hover ? 'color: blue' : 'color: black'}`" 
                    slot-scope="{ hover }"
                    @click="$router.push('/lk?id='+item._id)"
                  >
                    <span>{{item.no_laporan}}</span>
                  </div>
                </v-hover>
              </td>
              <td>{{item.equipment.name}}</td>
              <td>{{item.owner.name}}</td>
              <td>{{convertDate(item.calibration_date)}}</td>
              <td>{{convertDate(item.acceptance_date)}}</td>
              <td>{{verifications[item.status]}}</td>
              <td>
                <v-btn :disabled="item.status == 3" small icon class="warning elevation-0" @click="editDialog(item)"><v-icon small>edit</v-icon></v-btn>
              </td>
            </tr>
          </template>

          <tr class="tr-body" v-else>
            <td class="td-body" colspan="7">
              <v-progress-linear indeterminate color="primary"></v-progress-linear>
            </td>
          </tr>
        </table>

        <!-- <v-card-actions>
          <v-spacer />
          <div class="text-xs-center pt-2">
            <v-pagination @change="getListOrder" total-visible="5" v-model="page" :length="pages"
            @next="getListOrder"
            @previous="getListOrder"
            @input="getListOrder"
            ></v-pagination>
          </div>
          <v-spacer />
        </v-card-actions> -->

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
    sample_loading: {
      state: false,
      message: '',
    },

    statuses: [
      {value: 99, text: 'Semua'}, 
      {value: 0, text: 'Belum Terverifikasi'}, 
      {value: 1, text: 'Verifikasi Petugas'}, 
      {value: 2, text: 'Sudah Terverifikasi'}, 
      {value: 3, text: 'Sudah Cetak'}
    ],

    statuses2: [
      {value: 0, text: 'Belum Terverifikasi'}, 
      {value: 1, text: 'Verifikasi Petugas'}, 
      {value: 2, text: 'Sudah Terverifikasi'},
    ],
    status: 99,

    verifications: ['Belum Terverifikasi', 'Verifikasi Petugas', 'Sudah Terverifikasi', 'Sudah Cetak'],

    dialog_edit: false,
    edit_data: {}
  }),

  mounted() {
    this.getOnGoings()
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
    async getOnGoings() {
      this.loading = true
      try {
        const req = await this.$calibrate.getOnGoingsByStatus({stat: this.status})

        console.log('test cors', req);
        this.lo = req
        this.showed_item_count = req.length
        // this.totalItems = req.total_order

        this.loading = false
      } catch (error) {
        this.loading = false
        this.lo = [{"id": '00000', "nama_perusahaan": "Tidak Ada Data", "tanggal_terima": "", "tanggal_kalibrasi": "", "daftar_sampel": [{"sampel": "Tidak Ada Data", "jumlah_sertifikat": -1, "KAN": false, "jumlah_sample": -1, "no_sample": ['Tidak Ada Data']}]}]
        console.log(error.response);
      }
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    },

    editDialog(data) {
      this.dialog_edit = true
      this.edit_data = data
    },

    async submit() {
      try {
        console.log(this.edit_data);
        const req = await this.$calibrate.saveForm({
          sample_id: this.edit_data._id,
          certificate: this.edit_data
        })

        this.dialog_edit = false
        this.edit_data = {}
        this.getOnGoings()
      } catch (error) {
        alert('error when editing laporan status')
        console.log('error when editing laporan status :', error);

        this.dialog_edit = false
        this.edit_data = {}
      }
    }
  },
}
</script>
