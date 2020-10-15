<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI KEKERASAN SHORE</p>

            <p class="b">{{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm7 class="pr-2">
                <table width="100%" class="no-grid">
                  <tr>
                    <td class="no-grid" width="30%">Deskripsi Alat</td>
                    <td class="no-grid" width="5%">:</td>
                    <td class="no-grid">{{ data_alat['Alat Kalibrasi yang digunakan'] }}</td>
                  </tr>
                    
                  <tr>
                    <td class="no-grid">Tipe / Model</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Tipe'] }}</td>
                  </tr>
                  
                  <tr>
                    <td class="no-grid">Merek</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Merek'] }}</td>
                  </tr>
                </table>

                <table width="100%" class="no-grid mt-4">
                  <tr>
                    <td class="no-grid" width="30%">Lokasi Kalibrasi</td>
                    <td class="no-grid" width="5%">:</td>
                    <td class="no-grid">{{ data_alat['Lokasi Kalibrasi'] }}</td>
                  </tr>
                    
                  <tr>
                    <td class="no-grid">Suhu Ruangan</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Suhu'] }}</td>
                  </tr>
                  
                  <tr>
                    <td class="no-grid">Standar Acuan</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Standar acuan'] }}</td>
                  </tr>
                  
                  <tr>
                    <td class="no-grid">Posisi</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Posisi'] }}</td>
                  </tr>
                </table>
              </v-flex>
              
              <v-flex xs12 sm5>
                <table width="100%" class="no-grid">
                  <tr>
                    <td class="no-grid" width="30%">Kapasitas</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Kapasitas'] }}</td>
                  </tr>
                    
                  <tr>
                    <td class="no-grid">No. Seri</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['No Seri'] }}</td>
                  </tr>
                  
                  <tr>
                    <td class="no-grid">Buatan</td>
                    <td class="no-grid">:</td>
                    <td class="no-grid">{{ data_alat['Buatan'] }}</td>
                  </tr>
                </table>

                <p class="mt-5 mb-1">{{ data_alat['Alat Kalibrasi yang digunakan'] }}</p>
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
                <td v-for="(item, index) in data_cal" :key="index">
                  <span v-for="(itemx, index) in item" :key="index">{{itemx}}<br></span>
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

  table.no-grid, th.no-grid, td.no-grid {
    border: 0px solid grey;
    padding: 3px
  }
</style>

<script>
import gayaHeader from '~/components/gaya/durometer.vue'
// import durometer from '~/static/durometer.json'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '-',
    data_alat: {
      "Alat Kalibrasi yang digunakan": "",
      "Buatan": "",
      "Deskripsi Alat": "",
      "Dikalibrasi": "",
      "Diperiksa": "",
      "Kapasitas": "",
      "Lokasi Kalibrasi": "",
      "Merek": "",
      "Metoda Kalibrasi": "",
      "No Seri": "",
      "Posisi": "",
      "Resolusi": "",
      "Standar acuan": "",
      "Standar dipakai": "",
      "Suhu": "",
      "Tanggal kalibrasi": "",
      "Tanggal periksa": "",
      "Tipe": "",
      "Tipe penetrator": ""
    },

    data_cal: {
      durometer: [],
      alat: [],
      timbangan: [],
      individual: [],
      rata_rata: [],
      kesalahan: [],
      mampu_ulang: [],
      kesalahan_nol: []
    },
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({ id: '200910161001' })

        console.log('Lembar Kerja Durometer :', req);

        this.no_cert = req.result[0].no_laporan

        this.data_alat = req.result[0].data_alat
        this.data_cal.durometer = req.result[0].data_kal['Durometer'],
        this.data_cal.alat = req.result[0].data_kal['Alat Kalibrasi'],
        this.data_cal.timbangan = req.result[0].data_kal['Timbangan Sete-'],
        this.data_cal.individual = req.result[0].data_kal['Individual'],
        this.data_cal.rata_rata = req.result[0].data_kal['Rata-rata'],
        this.data_cal.kesalahan = req.result[0].data_kal['Kesalahan'],
        this.data_cal.mampu_ulang = req.result[0].data_kal['Mampu ulang'],
        this.data_cal.kesalahan_nol = req.result[0].data_kal['Kesalahan Nol']
      } catch (error) {
        console.log('Gagal : ', error.response);
      }
    },
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>