<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>
              Bidang : GAYA <br>	
              Alat : Durometer Tipe A	
            </p>
            <table>
              <thead>
                <tr class="tableizer-firstrow">
                  <th>Komponen</th>
                  <th>Satuan</th>
                  <th>Distribusi</th>
                  <th>U</th>
                  <th>Pembagi</th>
                  <th>vi</th>
                  <th>ui</th>
                  <th>ci</th>
                  <th>ui.ci</th>
                  <th>(ui.ci)²</th>
                  <th>(ui.ci)4/vi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Timbangan</td>
                  <td>%</td>
                  <td>normal</td>
                  <td>0.01</td>
                  <td>2</td>
                  <td>30</td>
                  <td>0.006666667</td>
                  <td>1</td>
                  <td>0.006666667</td>
                  <td>4.44444E-05</td>
                  <td>6.58436E-11</td>
                </tr>
                <tr>
                  <td>Drift timbangan</td>
                  <td>%</td>
                  <td>rectangular</td>
                  <td>0.01</td>
                  <td>1.7321</td>
                  <td>30</td>
                  <td>0.007698004</td>
                  <td>1</td>
                  <td>0.007698004</td>
                  <td>5.92593E-05</td>
                  <td>1.17055E-10</td>
                </tr>
                <tr>
                  <td>Pengaruh suhu</td>
                  <td>%</td>
                  <td>rectangular</td>
                  <td>0.00000037</td>
                  <td>1.7321</td>
                  <td>30</td>
                  <td>2.15544E-07</td>
                  <td>1</td>
                  <td>2.15544E-07</td>
                  <td>4.64593E-14</td>
                  <td>7.19488E-29</td>
                </tr>
                <tr>
                  <td>Indikator</td>
                  <td>%</td>
                  <td>rectangular</td>
                  <td>0.2</td>
                  <td>1.7321</td>
                  <td>50</td>
                  <td>0.115470054</td>
                  <td>1</td>
                  <td>0.115470054</td>
                  <td>0.013333333</td>
                  <td>3.55556E-06</td>
                </tr>
                <tr>
                  <td>Daya Ulang Pembacaan</td>
                  <td>%</td>
                  <td>rectangular</td>
                  <td>0.34</td>
                  <td>1.7321</td>
                  <td>2</td>
                  <td>0.196299092</td>
                  <td>1</td>
                  <td>0.196299092</td>
                  <td>0.038533333</td>
                  <td>0.000742409</td>
                </tr>
                <tr>
                  <td colspan="11">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="9">Sums</td>
                  <td>0.052</td>
                  <td>0.000745965</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian baku gabungan, uc, %</td>                  
                  <td>0.228</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td colspan="9">Derajat kebebasan efektif, veff</td>
                  <td>3.6</td>
                  <td>&nbsp;</td>              
                </tr>
                <tr>
                  <td colspan="9">Faktor cakupan, k-student's for veff and CL 95%</td>
                  <td>2.00</td>
                  <td>&nbsp;</td>              
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian bentangan, U = k.uc, %</td>
                  <td>0.46</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td colspan="9">Ketidakpastian bentangan, U = k.uc, HA</td>
                  <td>0.46</td>
                  <td>HA</td>
                </tr>
              </tbody>
            </table>;
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
    padding: 3px
  }
</style>

<script>
import gayaHeader from '~/components/gaya/durometer.vue'
import durometer from '~/static/durometer.json'

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
    no_cert: '3-09-10-0490',
    equipment: {
      name : '',
      capacity : '',
      brand : '',
      serial_number : '',
      type : '',
      made_in : '',
      location : '',
      temperature : '',
      standard : '',
      methods : '',
    },

    hk: {
      d_min: [0,0],
      d_max: [0,0],
      h_minumum: 401,
      h_rata_rata: 401.6,
      hasil: {
        unnamed7: [],
        unnamed9: [],
        unnamed11: [],
        unnamed13: [],
      }
    }
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }

    this.cekCORS()

    console.log('cal?', durometer);
    var data = durometer.result[0].data_alat
    this.equipment.name = data['Deskripsi Alat']
    this.equipment.capacity = data['Kapasitas']
    this.equipment.brand = data['Merek']
    this.equipment.serial_number = data['No Seri']
    this.equipment.type = data['Tipe']
    this.equipment.made_in = data['Buatan']
    this.equipment.location = data['Lokasi Kalibrasi']
    this.equipment.temperature = data['Suhu']
    this.equipment.standard = data['Standar acuan']
    this.equipment.methods = data['Metoda verifikasi']

    console.log('eq ', this.equipment);

    this.ketidakpastian = durometer.result

    // this.hk.d_min = durometer.result[0].data_kal.d_minimum_1
    // this.hk.d_max = durometer.result[0].data_kal.d_maksimum_1

    // this.hk.hasil.unnamed7 = durometer.result[0].data_kal.hk1['Unnamed: 7']
    // this.hk.hasil.unnamed9 = durometer.result[0].data_kal.hk1['Unnamed: 9']
    // this.hk.hasil.unnamed11 = durometer.result[0].data_kal.hk1['Unnamed: 11']
    // this.hk.hasil.unnamed13 = durometer.result[0].data_kal.hk1['Unnamed: 13']
  },

  methods: {
    async cekCORS() {
      try {
        const req = await this.$calibrate.testCors()

        console.log('test cors', req);
      } catch (error) {
        console.log('cek cors :', error.response);
      }
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