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
                Selamat Datang!
              </p>

              <v-form
                ref="form"
                v-model="is_valid"
                lazy-validation
              >
              
                <label for="username">Username</label>
                <v-text-field 
                  id="username" solo autofocus
                  background-color="lighten-3 grey"
                  placeholder="Masukkan Username" flat
                  v-model="username"
                  required
                  :rules="[v => !!v || 'Username harus diisi']"
                ></v-text-field>

                <label for="password">Kata Sandi</label>
                <v-text-field id="password"
                  :type="peek ? 'text' : 'password'"
                  placeholder="Masukkan Kata Sandi"
                  background-color="lighten-3 grey"
                  solo flat v-model="password"
                  :append-icon="peek ? 'visibility' : 'visibility_off'"
                  @click:append="peek = !peek"
                  required
                  :rules="[v => !!v || 'Kata Sandi harus diisi']"
                ></v-text-field>
                <label for="password">Ulang Kata Sandi</label>
                <v-text-field id="repassword"
                  :type="peek ? 'text' : 'password'"
                  placeholder="Masukkan Ulang Kata Sandi"
                  background-color="lighten-3 grey"
                  solo flat v-model="repassword"
                  :append-icon="peek ? 'visibility' : 'visibility_off'"
                  @click:append="peek = !peek"
                  required
                  :rules="[v => !!v || 'Ulang Kata Sandi harus sama']"
                ></v-text-field>

                <label for="email">Email</label>
                <v-text-field 
                  id="email" solo
                  background-color="lighten-3 grey"
                  placeholder="Masukkan Email" flat
                  v-model="email"
                  required
                  :rules="[v => !!v || 'Email harus diisi']"
                ></v-text-field>
                <div style="width: 100%">
                  <v-btn 
                    class="primary" :loading="loading"
                    style="height: 48px;"
                    @click="validate" block
                    :disabled="!is_valid"
                    color="primary"
                  >
                    <h3>
                      Daftar
                    </h3>
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <p class="text-xs-center grey--text ma-3" style="cursor: pointer">
                Sudah memiliki akun? <a href="/login">login disini</a>
              </p>
              <!-- <p class="text-xs-center grey--text ma-3" style="cursor: pointer" @click="reset_dialog = true">
                By clicking here, you agree to our <a>Customer Agreement</a>
              </p> -->
            </v-card-actions>
          </v-card>
          <p class="text-xs-center primary--text ma-3" style="cursor: pointer" @click="reset_dialog = true">
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

    auth: false,

    data() {
      return {
        username: '',
        password: '',
        repassword: '',
        email: '',
        role: 1,

        loading: false,
        peek: false,
        is_valid: false
      }
    }, 

    mounted() {
      if (this.$route.query.nip && this.$route.query.appkey) {
        this.loginWithSipeja()
      }
    },

    methods: {

      validate () {
        if (this.password == this.repassword) {
          if (this.$refs.form.validate()) {
            this.register()
          }
        } else {
          alert('password tidak cocok')
        }
      },

      async register() {
        this.loading = true
        try {
          const req = await this.$user.register({
            username: this.username,
            password: this.password,
            email: this.email,
          })

          this.loading = false

          alert(req.message);
          this.$router.push('/')
        } catch (error) {
          console.log(error.response.data.detail);
          alert('registrasi gagal, '+ error.response.data.detail)
          this.loading = false
        }
      }

    },
  }
</script>
