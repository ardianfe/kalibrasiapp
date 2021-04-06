<template>
  <v-layout column>
    <v-dialog v-model="sample_loading.state" width="400px" persistent>
      <v-card>
        <v-card-title class="pb-0">{{sample_loading.message}}</v-card-title>
        <v-card-actions>
          <v-progress-linear indeterminate color="primary"></v-progress-linear>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card-title>
      <v-hover>
        <v-icon x-large
          :color="`${ hover ? 'primary' : 'grey'}`" 
          slot-scope="{ hover }" 
          @click="$router.push('/list-order')"
        >keyboard_arrow_left</v-icon>
      </v-hover> &nbsp;
      <p class="headline lato font-weight-bold title mt-3">
        Detail List Order
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
                  <td width="80%">{{sample}}</td>
                  <!-- <td>
                    <v-btn class="primary" @click="$router.push('/lk?id='+sample)">Input Data</v-btn>
                  </td> -->
                  <td width="20%">
                    <v-btn class="primary" @click="getOrderDetails(no_order, item.sampel, sample)">Lihat Laporan</v-btn>
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

    sample_loading: {
      state: false,
      message: '',
    },

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
          this.$router.push('/lk?id='+sample_number+'&order_id='+order.no_order)
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
        this.$router.push('/lk?id='+id_sampel+'&order_id='+order.no_order)
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
  },
}
</script>
