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
            </tr>
          </template>

          <tr class="tr-body" v-else>
            <td class="td-body" colspan="6">
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

    status: 99,

    verifications: ['Belum Terverifikasi', 'Verifikasi Petugas', 'Sudah Terverifikasi', 'Sudah Cetak']
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

    select_order(order_number, sample_number, sample_name) {
      this.dialog = true
      this.sample_name = sample_name
      this.order_number = order_number
      this.sample_number = sample_number

      console.log(this.dialog, this.order_number, this.sample_name, this.sample_number);
    },

    async getOrderDetails(order_id, sample_name, sample_number) {
      this.sample_loading = {
        state: true,
        message: 'Mengambil detail order '+ order_id
      }
      try {
        const req = await this.$calibrate.getOrderDetails({id: order_id})

        this.getReportDetail(sample_name, sample_number, req)

      } catch (error) {
        alert('gagal, tidak bisa mengambil detail order')
        console.log('failed when get order details', error.response);
      }
    },

    async getReportDetail(sample_name, sample_number, order,) {
      this.sample_loading = {
        state: true,
        message: 'Memuat laporan '+ sample_name +' ('+sample_number+')'
      }
      try {
        const req = await this.$calibrate.getLembarKerja({id: sample_number})

        console.log('open dialog', req);

        if (req._id) {
          this.$router.push('/lk?id='+sample_number)
          console.log('sampel sudah dibuat');
        } else {
          console.log('sampel belum dibuat');
          this.getNoLaporan(sample_number, order)
        }
  
        // this.getNoLaporan(sample_number, order)
      } catch (error) {
        // alert('error while checking sample_id');
        this.getNoLaporan(sample_number, order)
        console.log('error while checking sample_id', error);
      }
    },

    async getNoLaporan(no_sampel, order) {
      try {
        const req = await this.$calibrate.getNomorLaporan({
          id_order: order.no_order, no_sample: no_sampel
        })

        if (req.error == true) {
          alert(req.message)

          setTimeout(() => {
            this.sample_loading = {
              state: false,
              message: ''
            }
          }, 300);
        } else {
          this.createReport(req.laporan[0].no_sample, req.laporan[0].Nama_sample, req.laporan[0].no_laporan, order)
        }
        console.log('getNoLaporan :', req);
      } catch (error) {
        setTimeout(() => {
          this.sample_loading = {
            state: false,
            message: ''
          }
        }, 300);
        alert('gagal mengambil nomor laporan')
        console.log(error);
      }
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    },

    async createReport(id_sampel, nama_sample, no_laporan, order) {
      try {
        const req = await this.$calibrate.createReport({
          _id: id_sampel,
          nama_sample,
          no_laporan,
          equipment: {
            name: nama_sample,
            capacity: "",
            model: "",
            serial_number: "",
            manufacture: "",
            internal_dimension: '',
            temperature: '',
            others: '-',
          },
          owner: {
            name: order.dibuat_untuk,
            address: order.alamat
          },
          acceptance_date: order.diterima_tanggal,
          calibration_date: order.tanggal_pengujian,
          standard: {
            name: '',
            traceability: ''
          },
          env_cond: {
            room_temp: '',
            corrected_room_temp: '',
            humidity: '',
            corrected_humidity: ''
          },
          calibration_location: '',
          calibration_method: [],
          reference: [],
          result: '',
          published_date: '',
          director_name: '',
          director_nip: '',
        })

        // console.log('createreport :', req);
        setTimeout(() => {
          this.sample_loading = {
            state: false,
            message: ''
          }
        }, 300);
        alert('Berhasil membuat laporan')
        this.$router.push('/lk?id='+id_sampel)
      } catch (error) {
        setTimeout(() => {
          this.sample_loading = {
            state: false,
            message: ''
          }
        }, 300);
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
