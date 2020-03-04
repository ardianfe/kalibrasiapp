<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card style="overflow-x: scroll;">
        <v-card-title class="headline">
          <v-btn icon large class="primary" @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn> &nbsp;
          Oven
          <!-- <v-spacer/>
          <v-btn class="primary" :to="'/print?content='+$route.query.content+'&attribute=sertifikat'" v-if="sertifikat.id">Cetak Sertifikat</v-btn>
          <v-btn class="primary" :to="'/print?content='+$route.query.content+'&attribute=lampiran'" v-if="lampiran.id">Cetak Lampiran</v-btn> -->
        </v-card-title>
        <v-card-text>
          <p class="title">
            Lembar Kerja
          </p>
          <div class="pa-1">
            <p>Balai Besar Bahan dan Barang Teknik (B4T)</p> 
            <span>Setting Suhu : <span contenteditable="true"> 150°C</span></span>
            
            <table v-if="sheets.ktpst">
              <tr>
                <th v-for="(header, index) in header" :key="index">
                  {{header}}
                </th>
              </tr>
              <tr v-for="(item, index) in 4" :key="index">
                <td>{{sheets.ktpst["Komponen"][index]}}</td>
                <td>{{sheets.ktpst["Satuan"][index]}}</td>
                <td>{{sheets.ktpst["UiCi"][index]}}</td>
                <td>{{sheets.ktpst["(UiCi)2"][index]}}</td>
              </tr>
              <tr>
                <th colspan="3">{{sheets.ktpst["Komponen"][4]}}</th>
                <th>{{sheets.ktpst["(UiCi)2"][4]}}</th>
              </tr>
            </table>

            <!-- <table>
              <template v-if="sheets.ktpst">
                <template v-for="(header, x) in Object.keys(sheets.ktpst)" >                  
                  <td :key="x" v-if="true">{{header}}</td>
                </template>
                <tr>
                  <td v-for="(ktpst, index) in sheets.ktpst" :key="index">
                    <tr v-for="(element, index2) in ktpst" :key="index2">
                      <td v-if="element != 'NaN'">
                        {{element}}
                      </td>
                    </tr>
                  </td>
                </tr>
              </template>
            </table> -->
            <br>

            <span>Suhu yang diukur : <span contenteditable="true"> 150°C</span></span>
            <table width="100%">
              <template v-if="sheets.tp">
                <tr v-for="(tp_header, index) in tp_headers" :key="index">
                  <th v-for="(header, index2) in tp_header" :key="index2" :colspan="header.cspan" :rowspan="header.rspan">{{header.text}}</th>
                </tr>
                <tr v-for="(tp_item, tp_index) in data" :key="tp_index">
                  <td v-if="data[2][tp_index]">
                    {{data[2][tp_index]}}
                  </td>
                  <td v-if="data[1][tp_index]">
                    {{data[1][tp_index]}}
                  </td>
                  <td v-if="data[3][tp_index]">
                    {{data[3][tp_index]}}
                  </td>
                  <td v-if="data[5][tp_index]">
                    {{data[5][tp_index]}}
                  </td>
                  <td v-if="data[4][tp_index]">
                    {{data[4][tp_index]}}
                  </td>
                  <td v-if="data[7][tp_index]">
                    {{data[7][tp_index]}}
                  </td>
                  <td v-if="data[8][tp_index]">
                    {{data[8][tp_index]}}
                  </td>
                  <td v-if="data[9][tp_index]">
                    {{data[9][tp_index]}}
                  </td>
                  <td v-if="data[10][tp_index]">
                    {{data[10][tp_index]}}
                  </td>
                  <td v-if="data[11][tp_index]">
                    {{data[11][tp_index]}}
                  </td>
                  <td v-if="data[6][tp_index]">
                    {{data[6][tp_index]}}
                  </td>
                  <td v-if="data[0][tp_index]">
                    {{Math.round((data[0][tp_index] + Number.EPSILON) * 100) / 100}}
                  </td>
                  <td v-if="data[12][tp_index]">
                    {{Math.round((data[12][tp_index] + Number.EPSILON) * 100) / 100}}
                  </td>
                </tr>
              </template>
            </table>
            <br>

          </div>
        </v-card-text>



        <!-- <table>
          <template v-if="sheets.tp">
            <template v-for="(header, x) in Object.keys(sheets.tp)" >                  
              <td :key="x" v-if="header.slice(0, 10) == 'PENGAMATAN'" colspan="10">{{header}}</td>
              <td :key="x" v-else-if="header.slice(0, 7) != 'Unnamed'">{{header}}</td>
            </template>
            <tr>
              <td v-for="(tp, index) in sheets.tp" :key="index">
                <tr v-for="(element, index2) in tp" :key="index2">
                  <td>
                    {{element}}
                  </td>
                </tr>
              </td>
            </tr>
          </template>
        </table> -->

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
    padding: 4px;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import lk from '~/static/lk.json'

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  head: {
    title: 'Temperatur - Oven',
    meta: [
      {
        hid: 'oven',
        name: 'oven',
        content: 'Bidang Temperatur - Oven'
      }
    ]
  },

  data: () => ({
    active: null,
    sheets: [],
    data: [],
    header: [ "Komponen", "Satuan", "UiCi", "(UiCi)2" ],
    tp_headers: {
      0: [
        { text: 'Titik Uji', cspan: 1, rspan: 3},
        { text: 'PENGAMATAN KE ( °C )', cspan: 10, rspan: 1},
        { text: 'MID RANGE (°C)', cspan: 1, rspan: 3},
        { text: 'VARIASI TEMPORAL (°C)', cspan: 1, rspan: 3},
      ],
      1: [
        { text: '1', cspan: 2, rspan: 1},
        { text: '2', cspan: 2, rspan: 1},
        { text: '3', cspan: 2, rspan: 1},
        { text: '4', cspan: 2, rspan: 1},
        { text: '5', cspan: 2, rspan: 1},
      ],
      2: [
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
        { text: 'MAX', cspan: 1, rspan: 1},
        { text: 'MIN', cspan: 1, rspan: 1},
      ],
    }
  }),

  mounted() {
    console.log('lk.tp :', lk);
    // console.log('lk.ktpst :', lk.ktpst);
    this.sheets = lk
    
    this.mapElement()
  },

  methods: {
    triggerInput() {
      // this.sheets.push({asd: 'asd'})
      // console.log(this.sheets);
      
      document.getElementById("input-excel").click()
    },

    mapElement() {
      for (const key in this.sheets.tp) {
        if (this.sheets.tp.hasOwnProperty(key)) {
          const element = this.sheets.tp[key];
          console.log(element);
          delete element[0]
          delete element[1]
          this.data.push(element)
          
        }
      }

      console.log(this.data);
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
        reader.onload = (e) => {
          var data = new Uint8Array(reader.result);
          var wb = XLSX.read(data,{type:'array'});

          var sheets = []

          for (const x in wb.SheetNames) {
            if (wb.SheetNames.hasOwnProperty(x)) {
              const element = wb.SheetNames[x];
              var worksheet = wb.Sheets[element];
              // console.log(x+'', XLSX.utils.sheet_to_json(worksheet,{raw:true}));
              
              var htmlstr = XLSX.write(wb,{sheet:wb.SheetNames[x], type:'binary',bookType:'html'});
              // console.log(htmlstr);

              // var newEl = document.createElement('div')
              // console.log(newEl);
              
              // newEl.setAttribute("id", x);
              // var currentDiv = document.getElementById("wrapper"); 
              // currentDiv.insertBefore(newEl, currentDiv.childNodes[0]);

              this.sheetPush(x, wb.SheetNames[x], htmlstr.replace(/[Â,â,áµ,]/g, ' '))
            }
          }

          setTimeout(() => {
            this.createElement()
          }, 1000);

          // this.sheets = sheets

          // console.log(this.sheets[0].htmlstr);
          // document.getElementById('0').innerHTML += this.sheets[0].htmlstr;
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
