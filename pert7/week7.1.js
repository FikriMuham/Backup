
// let mahasiswa = ["Fikri", 19, true];
// console.log(mahasiswa[1]);

// //penulisan array
// let angka = [1,2,3,4,5,6,7];
// //manual
// let hari = [];
// hari[0] = "senin";
// hari[1] = "selasa";
// hari[2] = "rabu";
// hari[4] = "jumat";
// console.log(hari.join("\n"));

// //manipulasi array
// let hewan = ["burung","ayam","tikus"];

// //push -> menambah data di index terakhir array
// hewan.push("kecoa","anjing")

// //pop -> menghapus data di index terakhir array
// hewan.pop();
// hewan.pop();

// //unshift -> menambah data di index awal array
// hewan.unshift("apa?","cacing")

// //shift -> menghapus data di index awal array
// hewan.shift();
// hewan.shift();

// //splice -> menambahkan data di index dimanapun array
// console.log(hewan.splice(1,0, "badak", "macan"));
// console.log(hewan);

// //length -> menampilkan pjg array
// console.log(hewan.length);

// //sort -> menyortir sesuai urutan abcad/angka pada array
// let angka = [3,7,9,1];
// angka.sort();
// console.log();

// //cara menambahkan semua nilai
// let tambah = (a,b) => a+b;
// console.log(angka.reduce(tambah));

// //object
// //membuat object literal
// let mhs = {
//     nama : "Fikri",
//     kelas : "3C"
// }
// let mhs1 = {
//     nama : "Fikri",
//     kelas : "3C"
// }

// //function declaration
// function buatObject(nama,kelas,nim){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa,kelas = kelas;
//     mahasiswa.nim = nim;
//     return mahasiswa;
// }

// let mhs2 = buatObject("alif","3C", 19090068);

// //construtor
// function Mahasiswa (nama,nim,kelas,jurusan){
//     this.nama = nama;
//     this.kelas = kelas;
//     this.nim = nim;
//     this.jurusan = jurusan;

// }
// let mhs3 = new Mahasiswa ("alif", 19090068, "3C", "TI")

// //manipulasi
// const namaObject = {
//     nama : "alif",
//     kelas : 3
// }
// console.log(namaObject);

// //add
// namaObject.jurusan= " TI ";
// console.log(namaObject);

// //update
// namaObject.nama = "rijal";
// console.log(namaObject);

// //delete
// delete namaObject.kelas;
// console.log(namaObject);

//function di dalam object 
let orang = {
    nama : "rijal",
    umur : 19,
    sayHai : function(){
        alert("Haii...nama saya : "+this.nama +" dan umur saya : " +this.umur )
    }

}