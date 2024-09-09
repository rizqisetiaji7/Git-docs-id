---
title: Workflow
---

# Workflow

Setelah mengetahui tentang arsitektur [Three Tree](/docs/basic/the-three-tree), selanjutnya akan mempelajari alur kerja menggunakan Git.

## Alur Kerja Git

Secara sederhana, setiap perubahan kecil akan dilakukan di `working` directory. Lalu bagaimana jika perubahan pertama, kedua, dst, sudah di commit ke repositorynya? Ketika terhadi perubahan satu karakter saja, perubahan satu karakter tersebut terjadinya di `working` direktori. Perubahan disini bukan perujuk pada filenya akan tetapi lebih ke perubahan pada section `working` direktorynya.

Jika sudah yakin bahwa perubahan sudah selesai dan ada yang mau disiapkan untuk disimpan secara permanen, maka perubahan tersebut akan dibawa ke staging index dengan melakukan `commit`.

Lalu setelah semuanya sudah oke, maka selanjutnya bisa disimpan secara permanen ke `repository`.

## Workflow Diagram

Berikut contoh workflow diagram pada perubahan file hingga disimpan ke repository.

### Workflow 1

![Workflow 1](/workflow_1.jpg)

1. Pada contoh diatas, pertama _`file (v1)`_ dibuat pada `working` directory. 
2. Lalu kemudian jalankan perintah `git add` untuk menyimpan perubahan _`file (v1)`_ ke `staging index`. 
3. Selanjutnya ketika menjalankan perintah `git commit`, maka perubahan yang ada pada `staging index` akan disimpan ke `repository`. Sehingga perubahan terakhir pada section `working`, `staging index`, dan `repository` adalah _`file (v1)`_.

Lalu, bagaimana jika terjadi perubahan lagi? Contohnya ketika mengedit filenya, selanjutkan lihat pada workflow ke-2.

### Workflow 2

![Workflow 2](/workflow_2.jpg)

1. Jika melakukan perubahan, maka sekarang pada `working` directory file berubah menjadi _`file (v2)`_, namun pada `repository` masih tetap _`file (v1)`_.
2. Jika perubahan ingin dibatalkan, mudah saja isi file bisa di hapus ke keadaan sebelumnya, atau dihapus filenya. Namun jika ingin menyimpan perubahannya, maka jalankan perintah `git add` lagi untuk menyimpan perubahan _`file (v2)`_ ke `staging index`. Sehingga sekarang pada `staging index` berubah menjadi versi terbaru yaitu _`file (v2)`_.
3. Pada `repository` file masih _`file (v1)`_, karena belum menjalankan perintah `git commit`. Jika dirasa sudah yakin akan perubahan baru tersebut, maka tinggal menjalankan perintah `git commit` lagi. Maka perubahan terbaru pada `staging index` akan disimpan ke `repository` yaitu _`file (v2)`_.
4. Sehingga pada semua section `working directory`, `staging index`, dan `repository` sekarang sudah tersimpan perubahan terbaru yaitu _`file (v2)`_.
5. Pada `repository` akan menyimpan riwayat seluruh perubahan, artinya file yang versi pertama atau sebelumnya masih tetap ada. Jadi apabila ingin mengembalikan perubahan ke versi sebelumnya, maka akan sangat mudah dilakukan menggunakan git.