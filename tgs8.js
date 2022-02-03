class kegiatan {
    constructor(pagi, siang, malam) {
        this.Pagi = pagi;
        this.Siang = siang;
        this.Malam = malam;
    }
}
var seharihari = new kegiatan("Makan", "Mandi", "Tidur");
console.log(seharihari);