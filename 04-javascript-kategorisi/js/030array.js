// array - dizilerle calismak

// Array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(typeof(items[2]));

let emptyArray =[]  //bir form var biz bu listenin içerisine elemanları eklemek istiyebiliriz. Bu yüzden boş dizi oluşurabiliriz.

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(items.length);
document.querySelector("#info").innerHTML = `<b>${items.length}</b>`

// document.querySelector('#info').innerHTML = items.length

// Array icindeki ilk elemanin cagirilmasi
console.log(items[0]);

// Array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1]);

// Array icindeki ortadaki elemanin cagirilmasi
console.log("Array'in ortadaki değeri: ",
    items[ Math.floor(items.length / 2)] //let items = [1, 2, 3, isActive, domain] çıktı 3 olmalı:
);

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(typeof(items)) // çıktı: object
//diğer yazım items değiişkeni array midir?
console.log(Array.isArray(items)); // çıktı: true

// hangileri isArray -> True verir ? 
console.log("[]: ",Array.isArray([])); // çıktı: true
console.log("1: ",Array.isArray(1));    // çıktı: false
console.log("true: ",Array.isArray(true));  // çıktı: false

//////////////////////////////////////////////////////////////////////////////////////////

let arr = [1,2,"bir string ifade",false,{title:"kodluyoruz"}];
console.log("{title: 'kodluyoruz'} typeof'u : " + typeof(arr[arr.length-1])); 
console.log(arr); //çıktısı: (5) [1, 2, "bir string ifade", false, {…}]

//////////////////////////////////////////////////////////////////////////////////////////

let arr1 = [1,2,3,"dört","beş"];
arr1.forEach((itemler,indexler,arr1içindekiler) => {
  console.log(itemler,indexler,arr1içindekiler);
});
/* çıktı: 1 0 (5) [1, 2, 3, "dört", "beş"]
          2 1 (5) [1, 2, 3, "dört", "beş"]
          3 2 (5) [1, 2, 3, "dört", "beş"]
          dört 3 (5) [1, 2, 3, "dört", "beş"]
          beş 4 (5) [1, 2, 3, "dört", "beş"]
 */


////////////////////////////////////////////////////////////////////
// Arrow fonksiyonda 

a = () => {
  console.log("hello world");
}
a(); //çıktı: hello world
//------------------------------------------
let hesap = sayi => sayi * 0.25
console.log(hesap(2)); //çıktı:0.5

////////////////////////////////////////////////////////////////////