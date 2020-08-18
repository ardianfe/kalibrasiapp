<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-card class="elevation-8 v-main-card mt-4">
        <v-card-text v-if="$store.state.isLoggedIn">
          <span>{{ filename ? filename : 'Input File CSV, XLS, XLSX'}}</span>
          <input type="file" id="input-excel" hidden @change="fileSelected"/>
          <v-btn class="primary" @click="triggerInput" v-if="filename == ''">Pilih File</v-btn>
          <v-btn class="error" @click="() => {file = {}, filename = ''}" v-else>Hapus</v-btn>
          <v-btn :disabled="selected == '' || filename == ''" :loading="uploading" class="primary" @click="fileUpload" v-if="file != null">Upload</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  #wrapper {
    overflow-x: hidden;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
  }
</style>

<script>
import gayaHeader from '~/components/gaya.vue'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Setelah Set | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    active: null,

    fields: [
      { id: 1, name: 'Oven', value: 'oven', desc: '-', url: '/temperatur/oven' },
      { id: 2, name: 'Furnace', value: 'furnace', desc: '-', url: '' },
      { id: 3, name: 'Chamber', value: 'chamber', desc: '-', url: '' },
      { id: 4, name: 'Inkubator', value: 'inkubator', desc: '-', url: '' },
    ],

    filename: '',
    file: {},
    selected: '',

    sheets: [],

    uploading: false
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }
  },

  methods: {
    triggerInput() {      
      document.getElementById("input-excel").click()
    },

    hideElement(id){
      console.log(id);
      
      document.getElementById(''+id).style = "display: none;"
    },
    
    showElement(id){      
      document.getElementById(''+id).style = "display: block;"
    },

    fileSelected(e) {
      var reader = new FileReader();
      console.log(e.target.files[0]);
      this.filename = e.target.files[0].name
      this.file = e.target.files[0]
    },

    async fileUpload() {
      this.uploading = true
      try {
        const req = await this.$calibrate.uploadFile({
          file: this.file,
          category: this.selected
        })

        // console.log(this.file);

        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
        
      } catch (error) {
        alert('gagal mengupload file')
        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
      }
    },

    sheetPush(id, name, str) {
      this.sheets.push({'id': id, 'name': name, 'htmlstr': str})
      // document.getElementById(''+id).innerHTML += str;
    },

    createElement() {
      for (const key in this.sheets) {
        if (this.sheets.hasOwnProperty(key)) {
          const element = this.sheets[key];
          
          document.getElementById(''+element.id).innerHTML += element.htmlstr;
          console.log(document.getElementById(element.id));
        }
      }

      let tds = document.querySelectorAll('td')
      // console.log(tds);
      tds.remove()
      
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>