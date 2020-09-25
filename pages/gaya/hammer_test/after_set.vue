<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text v-if="$store.state.isLoggedIn">
            <p class="text-xs-center b title my-4">
              LEMBAR KERJA KALIBRASI CONCRETE TEST HAMMER TIPE N DAN L
            </p>

            <p class="b">Sertifikat No : 3-09-17-0427</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Nama Alat : {{ equipment.name }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Kapasitas : {{ equipment.capacity }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merk : {{ equipment.brand }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ equipment.serial_number }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Resolusi : {{ equipment.resolution }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Tipe : {{ equipment.type }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ equipment.made_in }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ equipment.location }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Suhu : {{ equipment.temperature }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Standar Acuan : {{ equipment.standard }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ equipment.methods }}</p>
                </v-layout>
              </v-flex>
            </v-layout>

          </v-card-text>
        </v-card>
        
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="title mt-4 b">
              SETELAH SETTING
            </p>

            <table width="100%">
              <tr>
                <th style="width: 33%">JENIS KALIBRASI</th>
                <th style="width: 33%">HASIL KALIBRASI SEBELUM SETING</th>
                <td class="text-xs-center" style="font-size: 11px">SYARAT ASTM C 805:2002 <br> MANUAL CONCRETE <br> TEST HAMMER</td>
              </tr>
              <tr style="font-size: 12px">
                <td>
                  1. Kalibrasi dengan blok standar <br>
                  Anvil No. E04/193 <br>
                  Nilai Kekerasan pukulan <br>
                  Tipe N	81.0	unit
                </td>
                <td>
                  Posisi 1 :	80.0	Unit	Posisi 6  :	80.0	Unit <br>
                  Posisi 2 :	80.0	Unit	Posisi 7  :	80.0	Unit <br>
                  Posisi 3 :	81.0	Unit	Posisi 8  :	80.0	Unit <br>
                  Posisi 4 :	79.0	Unit	Posisi 9  :	80.0	Unit <br>
                  Posisi 5 :	82.0	Unit	Posisi 10:	79.0	Unit <br><br>
                            
                  H rata-rata :	80.1 Unit	<br>
                  H Minimum :	79.0 Unit	<br>
                  H Maksimum : 82.0 Unit	<br>
                </td>
                <td></td>
              </tr>
              <tr style="font-size: 12px">
                <td>2. Repeatability</td>
                <td>
                  Repeatability = H Maksi - H Min <br>				
                  H Maksimum :	82.0 Unit <br>
                  H Minimun :	79.0 Unit <br><br>
                  Repeatability :	3.0 Unit
                </td>
                <td>Maksimum  4,0 unit</td>
              </tr>
              <tr style="font-size: 12px">
                <td>3. Kesalahan</td>
                <td>
                  Kesalahan = H rata-rata - H Standar <br>
                  H rata-rata :	80.1 Unit <br>
                  H Standar :	81.0 Unit <br><br>
                  Kesalahan :	-0.9 Unit
                </td>
                <td> ± 3.0 unit</td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : Agus Surya Permana <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Sudrajat <br>
                Tanggal :	2 Juni 2017 <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>        
      </v-layout>
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
    padding: 3px;
  }
</style>

<script>
import gayaHeader from '~/components/gaya/hammer.vue'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Setelah Set | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    equipment: {}
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