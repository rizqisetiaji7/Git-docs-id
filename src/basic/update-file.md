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

## Melihat Perubahan

Ketika melakukan perubahan, Git secara otomatis akan mendeteksi perubahan tersebut. Terkadang juga ingin mengetahui perubahannya apa saja yang terjadi pada file tersebut, untuk bisa melihat perubahan tersebut, Git memiliki perintah untuk melihat perubahannya, berikut perintahnya:

```sh
git diff
```

Jika perintah dijalankan, maka informasi yang muncul adalah seperti berikut ini:

```sh
diff --git a/file3.txt b/file3.txt
index a45eb5c..3b7186f 100644
--- a/file3.txt
+++ b/file3.txt
@@ -1 +1,2 @@
-Menambah File: Ini adalah file ke-3 # [!code --]
\ No newline at end of file
+Menambah File: Ini adalah file ke-3 # [!code ++]
+Mengubah File: Ini adalah text baris baru file ke-3 # [!code ++]
\ No newline at end of file
```

Pada informasi diatas, diperlihatkan apa saja yang diubah. Sebagai contoh pada `file3.txt`, sebelumnya hanya terdapat satu baris text yang ditandai dengan warna merah. 

Lalu untuk tanda yang berwarna hijau adalah perubahan terbaru dengan menambahkan text ke baris setelah text baris pertama.

Untuk langkah selanjutnya seperti pada langkah membuat file, tinggal melakukan commit perubahan `file3.txt` ke `repository`.

```sh
git add file3.txt

git status

git commit -m "Melakukan perubahan pada file3.txt"
```

## Tips

Untuk menambah maupun merubah file, Git bisa memindahkan dari `working directory` ke `staging index` dengan perintah `git add` lebih dari satu file sekaligus. Contohnya silahkan lakukan perubahan pada `file1.txt` dan `file2.txt`, setelah itu pindahkan ke `staging index`:

```sh
git add file1.txt file2.txt

git status
```

Setelah menjalankan perintah diatas, maka muncul informasi berikut:

```sh
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   file1.txt
        modified:   file2.txt
```

Terdapat 2 file yang di `modified` yaitu `file1.txt` dan `file2.txt`.

::: tip :bulb: TIPS
Jika banyak file yang diubah dan ingin menambahkannya ke `staging index` semuanya sekaligus, bisa dengan melakukan perintah berikut:

```sh
git add .
```

Tanda titik pada perintah diatas ketika dijalankan akan memindahkan seluruh perubahan pada `working direktory`.
:::

Langkah selanjutnya lakukan commit untuk memindahkan semua perubahan dari `staging index` ke `repository`:

```sh
git commit -m "Melakukan perubaha pada file1.txt dan file2.txt"
```

Informasi yang muncul setelah melakukan commit lebih dari satu file sekaligus:

```sh
[main e9ec81b] Melakukan perubaha pada file1.txt dan file2.txt
 2 files changed, 3 insertions(+), 1 deletion(-)
```