---
title: Pengenalan Git
---

# Git

## Sejarah Git

Git muncul dengan latar belakang _OpenSource_ project Linux Kernel. Sekitar tahun 1991-2002, Linux Kernel di develop hanya dengan memanfaatkan patch dan archived files. Pada tahun 2002, Linux Kernel mulai menggunakan DVCs bernama _**BitKeeper**_.

Namun pada tahun 2005, hubungan antara perusahaan pemilik _**BitKeeper**_ dengan komunitas Linux Kernel kurang baik. Sehingga pembuat Linux pertama yaitu [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) mulai membuat DVCs sendiri. 

Git pertama kali diperkenalkan tahun 2005, Git semakin populer bahkan kini menjadi DVCs yang paling populer didunia. Git menjadi populer karena sangat cepat, ringan, dan bahkan mampu me-manage projek dengan ukuran yang besar.

## Definisi Git

Git merupakan salah satu Distributed Version Control System. Git tidak membutuhkan server untuk melakukan perubahan atau melihat riwayat revisi. Hal ini dikarenakan didalam Git, semua riwayat projek akan selalu di duplikasi, baik itu di server maupun di komputer lokal, yang bearti Git juga bisa digunakan sebagai Local Version Control.

Setiap perubahan yang terjadi di Git, akan selalu dibuat signature (tanda) menggunakan algoritma hashin SHA-1. Hal ini menjadikan perubahan sekecil apapun akan selalu terdeteksi oleh Git. Semua hal yang terjadi di Git, akan secara otomatis tercatat, hal ini menjadikan perubahan apapun bisa selalu dikembalikan ke versi sebelumnya.

## Instalasi Git

Git adalah aplikasi yang OpenSource yang bisa di download dengan bebas. Git tersedia diberagam sistem operasi seperti Windows, Mac, dan Linux.

> **Download Git:** [https://git-scm.com/downloads](https://git-scm.com/downloads)

Banyak artikel dan video cara instalasi Git di masing-masing sistem operasi. Jadi bisa disesuaikan sesuai sistem operasi yang digunakan. Disini tidak akan mendemokan cara instalasinya, karena asumsinya git sudah terinstal pada local komputer.

**Memastikan Telah Berjalan**

Setelah melakukan instalasi, bisa cek terlebih dahulu untuk memastikan git sudah terinstal dengan membuka terminal, atau cmd di windows, lalu ketik perintah seperti berikut:

```sh
git --version
```

Jika berhasil maka perintah diatas akan menampilkan versi Git yang terinstal. Contoh hasil perintah di atas pada OS windows, akan muncul info versinya seperti berikut:

```
git version 2.45.2.windows.1
```