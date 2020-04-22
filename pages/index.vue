<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <template v-if="$store.state.isLoggedIn">
        <p class="accent--text lato font-weight-bold title">Dashboard</p>
        <v-card class="v-main-card blue darken-2 elevation-9">
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 class="pa-2">
                <p class="white--text display-1 pt-4 pb-2 font-weight-bold lato">Selamat Datang di 
                  <br> Portal Kalibrasi!</p>
                  <hr style="border: 2px solid white; width: 27%">
                <!-- <v-card style="height: 300px; width: 100%" class="v-main-card success" flat></v-card> -->
              </v-flex>
              <v-flex xs12 sm6 md3 class="pa-2">
                <v-hover>
                  <v-card 
                    slot-scope="{hover}" flat
                    style="width: 90%" 
                    class="pointer white--text v-main-card text-xs-center"
                    :class="`${hover ? 'elevation-8 primary darken-2' : 'elevation-0 primary darken-3'}`"
                  >
                    <v-card-text class="pt-4" style="min-height: 250px; max-height: 250px;">
                      <p color="yellow" class="yellow--text display-4 ma-0 bebas-neue">30</p>
                      <p color="yellow" class="yellow--text title px-2 pt-sans">Sertifikat baru <br> selama Bulan</p>
                      <p color="yellow" class="yellow--text display-1 ma-0 pt-sans">Maret</p>
                    </v-card-text>
                    <v-card-actions class="pa-0">
                      <v-spacer></v-spacer>
                      <v-icon color="white">keyboard_arrow_down</v-icon>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>

              <v-flex xs12 sm6 md3 class="pa-2">
                <v-hover>
                  <v-card 
                    slot-scope="{hover}" flat
                    style="width: 90%" 
                    class="pointer white--text v-main-card text-xs-center"
                    :class="`${hover ? 'elevation-8 primary darken-2' : 'elevation-0 primary darken-3'}`"
                  >
                    <v-card-text class="pt-4" style="min-height: 250px; max-height: 250px;">
                      <p class="yellow--text display-4 ma-0 bebas-neue">10</p>
                      <p class="yellow--text ma-0 pt-sans display-1">Perusahaan</p>
                    </v-card-text>
                    <v-card-actions class="pa-0">
                      <v-spacer></v-spacer>
                      <v-icon color="white">keyboard_arrow_down</v-icon>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <p class="accent--text lato font-weight-bold title mt-5">Bidang</p>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-layout row wrap>
              <v-flex class="pa-1" xs6 sm3 v-for="(field, index) in fields" :key="index">
                <v-hover>
                  <v-card 
                    slot-scope="{hover}" flat
                    @click="field.id == 1 ? $router.push('/bidang' + field.url) : ''"
                    :class="`${hover ? 'elevation-8 pointer blue darken-3' : 'elevation-0 blue darken-4'}`"
                    style="width: 100%; height: 100px; max-height: 100px;" 
                    class="d-flex v-main-card white--text pa-1"
                  >
                    <p class="title text-xs-center lato" style="margin: auto">{{field.name}}</p>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm6>
            <v-layout row wrap>
              <v-flex class="pa-1" xs6 sm3 v-for="(field, index) in fields2" :key="index">
                <v-hover>
                  <v-card 
                    slot-scope="{hover}" flat
                    @click="field.id == 1 ? $router.push('/bidang' + field.url) : ''"
                    :class="`${hover ? 'elevation-8 pointer blue darken-3' : 'elevation-0 blue darken-4'}`"
                    style="width: 100%; height: 100px; max-height: 100px;" 
                    class="d-flex v-main-card white--text pa-1"
                  >
                    <p class="title text-xs-center lato" style="margin: auto">{{field.name}}</p>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout row class="mt-5">
          <v-flex>
            <p class="accent--text lato font-weight-bold title mt-3">Sedang Proses</p>
          </v-flex>
          <v-flex class="text-xs-right">
            <v-btn class="primary info" flat>Lihat Semuanya</v-btn>
          </v-flex>
        </v-layout>
        <v-card class="v-main-card white" style="border: 1px solid #dcdcdc !important" flat>
          <v-card-text>
            <v-layout row wrap>
              <v-flex style="margin: 20px 0 10px 0;" xs12 class="pt-0 px-3">
                <table style="width: 100%">
                  <tr>
                    <th>Nama Perusahaan</th>
                    <th>Tgl Terima</th>
                    <th>Status Kalibrasi</th>
                  </tr>

                  <tr v-for="(item, index) in companies" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.cert_date}}</td>
                    <td>Sudah Kalibrasi</td>
                  </tr>
                </table>
              </v-flex>

            </v-layout>
          </v-card-text>
        </v-card>

        <v-layout row class="mt-5">
          <v-flex>
            <p class="accent--text lato font-weight-bold title mt-3">Sudah Cetak</p>
          </v-flex>
          <v-flex class="text-xs-right">
            <v-btn class="primary info" flat>Lihat Semuanya</v-btn>
          </v-flex>
        </v-layout>
        <v-card class="v-main-card white" style="border: 1px solid #dcdcdc !important" flat>
          <v-card-text>
            <v-layout row wrap>
              <v-flex style="margin: 20px 0 10px 0;" xs12 class="pt-0 px-3">
                <table style="width: 100%">
                  <tr>
                    <th>Nama Perusahaan</th>
                    <th>No Sertifikat</th>
                    <th>Tgl. Sertifikat</th>
                  </tr>

                  <tr v-for="(item, index) in companies" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.cert_no}}</td>
                    <td>{{item.cert_date}}</td>
                  </tr>
                </table>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        
      </template>
      <v-card class="v-main-card blue darken-2 white--text" flat v-else>
        <v-card-title>
          <p class="headline pt-3 font-weight-bold lato">Selamat Datang di Portal Kalibrasi!</p>
        </v-card-title>
        <v-card-text>Silakan Login untuk melanjutkan.</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
  #wrapper {
    overflow-x: scroll;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 1px 4px;
  }
</style>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data: () => ({
    fields: [
      { id: 1, name: 'Suhu', desc: '-', url: '?bid=temperatur' },
      { id: 2, name: 'Dimensi', desc: '-', url: '?bid=dimensi' },
      { id: 3, name: 'Tekanan', desc: '-', url: '?bid=tekanan' },
      { id: 4, name: 'Gaya', desc: '-', url: '?bid=gaya' },
    ],

    fields2:[  
      { id: 5, name: 'Masa dan Timbangan', desc: '-', url: '?bid=masa dan timbangan' },
      { id: 6, name: 'Optik / Instrumen Analisa', desc: '-', url: '?bid=optik \/ instrumen analisa' },
      { id: 7, name: 'Alat-alat Gelas Volumetri', desc: '-', url: '?bid=alat-alat gelas volumetri' },
      { id: 8, name: 'Kelistrikan (Mesin Las)', desc: '-', url: '?bid=kelistrikan (mesin las)' },
    ],

    companies: [
      { name: 'PDAM TIRTA RAHARJA KABUPATEN BANDUNG', cert_no: '3-01-19-00472', cert_date: '7 Oktober 2019'},
      { name: 'PDAM TIRTA RAHARJA KABUPATEN BANDUNG', cert_no: '3-01-19-00472', cert_date: '7 Oktober 2019'},
      { name: 'PDAM TIRTA RAHARJA KABUPATEN BANDUNG', cert_no: '3-01-19-00472', cert_date: '7 Oktober 2019'},
      { name: 'PDAM TIRTA RAHARJA KABUPATEN BANDUNG', cert_no: '3-01-19-00472', cert_date: '7 Oktober 2019'},
    ]

  }),

  mounted() {
    
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
      // document.getElementById('input-excel').change((e) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onload = function(e) {
          var data = new Uint8Array(reader.result);
          var wb = XLSX.read(data,{type:'array'});

          for (const x in wb.SheetNames) {
            if (wb.SheetNames.hasOwnProperty(x)) {
              const element = wb.SheetNames[x];
              var worksheet = wb.Sheets[element];
              console.log(x+'', XLSX.utils.sheet_to_json(worksheet,{raw:true}));
              
              var htmlstr = XLSX.write(wb,{sheet:wb.SheetNames[x], type:'binary',bookType:'html'});
              // console.log(htmlstr);

              var newEl = document.createElement('div')
              console.log(newEl);
              
              newEl.setAttribute("id", x);
              // newEl.setAttribute("@click", "hideElement("+x+")");
              // var newContent = document.createTextNode("Hi there and greetings! x - element"); 
              // // add the text node to the newly created div
              // newEl.appendChild(newContent);
              var currentDiv = document.getElementById("wrapper"); 
              currentDiv.insertBefore(newEl, currentDiv.childNodes[0]);
              
              document.getElementById(x).innerHTML += "<br><h3 style='background-color: yellow'> Sheet-"+ (x*1+1) +" | "+wb.SheetNames[x]+"</h3><button style='width: 400px;' onclick='hideElement(\""+x+"\")' value='Tutup'></button>";
              document.getElementById(x).innerHTML += htmlstr;

              localStorage.setItem(wb.SheetNames[x], htmlstr)
            }
          }

        }
      // });
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
