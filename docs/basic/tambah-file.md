---
title: Menambah File
---

# Menambah File

Untuk menambah file baru ke repository, cukup dengan menambahkan atau membuat file baru.
Secara otomatis, file yang ditambahkan akan berada di `working directory`.
Secara default ketika menambah file baru, file tersebut tidak akan di track perubahannya.
Agar perubahannya ditrack, maka file tersebut harus dipindahkan dari `working directory` ke `staging index`.

## Praktik

Buat file baru dengan nama `file1.txt` pada folder `D:/Programming/git-src/file1.txt`. 
Silahkan isi file tersebut dengan text biasa sebagai contoh:

::: code-group
```txt [file1.txt]
Menambah file baru di repository Git.
```
:::

Lalu ketikan perintah berikut pada terminal atau command prompt untuk mengetahui apakah ada file baru atau tidak, lalu tekan enter.

```sh
git status
```

Jika berhasil maka, akan muncul informasi seperti berikut:

```sh
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        file1.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Pada informasi diatas terdapat `Untracked files` atau file yang belum di track yang artinya terdapat file baru yang ditambahkan yaitu `file1.txt`. Jika akan melakukan commit file baru tersebut, maka harus memindahkannya ke `staging index` terlebih dahulu.

## Memindahkan ke Staging Index

Untuk memindahkan ke `staging index`, bisa dengan mengetikkan perintah `git add <nama file>`, lalu cek lagi status file tersebut, berikut contohnya:

```sh
git add file1.txt

git status
```

Berikut informasi setelah menjalankan perintah diatas:

```sh
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   file1.txt
```

Maka secara otomatis `file1.txt` sekarang berada di `staging index`, dan terdapat informasi `new file: file1.txt`.

## Commit ke Repository

Untuk melakukan commit ke `repository` dan menyimpannya secara permanen bisa menjalankan perintah `git commit -m "<message>"`. Ketika melakukan commit, maka semua perubahan yang ada di `staging index` akan di pindahkan ke `repository`. 

Satu perintah Git commit ini, bisa menyimpan banyak file atau banyak perubahan sekaligus dari `staging index` ke `repository`.

Berikut cara menyimpan file ke `repository`:

```sh
git commit -m "Menambah file1.txt"
```

Setelah menjalankan perintah diatas, maka akan muncul keterangan seperti berikut ini:

```sh
[main (root-commit) 0f37dca] Menambah file1.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 file1.txt
```

Cek kembali dengan perintah `git status`, untuk melihat informasi pada `working directory`:

```sh
git status
```

Maka informasi yang muncul pada `working directory` saat ini, seperti berikut:

```sh
On branch main
nothing to commit, working tree clean
```

Pada informasi diatas, `working directory` sudah clean, yang artinya tidak ada perubahan apapun, karena semua perubahan yang tadi pada `file1.txt` sudah disimpan ke `repository`.