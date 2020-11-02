<template>
  <v-dialog v-model="$store.state.dialog.display" persistent max-width="550px">
    <v-card v-if="!is_uploading">
      <v-card-title class="title">
        <v-icon color="primary" class="mr-4">folder</v-icon>
        {{$store.state.dialog.sample_number}} ({{$store.state.dialog.sample_name}}) - {{$store.state.nama_bidang[$store.state.dialog.sample_name]}}
      </v-card-title>
      <template v-if="$store.state.nama_bidang[$store.state.dialog.sample_name]">

        <template v-if="$store.state.nama_bidang[$store.state.dialog.sample_name][0] != 99">
          <v-card-text> 
            <p class="b">Upload data hasil kalibrasi</p>

            <v-layout class="pa-4 mb-2" style="height: 240px; width: 100%; border: 6px dashed grey; margin: auto" align-center justify-center column fill-height>
              <v-icon large>cloud_upload</v-icon>
              <p class="text-xs-center">
                Drag file here or
              </p>
              <input type="file" name="file" id="file" hidden @change="processFile">
              <v-btn class="primary" style="width: 200px" @click="chooseFile" v-if="!file.name">Choose File</v-btn>
              <p class="text-xs-center" v-else>{{file.name}}</p>
            </v-layout>
            <v-select :items="cats" v-model="cat" item-text="name" item-value="value" label="Pilih Kategori"></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!this.file.name" @click="submit" class="primary">Kirim</v-btn>
            <v-btn @click="close">Batal</v-btn>
            <v-btn @click="submit">tes</v-btn>
          </v-card-actions>
        </template>

        <v-card-text v-else>
          <p>Template tidak ditemukan</p>
          <v-btn class="red" @click="close">Tutup</v-btn>
        </v-card-text>
      </template>
    </v-card>

    <v-card justify-center align-center row fill-height v-else class="pa-4">
      <v-card-actions class="pa-5">
        <v-spacer></v-spacer>
        <v-progress-circular
          :size="80"
          :width="3"
          color="primary"
          indeterminate
        ></v-progress-circular>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      file: {},

      loading: true,
      is_uploading: false,

      cats: [
        { name: 'Dimensi', value: 'dimensi'},
        { name: 'Tekanan', value: 'tekanan'},
        { name: 'Gaya', value: 'gaya'},
        { name: 'Instrumen Analisa', value: 'instrumen'},
        { name: 'Kelistrikan', value: 'kelistrikan'},
        { name: 'Massa', value: 'massa'},
        { name: 'Suhu', value: 'suhu'},
        { name: 'Timbangan', value: 'timbangan'},
        { name: 'Volumetrik', value: 'volumetrik'}
      ],

      cat: ''
    }
  },

  mounted() {
    console.log(this.$route);

    // console.log('dialog data', this.$store.state.dialog);
  },
  
  methods: {
    chooseFile() {
      document.getElementById('file').click()
    },

    processFile(e) {
      this.file = e.target.files[0]
      console.log(e.target.files[0]);
    },

    close() {
      this.$store.commit('closeDialog')
      this.file = {}
    },

    async submit() {
      // console.log(this.$store.state.bidang[this.$store.state.nama_bidang[this.$store.state.dialog.sample_name]].id);
      this.is_uploading = true
      try {
        const req = await this.$calibrate.upload({
          file: this.file,
          cat: this.cat,
          sample: this.$store.state.nama_bidang[this.$store.state.dialog.sample_name][0],

          order_id: this.$store.state.dialog.order_number,
          sample_number: this.$store.state.dialog.sample_number
        })

        setTimeout(() => {
          alert('Upload Berhasil')
          this.is_uploading = false

          this.close()
        }, 500);

      } catch (error) {
        console.log('submit error : ', error.response);
        alert('Kategori tidak sesuai')
        this.close()
        this.is_uploading = false
      }
    }
  },
}
</script>