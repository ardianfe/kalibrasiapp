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
            Bidang Volumetrik
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
        name: 'Pipet Ukur - Gelas Ukur - Buret', 
        value: 'buret', 
        desc: '-', 
        url: '/daftar_sampel?bid_id=42' 
      },
      { 
        id: 2, 
        name: 'Labu Ukur - Pipet Seukuran - Piknometer', 
        value: 'piknometer', 
        desc: '-', 
        url: '/daftar_sampel?bid_id=43' 
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
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
