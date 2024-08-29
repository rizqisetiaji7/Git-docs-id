---
title: Repository
---

# Git Repository

**_Repository_** merupakan sebutan untuk project di Git. Dengan membuat folder kosong atau yang sudah berisi file, lalu membuatnya sebagai Git Repository. Atau bisa juga dengan cara `Clone` Git Repository yang sudah ada dari Server Git.

## Membuat Repository

Untuk membuat Repository, hanya perlu menjalankan perintah `git init` pada terminal. Dan harus dilakukan didalam folder yang akan dijadikan sebagai Git Repository. Setelah membuat Git Repository, akan terdapat folder baru bernama `.git`.
Folder `.git` ini merupakan folder yang berisikan database Git, kita tidak perlu melakukan apapun atau tidak perlu merubah apapun yang ada didalam folder `.git`.

### Git Init

Menjalankan perintah untuk membuat repository. Sebagai contoh membuat repository didalam folder `git-src`

```sh
mkdir git-src
cd git-src
git init
```

Jika berhasil maka akan muncul keterangan seperti berikut:

```sh
Initialized empty Git repository in D:/Programming/git-src/.git/
```

Jika ingin melihat isi dari folder `.git`, lakukan perintah berikut:

```sh
cd .git
ls -l
```

Setelah perintah diatas dijalankan maka akan muncul informasi dari folder `.git` seperti berikut:

```sh
total 7
-rw-r--r-- 1 Administrator 197121 112 Aug 28 16:11 config     
-rw-r--r-- 1 Administrator 197121  73 Aug 28 16:11 description
-rw-r--r-- 1 Administrator 197121  21 Aug 28 16:11 HEAD       
drwxr-xr-x 1 Administrator 197121   0 Aug 28 16:11 hooks/     
drwxr-xr-x 1 Administrator 197121   0 Aug 28 16:11 info/      
drwxr-xr-x 1 Administrator 197121   0 Aug 28 16:11 objects/   
drwxr-xr-x 1 Administrator 197121   0 Aug 28 16:11 refs/
```

::: tip :bulb: PENTING
Disarankan untuk mempelajari perintah-perintah terminal atau command prompt terlebih dahulu, agar lebih mudah memahami konteks pembuatan file, folder, berpindah direktory, dll.
:::

Setelah masuk ke folder `.git`, sekarang kembalikan lagi ke folder root `git-src` dengan perintah:

```sh
cd ../
```

### Git Status

Perintah Git status digunakan untuk mengecek terdapat perubahan aja saja dan file mana saja, apakah ada file baru, atau file yang dihapus. Semua informasi perubahan bisa di cek dengan perintah git status tersebut.

```sh
git status
```

Dikarenakan folder masih kosong dan belum ada perubahan atau penambahan file apapun, maka muncul pesan seperti berikut:

```
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```