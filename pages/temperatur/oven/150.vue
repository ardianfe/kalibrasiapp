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
            Lembar Kerja | 
            <span class="font-weight-bold">
              {{ $route.query.id }}
            </span>
          </p>
          <v-spacer/>
          <v-btn class="primary" :to="'/print/sertifikat?cert_no=' + $route.query.cert_no">Cetak Sertifikat</v-btn>
          <v-btn class="primary" :to="'/print/lampiran?cert_no='  + $route.query.cert_no">Cetak Lampiran</v-btn>
        </v-card-title>

        <v-card-title>
          <template v-for="(_suhu, index) in suhuheader">
            <v-btn :key="index" :class="`${$route.query.suhu == _suhu ? 'grey' : 'primary'}`"
              @click="()=>{
                $router.push('/temperatur/OVEN/'+_suhu+'?cert_no=' + $route.query.cert_no),
                getWorkSheet(_suhu)
              }">
              {{_suhu}}
            </v-btn>
          </template>
        </v-card-title>

        <v-card-text>
          <p class="title">
            Lembar Kerja
          </p>
          <div class="pa-1">
            <p>Balai Besar Bahan dan Barang Teknik (B4T)</p> 

            <p class="my-4">Suhu yang diukur : <span contenteditable="true"> 150°C</span></p>
            <table width="100%">
              <template v-if="sheets.tp">
                <tr v-for="(tp_header, index) in tp_headers" :key="index">
                  <th v-for="(header, index2) in tp_header" :key="index2" :colspan="header.cspan" :rowspan="header.rspan">{{header.text}}</th>
                </tr>
                <tr v-for="(tp_item, tp_index) in sheets.tp" :key="tp_index">
                  <template v-if="tp_index >= 2">
                    <td>
                      {{tp_item['TITIK\nUJI']}}
                    </td>
                    <td>
                      {{tp_item['PENGAMATAN KE ( °C )']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 10']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 3']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 2']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 5']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 6']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 7']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 8']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 9']}}
                    </td>
                    <td>
                      {{tp_item['Unnamed: 10']}}
                    </td>
                    <td>
                      {{Math.round((tp_item['MID\nRANGE\n(°C)'] + Number.EPSILON) * 100) / 100}}
                    </td>
                    <td>
                      {{Math.round((tp_item['VARIASI\nTEMPORA\n(°C)'] + Number.EPSILON) * 100) / 100}}
                    </td>
                  </template>
                </tr>
              </template>
            </table>
            <br>

            <p class="my-4">Setting Suhu : <span contenteditable="true"> 150°C</span></p>
            <table v-if="sheets.ktp">
              <tr>
                <th v-for="(header, index) in header" :key="index">
                  {{header}}
                </th>
              </tr>
              <tr v-for="(item, index) in 4" :key="index">
                <td>{{sheets.ktp[index]['Komponen']}}</td>
                <td>{{sheets.ktp[index]['Satuan']}}</td>
                <td>{{sheets.ktp[index]['UiCi']}}</td>
                <td>{{sheets.ktp[index]['(UiCi)2'].toFixed(3)}}</td>
              </tr>
              <tr>
                <th colspan="3">{{sheets.ktp[4]["Komponen"]}}</th>
                <th>{{sheets.ktp[4]["(UiCi)2"]}}</th>
              </tr>
            </table>
            <br>

          </div>
        </v-card-text>

        <v-card-actions class="pa-3" v-if="cert_data['Pemeriksa']">
          <p>Diperiksa oleh : <span class="font-weight-bold">{{cert_data['Pemeriksa'][0]}}</span> 
          <br>
          Tanggal <span class="font-weight-bold">{{ convertDate(cert_data['Tanggal Diterima'][0]['$date']) }}</span>
          </p>
          <v-spacer />
          <p>Dikalibrasi oleh : <span class="font-weight-bold">{{cert_data['Disiapkan Oleh'][0]}}</span> 
          <br>
          Tanggal <span class="font-weight-bold">{{ convertDate(cert_data['Tanggal Kalibrasi'][0]['$date']) }}</span>
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
    sheets: [],
    sheets2: [],
    data: [],
    header: [ "Komponen", "Satuan", "UiCi", "(UiCi)2" ],
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
    tp_headers2: {},

    suhuheader: [],
    cert_data: {}
  }),

  mounted() {
    this.getWorkSheet(150)
    this.getCert()
  },

  methods: {
    async getCert(no_cert) {
      try {
        const request = await this.$calibrate.getDataCertificate({
          id: this.$route.query.cert_no
        })

        console.log('req :', request);
        this.cert_data = request.data_perusahaan
        this.suhuheader = request.suhu
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getWorkSheet(temp) {
      try {
        const request = await this.$calibrate.getWorkSheet({
          id: this.$route.query.cert_no, temp: temp
        })

        console.log('req ' +temp+ ' :' , request);


        if (temp == 150) {
          this.sheets = request
        } else {
          this.sheets2 = request
        }

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
      
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
