<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout row>
        <v-card width="100%" class="mt-4 v-main-card elevation-8">
          <v-card-title>
            <p class="accent--text lato font-weight-bold title ma-0">Cetak Sertifikat</p>
          </v-card-title>
          <v-card-text class="py-0">
            <v-checkbox v-model="kan" label="Tampilkan Logo KAN"></v-checkbox>

            <!-- <v-layout row wrap>
              <v-select 
                :items="signatories" v-model="signatory" 
                item-text="data.name" item-value="data" 
                label="Penandatangan"
                append-icon="expand_more"
              ></v-select>
            </v-layout> -->
          </v-card-text>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn class="primary elevation-0" @click="printWrapper">
              cetak <v-icon right>print</v-icon>
            </v-btn> &nbsp;
          </v-card-title>
        </v-card>
      </v-layout>

      <v-layout justify-center>
        <v-card width="210mm" class="mt-3 v-main-card elevation-8">        
          <v-card-text style="height: 300mm" class="pt-0">
            <div id="printable" style="margin: auto; margin-top: 0px; min-width: 190mm; max-width: 190mm; height: 280mm;">
              <no-ssr>
                <v-card-title style="z-index: 2; height: 75px; padding: 10mm 0 0 0">
                  <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
                  <v-spacer/>
                  <img v-if="kan" contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
                </v-card-title>
                <div id="header" style="margin-top: -75px; padding-top: 10mm">
                  <p class="helve c" style="margin-bottom: 1px; font-size: 9pt; margin-top: 3mm">BADAN PENELITIAN DAN PENGEMBANGAN INDUSTRI</p>
                  <p class="helve c b" style="margin-bottom: 1px; font-size: 10pt;">BALAI BESAR BAHAN DAN BARANG TEKNIK</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Jl. Sangkuriang No. 14 Bandung 40135 JAWA BARAT - INDONESIA</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Telp. 022 - 2504088, 2510682, 2504828, 2507626 Fax. 022 - 2502027</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">E-mail : b4t@b4t.go.id  Website : http://www.b4t.go.id</p>
                </div>
                <div id="body-content" style="border: 1px solid black; background: white; margin-top: 2mm; padding: 2.7mm 4mm">
									<div class="my-4">
										<p class="helve b c u" style="margin: 0; height: 4.2mm; font-size: 12pt;">LAMPIRAN SERTIFIKAT KALIBRASI</p>
										<p class="helve i c" style="margin-bottom: 2mm; font-size: 10pt;">ATTACHMENT OF CALIBRATION CERTIFICATE</p>
									</div>
                  <div style="width: 90%; margin-left: 40px" class="mt-2 mb-5">
                    <v-layout>
                      <v-flex xs1>
                        <p class="helve u" style="font-size: 11pt; margin: 0; height: 4.2mm;">Nomor</p>
                        <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Number</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve i" style="font-size: 11pt; margin: 7px 0; height: 4.2mm;">: {{certificate_number}}</p>
                      </v-flex>
                    </v-layout>
										<p class="helve u b" style="font-size: 11pt; margin: 0; height: 4.2mm;">HASIL KALIBRASI</p>
										<p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Result of Calibration</p>
                  </div>

									<v-layout justify-center align-center column>
										<table width="90%" class="mb-5">
											<tbody class="text-xs-center">												
												<tr><td style="width: 18%">Penunjukan Durometer </td><td style="width: 18%">Penunjukan Standar</td><td style="width: 18%">Kesalahan</td><td style="width: 18%">Mampu Ulang</td><td style="width: 28%">Ketidakpastian Pengukuran</td></tr>
												
												<tr><td>(HA)</td><td>(HA)</td><td>(HA)</td><td>(%)</td><td>(%)</td></tr>
												
												<tr v-for="x in 8" :key="x">
													<td>{{data.pd[x]}}</td>
													<td>{{data.ps[x]}}</td>
													<td>{{data.ks[x]}}</td>
													<td>{{data.mu[x]}}</td>
													<td rowspan="8" v-if="x == 1">± {{data.ktp_pgk}}</td>
												</tr>

												<!-- <tr>
													<td>{{pd[x]}} </td>
													<td>30.35</td>
													<td>-0.35</td>
													<td>0.43</td>
												</tr>

												<tr>
													<td>{{pd[x]}} </td>
													<td>40.98</td>
													<td>-0.98</td>
													<td>0.61</td>
												</tr>

												<tr>
													<td>{{pd[x]}} </td>
													<td>50.71</td>
													<td>-0.71</td>
													<td>0.51</td>
												</tr>

												<tr>
													<td>{{pd[x]}} </td>
													<td>60.87</td>
													<td>-0.87</td>
													<td>0.64</td>
												</tr>

												<tr>
													<td>{{pd[x]}} </td>
													<td>70.67</td>
													<td>-0.67</td>
													<td>0.38</td>
												</tr>

												<tr>
													<td>{{pd[x]}} </td>
													<td>80.59</td>
													<td>-0.59</td>
													<td>0.16</td>
												</tr>

												<tr>
													<td>{{pd[x]}} </td>
													<td>90.16</td>
													<td>-0.16</td>
													<td>0.14</td>
												</tr> -->
											</tbody>
										</table>	
										<p style="width: 90%; margin-bottom: 300px">
											Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan
											<br>
											95 % dengan faktor cakupan k=2
										</p>
									</v-layout>

                </div>

                <!-- Keterangan -->
                <div style="border-style: solid; border-width: 0 1px 1px 1px; background: white; margin-top: 0; padding: 1mm 4mm">
                  <v-layout row>
                    <v-flex style="width: 37px">
                      <p class="helve" style="font-size: 8pt;">Keterangan :</p>
                    </v-flex>
                    <v-flex>
                      <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        1. Dilarang memproduksi sertifikat ini tanpa izin tertulis dari B4T kecuali secara keseluruhan.
                      </p>
                      <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        2. Hasil kalibrasi ini tidak untuk diumumkan dan hanya berlaku untuk alat yang bersangkutan.
                      </p>
                    </v-flex>
                  </v-layout>
                </div>
                
                <!-- Footer -->
                <v-layout row style="margin-top: 2mm">
                  <v-flex>
                    <p class="helve" style="font-size: 8pt;">F. 02 b/05</p>
                  </v-flex>
                  <v-flex>
                    <v-layout right>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Halaman</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">Page</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">2</p>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Dari</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">of</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">2</p>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </no-ssr>
            </div>
            <div id="elementH"> 
            </div>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
	p{
		letter-spacing: .1pt;
	}
	table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
  #wrapper {
    overflow-x: scroll hidden;
  } table {
    border-collapse: collapse;
    border: 1px solid grey;
  } 

  .b {
    font-weight: bold;
  } .i {
    font-style: italic;
  } .u {
    text-decoration: underline;
  } .roman {
    font-family: 'Times New Roman', serif;
  } .helve {
    /* font-family: Helvetica, sans-serif; */
    font-family: 'Times New Roman', serif;
  } .c {
    text-align: center;
  }

  @page {
    /* auto is the initial value */
    size: auto;   
    /* this affects the margin in the printer settings */
    margin: 0mm 12mm 0mm 12mm;  
  }
</style>
<script>
import gayaHeader from '~/components/gaya/durometer.vue'
import jsPDF from 'jspdf'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import cert_data from '~/static/data_cert_v2.json'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Lampiran Sertifikat | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],

    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },

  data: () => ({
    active: null,
    certificate_number: '',
    data: {
      pd: [],
      ps: [],
      ks: [],
      mu: [],
      ktp_pgk: 0
    },

    signatories: [
      { id: 1, data: {name: 'AJI MAHMUD SOLIH', nip: '19720802 200701 1 003', jabatan: 'Kepala Seksi Kalibrasi'} },
      { id: 2, data: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'} },
    ],

    kan: true,
    signatory: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'}
  }),

  mounted() {
    this.getCertData()
  },

  methods: {
    async getCertData() {
      try {
        const req = await this.$category.getLembarKerja({
          id: '200910161001' 
        })   

        this.certificate_number = req.result[0].no_laporan
        console.log('getLK :', req);

        let req_data = req.result[0]
        
        this.data = {
          pd: req_data.data_kal['Durometer'],
          ps: req_data.data_kal['Rata-rata'],
          ks: req_data.data_kal['Kesalahan'],
          mu: req_data.data_kal['Mampu ulang'],
          ktp_pgk: 0
        }
      } catch (error) {
        console.log(error);
      }
    },

    downloadPDF() {
      var doc = new jsPDF();
      var elementHTML = $('#printable').html();
      var specialElementHandlers = {
          '#elementH': function (element, renderer) {
              return true;
          }
      };
      doc.fromHTML(elementHTML, 0, 0, {
          'width': 170,
          'elementHandlers': specialElementHandlers
      });

      // Save the PDF
      setTimeout(() => {
        doc.save('sample-document.pdf');
      }, 500);

      console.log(elementHTML);
    },

    printWrapper() {
      var printContents = document.getElementById('printable').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      // document.body.innerHTML = originalContents; 
      // location.reload()
      this.changeStatus()
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}
</script>
