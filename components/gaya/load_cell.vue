<template>
  <v-card class="v-main-card elevation-8" style="border: none !important">
    <v-card-title class="headline">
      <v-hover>
        <v-icon x-large
          :color="`${ hover ? 'primary' : 'grey'}`" 
          slot-scope="{ hover }" 
          @click="$router.go(-1)"
        >keyboard_arrow_left</v-icon>
      </v-hover> &nbsp;
      <p class="lato font-weight-bold title mt-3">
        <v-hover>
          <span 
            class="pointer" slot-scope="{ hover }"  
            @click="$router.push('/gaya')" 
            :class="`${ hover ? 'primary--text' : 'black--text'}`" >
            Bidang Gaya
          </span>
        </v-hover>
      </p>
    </v-card-title>
    <v-card-actions v-if="$store.state.isLoggedIn" class="pa-2">
      <v-layout row wrap>
        <v-flex class="pa-0" xs6 sm3 v-for="(menu, index) in menus" :key="index">
          <v-hover>
            <v-card 
              slot-scope="{hover}" :to="menu.url"
              :class="`${hover || $route.name == menu.name ? 'primary' : 'grey'}`" 
              style="height: 60px; border-radius: 0"
              class="d-flex elevation-0"
            >
              <p style="margin: auto; font-size: 16px; letter-spacing: 1px;" class="white--text pt-sans text-xs-center font-weight-bold">{{menu.text}}</p>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'gaya-load_cell-lk', text: 'Lembar Kerja', url: '/gaya/load_cell/lk?id='+this.$route.query.id },
        { name: 'gaya-load_cell-ktp', text: 'Ketidakpastian', url: '/gaya/load_cell/ktp?id=' +this.$route.query.id},
        { name: 'gaya-load_cell-lampiran', text: 'Lampiran', url: '/gaya/load_cell/lampiran?id=' +this.$route.query.id},
        { name: 'gaya-load_cell-sertifikat', text: 'Cetak Serifikat', url: '/gaya/load_cell/sertifikat?id='+this.$route.query.id }
      ]
    }
  },

  mounted() {
    console.log(this.$route);
  },
}
</script>