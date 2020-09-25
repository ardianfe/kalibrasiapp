<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI KEKERASAN SHORE</p>

            <p class="b">3-09-19-00757</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ equipment.name }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model: {{ equipment.type }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ equipment.brand }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ equipment.capacity }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ equipment.serial_number }}</p>
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
                  <p class="mb-1">Suhu Ruangan : {{ equipment.temperature }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Standar Acuan : {{ equipment.standard }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Posisi : { equipment.position }</p>
                </v-layout>
                
                <v-layout>
                  <p class="mt-3 mb-1">Timbangan Elektronik No. {900264} <br> Termometer : KAL-1 </p>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <table width="100%">
              <tr>
                <th width="14.285%" rowspan="2">Penunjukan Durometer</th>
                <th width="14.285%" rowspan="2">Penunjukan Alat Kalibrasi (Timbangan)</th>
                <th width="14.285%" rowspan="2">Penunjukan Timbangan Setelah Dikoreksi</th>
                <th width="14.285%" colspan="2">Nilai Sebenarnya</th>
                <th width="14.285%" rowspan="2">Kesalahan</th>
                <th width="14.285%" rowspan="2">Mampu ulang</th>
                <th width="14.285%" rowspan="2">Kesalahan nol</th>
              </tr>
              <tr>
                <th>Nilai Individual</th>
                <th>Nilai Rata-rata</th>
              </tr>
              <tr class="text-xs-center" style="font-size: 11px">
                <td>(HA)</td>
                <td>(q)</td>
                <td>(q)</td>
                <td>(HA)</td>
                <td>(HA)</td>
                <td>(HA)</td>
                <td>(%)</td>
                <td>(%)</td>
              </tr>
              <tr class="text-xs-center">
                <td v-for="(item, index) in 8" :key="index">
                  <span v-for="(item, index) in 30" :key="index">{{item}} <br></span>
                </td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : Aji MS <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Agung Tri S S <br>
                Tanggal :	2 Juni 2017 <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="font-weight-bold">Perhitungan Ketidakpastian Pengukuran</p>

            <p class="mb-1">1. Analisa Tipe B (ub) </p>
            <p>
              &emsp;a.	Pada Alat Kalibrasi (ub1) <br>
              &emsp;Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi) = 2,0 <br>
              &emsp;&emsp;- Dead Weight No. : &emsp;&emsp;&emsp;&emsp; ketidakpastian standar dari sertifikat = &emsp;&emsp;% <br>
              &emsp;&emsp;- Timbangan No. : {900246} &emsp;&emsp; ketidakpastian standar dari sertifikat = &emsp;&emsp; 0.00167% <br>
            </p>
            <p>
              &emsp;b.	Readability alat kalibrasi (ub2) <br>
              &emsp;&emsp;- Readability = -<br>
              &emsp;&emsp;- Distribusi rectangular (a) = -<br>
              &emsp;&emsp;- Ketidakpastian standar readability (ub2) = -%<br>
            </p>
            <p>
              &emsp;c.	Pada pengaruh perubahan (ub3) <br>
              &emsp;&emsp;- Selisih suhu pengamatan 0.1	°C<br>	
              &emsp;&emsp;Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0 <br>
              &emsp;&emsp;- Ketidakpastian standar pengaruh perubahan suhu (ub3) =	0.00004	%
            </p>				
            <p>
              &emsp;d.	Pada indikator durometer (ub4) <br>
              &emsp;&emsp;- Julat ukur					=	0 - 100 	( HA ) <br>
              &emsp;&emsp;- Readability					=	0.2	( HA ) <br>
              &emsp;&emsp;- Distribusi rectangular (a) 					=	0.2	( HA ) <br>
              &emsp;&emsp;- Ketidakpastian standar indikator durometer (ub4) 					=	0.11547	( HA ) <br>
            </p>				

            <p class="mb-1">2. Analisa Tipe A (ua)</p>
            <p>
              &emsp;- Pada pengukuran (kesalahan relatif mampu ulang maksimum)  = 0.73	%<br>
              &emsp;- Ketidakpastian standar pengukuran (ua)  =						0.42147	%
            </p>

            <p class="">3. Ketidakpastian gabungan (uc) = (Tipe A)2 + (Tipe)2 <br>
              &emsp; = 0.437						
            </p>

            <p class="mb-1">
              4. Ketidakpastian diperluas (U95) <br>
              &emsp;Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0
            </p>

            <p>
              &emsp;Maka ketidakpastian diperluass (U95)     =   					k  x  uc <br>			
              &emsp;&emsp;&emsp;= 2 x uc <br>
              &emsp;&emsp;&emsp;=	1.16302	% <br>					
              &emsp;&emsp;&emsp;=	1.16	% <br>	
              &emsp;&emsp;&emsp;=	4.73	 	HB 10/3000 <br>
            </p>
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