<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA VERIFIKASI SISTEM PENGUKUR GAYA <br> LOAD CELL</p>

            <p>No. Sertifikat: {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat.nama_alat }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat['tipe_model'] }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat.merek }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat.kapasitas.nilai }} {{ data_alat.kapasitas.besaran }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat.no_seri }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat['buatan'] }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat['lokasi_verifikasi'] }}</p>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs6>
                    <p class="mb-1">Suhu Ruangan : {{ data_alat.suhu.nilai +" "+ data_alat.suhu.besaran +" "+ data_alat.suhu.plus_minus }}</p>
                  </v-flex>
                  <v-flex xs6>
                    <p class="mb-1">Kelembapan : {{ data_alat.kelembaban.nilai +" "+ data_alat.kelembaban.besaran +" "+ data_alat.kelembaban.plus_minus }}</p>
                  </v-flex>
                </v-layout>

                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan : <br> <span v-for="(item, index) in data_alat.alat_verifikasi" :key="index">{{item}}<br></span></p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat.metode_verifikasi }}</p>
                </v-layout>
                <v-layout>
                  <p class="mb-3">Standar Acuan : <br> <span v-for="(item, index) in data_alat.standar_acuan" :key="index">{{item}}<br></span></p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Dikondisikan tanggal : {{convertDate(data_alat.dikalibrasi.date)}}</p>
                </v-layout>
                
              </v-flex>
            </v-layout>
            
            <table cellspacing="0" border="0" style="font-size: 9pt; max-width: 100%">
              <tr>
                <th colspan="13">Pemeriksaan Indikator Pengukur Gaya</th>
              </tr>
              <tr>
                <th colspan="3">Pembacaan Mesin</th>
                <th colspan="3">Pembacaan Alat Verifikasi</th>
                <th colspan="2">Gaya Sebenarnya</th>
                <th colspan="5">Posisi : Tekan</th>
              </tr>
              <tr>
                <td colspan="3">Julat Ukur (FN):0- 1000 kN</td>
                <td colspan="3">Resolusi (r):1 Digit = 0.5 kN</td>
                <td colspan="2">Suhu (t) : 25,0 - 25,4 &deg;C</td>
                <td colspan="4">Kesalahan Relatif</td>
                <td>Ketidakpastian</td>
              </tr>
              <tr>
                <td>Saat Pemberian Gaya</td>
                <td>Rata-rata</td>
                <td>Setelah Pemberian Gaya</td>
                <td>Sebenarnya</td>
                <td>Koreksi Nol 23.1</td>
                <td>Koreksi Suhu 25.2</td>
                <td>Individual</td>
                <td>Rata-rata</td>
                <td>Ketelitian</td>
                <td>Mampu Ulang</td>
                <td>Pengulangan Balik</td>
                <td>Nol</td>
                <td>Standar Deviasi</td>
              </tr>
              <tr>
                <td>(kN)</td>
                <td>(kN)</td>
                <td>(kN)</td>
                <td>(DIVISI)</td>
                <td>(DIVISI)</td>
                <td>(Divisi)</td>
                <td>(kN)</td>
                <td>(kN)</td>
                <td>%</td>
                <td>%</td>
                <td>%</td>
                <td>%</td>
                <td>%</td>
              </tr>
              <tr v-for="(item, index) in data_kal.pm_saat_beri_gaya" :key="index">
                <td height="20px">{{item}}</td>
                <td>{{data_kal.pm_rata_rata[index]}}</td>
                <td>{{data_kal.pm_setelah_beri_gaya[index]}}</td>
                <td>{{data_kal.ba_sebenarnya[index]}}</td>
                <td>{{data_kal.ba_koreksi_nol[index]}}</td>
                <td>{{data_kal.ba_koreksi_suhu[index]}}</td>
                <td>{{data_kal.gs_individual[index]}}</td>
                <td>{{data_kal.gs_rata_rata[index]}}</td>
                <td>{{data_kal.kr_ketelitian[index]}}</td>
                <td>{{data_kal.kr_mampu_ulang[index]}}</td>
                <td>{{data_kal.kr_nol[index]}}</td>
                <td>{{data_kal.kr_pengulangan_balik[index]}}</td>
                <td>{{data_kal.ktp_stdv[index]}}</td>
              </tr>
              <tr>
                <td colspan="13">Resolusi relatif (a) 	:	0.50	%</td>
              </tr>
            </table>
          </v-card-text>

          <v-card-text>
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{data_alat.diperiksa.date}} <br>
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
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  } .no-border {
    border: 0px !important;
  }
</style>

<script>
import gayaHeader from '~/components/gaya/load_cell.vue'
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
    no_cert: '3-09-10-0490',
    data_alat: {
      alat_verifikasi: [0,0,0],
      buatan: "",
      dikalibrasi: {
        date: "",
        person: ""
      },
      diperiksa: {
        date: "",
        person: ""
      },
      kapasitas: {
        besaran: "",
        nilai: 0
      },
      kelembaban: {
        besaran: "",
        nilai: 0,
        plus_minus: ""
      },
      lokasi_verifikasi: "",
      merek: "",
      metode_verifikasi: "",
      nama_alat: "",
      no_seri: "",
      standar_acuan: [0,0],
      suhu: {
        besaran: "",
        nilai: 0,
        plus_minus: ""
      },
      tipe_model: ""
    },
    data_kal: {
      pm_saat_beri_gaya: [],
      pm_rata_rata: [],
      pm_setelah_beri_gaya: [],
      ba_sebenarnya: [],
      ba_koreksi_nol: [],
      ba_koreksi_suhu: [],
      gs_individual: [],
      gs_rata_rata: [],
      kr_ketelitian: [],
      kr_mampu_ulang: [],
      kr_nol: [],
      kr_pengulangan_balik: [],
      ktp_stdv: [],
    },
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.results[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat.data_alat
        this.data_kal = req_data.data_kal

        this.ktp_u95 = req_data.data_ktp.hasil.ktp_u95
        this.uc = req_data.data_ktp.hasil.uc
        this.data_ktp = req_data.data_ktp.data['Unnamed: 8']
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}
</script>