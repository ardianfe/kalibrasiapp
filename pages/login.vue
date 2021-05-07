<template>
  <v-layout row wrap style="width: 100%; margin: 0;" class="login-body">
    <v-flex style="padding: 16px; height: 100%; top: 0">

      <v-layout row wrap style="max-width: 440px; margin: auto; margin-top: 24px; margin-bottom: 24px;">

        <!-- <v-flex xs6>
          <Logo></Logo>
        </v-flex> -->
        
        <v-flex xs12 class="ma-3">
          <v-layout row justify-center>
            <v-img src="/favicon.png" contain height="40px" max-width="40px"></v-img>
            <p class="grey--text font-weight-bold title text-xs-right ma-2">B4T Kalibrasi</p>
          </v-layout>
        </v-flex>

        <v-flex xs12>
          <v-card max-width="440px" style="margin: auto; padding: 4% 6%; border-radius: 14px;" class="elevation-0">
            <v-card-text>
              <p class="mb-4 title text-xs-center font-weight-bold">
                Selamat Datang Kembali !
              </p>

              <label for="username">Username</label>
              <v-text-field 
                id="username" solo autofocus
                background-color="lighten-3 grey"
                placeholder="Masukkan Username" flat
                v-model="username"
              ></v-text-field>

              <label for="password">Kata Sandi</label>
              <v-text-field id="password"
                :type="peek ? 'text' : 'password'"
                placeholder="Masukkan Password"
                background-color="lighten-3 grey"
                solo flat v-model="password"
                :append-icon="peek ? 'visibility' : 'visibility_off'"
                @click:append="peek = !peek"
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="ma-0">
              <v-btn 
                class="primary" :loading="loading"
                style="height: 48px; width:128px"
                @click="login" block
                :disabled="username.length == 0 || password.length == 0"
              >
                <h3>
                  Masuk
                </h3>
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <p class="text-xs-center grey--text ma-3" style="cursor: pointer">
                Belum memiliki akun? <a href="/register">daftar disini</a>
              </p>
              <!-- <p class="text-xs-center grey--text ma-3" style="cursor: pointer" @click="reset_dialog = true">
                By clicking here, you agree to our <a>Customer Agreement</a>
              </p> -->
            </v-card-actions>
          </v-card>
          <p class="text-xs-center primary--text ma-3" style="cursor: pointer">
            Forgot your password?
          </p>
        </v-flex>

      </v-layout>

    </v-flex>    
  </v-layout>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo,
    },

    data() {
      return {
        username: '',
        password: '',

        loading: false,
        peek: false
      }
    }, 

    mounted() {
      if (this.$route.query.nip && this.$route.query.appkey) {
        this.loginWithSipeja()
      }
    },

    methods: {
      async login() {
        this.loading = true
        try {
          const form = new FormData()

          form.append("username", this.username)
          form.append("password", this.password)
          const request = await this.$auth.loginWith('local1', {
            data: form,
          });

          console.log(request);
          
          setTimeout(() => {
            this.$auth.$storage.setUniversal('role', 'Admin')
            this.loading = false
            window.location.reload()
          }, 500);
        } catch (error) {
          console.log(error.response);
          if (error.response.status == 500) {
            alert('Username tidak ditemukan !')
          } else if (error.response.status == 401) {
            alert('Password salah !')
          } else {
            alert('login gagal, koneksi bermasalah')
          }
          setTimeout(() => {
            this.loading = false
          }, 500);
        }
      },

      async loginWithSipeja() {
        this.loading = true
        try {
          const request = await this.$auth.loginWith('sipeja', {
            params: {
              nip: this.$route.query.nip,
              appkey: this.$route.query.appkey
            },
          });

          console.log('request.data', request.data);

          if (request.data.name) {
            this.$auth.$storage.setUniversal('role', this.$route.query.role)
            this.$auth.$storage.setUniversal('appkey', this.$route.query.appkey)
            this.$auth.$storage.setUniversal('email', request.data.email)
            this.$auth.$storage.setUniversal('nip', request.data.nip)
            this.$auth.$storage.setUniversal('name', request.data.name)
            this.$auth.$storage.setUniversal('phone', request.data.phone_number)
            this.$auth.$storage.setUniversal('username', request.data.username)
            setTimeout(() => {
              this.loading = false
              this.$router.push('/')
            }, 500);
          } else {
            this.logout()
          }
          
        } catch (error) {
          console.log(error.response);
          alert('Internal Server Error')
          setTimeout(() => {
            this.loading = false
          }, 500);
        }
      },

      async logout() {
        await this.$auth.logout();
        setTimeout(function(){ 
          // window.location.reload(); 
          alert('appkey / nip salah')
        }, 500);
      },
    },
  }
</script>
