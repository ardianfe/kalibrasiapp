<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card class="elevation-8 v-main-card">
        <v-card-title class="headline">
          <v-hover>
            <v-icon x-large
              :color="`${ hover ? 'primary' : 'grey'}`" 
              slot-scope="{ hover }" 
              @click="$router.go(-1)"
            >keyboard_arrow_left</v-icon>
          </v-hover> &nbsp;
          <p class="lato font-weight-bold title mt-3">
            Bidang Gaya
          </p>
        </v-card-title>

        <v-card-text v-if="$store.state.isLoggedIn">
          <v-layout row wrap>
            <v-flex class="pa-3" xs6 sm3 v-for="(field, index) in fields" :key="index">
              <v-hover>
                <v-card
                  slot-scope="{ hover }" 
                  :class="`${hover ? 'elevation-8' : 'elevation-0' }`" 
                  class="d-flex v-main-card pointer pa-1 primary" flat
                  style="width: 100%; height: 120px; max-height: 120px;"
                  @click="$router.push(field.url)"
                >
                  <p class="text-xs-center white--text title" style="margin: auto">{{field.name}}</p>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
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
export default {
  head: {
    title: 'Upload File',
    meta: [
      {
        hid: 'temperature',
        name: 'temperature',
        content: 'Bidang Temperatur'
      }
    ],
  },

  data: () => ({
    active: null,

    fields: [
      { 
        id: 1,
        name: 'Hammer Test',
        value: 'hammer_test',
        desc: '-',
        url: '/daftar_sampel?bid_id=7' 
      },
      { 
        id: 2,
        name: 'Uji Kekerasan',
        value: 'uji_kekerasan',
        desc: '-',
        url: '/daftar_sampel?bid_id=18' 
      },
      { 
        id: 3,
        name: 'Durometer',
        value: 'durometer',
        desc: '-',
        url: '/daftar_sampel?bid_id=6' 
      },
      { 
        id: 4,
        name: 'Hydraulik Jack',
        value: 'hydraulik_jack',
        desc: '-',
        url: '/daftar_sampel?bid_id=8' 
      },
      { 
        id: 5,
        name: 'Load Cell',
        value: 'load_cell',
        desc: '-',
        url: '/daftar_sampel?bid_id=9' 
      },
      { 
        id: 6,
        name: 'Mesin Uji Universal',
        value: 'mesin_uji',
        desc: '-',
        url: '/daftar_sampel?bid_id=13' 
      },
      { 
        id: 7,
        name: 'Mesin Uji Impak',
        value: 'uji_impak',
        desc: '-',
        url: '/daftar_sampel?bid_id=12' 
      },
      { 
        id: 8,
        name: 'Mesin Abrasi',
        value: 'abrasi',
        desc: '-',
        url: '/daftar_sampel?bid_id=10' 
      },
      { 
        id: 9,
        name: 'Mesin Bending',
        value: 'bending',
        desc: '-',
        url: '/daftar_sampel?bid_id=11' 
      },
      { 
        id: 10,
        name: 'Mixer',
        value: 'mixer',
        desc: '-',
        url: '/daftar_sampel?bid_id=14' 
      },
      { 
        id: 11,
        name: 'Proving Ring',
        value: 'proving_ring',
        desc: '-',
        url: '/daftar_sampel?bid_id=15' 
      },
      { 
        id: 12,
        name: 'Spring Impact',
        value: 'spring_impact',
        desc: '-',
        url: '/daftar_sampel?bid_id=16' 
      },
      { 
        id: 13,
        name: 'Surface Roughness',
        value: 'surface_roughness',
        desc: '-',
        url: '/daftar_sampel?bid_id=17' 
      },
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
