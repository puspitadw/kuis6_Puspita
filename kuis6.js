const products = [
    {
        id: 1,
        name: "Jam Tangan",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
    },
    {
        id: 2,
        name: "Jam Tangan",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
    },
    {
        id: 3,
        name: "Jam Tangan",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
    },
    {
        id: 4,
        name: "Jam Tangan",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
    },
    {
        id: 5,
        name: "Jam Tangan",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
    },
]

let main = document.getElementById("main");
products.forEach((products) =>{
    document.write(`
        <figure>
            <img src=${products.image} alt="">
            <figcaption>
                <h1>${products.name}</h1>
                <h2>${products.price}</h2>
                <button onClick ="confirm('Apakah anda ingin beli produk ini?')">Beli sekarang</button>
                <button onClick ="alert('Anda menyukai produk ini')">Like</button>
                <button onClick="prompt('Silahkan Isi komentar anda')">Coment</button>
            </figcaption>
        </figure>
    `)
})