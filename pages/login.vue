<template>
  <v-layout row wrap style="width: 100%; margin: 0;" class="login-body">
    <v-flex style="padding: 16px; height: 100%; top: 0">

      <v-layout row wrap style="max-width: 440px; margin: auto; margin-top: 24px; margin-bottom: 24px;">

        <!-- <v-flex xs6>
          <Logo></Logo>
        </v-flex> -->
        
        <v-flex xs12>
          <p class="grey--text font-weight-bold text-xs-right ma-2">Butuh Bantuan?</p>
        </v-flex>

        <v-flex xs12>
          <v-card max-width="440px" style="margin: auto; padding: 4% 6%; border-radius: 14px;" class="elevation-0">
            <v-card-text>
              <p class="mb-4 title font-weight-bold">
                Selamat Datang di Portal Kalibrasi B4T.
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

              <p class="font-weight-bold primary--text ma-0" style="cursor: pointer" @click="reset_dialog = true">
                Lupa kata sandi?
              </p>
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
          </v-card>
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

    methods: {
      async login() {
        this.loading = true
        try {
          const request = await this.$auth.loginWith('local1', {
            data: {
              email: this.username,
              password: this.password
            },
          });

          console.log(request);
          
          setTimeout(() => {
            this.loading = false
            window.location.reload()
          }, 500);
        } catch (error) {
          console.log(error.response);
          setTimeout(() => {
            this.loading = false
          }, 500);
        }
      },
    },
  }
</script>
