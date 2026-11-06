## Aplikasi Web Toko Buku Online
Proyek ini merupakan aplikasi web toko buku online sederhana berbasis front-end yang dibangun untuk memenuhi kriteria penilaian Ujian Tengah Semester (UTS) Pemrograman Web. Aplikasi ini berfokus pada struktur HTML semantik, pengelolaan gaya CSS modern, serta manipulasi DOM interaktif menggunakan JavaScript murni (Vanilla JS) dengan sumber data terpisah berbasis Array JSON.

## Kriteria & Indikator Penilaian Tugas
Struktur HTML Semantik & Valid: Menggunakan elemen HTML5 semantik (header, nav, main, table, form, dan modal box).Pengelolaan Gaya Antarmuka (CSS): Desain antarmuka yang bersih, terstruktur, responsif, serta dilengkapi komponen visual seperti progress bar dan card container.Interaktivitas JavaScript DOM & Validasi Form:Otentikasi Login: Validasi form login berkesesuaian dengan data pengguna dan pemberian koreksi via alert/pop-up.Manipulasi DOM: Rendering data katalog dinamis dan fitur penambahan baris stok secara real-time tanpa refresh halaman.Interaksi UI: Penggunaan modal box untuk fitur "Lupa Password" dan "Daftar Akun".Tracking DO: Pencarian data logistik dinamis berdasarkan nomor Delivery Order.

## Data Uji Coba System (Credentials & DO)
1. Data Akun Pengguna (dataPengguna)Gunakan akun berikut untuk menguji fitur otentikasi login:NoEmail, Password Role1rina@gmail.com rina123U. Nomor Delivery Order (dataTracking)Gunakan nomor DO berikut pada halaman tracking.html:20230012: Status Dalam Perjalanan (Ekspedisi JNE)20230013: Status Selesai (Ekspedisi Pos Indonesia)

## Analisis Kendala Teknis & Akar Masalah 
(Root Cause)Selama proses pengembangan aplikasi web ini, dilakukan analisis dan penyelesaian masalah teknis (debugging) terkait gagalnya render gambar cover buku pada halaman katalog (stok.html):Ketidakcocokan Ekstensi File (.jpeg vs .jpg):Akar Masalah: Jalur path data awal pada objek dataKatalogBuku mencantumkan img/paud_perkembangan.jpeg, sedangkan file asli di direktori fisik berformat .jpg.Solusi: Menyelaraskan seluruh format penulisan ekstensi pada file js/data.js menjadi .jpg.Pencegahan Double Extension Akibat Fitur Windows:Akar Masalah: Fitur default Windows Hidden File Extensions dapat menyebabkan nama file berubah secara tidak sengaja menjadi paud_perkembangan.jpg.jpg.Solusi: Memastikan opsi File name extensions diaktifkan pada Explorer dan melakukan verifikasi penamaan jalur file secara tepat.
## link youTube
https://youtu.be/rprFEAPg3eE?si=hvI1Mm4la4Bu87Hs
