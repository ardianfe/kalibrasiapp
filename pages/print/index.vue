<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card width="210mm">
        <v-card-title class="headline">
          <v-btn icon large class="primary" @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn> &nbsp;
          Cetak <span style="text-transform: capitalize;">&nbsp;{{ $route.query.attribute }} {{ $route.query.content }}</span>

          <v-spacer />

          <v-btn class="primary elevation-0" @click="printWrapper">
            cetak <v-icon right>print</v-icon>
          </v-btn> &nbsp;
        </v-card-title>
        <!-- <table>
          <tr><td><div contenteditable>I'm editable</div></td><td><div contenteditable>I'm also editable</div></td></tr>
          <tr><td>I'm not editable</td></tr>
        </table> -->
        
        <v-card-text style="height: 300mm" v-if="$route.query.attribute == 'sertifikat'">
          <div id="printable" style="margin: auto; margin-top: 20px; min-width: 190mm; max-width: 190mm; height: 280mm;">
            <v-card-title style="z-index: 2; height: 75px; padding: 0" v-if="$route.query.attribute == 'sertifikat'">
              <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
              <v-spacer/>
              <img contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
            </v-card-title>
            <div id="header" style="margin-top: -75px;">
              <p class="helve c" style="margin-bottom: 1px; font-size: 9pt; margin-top: 3mm">BADAN PENELITIAN DAN PENGEMBANGAN INDUSTRI</p>
              <p class="helve c b" style="margin-bottom: 1px; font-size: 10pt;">BALAI BESAR BAHAN DAN BARANG TEKNIK</p>
              <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Jl. Sangkuriang No. 14 Bandung 40135 JAWA BARAT - INDONESIA</p>
              <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Telp. 022 - 2504088, 2510682, 2504828, 2507626 Fax. 022 - 2502027</p>
              <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">E-mail : b4t@b4t.go.id  Website : http://www.b4t.go.id</p>
            </div>
            <div id="body-content" style="border: 1px solid black; background: white; margin-top: 2mm; padding: 2.7mm 4mm">
              <p class="helve b c u" style="margin: 0; height: 4.2mm; font-size: 11pt;">SERTIFIKAT KALIBRASI</p>
              <p class="helve i c" style="margin-bottom: 2mm; font-size: 10pt;">CALIBRATION CERTIFICATE</p>
              <div style="margin: auto; width: 40mm;">
                <v-layout>
                  <v-flex>
                    <p class="helve u c" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor</p>
                    <p class="helve i c" style="font-size: 7.5pt; margin: 0; height: 18px;">Number</p>
                  </v-flex>
                  <v-flex>
                    <p class="roman c i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: 3-01-19-00472</p>
                  </v-flex>
                </v-layout>
              </div>

              <!-- Alat / Equipment -->
              <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">A L A T</p>
              <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Equipment</p>
              <v-layout>
                <v-flex xs6>

                  <v-layout row>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                    <div style="width: 32mm">
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: OVEN</p>
                  </v-layout>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                    <div style="width: 32mm">
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Kapasitas</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Capacity</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: 220⁰C / Resolusi 2⁰C</p>
                  </v-layout>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">3.</p>
                    <div style="width: 32mm">
                      <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">Tipe/Model</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Type/Model</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: U 50</p>
                  </v-layout>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">4.</p>
                    <div style="width: 32mm">
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor Seri</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Serial Number</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: 850594</p>
                  </v-layout>

                </v-flex>
                <v-flex xs6>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">5.</p>
                    <v-flex xs5>
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Merk/Buatan</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Manufacture</p>
                    </v-flex>
                    <v-flex xs6>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: Memmert / Germany</p>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">6.</p>
                    <v-flex xs5>
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Ukuran Dalam</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Internal Dimension</p>
                    </v-flex>
                    <v-flex xs6>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: 460mm(l)x250mm(p) x340mm(t)</p>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">7.</p>
                    <v-flex xs5>
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Pengontrol Suhu</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Temperature Control</p>
                    </v-flex>
                    <v-flex xs6>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: Analog, Bersatu dengan alat</p>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">8.</p>
                    <v-flex xs5>
                      <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Lain-lain</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Others</p>
                    </v-flex>
                    <v-flex xs6>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: -</p>
                    </v-flex>
                  </v-layout>

                </v-flex>
              </v-layout>

              <!-- Pemilik / Owner -->
              <p class="helve u" style="margin: 2.5mm 0 0 0; height: 4.2mm; font-size: 9pt;">P E M I L I K</p>
              <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt">Owner</p>
              <v-layout row>
                <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                <div style="width: 32mm">
                  <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                  <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                </div>
                <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: PDAM TIRTA RAHARJA KABUPATEN BANDUNG</p>
              </v-layout>
              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                <div style="width: 32mm">
                  <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Alamat</p>
                  <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Address</p>
                </div>
                <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: Jl. Kol Masturi Km. 3, Cimahi</p>
              </v-layout>

              <!-- Standard -->
              <p class="helve u" style="margin: 2.5mm 0 0 0; height: 4.2mm; font-size: 9pt;">S T A N D A R</p>
              <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Standard</p>
              <v-layout row>
                <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                <div style="width: 32mm">
                  <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                  <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                </div>
                <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                <div>
                  <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">1. Memory HI Logger HIOKI LR 8431-20 S/N : 160513385</p>
                  <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">2. Thermocouple Wire Tipe K, S/N : K2</p>
                </div>
              </v-layout>
              <v-layout>
                <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                <div style="width: 32mm">
                  <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Ketelusuran</p>
                  <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Traceability</p>
                </div>
                <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                <div>
                  <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">Hasil Kalibrasi yang dilaporkan tertelusur kesatuan pengukuran SI melalui</p>
                  <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">LK-032-IDN dan LK-172-IDN</p>
                </div>
              </v-layout>

              <!-- Tanggal -->
              <v-layout>
                <v-flex xs6>
                  <v-layout row style="margin-top: 3mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">TANGGAL DITERIMA</p>
                      <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Date of acceptance</p>
                    </div>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: 04 Oktober 2019</p>
                    </div>
                  </v-layout>
                </v-flex>
                <v-flex xs6>
                  <v-layout row style="margin-top: 3mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">TANGGAL KALIBRASI</p>
                      <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Date of Calibration</p>
                    </div>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: 04 Oktober 2019</p>
                    </div>
                  </v-layout>
                </v-flex>
              </v-layout>

              <!-- Kondisi -->
              <p class="helve u" style="margin: 2mm 0 0 0; height: 4.2mm; font-size: 9pt;">KONDISI LINGKUNGAN KALIBRASI</p>
              <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Environtment condition of Calibration</p>
              <v-layout>
                <v-flex xs6>
                  <v-layout row>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 0; height: 4.2mm;">1.</p>
                    <div style="width: 32mm">
                      <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">Suhu Ruang</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">: 26 ± 1 °C</p>
                  </v-layout>
                </v-flex>
                <v-flex xs6>
                  <v-layout row>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 0; height: 4.2mm;">2.</p>
                    <div style="width: 32mm">
                      <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">Kelembapan</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">: 69 ± 3 %RH</p>
                  </v-layout>
                </v-flex>
              </v-layout>

              <!-- Lokasi -->
              <v-layout row style="margin-top: 2.5mm">
                <div style="width: 37mm">
                  <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">LOKASI KALIBRASI</p>
                  <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Location of Calibration</p>
                </div>
                <div>
                  <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: Laboratorium PDAM Tirtaraharja</p>
                </div>
              </v-layout>

              <!-- Metoda -->
              <v-layout row style="margin-top: 2.5mm">
                <div style="width: 37mm">
                  <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">METODA KALIBRASI</p>
                  <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Calibration Method</p>
                </div>
                <div>
                  <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: PC-301-04</p>
                </div>
              </v-layout>

              <!-- Acuan -->
              <v-layout row style="margin-top: 2.5mm">
                <div style="width: 37mm">
                  <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">ACUAN</p>
                  <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Refference</p>
                </div>
                <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                <div>
                  <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">Australian Standard 2538-1986</p>
                  <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">Enclosured Temperature Controlled Performance Testing and Grading</p>
                </div>
              </v-layout>
              
              <!-- Hasil -->
              <v-layout row style="margin-top: 2.5mm">
                <div>
                  <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">HASIL KALIBRASI DAN KETIDAKPASTIAN KALIBRASI</p>
                  <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Result of Calibration and uncertainity of Calibration</p>
                </div>
                <div>
                  <p class="helve u" style="margin: 0 15mm; height: 4.2mm; font-size: 9pt;">(Terlampir)</p>
                  <p class="helve i" style="margin: 0 15mm; font-size: 7.5pt;">(Attached)</p>
                </div>
              </v-layout>

              <!-- Diterbitkan dan Tanda Tangan -->
              <v-layout style="margin-top: 1mm">
                <v-flex xs8>
                  <v-layout row>
                    <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">DITERBITKAN TANGGAL : <span class="roman"> 07 Oktober 2019</span></p>
                  </v-layout>
                </v-flex>
                <v-flex xs4>
                  <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">Bidang Standarisasi</p>
                  <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">Kepala Seksi Kalibrasi</p>
                  <p class="helve c u" style="font-size: 8pt; margin: 14mm 0 0 0; height: 4.2mm;">AJI MAHMUD SOLIH</p>
                  <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">NIP. 19720802 200701 1 003</p>
                </v-flex>
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
                  <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                    3. Laboratorium ini diakreditasi KAN LK-022-IDN.
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
                  <p class="roman" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">1</p>
                  <div>
                    <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Dari</p>
                    <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">of</p>
                  </div>
                  <p class="roman" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">3</p>
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
            <div style="margin-top: -130px;" > 
            </div>
        </v-card-text>
        
        <v-card-title id="wrapper" v-else>
        </v-card-title> 
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
p{
  letter-spacing: .1pt;
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
    font-family: Helvetica, sans-serif;
  } .c {
    text-align: center;
  }
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data: () => ({
    active: null,
    data: {}
  }),

  mounted() {
    if (!this.$store.state.isLoggedIn) {
      // this.$router.push('/')
    }

    this.data = JSON.parse(localStorage.getItem(this.$route.query.attribute))

    console.log(this.data);
    if (this.$route.query.attribute == 'lampiran') {
      this.createElement()
    }
  },

  methods: {
    createElement() {
      document.getElementById('wrapper').innerHTML += this.data.htmlstr;

      if (this.$route.query.attribute == 'sertifikat') {
        setTimeout(() => {
          // console.log(');
          
          document.getElementsByTagName('table')[0].width = '100%'
          console.log(document.getElementsByTagName('table')[0]);
          
          document.getElementById('sjs-B2').style = 'text-align: center; font-family: Helvetica; font-size: 9pt'
          document.getElementById('sjs-B3').style = 'text-align: center; font-family: Helvetica; font-size: 10pt; font-weight: 600;'
          document.getElementById('sjs-B4').style = 'text-align: center; font-family: Helvetica; font-size: 7pt'
          document.getElementById('sjs-B5').style = 'text-align: center; font-family: Helvetica; font-size: 7pt'
          document.getElementById('sjs-B6').style = 'text-align: center; font-family: Helvetica; font-size: 7pt'
          document.getElementById('sjs-B9').style = 'text-align: center; font-family: Helvetica; font-size: 7pt'
          document.getElementById('sjs-B10').style = 'text-align: center; padding-bottom: 8px'
        }, 1000);
      }

    },

    printWrapper() {
      var printContents = document.getElementById('printable').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents; 
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>
