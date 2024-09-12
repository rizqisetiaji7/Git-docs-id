---
title: Snapshot & Hash
---

# Snapshot & Hash

## Snapshot

Pada meteri sebelumnya, perubahan file sering disebut sebagai versi. Akan tetapi, sebenarnya perubahan yang dilakukan bisa secara bersamaan pada beberapa file, hal ini berarti tidak ada yang namanya versi file.

Semua perubahan yang terjadi pada file akan direkam, atau dalam Git disebut Snapshot. Snapshot berisi semua perubahan yang terjadi di semua file yang di commit, serta setiap snapshot akan menghasilkan Hash atau checksum untuk memverifikasi apakah perubahan tersebut valid atau tidak, atau mudahnya bisa dianggap sebagai ID snapshot-nya.

## Hash

Setiap snapshot yang dilakukan, semuanya akan menghasilkan hash sebagai identitas snapshot-nya. Hash merupakan checksum untuk menghitung perubahan yang terjadi. Git menggunakan algoritma SHA-1 untuk menghitung hash. Alasan menggunakan algortima SHA-1 ini karena, digunakan bukan untuk security, tetapi hanya untuk membuat hash saja, sederhana, dan juga ringan algoritmanya. 

Hash dibutuhkan untuk menjaga data integrity, sehingga tiap snapshot yang sudah dilakukan tidak bisa diubah, hal ini karena secara otomatis merusak hash yang sudah dibuat.

Contoh hash Git: `30534aeabde65981732c6c469b7583483d379b00`

## Diagram Snapshot

Informasi yang di kalkulasi menggunakan Hash, informasinya tidak hanya perubahannya saja, akan tetapi terdapat informasi seperti `parent` atau commit sebelumnya, `author`, dan `message` karena setiap melakukan commit akan memberikan message pada commit tersebut.

Berikut merupakan diagram snapshot dalam Git:

![Diagram Snapshot](/snapshot-diagram.png)

- **Snapshot A**

   Contohnya pada snapshot A, atau perubahan pertama, `parent` masih kosong, karena ketika commit pertama belum terjadi perubahan sebelumnya. 

- **Snapshot B**

   Ketika melakukan perubahan dan melakukan commit lagi, maka Hash baru akan dibuat. Hash baru tersebut di kalkulasi dari Hash parent-nya atau commit sebelumnya. Pada contoh Hash parentnya adalah `5324...`, beserta perubahan pada `author`, `message`, dan perubahan snapshot-nya.

- **Snapshot C**

   Ketika melakukan commit yang ke-3 kali, itu juga sama. Hash akan dibuat yang baru dari parent-nya `4732...`, `author`, `message`, dan snapshot perubahannya.

::: warning :warning: PERINGATAN

Dikarenakan saling terhubung antar satu commit dengan commit sebelumnya, secara otomatis tidak bisa melakukan perubahan apapun pada perubahan sebelumnya. Karena jika memaksa melakukan perubahan pada snapshot sebelumnya, maka hash pada snapshot tersebut ikut berubah. 

Ketika hash tersebut berubah, maka snapshot setelahnya atau perubahan terbarunya sudah dianggap tidak valid lagi, karena parent-nya dianggap tidak ada, begitu juga akan merusak pada perubahan atau commit-commit selanjutnya.
:::

## Perhitungan Hash

Seperti pada penjelasan sebelumnya, perhitungan Hash dilakukan tidak hanya pada perubahan file, namun juga `parent`, `author`, dan `message`. Artinya perubahan pada Snapshot sebelumnya, akan menimbulkan efek berantai, karena semua hash selanjutnya akan berubah juga. Oleh karena itu, hal tersebut tidak bisa dilakukan di Git.

## HEAD

HEAD merupakan pointer menuju Hash paling akhir. Karena sangat menyulitkan jika harus menuliskan Hash value. Oleh karena itu, jika ingin menuju ke Hash paling baru, bisa menggunakan kata HEAD.

### Diagram HEAD

![HEAD Diagram](/head-diagram.png)

Pada diagram diatas, ketika pertama kali melakukan commit, maka HEAD pointernya menuju ke Hash `321425...`. Jika melakukan commit ke-2, ke-3, dst, maka HEAD pointer secara otomatis akan ke Hash paling akhir. Pada contoh diagram diatas Hash commit terbaru adalah `8783547...`, maka HEAD secara otomais berada pada Hash tersbut.