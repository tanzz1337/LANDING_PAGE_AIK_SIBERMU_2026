Landing page standalone Universitas Siber Muhammadiyah yang menyatukan informasi kemahasiswaan dan Al-Islam Kemuhammadiyahan dalam satu ekosistem digital yang responsif, aksesibel, dan mudah dikembangkan.
# Ruang Tumbuh — Kemahasiswaan & AIK SiberMu

> Landing page satu halaman Universitas Siber Muhammadiyah yang menyatukan ruang aktualisasi mahasiswa dengan nilai Al-Islam dan Kemuhammadiyahan.

## Preview
<img width="1904" height="813" alt="Screenshot (52)" src="https://github.com/user-attachments/assets/e95bcf99-c953-410d-a11e-5b7fe916148a" />

## Deskripsi singkat

**Ruang Tumbuh** adalah landing page untuk Universitas Siber Muhammadiyah (SiberMu) yang menghadirkan informasi kemahasiswaan dan Al-Islam Kemuhammadiyahan (AIK) dalam satu ekosistem digital. Project ini dirancang untuk memperlihatkan bahwa organisasi, UKM, prestasi, layanan mahasiswa, kegiatan keagamaan, kajian, syiar, dan nilai Kemuhammadiyahan saling terhubung dalam proses pembentukan mahasiswa yang berilmu, beriman, dan berdampak.

## Konteks lomba

Project ini menjawab tema lomba berupa satu landing page yang memuat dua bidang sekaligus:

- **Kemahasiswaan:** organisasi mahasiswa, unit kegiatan mahasiswa, prestasi, dan layanan mahasiswa.
- **Al-Islam dan Kemuhammadiyahan:** kegiatan keagamaan, kajian keislaman, syiar Islam, dan nilai Kemuhammadiyahan.

Kedua bidang tidak dipisahkan menjadi dua karya. Keduanya disatukan melalui narasi **Ruang Tumbuh**, dengan kemahasiswaan sebagai ruang gerak dan AIK sebagai arah pertumbuhan.

## Konsep utama

Konsep project dirangkum melalui empat gagasan:

1. **Ilmu** — mahasiswa berpikir kritis, terbuka, dan bertanggung jawab.
2. **Iman** — mahasiswa menjaga niat, akhlak, dan integritas.
3. **Amal** — gagasan diterjemahkan menjadi tindakan nyata.
4. **Dampak** — aktivitas mahasiswa memberi manfaat bagi masyarakat.

Pesan utama landing page:

> Mahasiswa tidak hanya aktif di kampus, tetapi tumbuh menjadi insan yang berilmu, beriman, dan memberi dampak.

## Fitur utama

- Hero section dengan positioning dan call-to-action yang jelas.
- Navigasi anchor untuk berpindah antarbagian halaman.
- Menu responsif untuk perangkat mobile.
- Section kemahasiswaan dengan empat pilar: organisasi, UKM, prestasi, dan layanan.
- Section integrasi ilmu, iman, amal, dan dampak.
- Section AIK dengan empat kategori: kegiatan keagamaan, kajian, syiar, dan nilai Kemuhammadiyahan.
- Section dampak mahasiswa.
- Kontak resmi SiberMu dalam kartu alamat, telepon/WhatsApp, dan email.
- Tautan media sosial resmi SiberMu.
- Formulir kontak dengan validasi dasar pada sisi frontend.
- Skip link, label form, focus state, `aria-live`, dan dukungan `prefers-reduced-motion`.

## Identitas resmi SiberMu

**Institusi:** Universitas Siber Muhammadiyah (SiberMu)  
**Alamat:** Jalan HOS Cokroaminoto No. 17 RT 53 RW 12, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55253  
**Email:** [humas@sibermu.ac.id](mailto:humas@sibermu.ac.id)  
**Telepon/WhatsApp:** [+62 895-3185-1105](tel:+6289531851105)

Media sosial resmi:

- [Instagram](https://www.instagram.com/sibermu/)
- [Facebook](https://www.facebook.com/sibermu)
- [X / Twitter](https://twitter.com/sibermu)
- [YouTube](https://www.youtube.com/channel/UCeyzSDwnAzK3Hfza5hMcICw)

## Teknologi

Project dibuat menggunakan teknologi web standar agar mudah dibaca, dijalankan, dan dikembangkan:

| Teknologi | Penggunaan |
|---|---|
| HTML5 | Struktur halaman semantik dan aksesibilitas dasar |
| CSS3 | Layout responsif, custom properties, Grid, Flexbox, dan media query |
| JavaScript Vanilla | Menu mobile, efek navbar, tahun copyright, dan validasi form |
| Base64 Data URI | Menyematkan logo agar HTML dapat berdiri sendiri |
| System font stack | Menjamin keterbacaan tanpa ketergantungan font eksternal |

Tidak ada framework CSS, JavaScript library, build tool, atau font CDN yang wajib dipasang.

## File utama

| File | Keterangan |
|---|---|
| `landing-kemahasiswaan-aik-standalone.html` | File utama landing page versi standalone |
| `dokumentasi-lengkap-untuk-juri-sibermu.md` | Dokumentasi lengkap mengenai konsep, teknologi, kelebihan, keterbatasan, dan pengembangan |
| `New-Logo-SiberMu-Full-Color-2048x485.png` | Sumber logo resmi SiberMu untuk arsip project |

## Cara menjalankan

### Cara paling sederhana

Buka file berikut menggunakan browser:

```text
landing-kemahasiswaan-aik-standalone.html
```

File dapat dibuka langsung dengan double-click. Tidak diperlukan instalasi package, server lokal, atau koneksi internet untuk menampilkan konten utama dan logo.

### Menggunakan server lokal opsional

Jika ingin melakukan preview melalui server lokal, gunakan salah satu opsi berikut:

```bash
python3 -m http.server 8080
```

Kemudian buka:

```text
http://localhost:8080/landing-kemahasiswaan-aik-standalone.html
```

## Kompatibilitas

Landing page menggunakan `meta viewport`, CSS Grid, Flexbox, ukuran teks responsif, dan breakpoint pada 900px serta 560px.

- **Desktop:** hero dua kolom, navigasi horizontal, dan empat kartu kemahasiswaan.
- **Tablet:** layout utama berubah menjadi satu kolom dan kartu menjadi dua kolom.
- **Mobile:** kartu menjadi satu kolom, form menjadi vertikal, CTA melebar, dan navigasi berubah menjadi menu mobile.

File telah dibuat agar dapat dibuka pada browser modern seperti Chrome, Edge, Firefox, Safari, Android Browser, dan iOS Safari.

## Kelebihan project

### Integrasi tema yang jelas

Kemahasiswaan dan AIK hadir dalam satu halaman serta dihubungkan melalui section benang merah. Halaman tidak hanya menyajikan dua daftar informasi, tetapi menjelaskan hubungan antara aktivitas mahasiswa dan nilai yang mendasarinya.

### Konsep mudah dipresentasikan

Gagasan “Ruang Tumbuh” membantu juri memahami posisi project secara cepat: kemahasiswaan adalah ruang bagi mahasiswa untuk bergerak, sedangkan AIK memberi arah agar gerakan tersebut memiliki nilai dan dampak.

### Standalone dan mudah diuji

Logo telah disematkan langsung ke file HTML. Tidak ada ketergantungan pada font CDN, gambar eksternal, framework CSS, atau library JavaScript. Juri dapat membuka file langsung tanpa konfigurasi teknis.

### Responsif dan aksesibel

Layout menyesuaikan desktop, tablet, dan smartphone. Project juga memiliki skip link, label form, focus state, semantic landmarks, validasi dasar, dan dukungan reduced motion.

### Identitas resmi sudah dimasukkan

Nama institusi, logo, alamat, email, nomor telepon, WhatsApp, dan media sosial SiberMu telah digunakan pada halaman.

## Keterbatasan project

- Data capaian resmi belum tersedia sehingga bagian dampak masih menggunakan indikator konseptual.
- Foto dokumentasi asli organisasi dan kegiatan AIK belum tersedia.
- Form kontak masih berupa simulasi frontend dan belum terhubung ke backend atau database.
- Konten belum dikelola melalui CMS sehingga pembaruan masih dilakukan langsung pada HTML.
- Logo Base64 membuat ukuran file lebih besar, walaupun hal ini membuat project lebih mudah dipindahkan sebagai satu file.

Keterbatasan tersebut bersifat pengembangan lanjutan dan tidak mengubah konsep utama landing page.

## Pengembangan berikutnya

Apabila project dilanjutkan ke tahap produksi, pengembangan yang disarankan adalah:

1. menambahkan foto kegiatan asli yang telah mendapat izin penggunaan;
2. memasukkan data prestasi dan capaian resmi SiberMu;
3. menghubungkan form ke email gateway, backend, atau WhatsApp Business API;
4. menambahkan CMS untuk mengelola kegiatan, berita, prestasi, dan program AIK;
5. menambahkan halaman detail organisasi, UKM, layanan, dan agenda AIK;
6. menambahkan analytics anonim untuk mengukur interaksi pengunjung.

## Narasi singkat untuk juri

> “Ruang Tumbuh adalah landing page yang menyatukan aktivitas kemahasiswaan dan nilai Al-Islam Kemuhammadiyahan dalam satu perjalanan pengguna. Kemahasiswaan menjadi ruang bagi mahasiswa untuk bergerak melalui organisasi, UKM, prestasi, dan layanan. AIK menjadi arah agar setiap aktivitas berakar pada iman, ilmu, amal, dan kepedulian sosial. Secara teknis, project dibuat sebagai HTML standalone yang responsif, ringan dependensi, mudah dibuka, dan siap dikembangkan menjadi website resmi SiberMu.”

## Status project

**Status:** Prototype kompetisi siap presentasi  
**Format:** HTML standalone  
**Backend:** Belum terhubung; form masih frontend simulation  
**Data prestasi:** Menunggu data resmi SiberMu  
**Dokumentasi:** Tersedia pada `dokumentasi-lengkap-untuk-juri-sibermu.md`

## Lisensi dan penggunaan

Project ini dibuat untuk kebutuhan lomba dan presentasi landing page Universitas Siber Muhammadiyah. Logo dan identitas SiberMu harus digunakan sesuai izin dan ketentuan resmi institusi.

## Referensi
1. https://sibermu.ac.id "Kampus Virtual SiberMu"
2. https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag "MDN Web Docs — Viewport meta tag"
3. https://developer.mozilla.org/en-US/docs/Web/Accessibility "MDN Web Docs — Accessibility"
