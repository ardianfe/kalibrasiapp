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
        <v-card-title>
          <div id="wrapper">

          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
  #wrapper {
    overflow-x: scroll;
  } table {
    border-collapse: collapse;
  } table, th, td {
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
    },

    printWrapper() {
      var printContents = document.getElementById('wrapper').innerHTML;
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
