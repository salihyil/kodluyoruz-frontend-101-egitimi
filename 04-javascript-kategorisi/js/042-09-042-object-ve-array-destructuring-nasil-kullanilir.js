// Object ve Array Destructuring Nasil Kullanilir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
/*
// Object Destructuring:

let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1", 
  serverName: "kodluyoruz.org"
}

// obje icindeki bilgilerin tek seferde cikarilmasi
// let userName = settings.userName
// console.log(userName)

// rename && destructuring
let {userName: user, password, isActive, ip:serverIP, serverName} = settings

console.log(user, password, isActive, serverIP, serverName)
console.log(settings)
console.log(user)


// obje icindeki bazi bilgilerin cikarilmasi
let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
// eger degisken ismi daha once tanimlanmadiysa:
// let {userName, password, isActive, ...newSettings} = settings

console.log(userName2, password2, isActive2, newSettings)

// objenin destructuring ile kopyalanmasi

// HATALI!!!
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)

// DOGRUSU :)
let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

// object kopyalama ile ayni... let settings2 = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object Destructuring: Nesne yıkımı

let settings = {
  userName: "loremIpsum",
  password1: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  yas: 10,
  serverName: "kodluyoruz.org"
}
//obje içindeki bilgilerin tek seferde çıkarılması
/*  let UserName = settings.userName;
    console.log(userName);
*/
//Yukarıdaki şekilde yazmak zor bu sebepten destructuring daha kolaylaştırıyor. settings objesi içindeki elemanlara ulaşmayı kolaylaştırır.
//rename ve destructuring 
let {userName: user, password1, isActive, ip:serverIP, serverName} = settings;
console.log(user); //çıktı: loremIpsum

//obje içerisindeki bazı bilgilerin çıkarılması
let {userName:userName2, password1:password2, isActive:isActive2, ...newSettings} = settings;  // ... geri kalan objeleri(ip ve serverName'i) newSettings'in içine at demek.
console.log(newSettings);//çıktı: {ip: "127.0.0.1", serverName: "kodluyoruz.org"}
console.log(newSettings.yas);

//objenin destructuring ile kopyalanması
//içindekileri al yeni bir yapıya koy
let settings2 = {...settings};
settings2.userName = "Değişen bilgi"; //userNameleredeki çıktılar farklı değerler gösteriyor

console.log("settings", settings);  //çıktı: {userName: "loremIpsum", password1: "BadPassword", isActive: false, ip: "127.0.0.1", serverName: "kodluyoruz.org"}
console.log("settings2", settings2);//çıktı: {userName: "Depişen bilgi", password1: "BadPassword", isActive: false, ip: "127.0.0.1", serverName: "kodluyoruz.org"}

//objectler için {} içine alırken arrayler [] içine alıyoruz!!!!
//Örnek array
let score = [100, 200, 300, 400]
let [score1, score2, ...otherScore] = score;
console.log(score1, score2, otherScore);

let copyOfScore = [...score];
copyOfScore[0] = 900;
console.log(copyOfScore);//çıktı (4) [900, 200, 300, 400]
console.log(score);//çıktı: (4) [100, 200, 300, 400]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// destructuring cikarma yapmak
const cikarma = ( { sayi1, sayi2 } ) => { // Bu satira dikkat
  return sayi1 - sayi2;
 }
 const sayilar = {
  sayi2: 3,
  sayi1: 5
 }
console.log("cıkarma: ", cikarma(sayilar)); // sonuc 2

// destructuring toplama yapmak
const topla = ({x,y} ) => {
  return x + y;
}
const numbers = {
  x: 4,
  y: 5 
}
console.log("topla: ", topla(numbers)); //sonuc 9

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const toplama = ({ sayi1, sayi2, ...args }) => {
  let sonuc = sayi1 + sayi2;
  for (let sayi in args){
   sonuc += args[sayi]; 
  }
  
  return sonuc;
 }
 const sayilar1 = {
  sayi1: 8,
  sayi2: 4,
  sayi3: 7,
  sayi4: 9,
  sayi5: 11
 }
 console.log(toplama(sayilar1)); // 39 doner

/* Bireysel Denemeler *************************************************************************************************************** */
let deneme = {
   a1: 1, 
   b2: 2, 
   c3: 3 
}
let boyleYapma = deneme.a1; // uzun 
console.log("let boyleYapma = deneme.a1;",boyleYapma); 

let {a1,b2,c3} = deneme;
console.log("let {a1,b2,c3} = deneme; a1 çıktısı:",a1);

//Ama en önemlisi destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. 
//Yani fonksiyona parametre girerken de destructuring yapabiliriz;

let topla1 = ({b2,a1}) => { //a1 ve b2 değişken olduğu için sırası farketmeden yazılabilir. Yazmayada gerek yok 
  return b2+a1;
}
console.log("a1+b2= ",topla1(deneme)); //Çıktı 3


let topla2 = () => { // let {a1,b2,c3} = deneme; Yazdığımız için  Topla2'nin parametresini girmeden de görüyor.!!
  return a1+b2+c3; //çıktı 6 olarak verebiliyor. Sebebi topla2(deneme) içinde değişkeni görebiliyor.
}
console.log("a1=1 + b2=2 + c3=3 = ",topla2(deneme)); //Çıktı 6

let [,pronoun,,name1]=["Merhaba","benim","adım","mehmet"];
console.log(pronoun);//çıktı benim
console.log(name1);//çıktı mehmet

//
let person = {
  name1:"Selin",
  city:"Ankara",
  favoriteColor:"aqua blue"
}; 

let {name1:name1DegiskenIsminiDegistik} = person; // 
console.log(name1DegiskenIsminiDegistik); // çıktı Selin