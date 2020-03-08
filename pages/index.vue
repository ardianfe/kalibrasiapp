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
        <v-card-title class="headline">Selamat Datang !</v-card-title>
        <v-card-text v-if="$store.state.isLoggedIn">
          <v-layout row wrap>
            <v-flex class="pa-3" xs6 sm3 v-for="(field, index) in fields" :key="index">
              <v-card 
                :class="`${ index == 0 ? 'primary' : 'grey'}`"
                :style="`${ index == 0 ? 'padding: 40px 0; cursor: pointer' : 'padding: 40px 0;'}`"
                @click="index == 0 ? $router.push(field.url) : ''">
                <v-card-text class="title">
                  <p style="margin:0; color: white; text-align: center">{{field.name}}</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- <v-btn v-if="$store.state.isLoggedIn" class="primary" @click="$router.push('/input_file')">Input File</v-btn> -->
        </v-card-text>
        <v-card-text v-else>Silakan Login.</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
  #wrapper {
    overflow-x: scroll;
    /* overflow: scroll; */
  }
</style>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data: () => ({
    fields: [
      { id: 1, name: 'Temperatur', desc: '-', url: '/temperatur' },
      { id: 2, name: 'Kelembapan', desc: '-', url: '/temperatur' },
      { id: 3, name: 'Tekanan', desc: '-', url: '/temperatur' },
      { id: 4, name: 'Kepadatan', desc: '-', url: '/temperatur' },
      { id: 5, name: 'Gravitasi', desc: '-', url: '/temperatur' },
      { id: 6, name: 'Kecepatan', desc: '-', url: '/temperatur' },
      { id: 7, name: 'Dimensi', desc: '-', url: '/temperatur' },
      { id: 8, name: 'Lainnya', desc: '-', url: '/temperatur' },
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
