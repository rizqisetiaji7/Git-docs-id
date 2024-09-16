---
title: Pengenalan Version Control
---

# Version Control

> :dart: **Sebelum Ada Version Control**

+ Saat mengerjakan tugas atau pekerjaan, terkadang sering melakukan revisi. Misalnya, ketika membuat dokumen proposal atau skripsi.
+ Misal dokumen yang di simpan diberi nama sesuai revisinya:
   - Dokumen pertama di simpan dengan nama *`"document_1"`*
   - Setelah adanya revisi, maka dokumen di simpan lagi dengan nama *`"document_2"`*
   - Dan jika masih ada revisi, simpan dengan nama *`"document_3"`*, dan seterusnya
+ Hal tersebut dilakukan, agar kita bisa melihat perubahan yang terjadi antar revisi dokumennya. Jika sewaktu-waktu kita perlu menggunakan revisi yang sebelumnya, kita bisa menggunakannya kembali dengan mudah.

Pada contoh diatas, sebelum adanya Git semua perubahan atau revisi dilakukan secara manual, dan hampir diseluruh pekerjaan melakukan hal tersebut agar dapat melihat perubahannya. Namun saat ini, dengan adanya tools Version Control System, kita tidak perlu lagi melakukannya secara manual.

## Definisi & Manfaat VCS

Version Control System (VCS) adalah sebuah sistem yang merekam perubahan pada file dari waktu ke waktu, sehingga kita bisa melihat perubahan versi sebelumnya jika diinginkan.

Version Control saat ini sangat populer dikalangan programmer, karena programmer selalu membuat kode program dalam bentuk kode tulisan atau berbasis text. Dengan Version Control, programmer bisa merekam semua perubahan yang terjadi. Sehingga, jika terjadi kesalahan, programmer bisa kembali ke versi sebelumnya.

::: tip :bulb: Perlu Diketahui
Tidak hanya untuk file dalam bentuk text, Version Control juga dapat merekam perubahan dari file gambar atau layout, sehingga tidak perlu backup setiap perubahan secara manual.
:::

## Tipe Version Control

Secara garis besar terdapat 3 jenis Version Control System, diantaranya:

### Local VCS

Local Version Control merupakan Version Control yang berjalan hanya di local komputer. Pendekatan ini dilakukan karena sederhana dan tidak membutuhkan sever seperti cloud atau sejenisnya, karena semua riwayat atau setiap perubahan versi yang terjadi pada file hanya disimpan di local komputer. 

::: warning :warning: Kekurangan
Terdapat kekurangan pada local version control, yaitu jika terjadi kerusakan pada local komputer, maka data berpotensi rusak atau bahkan hilang semua datanya. Selain itu juga sulit berkolaborasi dengan pengguna lain jika file hanya ada di satu komputer.
:::

### Centralized VCS

Untuk mengatasi masalah pada local version control, bisa dengan menggunakan Centralized Version Control.
Centralized Version Control akan menyimpan seluruh riwayat data perubahan atau revisi di server. Sehingga pengguna bisa mengakses data tersebut ke server untuk melihat file perubahannya. Contoh Centralized Version Control adalah **_Subversion_**.

::: warning :warning: Kekurangan
Kekurangan pada Centralized Version Control adalah jika pengguna offline, pengguna tidak dapat melihat riwayat perubahan pada file, karena riwayat perubahan file hanya ada di server. Selain itu, jika server down maka seluruh pengguna tidak bisa melakukan perubahan dan melihat revisi file.
:::

### Distributed VCS

Distributed Version Control adalah alternatif lain dari Centralized Version Control. Dalam DVCs, client atau pengguna tidak hanya mengambil file versi terakhir, namun seluruh riwayat revisi di copy semuanya ke komputer local. Hal ini memungkinkan jika terjadinya masalah pada server, client tetap bisa bekerja, memanipulasi file, sampai melihat riwayat perubahan. Bahkan didalam DVCs, Server bisa lebih dari satu, karena setiap server isinya sama, atau full backup data.
Contoh DVCs adalah **_Git_**, **_Mercurial_**, dll.

::: warning :warning: Kekurangan
Masalah yang biasanya sering terjadi pada Distributed Version Control adalah sering adanya konflik, atau terdapat code yang duplikat, sehingga perlu adanya peninjauan ulang agar menghindari konflik code.
:::