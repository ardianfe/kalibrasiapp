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
    ],

    // 6: { id: 'gaya1', slug: '/gaya/durometer/lk', name: 'Durometer', cat: 'gaya' },
    // 7: { id: 'gaya2', slug: '/gaya/hammer_tester/before_set', name: 'Hammer Tester', cat: 'gaya' },
    // 8: { id: 'gaya3', slug: '/gaya/hydraulik_jack/lk', name: 'Hydraulic Jack', cat: 'gaya' },
    // 9: { id: 'gaya4', slug: '/gaya/load_cell/lk', name: 'Load Cell', cat: 'gaya' },
    // 10: { id: 'gaya5', slug: '/gaya/abrasi/lk', name: 'Mesin Abrasi', cat: 'gaya' },
    // 11: { id: 'gaya6', slug: '/gaya/bending/lk', name: 'Mesin Bending', cat: 'gaya' },
    // 12: { id: 'gaya7', slug: '/gaya/uji_impak/lk', name: 'Mesin Uji Impak', cat: 'gaya' },
    // 13: { id: 'gaya8', slug: '/gaya/uji/lk', name: 'Mesin Uji', cat: 'gaya' },
    // 14: { id: 'gaya9', slug: '/gaya/mixer/lk', name: 'Mixer', cat: 'gaya' },
    // 15: { id: 'gaya10', slug: '/gaya/proving_ring/lk', name: 'Proving Ring', cat: 'gaya' },
    // 16: { id: 'gaya11', slug: '/gaya/spring_impact/lk', name: 'Spring Impact', cat: 'gaya' },
    // 17: { id: 'gaya12', slug: '/gaya/surface_roughness/lk', name: 'Surface Roughness', cat: 'gaya' },
    // 18: { id: 'gaya13', slug: '/gaya/uji_kekerasan/lk', name: 'Uji Kekerasan', cat: 'gaya' },

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
