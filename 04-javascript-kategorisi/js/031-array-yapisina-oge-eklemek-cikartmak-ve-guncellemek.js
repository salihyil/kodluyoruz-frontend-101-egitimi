// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

// Array: basa oge eklemek -> unshift 
items.unshift(5)
console.log("5 : ", items)

// Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop() // son elemani lastItem icerisine ekledik
console.log("lastItem: ", lastItem, ", items: ", items)

// Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift() // ilk elemani firstItem icerisine ekledik
console.log("firstItem: ", firstItem, ", items: ", items)

// Array icindeki bir ogenin bilgisinin degistirilmesi:

// ilk ogenin degistirilmesi
items[0] = 5;
console.log(items)

// sonuncu ogenin degistirilmesi:
items[items.length - 1] = 1000
console.log(items)

items[2] = 10000
console.log(items)
////////////////////////////////////////////////////////////////////////////////////////////////////////

let items1= [ 10, 20, 30, 40]

// Array: sona oge/eleman eklemek -> push
    items1.push(50)
    console.log("50 eklendi: ",items1);

// Array: basa oge eklemek -> unshift 
    items1.unshift(5)

    console.log(items1); // cıktı: (6) [5, 10, 20, 30, 40, 50]

    //console.log(items1.unshift(5)); //cıktı: 6  oldu.

// Array: sondaki ogeyi cikarmak -> pop
let lastItem1 = items1.pop();
console.log(lastItem1, items1); //cıktı: 50 (5) [5, 10, 20, 30, 40]
////////////////////////////////
//splice method
items1.splice(5,0,100); // 5.indexe 100 ekledik.
console.log(items1);

items1.splice(1,3)  //items[1]dan başlıyarak 3 tane eleman sil demek bu
console.log(items1);