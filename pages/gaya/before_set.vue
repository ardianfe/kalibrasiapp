<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-card class="elevation-8 v-main-card mt-4">
        <v-card-text v-if="$store.state.isLoggedIn" style="max-width: 820px; margin: auto">
          <p class="text-xs-center b">
            LEMBAR KERJA KALIBRASI CONCRETE TEST HAMMER TIPE N DAN L
          </p>

          <p>Sertifikat No : 3-09-17-0427</p>
          <v-layout>
            <v-flex xs6>
              <v-layout row>
                <p class="helve">1. Nama Alat</p>
                <p class="helve" style="font-size: 12pt; margin: 9pt 0; height: 4.2mm;">: {{ 'certificate.equipment.name' }}</p>
              </v-layout>

              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">2.</p>
                <div style="width: 32mm">
                  <p class="helve u b" style="font-size: 12pt; margin: 0; height: 4.2mm;">Kapasitas</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Capacity</p>
                </div>
                <p class="helve" style="font-size: 12pt; margin: 9pt 0; height: 4.2mm;">: {{ 'certificate.equipment.capacity' }}</p>
              </v-layout>

              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">3.</p>
                <div style="width: 32mm">
                  <p class="helve u b" style="font-size: 12pt;margin: 0; height: 4.2mm;">Tipe/Model</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Type/Model</p>
                </div>
                <p class="helve" style="font-size: 12pt; margin: 9pt 0; height: 4.2mm;">: {{ 'certificate.equipment.model' }}</p>
              </v-layout>

            </v-flex>
            <v-flex xs6>
              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">4.</p>
                <v-flex xs5>
                  <p class="helve u b" style="font-size: 12pt; margin: 0; height: 4.2mm;">Nomor Seri</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Serial Number</p>
                </v-flex>
                <v-flex xs6>
                  <p contenteditable="true" class="helve" style="font-size: 12pt; margin: 9pt -14px 9pt 0; height: 4.2mm;">: {{ 'certificate.equipment.serial_number' }}</p>
                </v-flex>
              </v-layout>

              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">5.</p>
                <v-flex xs5>
                  <p class="helve u b" style="font-size: 12pt; margin: 0; height: 4.2mm;">Merk/Buatan</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Manufacture</p>
                </v-flex>
                <v-flex xs6>
                  <p class="helve" style="font-size: 12pt; margin: 9pt 0; height: 4.2mm;">: {{ 'certificate.equipment.manufacture' }}</p>
                </v-flex>
              </v-layout>
              <!-- <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">6.</p>
                <v-flex xs5>
                  <p class="helve u b" style="font-size: 12pt; margin: 0; height: 4.2mm;">Ukuran Dalam</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Internal Dimension</p>
                </v-flex>
                <v-flex xs6>
                  <p contenteditable="true" class="helve" style="font-size: 12pt; margin: 9pt -14px 9pt 0; height: 4.2mm;">: 460mm(l)x250mm(p)x340mm(t)</p>
                </v-flex>
              </v-layout>

              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">7.</p>
                <v-flex xs5>
                  <p class="helve u b" style="font-size: 12pt; margin: 0; height: 4.2mm;">Pengontrol Suhu</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Temperature Control</p>
                </v-flex>
                <v-flex xs6>
                  <p class="helve" style="font-size: 12pt; margin: 9pt 0; height: 4.2mm;">: {{ certificate.equipment.temperature }}</p>
                </v-flex>
              </v-layout>

              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 12pt; margin: 9pt 0; height: 4.2mm;">8.</p>
                <v-flex xs5>
                  <p class="helve u b" style="font-size: 12pt; margin: 0; height: 4.2mm;">Lain-lain</p>
                  <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Others</p>
                </v-flex>
                <v-flex xs6>
                  <p class="helve" style="font-size: 12pt; margin: 9pt 0; height: 4.2mm;">: {{ certificate.equipment.others }}</p>
                </v-flex>
              </v-layout> -->
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  #wrapper {
    overflow-x: hidden;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
  }
</style>

<script>
import gayaHeader from '~/components/gaya.vue'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Sebelum Set | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    active: null,

    fields: [
      { id: 1, name: 'Oven', value: 'oven', desc: '-', url: '/temperatur/oven' },
      { id: 2, name: 'Furnace', value: 'furnace', desc: '-', url: '' },
      { id: 3, name: 'Chamber', value: 'chamber', desc: '-', url: '' },
      { id: 4, name: 'Inkubator', value: 'inkubator', desc: '-', url: '' },
    ],

    filename: '',
    file: {},
    selected: '',

    sheets: [],

    uploading: false
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }
  },

  methods: {
    triggerInput() {      
      document.getElementById("input-excel").click()
    },

    hideElement(id){
      console.log(id);
      
      document.getElementById(''+id).style = "display: none;"
    },
    
    showElement(id){      
      document.getElementById(''+id).style = "display: block;"
    },

    fileSelected(e) {
      var reader = new FileReader();
      console.log(e.target.files[0]);
      this.filename = e.target.files[0].name
      this.file = e.target.files[0]
    },

    async fileUpload() {
      this.uploading = true
      try {
        const req = await this.$calibrate.uploadFile({
          file: this.file,
          category: this.selected
        })

        // console.log(this.file);

        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
        
      } catch (error) {
        alert('gagal mengupload file')
        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
      }
    },

    sheetPush(id, name, str) {
      this.sheets.push({'id': id, 'name': name, 'htmlstr': str})
      // document.getElementById(''+id).innerHTML += str;
    },

    createElement() {
      for (const key in this.sheets) {
        if (this.sheets.hasOwnProperty(key)) {
          const element = this.sheets[key];
          
          document.getElementById(''+element.id).innerHTML += element.htmlstr;
          console.log(document.getElementById(element.id));
        }
      }

      let tds = document.querySelectorAll('td')
      // console.log(tds);
      tds.remove()
      
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>