// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
/*
// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)


// aktif kullanicilar ??
const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Asya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive )
console.log(ACTIVE_USERS) 
*/

//6 harften fazla olan PRODUCTS'ları bulup yeni listeye eklemek
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
console.log("PRODUCTS[0].length: ",PRODUCTS[0].length); // çıktı: 3

const NEW_PRODUCTS = PRODUCTS.filter(item  => item.length > 5  );
console.log(NEW_PRODUCTS);
//aktif kullanıcılar
const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Asya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
  {fullName: "KAdir Keskin", isActive: false},
]

const ACTIVE_USERS = USERS.filter(user => user.isActive === true ); 
console.log("Active olan kullanıcılar: ", ACTIVE_USERS); // cıktı: (2) [{…}, {…}]

//bir listeyi yen bir liste olarak döndürebildik. filter() sayesinde

/* ------------------------------------------------------------------------------------------------- */

const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  },
  {
    name: "Ayse",
    age: 40,
    languages: ["Java", "HTML"],
    }
];

//Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const persons = person.filter(kisi => kisi.age > 30);

for (let index = 0; index < persons.length; index++) {

  console.log("Yaşı 30 dan büyükler :", persons[index]);

}

//Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

const person1 = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  },
  {
    name: "Hasan",
    age: 26,
    languages: ["JavaScript", "Python"],
  },
];

const kisiler = person1.filter(items => items.languages.includes("JavaScript") );

for (let index = 0; index < kisiler.length; index++) {
  console.log("JavaScript bilen kişi: ", kisiler[index] );
}

