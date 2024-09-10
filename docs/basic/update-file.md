---
title: Mengubah File
---

# Mengubah File

Untuk melakukan perubahan file, bisa langsung dilakukan terhadap file yang sudah ada di `repository`. Secara otomatis Git akan mendeteksi perubahan file tersebut. Langkahnya sama seperti ketika menambah file, jika perubahan ingin disimpan permanen, maka pindahkan terlebih dahulu perubahan filenya ke `staging index`, lalu melakukan commit ke `repository`.

## Praktik

Update atau ubah isi `file3.txt` yang sudah dibuat pada `D:/Programming/git-src/file3.txt`, contoh akan mengubah dengan menambah text pada baris baru seperti berikut:

::: code-group
```txt [file3.txt]
Menambah File: Ini adalah file ke-3
Mengubah File: Ini adalah text baris baru file ke-3 // [!code ++]
```
:::

Pada contoh diatas `file3.txt` pada commit sebelumnya hanya memiliki satu baris text. Lalu ditambahkan text pada baris berikutnya yang diberi tanda hijau. 

Sesuai alur pada Git, jika terjadi perubahan baru atau `modified`, maka perubahan tersebut berada di `working directory` lagi. Silahkan cek statusnya seperti berikut:

```sh
git status
```

Maka informasi yang muncul akan seperti berikut ini:

```sh
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   file3.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Pada informasi di atas terdapat pesan `modified: file3.txt` yang artinya terdapat perubahan atau dimodifikasi, dari versi yang ada di `repository`.