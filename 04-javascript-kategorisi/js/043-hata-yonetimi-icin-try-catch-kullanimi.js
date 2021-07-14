// hata-yonetimi-icin-try-catch-kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp
/*
let products;

try {
  products.forEach(item => console.log(item));
} catch (error) {
  console.log("error:", error)
  // products = [1, 2, 3]
  // products.forEach(item => console.log(item));
}


console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)*/

let products;

try{ //
  products.forEach(item => console.log(item)); //eğer products varsa çalışmasını bekliyoruz.
} catch(error){
  console.log("error: ", error); // hata görürsen burada yazdır.
  //ekran çıktısı: TypeError: Cannot read property 'forEach' of undefined
  //               at 043-hata-yonetimi-icin-try-catch-kullanimi.js:24
}

console.log("Hata yonetimi düzgün çalışıyor.");

let info = "kodluyoruz"
console.log(info);

function valid(){
  try {
      if (document.querySelector("#dogumTarihi").value == "") {
          throw 'Doğum tarihini boş geçemezsiniz';
      };
  }catch(err) {
      alert(err);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function errors() {
  let message,inputValue;
  inputValue = document.querySelector("#data").value;
  message = document.querySelector("#result");
  message.innerHTML = "";
  try {
    if(inputValue == "") throw "Bu alan boş bırakılamaz";
    if(isNaN(inputValue)) throw "Bu alana sadece sayı girmelisiniz"
    inputValue = Number(inputValue);
    if(inputValue < 5 ){
      throw "Girilen sayı 5'ten küçük olamaz."
    }
    else if (inputValue > 15){
      throw "Girilen sayı 15'den büyük olamaz."
    }
  } catch (e) {
    message.innerHTML = e;
  }
  finally{
    document.querySelector("#data").value = "";
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//String.concat() Returns a string that contains the concatenation of two or more strings.
var s = "Hacker";
var t = "Rank";
var y = "Salih"
var u = s.concat(t,y);
console.log(s + " " + t);
console.log("u:",u); //çıktı: HackerRankSalih

/***************************************************************/

//String.includes()
var s = "HackerRank"; 
console.log(s.includes() + " " + s.includes("")); //çıktı: false true
console.log(s.includes("hack") + " " + s.includes("Rank") + " " + s.includes("Hack")); //çıktı: false true true

//String.endsWith() Çağıran dizenin bağımsız değişken olarak iletilen başka bir dizenin karakterleriyle bitip bitmediğini gösteren bir boole döndürür.
console.log(s.endsWith() + " " + s.endsWith("")); //false true
console.log(s.endsWith("rank") + " " + s.endsWith("Rank")); //false true

console.log(s.match());// ["", index: 0, input: "HackerRank", groups: undefined]
console.log(s.match("ac"));// ["ac", index: 1, input: "HackerRank", groups: undefined]

console.log(s.repeat(3));// HackerRankHackerRankHackerRank

console.log(s.replace("a", ""));  //HckerRank
console.log(s.replace("[R]", "Dana")); //HackerDank

console.log(s.search("[e-z]")); //3
console.log(s.search("Rank")); //6 6. indexten başlıyo demek

console.log(s.slice(-4, 8)); //Ra
console.log(s.slice(0, 6) + " " + s.slice(6)); //Hacker Rank (0dan 6.indexe kadar 6. dahil değil)
console.log(s.slice(-4, -2)); //Ra çıktısı s.length -4 olarak hesaplanıyo. s.slice(6,8) demek aslında

var s = "HackerRank";

console.log(s.split(""));//(10) ["H", "a", "c", "k", "e", "r", "R", "a", "n", "k"]
console.log(s.split("k"));//(3) ["Hac", "erRan", ""]
console.log(s.split());//["HackerRank"] split yeni dizi oluşturuyor.




var a = "    HackerRank    ";
console.log("Original Length: " + a.length);
a = a.trim(); //18
console.log("Trimmed Length: " + a.length); //10 trim() metodu aradaki boşlukları kaldırıncaki değişkenin uzunluğunu söyler.