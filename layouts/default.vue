<template>
  <v-app class="blue-grey lighten-5">
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app class="white elevation-3"
      v-if="$store.state.auth.loggedIn"
    >
      <template v-if="$store.state.isLoggedIn">
        <v-btn icon large class="primary" style="border-radius: 50px !important" to="/">
          <span style="font-size: 24px"></span> {{$store.state.username.charAt(0)}}
        </v-btn>
        <v-toolbar-title v-text="$store.state.username" />
      </template>
      <!-- <p>{{$store.state.title}}</p> -->
      <v-spacer />
      <v-btn v-if="$store.state.isLoggedIn" flat
        @click="logout"
      >
        Keluar <v-icon right>logout</v-icon>
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
      right
      width="400px"
      fixed style="padding: 40px 16px; "
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
    <v-footer
      :fixed="fixed"
      app
    >
      <!-- <span>&copy; @abdurahmanfz 2k20</span> -->
    </v-footer>
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

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      setTimeout(function(){ 
        window.location.reload(); 
      }, 500);
    },
    
    async dashboard() {
      const req = await this.$calibrate.dashboard()

      console.log(req);
    },

    async login() {
      try {
        const request = await this.$auth.loginWith('local1', {
          data: {
            email: this.username,
            password: this.password
          },
        });

        console.log(request);
        
      } catch (error) {
        console.log(error.response);
      }
    },
  }
}
</script>
