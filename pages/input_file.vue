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
        <v-card-title class="headline">
          <v-btn icon large class="primary" @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn> &nbsp;
          Upload File <span style="text-transform: capitalize;">&nbsp;{{ $route.query.content }}</span>
        </v-card-title>
        <!-- <table>
          <tr><td><div contenteditable>I'm editable</div></td><td><div contenteditable>I'm also editable</div></td></tr>
          <tr><td>I'm not editable</td></tr>
        </table> -->
        <v-card-title>
          <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous"></script>
          <script lang="javascript" src="xlsx.full.min.js"></script>
          <v-btn class="primary" @click="triggerInput" v-if="$store.state.isLoggedIn">Pilih File</v-btn>
          <input type="file" id="input-excel" hidden @change="fileSelected"/>

          <v-spacer />
          <v-btn class="primary" :to="'/print?content='+$route.query.content+'&attribute=sertifikat'" v-if="sertifikat.id">Cetak Sertifikat</v-btn>
          <v-btn class="primary" :to="'/print?content='+$route.query.content+'&attribute=lampiran'" v-if="lampiran.id">Cetak Lampiran</v-btn>

          <!-- <v-btn class="primary" @click="hideElement">tutup</v-btn>
          <v-btn class="primary" @click="showElement">buka</v-btn> -->
        </v-card-title>

        <v-card-text>
          <v-tabs
            v-model="active"
            color="cyan"
            dark
            slider-color="yellow"
          >
            <v-tab
              v-for="sheet in sheets"
              :key="sheet.id"
              ripple
            >
              {{sheet.name}}

            </v-tab>
            <v-tab-item
              v-for="sheet in sheets"
              :key="sheet.id"
            >
              <v-card flat>
                <v-card-text>
                  <div :id="''+sheet.id" style="overflow-x: scroll"></div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data: () => ({
    active: null,
    sheets: [],
    anotherSheets: [],
    sertifikat: {},
    lampiran: {}
  }),

  mounted() {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push('/')
    }
  },

  methods: {
    triggerInput() {
      // this.sheets.push({asd: 'asd'})
      // console.log(this.sheets);
      
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
      // document.getElementById('input-excel').change((e) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        console.log(e.target.files[0]);

        if (e.target.files[0].size > 10000005) {
          alert('Ukuran Berkas Terlalu Besar!')
        } else {
          reader.onload = (e) => {
            var data = new Uint8Array(reader.result);
            var wb = XLSX.read(data,{type:'array'});
  
            var sheets = []
  
            for (const x in wb.SheetNames) {
              if (wb.SheetNames.hasOwnProperty(x)) {
                const element = wb.SheetNames[x];
                var worksheet = wb.Sheets[element];
                console.log(x+' - JSON :', JSON.stringify(XLSX.utils.sheet_to_json(worksheet,{raw:true})));
                
                var htmlstr = XLSX.write(wb,{sheet:wb.SheetNames[x], type:'binary',bookType:'html'});
                // console.log(htmlstr);
  
                // var newEl = document.createElement('div')
                // console.log(newEl);
                
                // newEl.setAttribute("id", x);
                // var currentDiv = document.getElementById("wrapper"); 
                // currentDiv.insertBefore(newEl, currentDiv.childNodes[0]);
  
                if (x == 2) {
                  this.sheetPush(x, wb.SheetNames[x], htmlstr.replace(/[Ââáµ]/g, ' '))
                } else {
                  this.anotherSheets.push({'id': x, 'name': wb.SheetNames[x], 'htmlstr': htmlstr.replace(/[Ââáµ]/g, ' ')})
                }
  
              }
            }
  
            setTimeout(() => {
              this.createElement()
  
              this.sertifikat = this.anotherSheets[3]
              this.lampiran = this.anotherSheets[4]
  
              localStorage.setItem('sertifikat', JSON.stringify(this.anotherSheets[3]))
              localStorage.setItem('lampiran', JSON.stringify(this.anotherSheets[4]))
              // console.log("sertifikat : ", this.sertifikat);
              // console.log("lampiran : ", this.lampiran);
            }, 1000);
  
            // this.sheets = sheets
  
            // console.log(this.sheets[0].htmlstr);
            // document.getElementById('0').innerHTML += this.sheets[0].htmlstr;
          }
        }
        

      // });
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

      // let tds = document.querySelectorAll('td')
      // // console.log(tds);
      // tds.remove()
      
    },

    print(attribute) {
      console.log(attribute);
      
    }
    
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
