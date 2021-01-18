<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="px-4 py-2 elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <p class="b mb-0 mt-2">Pilih Lembar Kerja</p>
          <v-select :items="sheetnames" v-model="sheetname"></v-select>
        </v-card>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">
              LEMBAR KERJA VERIFIKASI SISTEM PENGUKUR GAYA <br>
              MESIN UJI TARIK / TEKAN / UNIVERSAL
            </p>

            <p>No. Sertifikat: {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat.deskripsi.nama_alat }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe / Model : {{ data_alat.deskripsi.tipe }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat.deskripsi.merek }}</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Kapasitas : {{ data_alat.deskripsi.kapasitas }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">No Seri : {{ data_alat.deskripsi.no_seri }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat.deskripsi.buatan }}</p>
                </v-layout>
              </v-flex>

              <v-flex xs12 class="mt-4">
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat.deskripsi.lokasi }}</p>
                </v-layout>
                <br>

                <v-layout>
                  <p class="mb-3">Alat Kalibrasi yang digunakan: 
                    <span v-for="(item, index) in data_alat.alat_kalibrasi" :key="index">
                      <br>{{ "- "+item.nama+" "+ item.nomor}}
                    </span>
                  </p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Metoda Kalibrasi : {{ data_alat.metode_kalibrasi }}</p>
                </v-layout>
                <v-layout>
                  <p class="mb-3">Standar Acuan : {{ data_alat.standar_acuan }}</p>
                </v-layout>

                <!-- <v-layout>
                  <p class="mb-1">Dikondisikan tanggal : {{convertDate(data_alat.dikalibrasi.date)}}</p>
                </v-layout> -->
                
              </v-flex>
            </v-layout>
            {{sheetname}}
            <table cellspacing="0" border="0" style="font-size: 9pt; max-width: 100%" v-if="data_kal[sheetname]">
              <tr>
                <th colspan="13">Pemeriksaan Indikator Pengukur Gaya</th>
              </tr>
              <tr>
                <th colspan="3">Pembacaan Mesin</th>
                <th colspan="3">Pembacaan Alat Verifikasi</th>
                <th colspan="2">Gaya Sebenarnya</th>
                <th colspan="5">Posisi :   Tekan</th>
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
              <tr v-for="(item, index) in data_kal[sheetname].saat_beri_gaya" :key="index">
                <td>{{item}}</td>
                <td>{{data_kal[sheetname]['rata-rata'][index]}}</td>
                <td>{{data_kal[sheetname].setelah_beri_gaya[index]}}</td>
                <td>{{data_kal[sheetname].sebenarnya[index]}}</td>
                <td>{{data_kal[sheetname].koreksi_nol[index]}}</td>
                <td>{{data_kal[sheetname].koreksi_suhu[index]}}</td>
                <td>{{data_kal[sheetname].individual_suhu[index]}}</td>
                <td>{{data_kal[sheetname]['rata-rata_suhu'][index] ? data_kal[sheetname]['rata-rata_suhu'][index].toFixed(2) : data_kal[sheetname]['rata-rata_suhu'][index]}}</td>
                <td>{{data_kal[sheetname].ketelitian[index] ? data_kal[sheetname].ketelitian[index].toFixed(2) : data_kal[sheetname].ketelitian[index]}}</td>
                <td>{{data_kal[sheetname].mampu_ulang[index]}}</td>
                <td>{{data_kal[sheetname].pengulangan_balik[index]}}</td>
                <td>{{data_kal[sheetname].nol[index]}}</td>
                <td>{{data_kal[sheetname].ktp_stdv[index] ? data_kal[sheetname].ktp_stdv[index].toFixed(2) : data_kal[sheetname].ktp_stdv[index]}}</td>
              </tr>
              <tr>
                <td colspan="13">Resolusi relatif (a) 	:	0.50	%</td>
              </tr>
            </table>
          </v-card-text>

          <v-card-text>
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
import gayaHeader from '~/components/gaya/mesin_uji.vue'
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
    no_cert: '',
    data_alat: {
      alat_kalibrasi: {
        alat1: {
          nama: "",
          nomor: ""
        },
        alat2: {
          nama: "",
          nomor: ""
        }
      },
      deskripsi: {
        buatan: "",
        kapasitas: 0,
        lokasi: "",
        merek: "",
        nama_alat: "",
        no_seri: "",
        tipe: ""
      },
      metode_kalibrasi: "",
      standar_acuan: ""
    },

    data_kal: {
      grp1000:{
        saat_beri_gaya:[],
        "rata-rata":[],
        setelah_beri_gaya:[],
        sebenarnya:[],
        koreksi_nol:[],
        koreksi_suhu:[],
        individual_suhu:[],
        "rata-rata_suhu":[],
        ketelitian:[],
        mampu_ulang:[],
        pengulangan_balik:[],
        nol:[],
        ktp_stdv:[],
      },
    },

    sheetname: 'grp1000',
    sheetnames: [],
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
        this.sheetnames = Object.keys(req_data.data_kal)
        this.sheetname = Object.keys(req_data.data_kal)[0]
        
        this.data_alat = req_data.data_alat
        this.data_kal = req_data.data_kal

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

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>