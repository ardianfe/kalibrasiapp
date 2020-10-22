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
          Daftar Sampel Hammer Tester
        </p>
        <v-spacer></v-spacer>
      </v-card-title>
      <template v-if="$store.state.isLoggedIn">
        <v-flex xs12 class="pa-1">
          <table style="width: 100%" class="f-table my-2">
            <tr class="tr-head white--text pt-sans font-weight-bold">
              <td class="primary td-header">No Laporan</td>
              <td class="primary td-header">Nama Sampel</td>
              <td class="primary td-header">Nama Perusahaan</td>
              <td class="primary td-header">Alamat</td>
              <td class="primary td-header">Status</td>
              <td class="primary td-header">Aksi</td>
            </tr>

            <tr class="tr-body" v-for="(item, x) in lo" :key="x">
              <td class="td-body">{{item.no_sample}}</td>
              <td class="td-body">{{item.nama_sample}}</td>
              <td class="td-body">{{item.data_perusahaan.nama_co}}</td>
              <td class="td-body">{{item.data_perusahaan.alamat}}</td>
              <td class="td-body">{{item.status}}</td>
              <td class="td-body">
                <a @click="$router.push('/gaya/hammer_test/before_set?id='+item.no_sample)">Lihat</a>
              </td>
            </tr>
          </table>
        </v-flex>    
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
    title: 'Daftar Sampel Jangka Sorong | B4T Kalibrasi',
    meta: [
      {
        hid: 'dimensi',
        name: 'dimensi',
        content: 'Bidang Dimensi'
      }
    ]
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

    laporan: [
      { no: '16042280001', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
      { no: '1707189008', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
      { no: '20082873001', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'printed' },
      { no: '200831108004', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
      { no: '200910127002', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
      { no: '200914149007', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
      { no: '16042280002', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
      { no: '200831108024', tanggal: '20-10-2020', nama: 'Jangka Sorong', status: 'on-going' },
    ]
  }),

  mounted() {
    this.getResultByName()

    console.log(this.$route);
  },

  methods: {
    async getResultByName() {
      try {
        const req = await this.$category.getResultByName({
          name: 'Hammer Tester'
        })

        console.log('get Details : ', req);
        this.lo = req.results

        this.loading = false
      } catch (error) {
        console.log(error.response);
      }
    }
  },
}
</script>
