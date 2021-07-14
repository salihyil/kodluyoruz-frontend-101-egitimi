// Object icinde metot nasil ekleriz
/*
let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4], 
  isActive: true,
  shortName: function() {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
  }
};

console.log(user1)
console.log(user1.shortName)*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let user1 = {
  firstName: "Bilgin",  
  lastName: "Uzman",  
  score: [1,2,3,4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName} ` // çıktı :B. Uzman 
    
  }
}
console.log(user1.shortName());


var person1 = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person1.name} ${person1.surname}, I'm ${person1.age} yo.`;
	},
};
console.log(person1.introduce());

const fonksiyonAdi = () => {
  console.log("Merhaba Kodluyoruz")
}
console.log(fonksiyonAdi.name); //çıktı: fonksiyonAdi


const fonksiyonAdi1 = () => {
  firstName ="salih"
  console.log(firstName); //çıktısı: salih
}
fonksiyonAdi1();


function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}
const ali = new Insan("ali",21) //const ali burda objedir Insan classdır.
console.log(ali.yas);//çıktı 21

ali.yeniozellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniozellik);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla())); //çıktı Merhaba, ben Ali Veli, 32 yaşındayım
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function yaz(){
  console.log("Merhaba Kodluyoruz")
}
console.log(yaz.name); //çıktı yaz fonkisyon ismini yazdırma diğer yazımı alltaki
console.log(yaz["name"]); //çıktı yaz fonkisyon ismini yazdırma 
