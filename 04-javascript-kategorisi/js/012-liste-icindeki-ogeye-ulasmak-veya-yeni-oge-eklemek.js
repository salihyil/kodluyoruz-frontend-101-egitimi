// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

// let lastChild = document.querySelector("ul#list>li:last-child")
// lastChild.innerHTML = "son oge degisti..."

// let firstChild = document.querySelector("ul#list>li:first-child")
// firstChild.innerHTML = "ilk oge degisti..."

// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement('li')

// liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// // ulDOM.append(liDOM) // en sona ekler
// ulDOM.prepend(liDOM)

let lastChild =document.querySelector("ul#list>li:last-child")
lastChild.innerHTML= "Son değer değişti."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')
let liDOM1 = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturdığumuz öge"
liDOM1.innerHTML = "lidom1 eklendi. "

ulDOM.append(liDOM1) //listenin sonuna ekleme yaptı.
ulDOM.append(liDOM) //listenin sonuna ekleme yaptı.
ulDOM.prepend(liDOM) // listenin başındaki Lorem'i  LiDOM içindeki değer neyse onla değişti.