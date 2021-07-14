// ********** Merhaba Dunya Ornekleri ********** 

// Dokumana(document) Yazdirma Islemi ile Merhaba Dunya:
// document.write('Merhaba Dunya');

// Uyari Mesaji (Alert) ile Merhaba Dunya:
// alert("Merhaba Dunya")

// console.log ile Merhaba Dunya:
let dogru=true;
console.log(dogru);

let Sym1 = Symbol("Sym");
console.log(Sym1);

const a=5;
//a=4; // hata: Uncaught TypeError: Assignment to constant variable.
console.log(a);

const b=[1,2,3,4];
//b=[1,2,3,4,5]; // hata:Uncaught TypeError: Assignment to constant variable. 

//Değişken isimleri harf, _ veya $ işareti ile başlayabilir. 
//Fakat ES5 (ECMAScript 5) birlikte gelen özellikle UNICODE kodları kullanılırken kaçış karakteri olarak kullanılan \ işareti ilk karakter olarak kullanılabilir.
 
var formaNumarasi; 
let $tcKimlikNo ; 


let sayi1=10;
let sayi2=20;

console.log(typeof 42);
Number.isFinite(0) //true
console.log(Number.isFinite(11));

let ab =console.log([1]+[1,2,3]); //11 yan yana duruyor
console.log(typeof(ab)); //undefined


console.log(true+false);//1+0=1

//    "/" operatörü numeric işlem yapacağından Başlangıçta number olduğu için "6" ifadesi numaric coercion'a uğrar Number("6") ve 6 değerini döner 12 / 6 bu şekli alır
console.log(12 / "6");//SONUC: 2

console.log([1,2,3]>null) //sonuc: false

console.log("number"+1+2); //sonuc: number12

console.log("foo" + +"bar") // +"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonuç= "fooNaN"
console.log('true' == true) //Number('true')=>NaN //NaN == true //NaN == 1 //Sonuç= false
console.log(null=="") // null sadece kendine ve undefined'a eşit olduğundan //Sonuç= false


//(0 || "0") && {} //(false || true) && {} => dolu string true döndüğünden 
//(true) && {} => || operatörü ilk bulduğu true değeri, && operatörü ilk bulduğu false değeri döner
//true && {} => && operatörü false değer bulamazsa son bulduğu değeri döndürür. 
console.log(0 || " 0" && {}) //Sonuç= {}

console.log(["a"] > null); //Sonuç= false
// "a" > null => array toString metodunun içine girer 
// NaN > null => Numeric dönüştürmeye girer 
// NaN > 0 