<template>
  <v-dialog v-model="$store.state.dialog.display" persistent max-width="550px">
    <v-card v-if="!is_uploading">
      <v-card-title class="title">
        <v-icon color="primary" class="mr-4">folder</v-icon>
        {{$store.state.dialog.sample_number}} ({{$store.state.dialog.sample_name}}) - {{'No. '+$store.state.nama_bidang[$store.state.dialog.sample_name]}}
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
            <v-select v-if="subcats[cat]" :items="subcats[cat]" v-model="subcat" item-text="name" item-value="value" label="Pilih Sub Kategori"></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <template>
              <v-btn v-if="is_sequential.includes($store.state.nama_bidang[$store.state.dialog.sample_name][0])" :disabled="!this.file.name" @click="createJSON" class="primary" :loading="is_creating_json">Upload</v-btn>
              <v-btn v-else :disabled="!this.file.name" @click="submit" class="primary">Kirim</v-btn>
            </template>

            <!-- <v-btn @click="settrue" class="primary">Kirim</v-btn> -->
            <v-btn @click="close">Batal</v-btn>
          </v-card-actions>
        </template>

        <template v-if="$store.state.nama_bidang[$store.state.dialog.sample_name]">
          <v-card-text v-if="is_sequential.includes($store.state.nama_bidang[$store.state.dialog.sample_name][0])">
            <v-card class="my-1" v-for="(item, index) in sheets" :key="index">
              <v-card-actions class="pa-2">
                {{item.name}}

                <v-spacer></v-spacer>
                <v-btn v-if="uploaded[index]" class="green white--text" icon>
                  <v-icon>done</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
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
import readXlsxFile from 'read-excel-file'

export default {
  data() {
    return {
      file: {},

      loading: true,
      is_uploading: false,
      is_seq_uploading: false,
      is_creating_json: false,

      is_sequential: [ 13, 28 ],

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
      subcats: {
        timbangan: [
          { name: 'Timbangan Elektronik', value: 39},
          { name: 'Timbangan Mekanik Industri', value: 40},
          { name: 'Timbangan Mekanik', value: 41}
        ],
      },

      uploaded: [],

      cat: '',
      subcat: '',
      forbidden_sheets: [
        'KONSEP', 'JADI', 'SRTFKT', 'POL.TEK.2950', 'POL.TEK.2824', 'LK.100.5223&2824', 'DRIFT', 'KON', 'SERT'
      ],
      sheets: [
        // { name: '0932', data: {} },
        // { name: '09323', data: {} },
        // { name: '0935', data: {} },
        // { name: '09322', data: {} },
      ],
    }
  },

  mounted() { 
  },
  
  methods: {
    chooseFile() {
      document.getElementById('file').click()
    },

    processFile(e) {
      this.file = e.target.files[0]
      console.log(e.target.files[0]);
    },

    async createJSON(e) {
      try {
        this.is_creating_json = true
        let sheets_list = []
        const input = document.getElementById('input-excel')
        console.log("e:",this.file);
  
        await readXlsxFile(this.file, { getSheets: true }).then((sheets) => {
          sheets_list = sheets
          console.log("inside", sheets_list);
          // sheets === [{ name: 'Sheet1' }, { name: 'Sheet2' }]
        })
  
        for (const x in sheets_list) {
          if (Object.hasOwnProperty.call(sheets_list, x)) {
            const sheet_name = sheets_list[x].name;

            this.uploaded.push(false)
  
            await readXlsxFile(this.file, { sheet: sheet_name }).then((data) => {
              sheets_list[x].data = data
            })

          }
        }
        console.log("outside", sheets_list);
        console.log("outside uploaded", this.uploaded);
        this.sheets = sheets_list
        this.proceed_upload()

        // setTimeout(() => {
        //   this.is_creating_json = false
        //   for (const x in this.uploaded) {
        //     if (Object.hasOwnProperty.call(this.uploaded, x)) {
        //       this.uploaded[x] = true;
        //     }
        //   }
        // }, 500);
      } catch (error) {
        console.log(error);
      }
    },

    async proceed_upload() {
      for (const x in this.sheets) {
        if (Object.hasOwnProperty.call(this.sheets, x)) {
          const sheet = this.sheets[x];
          await this.upload(sheet.name, sheet.data, x)
          this.uploaded[x] = true
        }
      }
      
      console.log("outside sheets", this.sheets);
      this.is_creating_json = false

      if (this.uploaded.includes(false)) {
        alert('beberapa lembar kerja gagal ter-upload')
      } else (
        alert('Upload Berhasil'),
        this.close()
      )
    },

    close() {
      this.$store.commit('closeDialog')
      this.file = {}
      this.cat = ''
      this.subcat = ''
      this.sheets = []
    },

    async upload(sheet_name, data, index) {
      let sample = this.$store.state.nama_bidang[this.$store.state.dialog.sample_name][0]
      this.is_seq_uploading = true

      sheet_name = sheet_name.replaceAll(',', '-')
      // {file, cat, sample, order_id, sample_number, sheet_name}
      try {
        if (!this.forbidden_sheets.includes(sheet_name)) {
          const req = await this.$calibrate.uploads({
            file: data,
            cat: this.cat,
            sheet_name: sheet_name,
            sample: this.subcat ? this.subcat : sample,
  
            order_id: this.$store.state.dialog.order_number,
            sample_number: this.$store.state.dialog.sample_number
          })
          this.uploaded[index] = true
        } else {
          console.log('this is forbidden sheet '+ sheet_name);
        }

      } catch (error) {
        console.log('submit error : ', error);
        // alert('Kategori tidak sesuai')
        // this.close()
        this.is_seq_uploading = false
      }
    },

    async submit() {
      let sample = this.$store.state.nama_bidang[this.$store.state.dialog.sample_name][0]
      let name = this.$store.state.dialog.sample_name
      console.log('name :', name);

      if (name == 'Hammer Tester' && this.cat == 'tekanan') {
        sample = 36
      }
      
      this.is_uploading = true
      try {
        const req = await this.$calibrate.upload({
          file: this.file,
          cat: this.cat,
          sample: this.subcat ? this.subcat : sample,

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