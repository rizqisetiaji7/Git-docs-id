--- 
title: Menghapus File
---

# Menghapus File

Untuk melakukan hapus file di [Repository](/git-basic/repository), cukup lakukan delete file atau foldernya. Maka secara otomatis Git akan mendeteksi file atau folder yang hilang. Sama seperti menambah dan menghapus, jika ingin menyimpan secara permanen di `Repository`, maka harus menambahkan operasi tersebut ke `Staging Index`, lalu commit ke `Repository`.

## Praktik

Sebagai contoh pada repository `git-src`, silahkan hapus `file3.txt`. Jika sudah jalankan perintah berikut:

```sh
git status
```

Setelah menjalankan perintah `git status`, maka akan muncul informasi seperti berikut:

```sh
On branch main
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)        
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    file3.txt

no changes added to commit (use "git add" and/or "git commit -a") 
```

Pada informasi di atas terdapat `deleted: file3.txt`. Artinya, git telah mendeteksi perubahan file yang hilang, yaitu `file3.txt` yang telah dihapus.

Untuk menyimpan perubahan diatas, maka pindahkan ke `Staging index`, lalu terakhir commit ke `repository`:

::: code-group
```sh [Command]
git add file3.txt

git status
```

```sh [Output]
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    file3.txt
```
:::

Jalankan perintah commit:

::: code-group
```sh [Command]
git commit -m "Menghapus file3.txt"
```

```sh [Output]
[main d42ace9] Menghapus file3.txt
 1 file changed, 2 deletions(-)   
 delete mode 100644 file3.txt
```
:::

Git akan mendeteksi perubahan file, meskipun file tersebut telah dihapus. Sebenarnya Git masih menyimpan riwayat atau versi perubahan sebelumnya. Sehingga tidak perlu khawatir jika ingin mengembalikan ke perubahan atau ke versi file sebelum dihapus.