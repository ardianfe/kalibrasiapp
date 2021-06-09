<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>
      <mainHeader></mainHeader>

      <v-dialog v-model="print_loading.state" width="400px" persistent>
        <v-card>
          <v-card-title class="pb-0">{{print_loading.message}}</v-card-title>
          <v-card-actions>
            <v-progress-linear indeterminate color="primary"></v-progress-linear>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-layout row>
        <v-card width="100%" class="mt-4 v-main-card elevation-8">
          <v-card-title>
            <p class="accent--text lato font-weight-bold title ma-0">Cetak Laporan | {{certificate.equipment.name}}</p>
          </v-card-title>
          <v-card-text class="py-0">
            <v-checkbox v-model="kan" label="Tampilkan Logo KAN"></v-checkbox>
          </v-card-text>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn class="success elevation-0" @click="printWrapper" :disabled="!allow_create_report">
              Buat Laporan <v-icon right>print</v-icon>
            </v-btn> &nbsp;
            <v-btn class="primary elevation-0" @click="uploadSipeja" :disabled="!allow_upload_sipeja">
              Upload ke Sipeja <v-icon right>upload</v-icon>
            </v-btn> &nbsp;
          </v-card-title>
        </v-card>
      </v-layout>

      <v-layout justify-center>
        <v-card width="210mm" class="mt-3 v-main-card elevation-8">        
          <v-card-text style="height: 300mm" class="pt-0">
            <div id="printable" class="printable" style="margin: auto; margin-top: 0px; min-width: 190mm; max-width: 190mm; height: 280mm; max-height: 280mm">
              <no-ssr>
                <v-card-title style="z-index: 2; height: 75px; padding: 10mm 0 0 0">
                  <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
                  <v-spacer/>
                  <img v-if="kan" contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
                </v-card-title>
                <div id="header" style="margin-top: -75px; padding-top: 10mm">
                  <p class="helve c" style="margin-bottom: -5px; font-size: 9pt; margin-top: 3mm">BADAN STANDARDISASI DAN KEBIJAKAN JASA INDUSTRI</p>
                  <p class="helve c b" style="margin-bottom: 0px; font-size: 10pt;">BALAI BESAR BAHAN DAN BARANG TEKNIK</p>
                  <p class="helve c" style="margin-bottom: 0px; font-size: 6.5pt">Jl. Sangkuriang No. 14 Bandung 40135 JAWA BARAT - INDONESIA</p>
                  <p class="helve c" style="margin-bottom: 0px; font-size: 6.5pt">Telp. 022 - 2504088, 2510682, 2504828, 2507626 Fax. 022 - 2502027</p>
                  <p class="helve c" style="margin-bottom: 0px; font-size: 6.5pt">E-mail : <a target="blank" href="mailto:b4t@b4t.go.id">b4t@b4t.go.id</a>  Website : <a href="http://www.b4t.go.id" target="blank">http://www.b4t.go.id</a></p>
                </div>
                <div id="body-content" style="border: 2px solid black; background: white; margin-top: 2mm; padding: 2.7mm 4mm">
                  <p class="helve b c u" style="margin: 0; height: 4.2mm; font-size: 11pt;">SERTIFIKAT KALIBRASI</p>
                  <p class="helve i c" style="margin-bottom: 2mm; font-size: 10pt;">CALIBRATION CERTIFICATE</p>
                  <div style="margin: auto; width: 40mm;">
                    <v-layout>
                      <v-flex>
                        <p class="helve u c" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor</p>
                        <p class="helve i c" style="font-size: 7.5pt; margin: 0; height: 18px;">Number</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve c i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate_number }}</p>
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
                        <!-- <p class="helve" style="font-size: 9pt; margin: 7px 0;">: &nbsp;</p>
                        <v-layout style="min-height: 9mm" align-center>
                          <p class="roman" align-center style="font-size: 9pt; margin: 0;">
                            {{certificate.standard.name}}
                          </p>
                        </v-layout> -->
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.name }}</p>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                        <div style="width: 32mm">
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Kapasitas</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Capacity</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.capacity }}</p>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">3.</p>
                        <div style="width: 32mm">
                          <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">Tipe/Model</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Type/Model</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.model }}</p>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">4.</p>
                        <div style="width: 32mm">
                          <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">Nomor Seri</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Serial Number</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.serial_number }}</p>
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
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.manufacture }}</p>
                        </v-flex>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">6.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Pengontrol Suhu</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Temperature Control</p>
                        </v-flex>
                        <v-flex xs6>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.temperature }}</p>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">7.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Ukuran Dalam</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Internal Dimension</p>
                        </v-flex>
                        <v-flex xs6>
                          <p contenteditable="true" class="roman" style="font-size: 9pt; margin: 7px -14px 7px 0; height: 4.2mm;">: {{ certificate.equipment.internal_dimension }}</p>
                        </v-flex>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">8.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Lain-lain</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Others</p>
                        </v-flex>
                        <v-flex xs6>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.others }}</p>
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
                    <p class="roman b" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.owner.name }}</p>
                  </v-layout>
                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Alamat</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Address</p>
                    </div>
                    <p class="roman b" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.owner.address }}</p>
                  </v-layout>

                  <!-- Standard -->
                  <p class="helve u" style="margin: 2.5mm 0 0 0; height: 4.2mm; font-size: 9pt;">S T A N D A R</p>
                  <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Standard</p>
                  <v-layout row align-start>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0;">: &nbsp;</p>
                    <v-layout style="min-height: 9mm;" align-center>
                      <p class="roman" align-center style="font-size: 9pt; margin: 0;">
                        <v-layout row wrap>
                          <!-- {{certificate.standard.name}} -->
                          <v-flex v-for="(item, index) in certificate.standard.name[0]" :key="'std_name'+index"
                            :xs4="certificate.standard.name[0].length > 5" 
                            :xs6="certificate.standard.name[0].length < 5" 
                            :xs12="certificate.standard.name[0].length <= 3"
                          >
                            {{item}} No. {{certificate.standard.no_seri[0][index]}} <br>
                          </v-flex>
                        </v-layout>
                      </p>
                    </v-layout>
                  </v-layout>
                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Ketelusuran</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Traceability</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                    <v-layout style="min-height: 9mm" align-center>
                      <p class="roman" align-center style="font-size: 9pt; margin: 0; max-width: 500px">
                        <!-- <v-layout row wrap> -->
                          <!-- {{certificate.standard.traceability.length}} -->
                          Hasil kalibrasi yang dilaporkan tertelusur ke satuan pengukuran SI melalui
                          <span v-for="(item, index) in certificate.standard.traceability" :key="'trace'+index">
                            {{item}},
                          </span>
                        <!-- </v-layout> -->
                      </p>
                    </v-layout>
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
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ convertDate(certificate.acceptance_date) }}</p>
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
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ convertDate(certificate.calibration_date) }}</p>
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
                        <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">
                          : <span contenteditable="true">{{certificate.env_cond.room_temp}} &plusmn; {{certificate.env_cond.corrected_room_temp ? certificate.env_cond.corrected_room_temp : '0'}} &deg;C</span>
                        </p>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 0; height: 4.2mm;">2.</p>
                        <div style="width: 32mm">
                          <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">Kelembaban</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">: <span contenteditable="true">{{certificate.env_cond.humidity}} &plusmn; {{certificate.env_cond.corrected_humidity ? certificate.env_cond.corrected_humidity : '0'}} %</span></p>
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
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.calibration_loc }}</p>
                    </div>
                  </v-layout>

                  <!-- Metoda -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">METODA KALIBRASI</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Calibration Method</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">
                        <span v-for="(item, index) in certificate.calibration_method" :key="index">
                          {{item}}<span v-if="index != certificate.calibration_method.length -1">,</span>
                        </span>
                      </p>
                    </div>
                  </v-layout>

                  <!-- Acuan -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">ACUAN</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">reference</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0;">: &nbsp;</p>
                    <v-layout style="min-height: 8mm" align-center>
                      <p class="roman" align-center style="font-size: 9pt; margin: 0;">
                        {{certificate.reference[0]}}
                      </p>
                    </v-layout>
                    <!-- <p class="helve" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">
                        <span v-for="(item, index) in certificate.reference" :key="index">
                          {{item}}<span v-if="index != certificate.reference.length -1">,</span>
                        </span>
                      </p>
                    </div> -->
                  </v-layout>
                  
                  <!-- Hasil -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div>
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">HASIL KALIBRASI DAN KETIDAKPASTIAN KALIBRASI</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Result of Calibration and uncertainity of Calibration</p>
                    </div>
                    <div>
                      <p class="roman u" style="margin: 0 15mm; height: 4.2mm; font-size: 9pt;">(Terlampir)</p>
                      <p class="roman i" style="margin: 0 15mm; font-size: 7.5pt;">(Attached)</p>
                    </div>
                  </v-layout>

                  <!-- Diterbitkan dan Tanda Tangan -->
                  <v-layout style="margin-top: 1mm">
                    <v-flex xs8>
                      <v-layout row>
                        <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">DITERBITKAN TANGGAL : <span class="helve"> {{ convertDate(published_date) }}</span></p>
                      </v-layout>
                    </v-flex>
                    <v-flex xs4>
                      <div style="height: 25mm;"></div>
                      <!-- <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">Bidang Standarisasi</p> -->

                      <!-- {{signatory}} -->
                      <!-- <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">{{signatory.jabatan}}</p>
                      <p contenteditable class="helve c u" style="font-size: 8pt; margin: 14mm 0 0 0; height: 4.2mm;">{{signatory.name}}</p>
                      <p contenteditable class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">NIP. {{signatory.nip}}</p> -->
                    </v-flex>
                  </v-layout>

                  <!-- <div>
                    <table style="margin-top: 10px; width: 100%; border: 1px solid black; border-collapse: collapse;">
                      <tr>
                        <td style="border: 1px solid black; padding: 0 5px;">
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">DISETUJUI</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Approved by</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: Tatto Bustomi</p>
                          </v-layout>
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">TANGGAL</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Date</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: __ Juni 2017</p>
                          </v-layout>
                        </td>
                        <td style="border: 1px solid black; padding: 0 5px;">
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">DIPERIKSA</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Checked by</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: Tatto Bustomi</p>
                          </v-layout>
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">TANGGAL</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Date</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: __ Juni 2017</p>
                          </v-layout>
                        </td>
                        <td style="border: 1px solid black; padding: 0 5px;">
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">DISIAPKAN</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Prepared by</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: Agus Surya Permana</p>
                          </v-layout>
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">TANGGAL</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Date</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: __ Juni 2017</p>
                          </v-layout>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid black; height: 75px;"></td>
                        <td style="border: 1px solid black; height: 75px;"></td>
                        <td style="border: 1px solid black; height: 75px;"></td>
                      </tr>
                    </table>
                  </div> -->
                </div>

                <!-- Keterangan -->
                <div style="border-style: solid; border-width: 0 2px 2px 2px; background: white; margin-top: 0; padding: 1mm 4mm">
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
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">1</p>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Dari</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">of</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">{{certificate.report_pages ? certificate.report_pages +1 : '-'}}</p>
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

      <v-layout justify-center>
        <v-card width="210mm" class="mt-3 v-main-card elevation-8">
          <v-card-title>
            File Lampiran
            <v-spacer/>
            <v-btn icon class="primary" :href="certificate.uri_attach" target="_blank">
              <v-icon color="white">visibility</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-layout>
    </v-flex>
    <v-scroll-y-transition>
      <v-btn
        v-if="printbutton"
        color="success"
        large
        fixed
        bottom
        right
        fab
        @click="printWrapper"
      >
        <v-icon color="white">print</v-icon>
      </v-btn>
    </v-scroll-y-transition>
  </v-layout>
</template>

<style scoped>
  p{
		letter-spacing: .1pt;
    font-family: 'Times New Roman', serif;
	}
	table {
    border-collapse: collapse;
    font-family: 'Times New Roman', serif;
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
import mainHeader from '~/components/header.vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

export default {
  components: {
    mainHeader
  },

  head: {
    title: 'Sertifikat | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],

    script: [
      // { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },

  data: () => ({
    active: null,
    allow_upload_sipeja: false,
    allow_create_report: true,
    certificate_number: '',
    certificate: {
      equipment: {
        name: '',
        capacity: '',
        model: '',
        serial_number: '',
        manufacture: '',
        internal_dimension: '',
        temperature: '',
        others: '-',
      },
      owner: {
        name: '',
        address: ''
      },
      standard: {
        name: '',
        traceability: ''
      },
      acceptance_date: '',
      calibration_date: '',
      env_cond: {
        room_temp: '',
        corrected_room_temp: '',
        humidity: '',
        corrected_humidity: ''
      },
      calibration_loc: '',
      calibration_method: [],
      reference: [],
      result: '',
      published_date: '',
      director_name: '',
      director_nip: '',
      id_sipeja: ''
    },
    data: {},

    cert_file: {},
    attachment: {},

    signatories: [
      { id: 1, data: {name: 'AJI MAHMUD SOLIH', nip: '19720802 200701 1 003', jabatan: 'Kepala Seksi Kalibrasi'} },
      { id: 2, data: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'} },
    ],

    kan: true,
    signatory: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'},

    published_date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    printbutton: false,

    print_loading: {
      state: false,
      message: '',
    },
  }),

  mounted() {
    this.getCertData()

    window.onscroll = () => { 
      if (document.documentElement.scrollTop > 300) {
        this.printbutton = true
      } else {
        this.printbutton = false
      }
    }

    if (this.$auth.$state.user.role == 1) {
      alert("Unauthorized")
      this.$router.go(-1)
    }
  },

  methods: {
    async getCertData() {
      try {
        const req = await this.$calibrate.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req

        let jsonVariable = {};
        fetch(req.uri_attach)
          .then(res => res.blob())
          .then(blob => {
            this.attachment = blob
            console.log('objectURL', blob);

            jsonVariable['id_order'] = this.$route.query.order_id
            jsonVariable[req.no_laporan] = blob

            // var fileURL = URL.createObjectURL(blob);
            // window.open(fileURL);
        });

        this.json_sipeja = jsonVariable
        this.certificate_number = req_data.no_laporan
        this.certificate = req

        if (req.uri_report) {
          this.allow_upload_sipeja = true
          this.allow_create_report = false
        }
        console.log('LK file: ', this.attachment);

      } catch (error) {
        console.log(error);
      }
    },

    upload(){
      alert('test')
    },

    async printWrapper() {
      document.documentElement.scrollTop = 0
      this.print_loading.state = true
      this.print_loading.message = 'Menyiapkan Laporan...'

      console.log('width : ', document.getElementById('printable'));
      let pages = document.querySelectorAll(".printable");
      let print_canvas = document.getElementById('elementH')

      const doc = new jsPDF('p', 'mm','a4');
      

      // console.log(print_canvas);
      const cert_name = this.certificate.equipment.name + ' ['+this.certificate_number+'].pdf'
      let options = {
        width: 794,
        height: 1134,
        dpi: 144,
        scale: 2
        // x: 18, y: 18
      };

      for (const key in pages) {
        if (Object.hasOwnProperty.call(pages, key)) {          
          await html2canvas(pages[key], options).then((canvas) => {
            // print_canvas.appendChild(canvas);
            //addImage(imageData, format, x, y, width(mm), height(mm), alias, compression, rotation)
            key > 0 ? doc.addPage() : ''
            doc.addImage(canvas, 'JPEG', 8, 0, 210, 300, key, 'NONE', 0)
          });   
        }
      }
      
      const certificate_file = doc.output('blob', cert_name);
      
      this.cert_file = certificate_file

      // var fileURL = URL.createObjectURL(this.cert_file);
      // window.open(fileURL);

      if (this.certificate.uri_report) {
        alert('sudah ada laporan')
        this.$router.push('/lk?id='+this.$route.query.id)
      } else {
        this.mergePDF()
      }
    },

    async mergePDF() {
      this.print_loading.state = true
      this.print_loading.message = 'Membuat Laporan...'

      try {
        const req = await this.$calibrate.mergeFile({
          cert: this.cert_file, 
          attch: this.attachment,
          id: this.$route.query.id
        })

        console.log('merge pdf : ', req);

        let uri;
        fetch(req.uri_report)
          .then(res => res.blob())
          .then(blob => {
            uri = blob
            console.log('uri', blob);
        });

        this.allow_upload_sipeja = true

        setTimeout(() => {
          this.print_loading.state = false
          this.print_loading.message = 'Error when Merging'
        }, 500);

        // this.uploadSipeja()
      } catch (error) {
        setTimeout(() => {
          this.print_loading.state = false
          this.print_loading.message = 'Error when Merging'
        }, 500);

        // if (error.response) {
        alert('Gagal membuat laporan : ', error.response)
        console.log('error when merging', error.response);

      }
    },

    async uploadSipeja() {
      try {
        const req = await this.$calibrate.sipeja_upload({
          order_id: this.certificate.id_sipeja,
          sample_id: this.$route.query.id,
          no_laporan: this.certificate_number
        })

        this.changeStatus()
      } catch (error) {
        setTimeout(() => {
          this.print_loading.state = false
          this.print_loading.message = ''
        }, 500);

        alert('Gagal mengupload file ke SIPEJA')
        console.log('Gagal mengupload file ke SIPEJA', error.response);
      }
    },

    async changeStatus() {
      this.certificate.status = 3
      try {
        const req = await this.$calibrate.saveForm({
          sample_id: this.$route.query.id, certificate: this.certificate
        })

        setTimeout(() => {
          this.print_loading.state = false
          this.print_loading.message = ''
        }, 500);

        alert('Berhasil membuat laporan')

        console.log(this.certificate_number+' change status :', req);
        this.$router.push('/lk?id='+this.$route.query.id)
      } catch (error) {

        setTimeout(() => {
          this.print_loading.state = false
          this.print_loading.message = ''
        }, 500);
        alert('gagal ubah status')
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
