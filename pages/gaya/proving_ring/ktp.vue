<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : {{no_cert}}</p>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PENGUKUR GAYA <br>
              FORCE PROVING RING
            </p>

            <p class="b">Perhitungan Ketidakpastian Pengukuran</p>
            <p>1. Analisa Tipe B (ub)</p>
            <table style="width: 100%" class="mt-3">
              <tr>
                <td>a.</td>
                <td>Pada Alat Kalibrasi (ub1)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi) = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Proving Ring No. 5224</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>ketidakpastian standar dari sertifikat = 0.11 %</td>
              </tr>
            </table>

            <table style="width: 100%" class="mt-3">
              <tr>
                <td>b.</td>
                <td colspan="4">Ketidakpastian Drift alat standar (ub2)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih residual maksimum </td>
                <td>=</td>
                <td>0.1</td>
                <td>%</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian Standar Drift (Ub2)</td>
                <td>=</td>
                <td>0.05774</td>
                <td>%</td>
              </tr>
            </table>

            <table style="width: 100%" class="mt-3">
              <tr>
                <td>c.</td>
                <td colspan="4">Pada pengaruh perubahan suhu (ub3)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="width: 70%">- Selisih suhu pengamatan</td>
                <td>=</td>
                <td>1.0</td>
                <td>°C</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="4">Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="width: 70%">- Ketidakpastian standar pengaruh perubahan suhu (ub3)</td>
                <td>=</td>
                <td>0.00027</td>
                <td>%</td>
              </tr>
            </table>

            <table style="width: 100%" class="mt-3">
              <tr>
                <td>d.</td>
                <td colspan="4">Pada indikator Proving Ring  (ub4)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="width: 70%">- Julat ukur</td>
                <td>=</td>
                <td>0.01 - 10</td>
                <td>mm</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="width: 70%">- Readability</td>
                <td>=</td>
                <td>0.002</td>
                <td>mm</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="width: 70%">-Distribusi rectangular (a) </td>
                <td>=</td>
                <td>0.002</td>
                <td>mm</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="width: 70%">-Ketidakpastian standar indikator proving ring (ub4) </td>
                <td>=</td>
                <td>0.02887</td>
                <td>%</td>
              </tr>
            </table>

            <p class="mt-3">2. Analisa Tipe A (ua)</p>
            <table style="width: 100%" class="mt-3">
              <tr>
                <td style="width: 70%">- Pada pengukuran (ketidakpastian Standar Deviasi)  =</td>
                <td>0.09219 </td>
                <td>%</td>
              </tr>
              <tr>
                <td style="width: 70%">- Ketidakpastian standar pengukuran (ua)  =</td>
                <td>0.092190</td>
                <td>%</td>
              </tr>
            </table>

            <p class="mt-3">3. Ketidakpastian gabungan (uc)  =</p>
            <table style="width: 100%" class="mt-3">
              <tr>
                <td style="width: 70%">(Tipe A)2 + (Tipe)2</td>
                <td>=</td>
                <td>0.15737</td>
              </tr>
            </table>

            <p class="mt-3">4. Ketidakpastian diperluas (U95)</p>
            <table style="width: 100%" class="mt-3">
              <tr>
                <td colspan="4">Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0</td>
              </tr>
              <tr>
                <td colspan="4">Maka ketidakpastian diperluass (U95) = k x uc</td>
              </tr>
              <tr>
                <td style="width: 70%">&nbsp;</td>
                <td>=</td>
                <td colspan="2">2 x uc</td>
              </tr>
              <tr>
                <td style="width: 70%">&nbsp;</td>
                <td>=</td>
                <td>0.31474</td>
                <td>%</td>
              </tr>
              <tr>
                <td style="width: 70%">&nbsp;</td>
                <td>=</td>
                <td>0.31</td>
                <td>%</td>
              </tr>
            </table>

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
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
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