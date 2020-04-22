<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card class="v-main-card elevation-8">
        <v-card-title class="headline">
          <v-hover>
            <v-icon x-large
              :color="`${ hover ? 'primary' : 'grey'}`" 
              slot-scope="{ hover }" 
              @click="$router.go(-1)"
            >keyboard_arrow_left</v-icon>
          </v-hover> &nbsp;
          <p class="lato font-weight-bold title mt-3">
            Bidang <span style="text-transform: capitalize;"> {{ $route.query.bid }} </span>
          </p>
        </v-card-title>

        <v-card-title class="pb-0">
          <h3 class="mt-4">Sedang Proses</h3>
          <v-spacer />
          <v-btn class="info" @click="$router.push('/' + $route.query.bid)">Input data baru</v-btn>
        </v-card-title>

        <v-card-text>
          <table style="width: 100%">
            <tr>
              <th style="height: 48px">Nama Alat</th>
              <th style="height: 48px">Nama Pelanggan</th>
              <th style="height: 48px">No. Sertifikat</th>
              <th style="height: 48px">Tgl. Terima</th>
              <th style="height: 48px">Tgl. Kalibrasi</th>
              <th style="height: 48px">Aksi</th>
            </tr>

            <tr v-for="(item, index) in processed" :key="index">
              <td style="height: 24px">{{item.data_perusahaan['Nama Alat'][0]}}</td>
              <td style="height: 24px">{{item.data_perusahaan['Nama Perusahaan'][0]}}</td>
              <td style="height: 24px">{{index}}</td>
              <td style="height: 24px">{{convertDate(item.data_perusahaan['Tanggal Diterima'][0].slice(0, 10))}}</td>
              <td style="height: 24px">{{convertDate(item.data_perusahaan['Tanggal Kalibrasi'][0].slice(0, 10))}}</td>
              <td style="height: 24px">
                <v-btn icon small class="transparent" @click="$router.push('/' + $route.query.bid + '/' + item.data_perusahaan['Nama Alat'][0] + '?cert_no=' + index)">
                  <v-icon color="primary">edit</v-icon>
                </v-btn>
                <v-btn icon small class="transparent">
                  <v-icon color="primary">print</v-icon>
                </v-btn>
                <v-btn icon small class="transparent">
                  <v-icon color="error">delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </table>
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
export default {
  head: {
    title: 'Temperatur',
    meta: [
      {
        hid: 'temperature',
        name: 'temperature',
        content: 'Bidang Temperatur'
      }
    ]
  },

  data: () => ({
    active: null,

    processed: {},
    keys: {}
  }),

  mounted() {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push('/')
    }

    this.getAllCertificate()
  },

  methods: {
    triggerInput() {
      document.getElementById("input-excel").click()
    },

    async getAllCertificate() {
      try {
        const req = await this.$calibrate.getAllCertificate()


        this.processed = req
        this.keys = Object.keys(req)
        console.log(req);
        
      } catch (error) {
        alert('Gagal mendapatkan data certificate')
      }
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

    triggerUpload() {

    },

    fileUpload() {
      
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
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
