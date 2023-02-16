/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  const newArr = [];

  let splittedDay = history.split(".");
  splittedDay.forEach((el) => {
    let day = el.split("-")[0];
    let menu = el.split("-")[1];

    newArr.push([day, [menu]]);
  });

  let object = {
    Senin: 0,
    Selasa: 0,
    Rabu: 0,
    Kamis: 0,
    Jumat: 0,
  };

  newArr.forEach((el) => {
    el[1].forEach((elemen) => {
      let menus = elemen.split(",");

      menus.forEach((food) => {
        let filter = listHarga.filter((e) => e.nama === food);

        switch (el[0]) {
          case "Senin":
            object.Senin += filter[0].harga;
            break;

          case "Selasa":
            object.Selasa += filter[0].harga;
            break;

          case "Rabu":
            object.Rabu += filter[0].harga;
            break;

          case "Kamis":
            object.Kamis += filter[0].harga;
            break;

          case "Jumat":
            object.Jumat += filter[0].harga;
            break;
          default:
            break;
        }
      });
    });
  });

  let total = 0;

  let newObject = {};
  for (let key in object) {
    total += object[key];
    newObject[key] = 10000 - object[key];
  }

  let tabungan = 50000 - total;

  newObject.TotalTabungan = tabungan;
  return newObject;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
