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
            <p class="mb-1">Tingkat kepercayaan 95% faktor cakupan k (asumsi) = 2</p>
            <table class="mt-3">
              <tr>
                <td>a.</td>
                <td colspan="4">Pada indikator mesin uji impak</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Daerah ukur</td>
                <td>:</td>
                <td colspan="2">0-750  Joule</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Resolusi (R)</td>
                <td>:</td>
                <td>1</td>
                <td>Readability : 0.01</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Distribusi rectangular</td>
                <td>:</td>
                <td colspan="2">0.01</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian indikator  mesin uji impak (mB1)</td>
                <td>:</td>
                <td>Readability / 2</td>
                <td>= 0.005</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mB1 dalam % adalah</td>
                <td>:</td>
                <td colspan="2">0.00333 %</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>b.</td>
                <td>Pada alat kelibrasi gaya</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Alat kalibrasi gaya No. : 7364   , dari sertifikasi nilai s =</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian alat kalibrasi (mB2) = s . Ön =</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Kapasitas minimum dari alat kalibrasi gaya =</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mB2 dalam % adalah = 0.035 %</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>c.</td>
                <td colspan="3">Pada Stop Watch </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Dari sertifikat hasil kalibraasi nilai ketidakpastian</td>
                <td>=</td>
                <td>0.61 >s</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar (mB3) = Nilai ketidakpastian dari sertifikat / 2</td>
                <td>=</td>
                <td>0.305 s</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Kapasitas maksimum dari stop watch</td>
                <td>=</td>
                <td>1800 s</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mB3 dalam % adalah</td>
                <td>=</td>
                <td>0.01694 %</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>d.</td>
                <td colspan="3">Meteran Standar</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Dari sertifikat hasil kalibraasi nilai ketidakpastian</td>
                <td>=</td>
                <td>0.33 mm</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar (mB4) = Nilai ketidakpastian dari sertifikat / 2 </td>
                <td>=</td>
                <td>0.16500 mm</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Rentang ukur maksimum dari meteran standar</td>
                <td>=</td>
                <td>1000 mm</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mB4 dalam % adalah</td>
                <td>=</td>
                <td>0.01650 %</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>d.</td>
                <td colspan="3">Pada Termometer</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Dari sertifikat hasil kalibraasi nilai ketidakpastian</td>
                <td>=</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar (mB5) = Nilai ketidakpastian dari sertifikat / 2  </td>
                <td>=</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Rentang ukur maksimum dari termometer</td>
                <td>=</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mB5 dalam % adalah</td>
                <td>=</td>
                <td>0.15 %</td>
              </tr>
            </table>

            <p class="mt-3 mb-1">2. Analisa Tipe A (mA)</p>
            <table>
              <tr>
                <td>a.</td>
                <td>Penentuan besarnya gaya</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Dari data hasil pengatamatan didapatkan s =</td>
                <td>0.194980</td>
                <td>kgf</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian pengukuran (mA1) = s / Ö n =</td>
                <td>0.112570</td>
                <td>kgf</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mA1 dalam % adalah =</td>
                <td>0.021040</td>
                <td>%</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>b.</td>
                <td colspan="3">Penentuan waktu ayun</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Dari data hasil pengatamatan didapatkan s =</td>
                <td>0.017320</td>
                <td>s</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian pengukuran (mA2) = s / Ö n =</td>
                <td>0.008660</td>
                <td>s</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mA2 dalam % adalah =</td>
                <td>0.004980</td>
                <td>%</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>c.</td>
                <td colspan="3">Penentuan energi yang diserap waktu di ayun</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Dari data hasil pengatamatan didapatkan s =</td>
                
                <td>0.011550</td>
                <td>°</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian pengukuran (mAB) = s / Ö n =</td>
                <td>0.005780</td>
                <td>°</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Atau mAB dalam % adalah =</td>
                <td>0.003850</td>
                <td>%</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>3.</td>
                <td>Ketidakpastian gabungan (mC) = ÖmA2+mB2)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=  Ö(mA1 2 + mA2 2 + mA3 2) +( mB2 1 + mB2 2 + mB2 3 + m2B 3 + m2B5)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>= 0.157410 %</td>
              </tr>
            </table>

            <table class="mt-3">
              <tr>
                <td>4.</td>
                <td colspan="3">Dari tabel Student Distribution, secara umum asumsi nilai mfaktor cakupan (k) = 2,0</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>untuk pendekatan pada tingkat kepercayaan 95%.</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Ketidakpastian dierluas (Up5) = k x &micro; C</td>
                <td>=</td>
                <td>0.314820 %</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>=</td>
                <td>± 0.31 %</td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{data_alat.diperiksa.date}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.diverifikasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.diverifikasi.date)}} <br>
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
import gayaHeader from '~/components/gaya/mesin_uji_impak.vue'
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
      diverifikasi: {
        date: "",
        person: []
      },
      diperiksa: {
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
        this.data_alat = req_data.data_alat.data_alat
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