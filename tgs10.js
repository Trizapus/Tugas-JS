const NamaArray = [
    {Nama: `Triza`, Kelas: `XI RPL 1`},
    {Nama: `Novi`, Kelas: `XI RPL 3`},
    {Nama: `Nanda`, Kelas: `XI RPL 1`},
    {Nama: `Salwa`, Kelas: `XI RPL 3`},
    {Nama: `Reva`, Kelas: `XI RPL 1`},
    {Nama: `Mega`, Kelas: `XI RPL 1`},
    {Nama: `Santi`, Kelas: `XI RPL 3`},
    {Nama: `Sintia`, Kelas: `XI RPL 3`},
    {Nama: `Sri`, Kelas: `XI RPL 1`},
    {Nama: `Wita`, Kelas: `XI RPL 1`},

]
    
console.log(`Search Kelas:`);
function NamaFilter() {
    const filter = NamaArray.filter (itemfilter => {
        return itemfilter.Kelas == `XI RPL 1`
    });
    console.log(filter);
}
NamaFilter();