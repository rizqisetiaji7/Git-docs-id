---
title: The Three States
---

# The Three States

Git memiliki tiga state terhadap file yang di kelola, yaitu `modified`, `staged`, dan `commited`.

- `Modified` artinya mengubah atau memodifikasi (menambah, mengedit, & menghapus) file, namun belum disimpan secara permanen di repository.
- `Staged` artinya menandai file yang telah dimodifikasi dan akan disimpan secara permanen ke repository. Contohnya ketika mengubah sebanyak lima file, tapi yang akan disimpan hanya tiga file saja, maka tiga file tersebut akan masuk ke `Staged` state.
- `Commited` artinya data sudah aman disimpan di repository setelah berpindah dari `Staged` state.

## Three Section

Pada tiga state sebelumnya pada Git dilakukan di section yang berbeda-beda. Tiga section yang dimaksud diantaranya `Working Directory`, `Staging Area`/`Staging Index`, dan `Repository`.

- `Working Directory` merupakan section dimana file dimodifikasi. 
- `Saging Area`/`Staging Index` merupakan section dimana file sudah disiapkan untuk disimpan secara permanen. Pada `Staging Area` semua informasi perubahan file akan disimpan.
- `Repository` merupakan section dimana semu file dan database riwayat versi file disimpan.

## Diagram Three Tree

| Working | -> | `git add` | -> | Staging Index | -> | `git commit` | -> | Repository |
| ------- | -- | --------- | -- | ------------- | -- | ------------ | -- | ---------- |