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
            @click="$router.push('/list-order')" 
            :class="`${ hover ? 'primary--text' : 'black--text'}`" >
            List Order
          </span>
        </v-hover>
      </p>
      <p class="lato font-weight-bold title mt-3" v-if="$route.name != 'lk'">
      &nbsp; / &nbsp;
        <v-hover>
          <span 
            class="pointer" slot-scope="{ hover }"  
            @click="$router.push('/lk?id='+$route.query.id)" 
            :class="`${ hover ? 'primary--text' : 'black--text'}`" >
            Lembar Kerja
          </span>
        </v-hover>
      </p>
      <p class="lato font-weight-bold title mt-3 grey--text" v-if="$route.name == 'lk'">
      &nbsp; / &nbsp; Lembar Kerja
      </p>
      <p class="lato font-weight-bold title mt-3 grey--text" v-if="$route.name == 'lk-sertifikat'">
      &nbsp; / &nbsp; Laporan
      </p>
    </v-card-title>
    <!-- <v-card-actions v-if="$store.state.isLoggedIn" class="pa-2">
      <v-layout row wrap>
        <v-flex class="pa-0" v-for="(menu, index) in menus" :key="index">
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
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'lk', text: 'Lembar Kerja', url: '/lk?id='+this.$route.query.id },
        { name: 'lk-sertifikat', text: 'Laporan', url: '/lk/sertifikat?id='+this.$route.query.id},
        // { name: 'dimensi-ayakan-lampiran', text: 'Lampiran', url: '/dimensi/ayakan/lampiran?id='+this.$route.query.id },
        // { name: 'gaya-durometer-ktp1', text: 'KTP 1', url: '/gaya/durometer/ktp1?cert_no='+ this.$route.query.cert_no +'&id='+this.$route.query.id },
        // { name: 'gaya-durometer-ktp2', text: 'KTP 2', url: '/gaya/durometer/ktp2?cert_no='+ this.$route.query.cert_no +'&id=' +this.$route.query.id},
        // { name: 'gaya-sertifikat', text: 'Sertifikat', url: '/gaya/sertifikat?cert_no='+ this.$route.query.cert_no +'&id='+this.$route.query.id },
        // { name: 'gaya-durometer-lampiran', text: 'Cetak Lampiran', url: '/gaya/durometer/lampiran' }
      ]
    }
  },

  mounted() {
    console.log(this.$route);
  },
}
</script>