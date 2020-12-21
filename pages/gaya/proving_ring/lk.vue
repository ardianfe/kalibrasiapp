<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="250mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PENGUKUR GAYA <br>
              FORCE PROVING RING
            </p>

            <p>No. Sertifikat: 3-09-18-0157</p>
            <table class="mt-3 no-border" style="font-size: 9pt">
              <tr>
                <td>Diskripsi Alat: </td>
                <td>{{data_alat.deskripsi.nama_alat}}</td>
                <td>&nbsp;</td>
                <td>kapasitas: </td>
                <td>{{data_alat.deskripsi.kapasitas}}</td>
                <td>tipe: </td>
                <td>{{data_alat.deskripsi.tipe}}</td>
                <td>&nbsp;</td>
                <td>no. seri: </td>
                <td colspan="3">{{data_alat.deskripsi.no_seri}}</td>
              </tr>
              <tr>
                <td>Indikator:</td>
                <td>{{data_alat.deskripsi.indikator.alat}}
                  <br>{{data_alat.deskripsi.indikator.nilai}}
                </td>
                <td>&nbsp;</td>
                <td>merek: </td>
                <td>{{data_alat.deskripsi.indikator.merek}}</td>
                <td>tipe: </td>
                <td>{{data_alat.deskripsi.indikator.tipe}}</td>
                <td>&nbsp;</td>
                <td>no. seri: </td>
                <td>{{data_alat.deskripsi.indikator.no_seri}}</td>
                <td>buatan:</td>
                <td>{{data_alat.deskripsi.indikator.buatan}}</td>
              </tr>
            </table>

            <table class="mt-3 no-border" style="font-size: 9pt">
              <tr>
                <td width="20%">Lokasi kalibrasi:</td>
                <td colspan="2">{{data_alat.deskripsi.lokasi}}</td>
              </tr>
              <tr>
                <td rowspan="2">Alat kalibrasi :</td>
                <td colspan="2">{{data_alat.alat_kalibrasi[0]}}</td>
              </tr>
              <tr>
                <td colspan="2">{{data_alat.alat_kalibrasi[1]}}</td>
              </tr>
              <tr>
                <td>Metoda kalibrasi: </td>
                <td colspan="2">{{data_alat.metode_kalibrasi}}</td>
              </tr>
              <tr>
                <td>Standar acuan: </td>
                <td colspan="2">{{data_alat.standar_acuan}}</td>
              </tr>
              <tr>
                <td>Suhu : </td>
                <td>{{data_alat.deskripsi.suhu.bawah}} °C - {{data_alat.deskripsi.suhu.atas}} °C</td>
              </tr>
            </table>

            <p class="mt-2">Pemeriksaan Indikator Pengukur Gaya</p> 
            <table style="font-size: 9pt">
              <thead>
                <tr class="tableizer-firstrow">
                  <th colspan="3">PEMBACAAN  DIAL INDICATOR</th>
                  <th colspan="3">PEMBACAAN ALAT KALIBRASI</th>
                  <th colspan="2">GAYA SEBENARNYA</th>
                  <th rowspan="2">FAKTOR KALIBRASI</th>
                  <th rowspan="2">PENYIM-PANGAN FAKTOR KAL.</th>
                  <th rowspan="2">MAMPU ULANG RELATIV</th>
                  <th rowspan="2">KETIDAK-PASTIAN STANDAR DEVIASI</th>
                  <th rowspan="2">KESA-LAHAN NOL RELATIF</th>
                </tr>
                <tr>
                  <th>SAAT PEMBERIAN GAYA</th>
                  <th>RATA-RATA GAYA</th>
                  <th>SETELAH PEMBERIAN GAYA</th>
                  <th>SEBENARNYA 26.5</th>
                  <th>KOREKSI NOL 26.5</th>
                  <th>KOREKSI SUHU 20</th>
                  <th>INDIVIDUAL</th>
                  <th>RATA-RATA</th>
                </tr>
                <tr>
                  <th>(DIVISI) <br> L<sub>i</sub></th>
                  <th>(DIVISI) <br> L<sub>i</sub></th>
                  <th>(DIVISI) <br> l<sub>io</sub></th>
                  <th>(DIVISI) <br> R<sub>i</sub></th>
                  <th>(DIVISI) <br> D<sub>i</sub></th>
                  <th>(DIVISI) <br> D<sub>te</sub></th>
                  <th>(kgf) <br> F</th>
                  <th>(kgf) <br> F</th>
                  <th>(kgf/DIV) <br> fk</th>
                  <th>(%) <br> qfki</th>
                  <th>(%) <br> b</th>
                  <th>&nbsp; <br> &nbsp;</th>
                  <th>(%) <br> f<sub>o</sub></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_kal.table.saat_pemberian_gaya" :key="index">
                  <td class="text-xs-center">{{item}}</td>
                  <td class="text-xs-center">{{data_kal.table.rata_gaya[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.setelah_pemberian_gaya[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.sebenarnya[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.koreksi_nol[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.koreksi_suhu[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.individual[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.rata_rata[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.faktor_kalibrasi[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.penyimpangan[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.mampu_ulang[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.ktp_stdv[index]}}</td>
                  <td class="text-xs-center">{{data_kal.table.kesalahan_nol_rel[index]}}</td>
                </tr>
                <tr>
                  <td colspan="8">Rata-rata Faktor Kalibrasi: qfki (lbf/DIV):</td>
                  <td colspan="5">{{data_kal.rata_rata_faktor_kalibrasi}}</td>
                </tr>
              </tbody>
            </table>
          </v-card-text>

          <v-card-text>
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.dikalibrasi.person[1]}} <br>
                Tanggal :	{{data_alat.tanggal_diterima}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person[0]}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
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
import gayaHeader from '~/components/gaya/proving_ring.vue'
import durometer from '~/static/durometer.json'

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
      alat_kalibrasi: [],
      deskripsi: {
        indikator: {
          alat: "",
          buatan: "",
          merek: "",
          nilai: "",
          no_seri: "",
          tipe: ""
        },
        kapasitas: "",
        lokasi: "",
        nama_alat: "",
        no_seri: "",
        suhu: {
          atas: 0,
          bawah: 0
        },
        tipe: ""
      },
      dikalibrasi: {
        date: "",
        person: []
      },
      metode_kalibrasi: "",
      standar_acuan: "",
      tanggal_diterima: ""
    },

    data_kal: {
      rata_rata_faktor_kalibrasi: 0,
      table: {
        faktor_kalibrasi: [],
        individual: [],
        kesalahan_nol_rel: [],
        koreksi_nol: [],
        koreksi_suhu: [],
        ktp_stdv: [],
        mampu_ulang: [],
        penyimpangan: [],
        rata_gaya: [],
        rata_rata: [],
        saat_pemberian_gaya: [],
        sebenarnya: [],
        setelah_pemberian_gaya: []
      }
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
        this.data_alat = req_data.data_alat
        this.data_kal = req_data.data_kal.pemeriksaan_indikator_pengukur_gaya
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