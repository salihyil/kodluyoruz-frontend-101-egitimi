// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

/*
// [key1:1, key1:2, key3:3, ]
let laptop1 = {
  brand: "Apple", 
  model: "MacBook Pro",
  "2kg": 2,
  modelName: "MacBook Pro",
  // model-name: "MacBook Pro",
  model_name: "MacBook Pro"
}

console.log(laptop1)
// Dogru Anahtar Bilgisi Olusturmak

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

// Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => { 
  console.log(keyInfo)
  console.log(laptop1[keyInfo])
})

// Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(
  Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => { 
  console.log("value: ", value)
})

// tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz ;)
let setting = {
  password: 1234,
  userName: 'user1'
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let laptop1 = {
  brand: "Apple", 
  model: "Macbook Pro", //1model diye nesne olmuyor. harf ile başlamak lazım illa sayı ile başlatmak istiyosak "1model" tırnak içine alıyoruz.
  "2kg": 2,
}

console.log(laptop1);
console.log(laptop1.brand , laptop1["brand"]); //çıktı: Apple Apple
console.log(laptop1["2kg"]); //çıktı: 2

//Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1);

//Anahtar bilgisine ulaşmak (keys) ->   Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys); //çıktı:  (4) ["brand", "model", "2kg", "version"]

// key bilgisine neden ulaşmak istiyebiliriz? 

// for (const key in keys) {
//   console.log(key); // çıktısı: 0 1 2 3 
//   console.log();
// } veya

keys.forEach(keyInfo => { 
  console.log(keyInfo); //çıktısı: brand model 2kg version
  console.log(laptop1[keyInfo]+",");//çıktısı: Apple, Macbook Pro, 2, 10.15.7,
});

//Değer bilgilerine ulaşmak (values), ->Object.values(item)

console.log(
  Object.values(laptop1) // çıktı: (4) ["Apple", "Macbook Pro", 2, "10.15.7"] Array dizi şeklinde çıkıyor.
);

let values = Object.values(laptop1);

values.forEach(value => {
  console.log("value:", value);
  /*çıktısı :  
    value: Apple
    value: Macbook Pro
    value: 2
    value: 10.15.7
  */
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
    DNS: "105.xx.xx.xx",
    website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

state.users.forEach(value => {
  console.log("value:", value.name);
/*  value: Brock
    value: Jessie
    value: James
    value: Winnie
  */
})

//"banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.
console.log((state.banList[2])) //çıktı Tom

//"settings" lerdeki "website" değerine ulaşmak isersek şu şekilde ulaşabiliriz.
console.log(state.settings.website) //çıktı https://www.example.com/

//"user" larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.
console.log(state.users[2].favoriteColor) //çıktı blue

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Obje Metodları
//Plain objects için aşağıdaki metotlar(method) kullanılabilir:

//Object.keys(obj) – Key’lerden oluşan bir array döner(return).
//Object.values(obj) – Value’lardan oluşan bir array döner.
//Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
//Tüm bu Object.* metotları array veri tipinde değer döner.

let person = {
  name: "Jack",
  age: 20
};

Object.keys(person) = ["name", "age"]
Object.values(person) = ["Jack", 20]
Object.entries(person) = [ ["name","Jack"], ["age",20] ]