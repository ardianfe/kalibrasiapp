<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          <v-btn icon large class="primary" @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn> &nbsp;
          Cetak <span style="text-transform: capitalize;">&nbsp;{{ $route.query.attribute }} {{ $route.query.content }}</span>

          <v-spacer />

          <v-btn class="primary elevation-0" @click="printWrapper">
            cetak <v-icon right>print</v-icon>
          </v-btn> &nbsp;
        </v-card-title>
        <!-- <table>
          <tr><td><div contenteditable>I'm editable</div></td><td><div contenteditable>I'm also editable</div></td></tr>
          <tr><td>I'm not editable</td></tr>
        </table> -->
        <div id="printable">
          <v-card-title style="z-index: 2; height: 130px; padding: 8px 24px">
            <img v-if="$route.query.attribute == 'sertifikat'" contain src="/kemenperin.png" height="auto" width="120px" style="object-fit: contain;">
            <v-spacer/>
            <img v-if="$route.query.attribute == 'sertifikat'" contain src="/kan.png" height="auto" width="120px" style="object-fit: contain;">
          </v-card-title>
          <div id="wrapper" style="margin-top: -130px;"> 
          </div>
        </div>
        <!-- <v-card-title id="wrapper">
        </v-card-title> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  #wrapper {
    overflow-x: scroll hidden;
  } table {
    border-collapse: collapse;
    border: 1px solid grey;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data: () => ({
    active: null,
    data: {}
  }),

  mounted() {
    if (!this.$store.state.isLoggedIn) {
      // this.$router.push('/')
    }

    this.data = JSON.parse(localStorage.getItem(this.$route.query.attribute))

    console.log(this.data);
    this.createElement()
  },

  methods: {
    createElement() {
      document.getElementById('wrapper').innerHTML += this.data.htmlstr;

      if (this.$route.query.attribute == 'sertifikat') {
        setTimeout(() => {
          // console.log(');
          
          document.getElementsByTagName('table')[0].width = '100%'
          console.log(document.getElementsByTagName('table')[0]);
          
          document.getElementById('sjs-B2').style = 'text-align: center'
          document.getElementById('sjs-B3').style = 'text-align: center'
          document.getElementById('sjs-B4').style = 'text-align: center'
          document.getElementById('sjs-B5').style = 'text-align: center'
          document.getElementById('sjs-B6').style = 'text-align: center'
          document.getElementById('sjs-B9').style = 'text-align: center'
          document.getElementById('sjs-B10').style = 'text-align: center; padding-bottom: 8px'
        }, 1000);
      }

    },

    printWrapper() {
      var printContents = document.getElementById('printable').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
