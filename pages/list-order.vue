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

          <tr class="tr-body" v-for="item in lo" :key="item.id">
            <td class="td-body">{{item.id}}</td>
            <td class="td-body">{{item.nama_perusahaan}}</td>
            <td class="td-body">{{item.tanggal_terima}}</td>
            <td class="td-body">{{item.tanggal_kalibrasi}}</td>
            <td class="td-body">
              <p v-for="(data, x) in item.daftar_sampel" :key="x">
                <v-hover v-for="(no_sample) in data.no_sample" :key="no_sample">
                  <span slot-scope="{ hover }" :class="`${ hover ? 'primary--text pointer' : 'black--text'}`" @click="select_order(no_sample, data.sampel)">{{data.sampel}} ({{no_sample}}) <br></span>
                </v-hover>
              </p>
            </td>
          </tr>
        </table>     
      </template>
    </v-flex>

    <v-dialog v-model="dialog" max-width="550px">
      <v-card>
        <v-card-title class="title">
          <v-icon color="primary" class="mr-4">folder</v-icon>
          {{selected_sample }} ({{selected_order}})
        </v-card-title>
        <v-card-text> 
          <p class="b">Upload data hasil kalibrasi</p>

          <v-layout class="pa-4" style="height: 240px; width: 100%; border: 6px dashed grey; margin: auto" align-center justify-center column fill-height>
            <v-icon large>cloud_upload</v-icon>
            <p class="text-xs-center">
              Drag file here or
            </p>
            <input type="file" name="file" id="file" hidden @change="processFile">
            <v-btn class="primary" style="width: 200px" @click="chooseFile">Choose File</v-btn>
          </v-layout>

        </v-card-text>
      </v-card>
    </v-dialog>
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
    lo : {},
    selected_order: '',
    selected_sample: '',
    dialog: false
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
      } catch (error) {
        console.log(error.response);
      }
    },

    select_order(order_number, sample_name) {
      this.dialog = true
      this.selected_order = order_number
      this.selected_sample = sample_name

      console.log(this.dialog, this.selected_order);
    },

    chooseFile() {
      document.getElementById('file').click()
    },

    processFile(e) {
      console.log(e.target.files[0]);
    }
  },
}
</script>
