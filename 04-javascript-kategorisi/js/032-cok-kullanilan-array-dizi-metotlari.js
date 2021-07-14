// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

// /*
// let items = [1, 2, 3, 4, 5] 

// // Array icinde Array:
// let femaleUsers = ["Ayse", "Hulya", "Merve"]
// let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

// items.unshift(femaleUsers)

// items.push(maleUsers)

// console.log(items)

// console.log(items.length)
// console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
// console.log(items[0][0]) // Ayse bilgisine ulastik :)

// // Array icerisinden oge ayirmak -> splice(pos, item?)
// let newItems = items.splice(1, 5)

// console.log("newItems: ", newItems)
// console.log("items: ", items)
// // Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
// items.unshift("lorem")
// items.push("ipsum")

// console.log( items.indexOf("ipsum") )

// // Array Kopyalamak -> slice, [...ES6]
// let copyItems = items
// console.log(items)

// copyItems.pop() // son ogeyi cikarttik
// console.log("copyItems", copyItems)
// console.log("items", items)

// console.log("kopyalandiktan sonraki hali:")
// copyItems = items.slice() // kopyalama yapti
// copyItems.pop() // son ogeyi cikarttik
// console.log("copyItems", copyItems)
// console.log("items", items)

// let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
// console.log(es6Items)

// // Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
// let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
// console.log(allUsers)

// // Array icerisindeki bilgiyi String'e cevirmek -> toString, join
// console.log(allUsers.toString())
// console.log(allUsers.join(" --- "))


// // Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
// allUsers.splice(allUsers.length -1, 0, "Melissa")
// allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
// console.log(allUsers)
// */

// let items = [1, 2, 3,4,5]

// let famaleUser = ["ayse","hulya","merve"]
// let maleUser = ["ahmet", "hasan","mehmet"]

// items.unshift(famaleUser); //famaleUser'ı items dizisinin başına ekledik. 
// console.log(items); //çıktı: (6) [Array(3), 1, 2, 3, 4, 5]

// items.push(maleUser);
// console.log(items); // çıktı: (7) [Array(3), 1, 2, 3, 4, 5, Array(3)]

// console.log(items[0][0]); //cıktı: ayse
// console.log(items[0].length); //cıktı: 3
// //array içinden öge ayırmak  // slice ile splice karıştırma!

// let newItems = items.splice(1,5) //slice 2indexten 4 kadar olanları items'den ayırıyor.
// console.log("newItems",newItems); //cıktısı: newItems (5) [1, 2, 3, 4, 5]
// console.log("items",items); //çıktısı: items (2) [Array(3), Array(3)]

// //array içerisindeki ögenin index bilgisini bulmak -> indexOf('value')
// items.unshift("lorem");
// items.push("ipsum");
// console.log(items.indexOf("ipsum")); //ipsumun 3. indexte olduğunu öğrendik. 

// //array kopyalama -> slice
// let copyItems = items
// console.log(items);

// copyItems.pop()
// console.log("copyItems",copyItems);
// console.log("items",items);

// console.log("kopla sonra:");
// copyItems=items.slice();// items'ı kopyaladık.
// copyItems.pop(); //son ögeyi çıkardık.
// console.log(copyItems); // cıktı:   (2) ["lorem", Array(3)]  kopyadan öge silindi. itemsdan silinmedi slice sayesinde
// console.log(items);// çıktı: (3) ["lorem", Array(3), Array(3)]

// let es6 = [...items] // es6 ve sonrası için gelen kopyalama işlemi
// console.log("let es6 = [...items]: ",es6);

// let allUsers = [...famaleUser,...maleUser] // birden fazla arrayi birleştirdik
// console.log(allUsers); //çıktı (6) ["ayse", "hulya", "merve", "ahmet", "hasan", "mehmet"]

// //Array içerisindeki bilgiyi String'e çevirmek -> toSting veya join
// console.log(allUsers.toString()); //çıktı: ayse,hulya,merve,ahmet,hasan,mehmet
// console.log(allUsers.join(" -- ")); // çıktı: ayse -- hulya -- merve -- ahmet -- hasan -- mehmet

// //İstediğimiz index bilgisine öge eklemek splice(index,0,value)

// allUsers.splice(allUsers.length-1 , 0 , "Melissa") //sondan bir öncekine ekleme yaptık.
// allUsers.splice(Math.floor(allUsers.length/2) , 0 , "Lorem"); // (8) ["ayse", "hulya", "merve", "Lorem", "ahmet", "hasan", "Melissa", "mehmet"] ortasına Lorem ekledik.
// console.log(allUsers); //çıktı: (7) ["ayse", "hulya", "merve", "ahmet", "hasan","Melissa","mehmet" ]


// //////////////////////////////////////////////////////////////////////////////////////////
// /*.forEach() 
// örnek Eğer bir dizide her bir eleman için bir fonksiyon çalıştırmak istiyorsak bunu forEach metoduyla yapabiliriz.
//  Bu metot sayesinde dizideki elemanlar için ayrı ayrı fonksiyon çağırmaktansa tek seferde çağırıp işimizi kolaylaştırıyoruz.
// */

// const malzemeler = ["yumurta", "un", "süt"];

// malzemeler.forEach(function(malzeme, malzemeIndeksi,dizininKendisi) {
//     console.log(malzeme, malzemeIndeksi,dizininKendisi);
// });
// /* çıktısı: yumurta 0 (3) ["yumurta", "un", "süt"]
//             un 1 (3) ["yumurta", "un", "süt"]
//             süt 2 (3) ["yumurta", "un", "süt"]
// */

// //////////////////////////////////////////////////////////////////////////////////////////
// /*.map() Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat 
// forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
// */

// // Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:
// const sayilar = [1,2,3];

// let sayilarin5kati = sayilar.map(function(sayi) {
//     return sayi*5;
// });

// console.log(sayilarin5kati);
// // Çıktı olarak [5,10,15] görmeyi bekleriz.

// console.log(sayilar);
// // Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

// //////////////////////////////////////////////////////////////////////////////////////////
// /*.some():  -Some metodu, bir dizinin içerisinde, belirtilen bir koşulu sağlayan en az bir eleman olup olmadığını kontrol etmeye yarar.
//             -Dizi içerisinde koşula uyan tek bir elemanın olması sonucun "true" dönmesi için yeterlidir.
//             -"Boolean" (true veya false) olarak döner.
// */
// const sayilar = [4,5,6];

// // sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
// const sonuc1 = sayilar.some(function(sayi) {
//     return sayi > 5 ;
// });

// console.log(sonuc1); // çıktı: true olacak.
// // Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.


// const sonuc2 = sayilar.some(function(sayi) {
//     return sayi <3;
// });

// console.log(sonuc2); //cıktısı: false olacak:
// // Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz. 


// //////////////////////////////////////////////////////////////////////////////////////////
// /*.every(): -every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
//             --some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
//             -True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.
// */
// const sayilar = [4,5,6];

// const sonuc1 = sayilar.every(function(sayi) {
//     return sayi > 3;
// });

// console.log(sonuc1);
// // Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


// const sonuc2 = sayilar.every(function(sayi) {
//     return sayi > 5;
// });

// console.log(sonuc2);
// // Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


// const sonuc3 = sayilar.every(function(sayi) {
//     return sayi > 7;
// });

// console.log(sonuc3);
// // Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.

// //////////////////////////////////////////////////////////////////////////////////////////
// /*.filter(): -filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
//              -Yeni oluşacak diziyi bir değişkende saklıyoruz.
//              -Orijinal dizi bozulmuyor.     
// */
// const sayilar = [1,2,3,4,5];

// const filtrelenmisSayilar = sayilar.filter(function(sayi) {
//     return sayi >3;
// });

// console.log(filtrelenmisSayilar);
// // Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

// console.log(sayilar);
// // Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

// //////////////////////////////////////////////////////////////////////////////////////////
// /*.find():  -Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
//             -Diğer metotların aksine find metodu elemanın kendisini döner.
//             -Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
//             -Koşulu sağlayan bir eleman bulamazsa undefined döner.   
// */
// const sayilar = [4,5,6,7];

// const bulunacakEleman1 = sayilar.find(function(sayi) {
//     return sayi === 5;
// });
// console.log(bulunacakEleman1);
// // Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


// const bulunacakEleman2 = sayilar.find((sayi) => {
//     return sayi > 5;
// });
// console.log(bulunacakEleman2);
// // Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


// const bulunacakEleman3 = sayilar.find(function(sayi) {
//     return sayi < 3; 
// });
// console.log(bulunacakEleman3);
// // Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

let a = [4,5,2,7,6,1]
console.log(a);

const x = a.sort();
console.log(x);
const ters = x.reverse();
console.log(ters);
    