// // ** Ilk Fonksiyonumuzu Tanimlamak:

// function helloWorld() {
//     console.log("Hello World")
// }

// function hello() {
//     console.log("Merhaba")
//     helloWorld()
// }


// // hata alabiliriz...
// // function userCheck () {
// //     if (userName && age >= 18) {
// //         info.innerHTML = "ehliyet alabilirsiniz"
// //     } else if (!userName) {
// //         info.innerHTML = "Kullanici Adiniz Yok"
// //     } else if ( !(age >= 18) ) {
// //         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
// //     }
// // }


// hello() // calistir


// function hello() {
//     console.log("Merhaba");
// }

// hello();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // JavaScript Asenkron bir yapıdır.

// function printScreen1 (){
//     console.log("İlk ekran çıktısı");
// }

//  function printScreen2 (){
//    setTimeout(function(){
// console.log("İkinci ekran çıktısı")  
// }, 3000);
// }

// function printScreen3 (){
//     console.log("Üçüncü ekran çıktısı");
// }
// printScreen1();
// printScreen2();
// printScreen3();

////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("asekron çalışma örnek");

function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }

 printScreen2(printScreen1, printScreen3);
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 let carpim = (sayi1,sayi2) => (sayi1*sayi2);
 console.log(carpim(2,4));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Herhangi bir yarıçapa sahip bir dairenin alanını hesaplayan fonksiyonu yazınız.
function daireAlaniHesaplama (r, PI=3.14) {
  let daireAlani=PI*r*r;
  return daireAlani;
}
let donenSonuc =daireAlaniHesaplama(2);
console.log("Dairenin alanı:",donenSonuc);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Örnek 3: Farklı yarıçaplardaki iki farklı dairenin, alanları çarpımını veren bir fonksiyon yazınız.

function daireAlaniHesaplama (r, PI=3.14) {
  return PI*r*r;
}
function ikiAlanCarpim(alan1,alan2) {
  return alan1*alan2;
}
let birinciDaireAlani = daireAlaniHesaplama(5);
let ikinciDaireAlani = daireAlaniHesaplama(6);
let ikiAlanCarpimSonucu = ikiAlanCarpim(birinciDaireAlani,ikinciDaireAlani);
console.log(birinciDaireAlani + " * " + ikinciDaireAlani + " = " + ikiAlanCarpimSonucu);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Örnek 4: İç İçe fonkisyon örnek

function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log(name + " do you have a car ?");
      };
      break;

    case "book":
      return function (name) {
        console.log(name + " what is your favorite author?");
      };
      break;

    case "software":
      return function (name, type) {
        console.log(name + " are you interested in " + type + "?");
      };
      break;

    default:
      return function (name) {
        console.log(name + "  how are you ?");
      };
      break;
  }
}
var softwareQuestion = Question("software");
softwareQuestion("Cemre","nodejs");