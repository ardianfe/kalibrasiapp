<template>
  <div>
    <v-card-title class="headline pa-0">
      <v-hover>
        <v-icon x-large
          :color="`${ hover ? 'primary' : 'grey'}`" 
          slot-scope="{ hover }" 
          @click="$router.go(-1)"
        >keyboard_arrow_left</v-icon>
      </v-hover> &nbsp;
      <p class="lato font-weight-bold title mt-3">Sudah Cetak</p>
    </v-card-title>
    <table style="width: 100%" class="f-table my-2">
      <tr class="tr-head white--text pt-sans font-weight-bold">
        <td class="primary td-header">Nama Perusahaan</td>
        <td class="primary td-header">Tanggal Terima</td>
        <td class="primary td-header">Tanggal Kalibrasi</td>
        <td class="primary td-header">Tanggal Terbit</td>
        <td class="primary td-header">Status</td>
      </tr>

      <tr class="tr-body" v-for="(item, index) in $store.state.certified.data" :key="index">
        <td class="td-body">{{item['Nama Perusahaan'][0]}}</td>
        <td class="td-body">{{convertDate(item['Tanggal Diterima'][0]['$date'])}}</td>
        <td class="td-body">{{convertDate(item['Tanggal Kalibrasi'][0]['$date'])}}</td>
        <td class="td-body">{{convertDate(item['Tanggal Terbit'][0]['$date'])}}</td>
        <td class="td-body">Sudah Dicetak</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        certified: {}
      }
    },

    mounted() {
      this.getCertified()
    },

    methods: {
      async getCertified() {
        try {
           
        } catch (error) {
          alert('failed to get certified data')
          console.log(error.response);
        }
      },

      convertDate(date_string) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date_string).toLocaleDateString('id-ID', options)
      }
    },
  }
</script>