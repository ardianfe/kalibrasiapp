<template>
  <v-app class="blue-grey lighten-5">
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app class="white elevation-3"
      v-if="$store.state.auth.loggedIn"
    >
      <v-btn icon class="primary" @click="$router.push('/')">
        <v-icon>home</v-icon>
      </v-btn>
      <v-spacer />

      <v-layout justify-center style="border-radius: 7px; max-width: 290px" class="grey lighten-2" v-if="$route.name == 'list-order'">
        <input type="text" style="width: 250px;" class="pa-2 px-3" name="search" id="search" placeholder="Cari no order">
        <v-icon class="pa-2">search</v-icon>
      </v-layout>
      <v-btn v-if="$store.state.isLoggedIn" flat
        @click="logout" outline class="error error--text"
      >
        Keluar <!-- <v-icon right>logout</v-icon> -->
      </v-btn>
      <v-btn v-else flat
        @click.stop="rightDrawer = !rightDrawer"
      >
        Masuk <v-icon right>input</v-icon>
      </v-btn> 
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      left app
      width="400px"
      style="padding: 40px 16px; "
    >
      <h3 style="text-align: center; margin-bottom: 15px;">Sign In</h3>
      <v-text-field
        label="Username"
        outline
        v-model="username"
        autofocus
      ></v-text-field>
      <v-text-field
        label="Password"
        outline type="password"
        v-model="password"
      ></v-text-field>

      <v-btn block class="primary" large @click="login">Login</v-btn>
      <v-btn block class="primary" large @click="dashboard">Cek API</v-btn>
      <p style="text-align: right" >
        <a href="register">belum punya akun? daftar disini !</a>
      </p>
    </v-navigation-drawer> -->
    
  </v-app>
</template>

<style>
  @import url('static/main.css');
</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      loggedIn: false,
      username: '',
      password: '',
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: 'OVEN PDAM',
      
      certificates: {},
      certified: {},

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }
  },

  mounted() {
    // this.getDashboard()
    // this.getCompanyCount()

    // this.getOven()
  },

  methods: {
    async logout() {
      this.$auth.$storage.removeUniversal('role')
      this.$auth.$storage.removeUniversal('appkey')
      this.$auth.$storage.removeUniversal('email')
      this.$auth.$storage.removeUniversal('nip')
      this.$auth.$storage.removeUniversal('name')
      this.$auth.$storage.removeUniversal('phone')
      this.$auth.$storage.removeUniversal('username')
      await this.$auth.logout();
      setTimeout(function(){ 
        window.location.reload(); 
      }, 500);
    },

    async getOven() {
      this.loading = true
      try {
        const req = await this.$calibrate.getAllWork({
          category: 'oven'
        })

        console.log('oven length :', req);

        this.$store.commit('setOvenCount', req)
        
      } catch (error) {
        // alert('Gagal mendapatkan data certificate')
        console.log(error.response);
      }
    },

    async getDashboard() {
      try {
        const req = await this.$calibrate.getDashboard({})
        console.log('getDashboard :', req);
        this.certificates = {} // kosongin array

        for (const key in req.id) {
          if (req.id.hasOwnProperty(key)) {
            const element = req.id[key];
            await this.getCertData(element)
          }
        }

        console.log('certs :', this.certificates);
        this.getCertified()

        
        this.$store.commit('setDashboard', {'data': this.certificates, 'jumlah': req.jumlah})
      } catch (error) {
        console.log(error.response)        
      }
    },

    async getCertData(_id) {
      try {
        const req = await this.$calibrate.getDataCertificate({id: _id})
        this.certificates[_id] = req.data_perusahaan
        
      } catch (error) {
        console.log(error.response);
        alert('failed to get certificate data, id: ' + _id)
      }
    },

    async getCertified() {
      try {
        const req = await this.$calibrate.getWork({ status: 'certified', page: 1})
        // console.log('getDashboard :', req);
        this.certified = {} // kosongin array

        for (const key in req.id) {
          if (req.id.hasOwnProperty(key)) {
            const element = req.id[key];
            await this.getCertifiedData(element)
          }
        }

        console.log('certified :', this.certified);
        
        this.$store.commit('setCertified', {'data': this.certified, 'jumlah': req.jumlah})
      } catch (error) {
        console.log(error.response)        
      }
    },

    async getCertifiedData(_id) {
      try {
        const req = await this.$calibrate.getDataCertificate({id: _id})
        this.certified[_id] = req.data_perusahaan
        
      } catch (error) {
        console.log(error.response);
        alert('failed to get certificate data, id: ' + _id)
      }
    },

    async getCompanyCount() {
      try {
        const req = await this.$calibrate.getCompanyCount({})
        console.log('getCompanyCount :', req);
        this.$store.commit('setCompany', req.company_list)

      } catch (error) {
        console.log(error.response)        
      }
    },
  }
}
</script>
