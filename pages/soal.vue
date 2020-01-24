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
        <v-card-title class="headline">iiii</v-card-title>
        <v-card-text>
          <v-textarea outline v-model="text" label="Tulis Text"></v-textarea>

          {{converted}}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            @click="convert"
          >Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data() {
    return {
      text: '',
      converted: ''
    }
  },

  methods: {
    convert() {
      // this.text.replace(/[aueo]/g, 'i')
      this.converted = this.text.replace(/[aAuUeEoO]/g, 'i')
    }
  },
}
</script>
