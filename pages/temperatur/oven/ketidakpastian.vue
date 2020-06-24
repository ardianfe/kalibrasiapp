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
          <p class="ma-0">
            Lembar Kerja Ketidakpastian | 
            <span class="font-weight-bold">
              {{ $route.query.cert_no }}
            </span>
          </p>
          <v-spacer/>
          <v-btn class="primary" :to="'/print/sertifikat'">Cetak Sertifikat</v-btn>
          <v-btn class="primary" :to="'/print/lampiran'">Cetak Lampiran</v-btn>
        </v-card-title>

        <v-card-text>
          <v-tabs
            v-model="active"
            color="cyan"
            dark
            slider-color="yellow"
          >
            <v-tab
              ripple
            >
              Ketidakpastian
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div class="pa-1">
                    <p v-if="header[0] != 'Ketidakpastian'">Suhu yang diukur : <span contenteditable="true"> {{ header[0] }}</span></p>
                    <table v-if="sheets2[0]">
                      <tr>
                        <th v-for="(header2, index) in header2" :key="index">
                          {{header2}}
                        </th>
                      </tr>
                      <tr>
                        <th v-for="(header2, index) in header2" :key="index">
                          ({{index+1}})
                        </th>
                      </tr>
                      <tr v-for="(item, index) in sheets2[0]" :key="index">
                        <template v-if="index >= 1 && index <= 7">
                          <td>{{item['Komponen']}}</td>
                          <td>{{item['Satuan']}}</td>
                          <td>{{item['Distribusi']}}</td>
                          <td>{{item['U'].toFixed(2)}}</td>
                          <td>{{item['Pembagi'].toFixed(2)}}</td>
                          <td>{{item['Ui'].toFixed(2)}}</td>
                          <td>{{item['Ci'].toFixed(2)}}</td>
                          <td>{{item['UiCi'].toFixed(2)}}</td>
                          <td>{{item['(UiCi)2'].toFixed(3)}}</td>
                        </template>
                      </tr>
                      <tr>
                        <td colspan="7">{{sheets2[0][8]['Komponen']}}</td>
                        <td colspan="2">{{sheets2[0][8]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td colspan="7">{{sheets2[0][9]['Komponen']}}</td>
                        <td colspan="2">{{sheets2[0][9]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td colspan="7">{{sheets2[0][10]['Komponen']}}</td>
                        <td colspan="2">{{sheets2[0][10]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600" colspan="7">{{sheets2[0][11]['Komponen']}}</td>
                        <td style="font-weight: 600" colspan="2">{{sheets2[0][11]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                    </table>
                    
                    <!-- <p v-if="header[2] != 'Ketidakpastian'">Suhu yang diukur : <span contenteditable="true"> {{ header[2] }}</span></p>
                    <table v-if="sheets2[2]">
                      <tr>
                        <th v-for="(header2, index) in header2" :key="index">
                          {{header2}}
                        </th>
                      </tr>
                      <tr>
                        <th v-for="(header2, index) in header2" :key="index">
                          ({{index+1}})
                        </th>
                      </tr>
                      <tr v-for="(item, index) in sheets2[2]" :key="index">
                        <template v-if="index >= 1 && index <= 7">
                          <td>{{item['Komponen']}}</td>
                          <td>{{item['Satuan']}}</td>
                          <td>{{item['Distribusi']}}</td>
                          <td>{{item['U'].toFixed(2)}}</td>
                          <td>{{item['Pembagi'].toFixed(2)}}</td>
                          <td>{{item['Ui'].toFixed(2)}}</td>
                          <td>{{item['Ci'].toFixed(2)}}</td>
                          <td>{{item['UiCi'].toFixed(2)}}</td>
                          <td>{{item['(UiCi)2'].toFixed(3)}}</td>
                        </template>
                      </tr>
                      <tr>
                        <td colspan="7">{{sheets2[2][8]['Komponen']}}</td>
                        <td colspan="2">{{sheets2[2][8]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td colspan="7">{{sheets2[2][9]['Komponen']}}</td>
                        <td colspan="2">{{sheets2[2][9]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td colspan="7">{{sheets2[2][10]['Komponen']}}</td>
                        <td colspan="2">{{sheets2[2][10]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600" colspan="7">{{sheets2[2][11]['Komponen']}}</td>
                        <td style="font-weight: 600" colspan="2">{{sheets2[2][11]['(UiCi)2'].toFixed(2)}}</td>
                      </tr>
                    </table> -->
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card-text>

        <v-card-actions class="pa-3" v-if="cert_data['Pemeriksa']">
          <p>Diperiksa oleh : <span class="font-weight-bold">{{cert_data['Pemeriksa'][0]}}</span> 
          <br>
          Tanggal <span class="font-weight-bold">{{cert_data['Tanggal Diterima'][0]}}</span>
          </p>
          <v-spacer />
          <p>Dikalibrasi oleh : <span class="font-weight-bold">{{cert_data['Disiapkan Oleh'][0]}}</span> 
          <br>
          Tanggal <span class="font-weight-bold">{{cert_data['Tanggal Kalibarsi'][0]}}</span>
          </p>
        </v-card-actions>
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
    header: [ "90", "110", "150", "Ketidakpastian" ],
    cert_data: [],

    header2: [ "Komponen", "Satuan", "Distribusi", "U", "Pembagi", "Ui", "Ci", "UiCi", "(UiCi)2" ],
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
    },
    sheets2: []
  }),

  mounted() {
    this.getCert(this.$route.query.cert_no)
    // this.getWorkSheet(110)
  },

  methods: {
    async getCert(no_cert) {
      try {
        const request = await this.$calibrate.getDataCertificate({
          id: no_cert
        })

        console.log('req :', request);

        this.header = request.suhu
        request.suhu.forEach(element => {
          this.getWorkSheet(element)
          console.log(element);
        });

        this.cert_data = request.data_perusahaan
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getWorkSheet(temp) {
      try {
        const request = await this.$calibrate.getWorkSheet({
          id: this.$route.query.cert_no, temp: temp
        })

        this.sheets2.push(request.ktp);
        console.log(this.sheets2);

        // this.mapElement()

      } catch (error) {
        console.log(error);
        
      }
    },

    fixed2(decimal_num) {
      var n = Number(Math.round(decimal_num+'e2')+'e-2')
      return n;
    },

    triggerInput() {
      // this.sheets.push({asd: 'asd'})
      // console.log(this.sheets);
      
      document.getElementById("input-excel").click()
    },

    // mapElement() {
    //   for (const key in this.sheets.tp) {
    //     if (this.sheets.tp.hasOwnProperty(key)) {
    //       const element = this.sheets.tp[key];
    //       console.log(element);
    //       this.data.push(element)
          
    //     }
    //   }

    //   console.log('mapped data : ', this.data);
    // },

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
