let nama = ["triza", "yogi", "iza", "zaza", "Triza"];
let cari = "Triza";

function CariNama(nama, cari) {
    for (var i = 0; i < nama.length; i++) {
        if (cari == nama [i]) {
            console.log(` ${nama[i]} kelas: XI RPL 1`);
        }
    }
}
CariNama(nama, cari);