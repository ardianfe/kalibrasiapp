<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>
      <tekananHeader></tekananHeader>

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
            <v-btn :disabled="signatory == '' || nip == ''" class="primary elevation-0" @click="printWrapper">
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
										<table width="100%">
                      <tr>
                        <th rowspan="2" style="width: 33%">JENIS KALIBRASI</th>
                        <th colspan="4" style="width: 33%">HASIL KALIBRASI SEBELUM SETING</th>
                        <td rowspan="2" class="text-xs-center" style="font-size: 11px">SYARAT ASTM C 805:2002 <br> MANUAL CONCRETE <br> TEST HAMMER</td>
                        <td rowspan="2" class="text-xs-center" style="font-size: 11px">KETIDAKPASTIAN <br> PENGUKURAN *)</td>
                      </tr>
                      <tr>
                        <td class="text-xs-center" style="font-size: 11px">Pengukuran</td>
                        <td class="text-xs-center" style="font-size: 11px">SEBELUM SETING</td>
                        <td class="text-xs-center" style="font-size: 11px">Setelah SETING</td>
                        <td class="text-xs-center" style="font-size: 11px">Satuan</td>
                      </tr>
                      <tr style="font-size: 12px">
                        <td>
                          1. Kalibrasi dengan blok standar <br>
                          Anvil No. E04/193 <br>
                          Nilai Kekerasan pukulan <br>
                          Tipe N	81.0	unit
                        </td>
                        <td>          
                          Minimum<br>
                          Maksimum<br>
                          rata-rata<br>
                        </td>
                        <td>
                          79.0<br>
                          82.0<br>
                          70.1<br>
                        </td>
                        <td>
                          80.0<br>
                          82.0<br>
                          80.3<br>
                        </td>
                        <td>
                          unit<br>
                          unit<br>
                          unit<br>
                        </td>
                        <td></td>
                        <td rowspan="3">1.99	Unit</td>
                      </tr>
                      <tr style="font-size: 12px">
                        <td class="py-5">2. Repeatability</td>
                        <td></td>
                        <td>3.0</td>
                        <td>2.0</td>
                        <td>Unit</td>
                        <td>Maks 4,0 unit</td>
                      </tr>
                      <tr style="font-size: 12px">
                        <td class="py-5">3. Kesalahan</td>
                        <td></td>
                        <td>-0.9</td>
                        <td>-0.7</td>
                        <td>Unit</td>
                        <td> ± 3.0 unit</td>
                      </tr>
                    </table>
										<p style="width: 90%; margin: 50px 0 150px 0">
											Kesalahan maksimum =		0.03 	mm	Syarat Kesalahan Maksimum =   ± 0.08 mm	dan ketidakpatian
                      <br><br>
                      *)Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan 95 % dengan <br>	faktor cakupan k = 2					
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
    font-family: 'Times New Roman', serif;
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
    font-family: 'Times New Roman', serif;
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
import tekananHeader from '~/components/tekanan/hammer.vue'
import jsPDF from 'jspdf'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import cert_data from '~/static/data_cert_v2.json'

export default {
  components: {
    tekananHeader
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

    signatories: [
      { id: 1, data: {name: 'AJI MAHMUD SOLIH', nip: '19720802 200701 1 003', jabatan: 'Kepala Seksi Kalibrasi'} },
      { id: 2, data: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'} },
    ],

    kan: true,
    signatory: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'},

    data_kal: {
      h_max_2: 0,
      h_max_3: 0,
      h_standar_2: 0,
      h_standar_3: 0,
      havg_2: 0,
      havg_3: 0,
      hk2: {
        "Unnamed: 5": [], 
        "Unnamed: 8": []},
      hk3: {  
        "Unnamed: 5": [], 
        "Unnamed: 8": []},
      hmin_2: 0,
      hmin_3: 0,
      kesalahan_2: 0,
      kesalahan_3: 0,
      repeatability_2: 0,
      repeatability_3: 0
    },

    data_alat: {
      "Buatan": "",
      "Deskripsi Alat": "",
      "Dikalibrasi": "",
      "Diperiksa": "",
      "Kapasitas": "",
      "Lokasi Kalibrasi": "",
      "Merek": "",
      "Metoda verifikasi": "",
      "No Seri": "",
      "Resolusi": "",
      "Standar acuan": "",
      "Standar dipakai": "",
      "Suhu": "",
      "Tanggal kalibrasi": "",
      "Tanggal periksa": "",
      "Tipe": "",
      "Tipe penetrator": ""
    }
  }),

  mounted() {
    this.getCertData()
  },

  methods: {
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

    async getCertData() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.results[0]

        this.no_cert = req_data.no_laporan
        this.data_alat = req_data.data_alat
        this.data_kal = req_data.data_kal
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    elementMapping() {
      let cert_data = this.data.data_perusahaan
      this.certificate.equipment.name = 'Concrete Test Hammer'
      this.certificate.equipment.capacity = '10 - 100 Unit'
      this.certificate.equipment.model = 'HT 225'
      this.certificate.equipment.serial_number = 308813
      this.certificate.equipment.manufacture = 'HT 225 / CHINA'
      // this.certificate.equipment.temperature = cert_data['Pengontrol Suhu'][0]
      this.certificate.owner.name = 'TEKNIK SIPIL FAKULTAS SAINS DAN TEKNOLOGI UNIVERSITAS ISLAM NAHDLATUL ULAMA'
      this.certificate.owner.address = 'Jl. Taman Siswa (Pekeng) Tahunan Jepara 59427'
      this.certificate.standard.name = 'Blok Standar Anvil No.E04/193'
      this.certificate.standard.traceability = 'Hasil kalibrasi yang dilaporkan tertelusur ke satuan pengukuran SI  melalui  Schmidt Proceq, Switzerland'
      this.certificate.acceptance_date = '30 Mei 2017'
      this.certificate.calibration_date = '2 Juni 2017'
      // this.certificate.env_condition.room_temp = cert_data
      // this.certificate.env_condition.humidity = cert_data
      this.certificate.calibration_location = 'Lab. Kalibrasi B4T Bandung'
      this.certificate.calibration_method = 'PC-309-10'
      this.certificate.refference = 'ASTM C 805 : 2002 / manual Concrete Test Hammer'
      this.certificate.published_date = '30 Mei 2107'
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

    async changeStatus() {
      try {
        const req = await this.$calibrate.updateCertifStatus({
          id: this.certificate_number, status: 'certified'
        })

        console.log(this.certificate_number+' status :', req);
        location.reload()
      } catch (error) {
        console.log(error.response);
        location.reload()
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
