<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI MESIN UJI KEKERASAN BRINELL</p>

            <p class="b">No Laporan : 3-09-17-0427</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ equipment.name }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Kapasitas : {{ equipment.capacity }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ equipment.brand }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ equipment.serial_number }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
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
                  <p class="mb-1">Metoda verifikasi : {{ equipment.methods }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mt-3 mb-1">Metoda Tidak Langsung <br> Resolusi : 1 divisi =  0.05 mm </p>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-text>
            <table width="100%">
              <tr>
                <th style="width: 33%">JENIS KALIBRASI</th>
                <th style="width: 33%" colspan="2">HASIL KALIBRASI SEBELUM SETING</th>
              </tr>
              <tr style="font-size: 12px">
                <td>
                  1. Kalibrasi dengan blok standar <br>			
                  No 90432 <br>
                  Nilai kekerasan Brinell <br>			
                  407.5	HB 10/3000 <br>
                  Penetrator tipe Bola baja <br><br>			
                  Diameter bola baja 10 mm <br>
                  Gaya penetrasi 29,42 kN	<br>		
                  Waktu penetrasi 15 detik <br>
                </td>
                <td colspan="2" class="py-3">
                  <p class="mb-0">
                    Posisi  1:	d11 =	{{hk.hasil.unnamed7[0]}}	d12 =	{{hk.hasil.unnamed9[0]}}	d1 =	{{hk.hasil.unnamed11[0]}}	H1=	{{hk.hasil.unnamed13[0]}}	HB 10/3000 <br>
                    Posisi  2:	d21 =	{{hk.hasil.unnamed7[1]}}	d22 =	{{hk.hasil.unnamed9[1]}}	d2 =	{{hk.hasil.unnamed11[1]}}	H2=	{{hk.hasil.unnamed13[1]}}	HB 10/3000 <br>
                    Posisi  3:	d31 =	{{hk.hasil.unnamed7[2]}}	d32 =	{{hk.hasil.unnamed9[2]}}	d3 =	{{hk.hasil.unnamed11[2]}}	H3=	{{hk.hasil.unnamed13[2]}}	HB 10/3000 <br>
                    Posisi  4:	d41 =	{{hk.hasil.unnamed7[3]}}	d42 =	{{hk.hasil.unnamed9[3]}}	d4 =	{{hk.hasil.unnamed11[3]}}	H4=	{{hk.hasil.unnamed13[3]}}	HB 10/3000 <br>
                    Posisi  5:	d51 =	{{hk.hasil.unnamed7[4]}}	d52 =	{{hk.hasil.unnamed9[4]}}	d5 =	{{hk.hasil.unnamed11[4]}}	H5=	{{hk.hasil.unnamed13[4]}}	HB 10/3000 <br>
                  </p>
                  <hr width="90%" class="my-1">

                  <p class="text-xs-right">Rata-rata H = {{hk.h_rata_rata}} 	HB 10/3000</p>

                  <p>
                    d minimum = {{ hk.d_min[0] }} mm =	{{ hk.d_min[1] }}	HB 10/3000 <br>	
                    d maksimum = {{ hk.d_max[0] }}	mm = {{ hk.d_max[1] }} HB 10/3000	
                  </p>

                  <p>Nilai kekerasan Brinell satuan kekerasan	HB 10/3000</p>

                  <p>
                    H rata-rata =	{{hk.h_rata_rata}} HB 10/3000 <br>
                    H minimum =	{{hk.h_minumum}} HB 10/3000 <br>
                    H maksimum = 404.0 HB 10/3000
                  </p>

                  <p>
                    H standar   =	407.5	HB 10/3000
                  </p>
                </td>
              </tr>
              <tr style="font-size: 12px">
                <!-- <td rowspan="2">
                  2.   Repeatability  = <br>
                  H maksimum - H minimum <br>	
                  404.0	-	401.0 <br><br>
                        
                  3.  Kesalahan = <br>
                  H rata-rata - H standar <br>
                  401.6	-	407.5
                </td> -->
                <td class="text-xs-center" style="border: 0px solid grey;"></td>
                <td class="text-xs-center">HASIL KALIBRASI</td>
                <td class="text-xs-center">SYARAT 6506-2 : 2005</td>
              </tr>
              <tr style="font-size: 12px">
                <td>
                  2.   Repeatability  = <br>
                  H maksimum - H minimum <br>	
                  404.0	-	401.0 <br><br>
                </td>
                <td>3.0	HB 10/3000</td>
                <td>16.3 HB 10/3000</td>
              </tr>

              <tr style="font-size: 12px">
                <td>
                  3.  Kesalahan = <br>
                  H rata-rata - H standar <br>
                  401.6	-	407.5
                </td>
                <td>-5.9 HB 10/3000</td>
                <td>12.2 HB 10/3000</td>
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

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="font-weight-bold">Perhitungan Ketidakpastian Pengukuran</p>

            <p class="mb-1">1. Analisa Tipe B (ub) </p>
            <p>
              &emsp;a.	Pada Alat Kalibrasi (ub1) <br>
              &emsp;Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi) = 2,0 <br>
              &emsp;&emsp;- Nilai kekerasan 407.5	HB 10/3000 <br>
              &emsp;&emsp;- Blok standar no 90432	ketidakpastian standar dari sertifikat = 0.55000	%	
            </p>
            <p>
              &emsp;b.	Pada indikator mesin uji kekerasan (ub2) <br>
              &emsp;&emsp;- Skala ukur =	0.05 -	5	mm<br>
              &emsp;&emsp;- Readability (a) = 0.01	mm<br>	
              &emsp;&emsp;- Distribusi rectangular (a) = 0.01	mm<br>
              &emsp;&emsp;- Ketidakpastian standar indikator (ub2) = 0.11547%<br>
            </p>
            <p>
              &emsp;c.	Pada pengaruh perubahan (ub3) <br>
              &emsp;&emsp;- Ketidakpastian standar termometer dari sertifikat (ub3) =  11.5 x 10-6 x 0.11547 &emsp; x 100 % <br>	
              &emsp;&emsp;&emsp;&emsp;&emsp;21.3 <br>
              &emsp;&emsp;&emsp;= 0.0000062 <br>				
            </p>				

            <p class="mb-1">2. Analisa Tipe A (ua)</p>
            <p>
              &emsp;- Pada pengukuran standar deviasi 1.34164 unit <br>
              &emsp;- Ketidakpastian standar pengukuran (ua) = 0.14940	%
            </p>

            <p class="">3. Ketidakpastian gabungan (uc) = (Tipe A)2 + (Tipe)2 <br>
              &emsp; = 0.58151						
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
import gayaHeader from '~/components/gaya/uji_kekerasan.vue'
// import calibration_data from '~/static/uji_kekerasan.json'

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
    calibration_data: {},
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
      d_min: ['null','null'],
      d_max: ['null','null'],
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
  },

  methods: {
    async cekCORS() {
      try {
        const req = await this.$calibrate.testCors()

        console.log('cal data', req);
        this.calibration_data = req

        console.log('cal?', this.calibration_data);
        var data = this.calibration_data.result[0].data_alat
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

        this.ketidakpastian = this.calibration_data.result

        this.hk.d_min = this.calibration_data.result[0].data_kal.d_minimum_1
        this.hk.d_max = this.calibration_data.result[0].data_kal.d_maksimum_1

        this.hk.hasil.unnamed7 = this.calibration_data.result[0].data_kal.hk1['Unnamed: 7']
        this.hk.hasil.unnamed9 = this.calibration_data.result[0].data_kal.hk1['Unnamed: 9']
        this.hk.hasil.unnamed11 = this.calibration_data.result[0].data_kal.hk1['Unnamed: 11']
        this.hk.hasil.unnamed13 = this.calibration_data.result[0].data_kal.hk1['Unnamed: 13']
      } catch (error) {
        console.log('error:', error.response);
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