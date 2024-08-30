---
title: Konfigurasi
---

# Konfigurasi

Setelah selesai menginstal Git, hal pertama yang harus dilakukan adalah melakukan konfigurasi. Konfigurasi yang dilakukan adalah menambahkan name dan user email. Cara menambahkannya ketik perintah berikut pada terminal:

```sh
git config --global user.name "John Doe"
git config --global user.email "johndoe@mail.com"
```

:dart: _Masukkan name dan email sesuai identitas masing-masing._

**Perintah Untuk Melihat Seluruh Isi Konfigurasi:**

::: code-group
```sh [Command]
git config --list --show-origin
```

```{16,17} [Result]
file:C:/Program Files/Git/etc/gitconfig diff.astextplain.textconv=astextplain
file:C:/Program Files/Git/etc/gitconfig filter.lfs.clean=git-lfs clean -- %f
file:C:/Program Files/Git/etc/gitconfig filter.lfs.smudge=git-lfs smudge -- %f
file:C:/Program Files/Git/etc/gitconfig filter.lfs.process=git-lfs filter-process
file:C:/Program Files/Git/etc/gitconfig filter.lfs.required=true
file:C:/Program Files/Git/etc/gitconfig http.sslbackend=openssl
file:C:/Program Files/Git/etc/gitconfig http.sslcainfo=C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
file:C:/Program Files/Git/etc/gitconfig core.autocrlf=true
file:C:/Program Files/Git/etc/gitconfig core.fscache=true
file:C:/Program Files/Git/etc/gitconfig core.symlinks=true
file:C:/Program Files/Git/etc/gitconfig pull.rebase=false
file:C:/Program Files/Git/etc/gitconfig credential.helper=manager
file:C:/Program Files/Git/etc/gitconfig credential.https://dev.azure.com.usehttppath=true
file:C:/Program Files/Git/etc/gitconfig init.defaultbranch=main
file:C:/Users/Administrator/.gitconfig  core.editor="C:\Users\Administrator\AppData\Local\Programs\Microsoft VS Code\bin\code" --wait
file:C:/Users/Administrator/.gitconfig  user.email=johndoe@mail.com
file:C:/Users/Administrator/.gitconfig  user.name=John Doe
```
:::