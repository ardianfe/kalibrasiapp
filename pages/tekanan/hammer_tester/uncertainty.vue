<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <tekananHeader></tekananHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : {{no_cert}}</p>

            <p class="title text-xs-center">LEMBAR KERJA KALIBRASI CONCRETE TEST HAMMER TIPE N DAN L</p>

            <p class="b">Perhitungan Ketidakpastian Pengukuran :</p>

            <p class="b">1. Analisa Tipe B (ub)</p>
            <table width="100%" class="ml-4 mb-4">
              <tr>
                <td>a.</td>
                <td colspan="8">Pada Alat Kalibrasi (ub1)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="8">Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi) = {{data_ktp[0]}}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="8">Nilai kekerasan Tipe N = {{data_ktp[1]}} unit, Tipe L = {{data_ktp[2]}} unit</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="3">- Blok Standar No. E04/193</td>
                <td colspan="3">ketidakpastian dari sertifikat =</td>
                <td>{{data_ktp[3]}}</td>
                <td>%</td>
              </tr>
              <tr>
                <td colspan="9">&nbsp;</td>
              </tr>
              <tr>
                <td>b.</td>
                <td colspan="8">Pada indikator Hammer Test (ub2)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="5">- Skala ukur</td>
                <td>=</td>
                <td>{{data_ktp[4]}}</td>
                <td>Unit</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="3">- Readability</td>
                <td>=</td>
                <td>1/10 x 2</td>
                <td>=</td>
                <td>{{data_ktp[5]}}</td>
                <td>Unit</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="5">- Distribusi rectangular (a) </td>
                <td>=</td>
                <td>{{data_ktp[6]}}</td>
                <td>Unit</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="6">- Ketidakpastian standar indikator hammer test (ub4)  =</td>
                <td>{{data_ktp[7]}}</td>
                <td>%</td>
              </tr>
              <tr>
                <td colspan="9">&nbsp;</td>
              </tr>
              <tr>
                <td>c.</td>
                <td colspan="8">Pada pengaruh perubahan suhu (ub3)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="5">- Selisih suhu pengamatan</td>
                <td>=</td>
                <td>{{data_ktp[8]}}</td>
                <td>°C</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="8">Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = {{data_ktp[9]}}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="5">- Ketidakpastian standar pengaruh perubahan suhu (ub3)</td>
                <td>=</td>
                <td>{{data_ktp[10]}}</td>
                <td>%</td>
              </tr>
            </table>

            <p class="b">2. Analisa Tipe A (ua)</p>
            <p class="mb-4 ml-4">
              - Pada pengukuran Standar Deviasi = 1.264911064	unit <br>
              - Ketidakpastian standar pengukuran (ua) = 0.50251	%	
            </p>

            <p class="b">3. Ketidakpastian gabungan (uc)</p>
            <p class="ml-4">
              =	(Tipe A)2 + (Tipe B)2 <br>
              =	1.32997	%	
            </p>

            <p class="b">4. Ketidakpastian diperluas (U95)</p>
            <p class="ml-4">
              Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = 2,0 <br>
              Maka ketidakpastian diperluass (U95) = k  x  uc
            </p>
            <p class="ml-5">
              =	2 x uc <br>
              =	2.65994	% <br>
              =	2.66 % <br>
              =	2.10135	Unit <br>
              =	2.10 Unit <br>
              =	2.1	Unit <br>
            </p>

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
    margin-top: 16px;
    /* width: 100% */
  } table, th, td {
    border: 0px solid grey;
    padding: 1px
  }
</style>

<script>
import tekananHeader from '~/components/tekanan/hammer.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    tekananHeader
  },

  head: {
    title: 'Ketidakpastian Hammer Test | Bidang Tekanan',
    meta: [
      {
        hid: 'Tekanan',
        name: 'Tekanan',
        content: 'Bidang Tekanan'
      }
    ],
  },

  data: () => ({
    no_cert: '',

    data_ktp: [],
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
        this.data_ktp = req_data.data_ktp['Unnamed: 9']
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },

}
</script>