// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// function hello(firstName) {
//     console.log(`Merhaba ${firstName}`)
// }

// hello("JavaScript")

// const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) } 
// helloFuncV1("helloFuncV1")


// const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre, bir donus islemi
// helloFuncV2("helloFuncV2")


// const helloFuncV3 = (firstName, lastName) => console.log(
//     `Merhaba ${firstName} ${lastName}`
// ) // console.log parantezi

// helloFuncV3("helloFuncV3", "Last Name info")

// const helloFuncV4 = (firstName, lastName) => {
//     let info = `Merhaba ${firstName} ${lastName}`
//     console.log(info) 
//     return info
// }

// helloFuncV4("helloFuncV4", "Other Info")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const helloFuncV2 = (parametre1) => {console.log(`Merhaba ${parametre1}`)}

helloFuncV2("salih");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const helloFuncV3 = (firstName, LastName) => {
    let info = `Merhaba ${firstName} ${LastName}`
    console.log(info);
    return info;
}

helloFuncV3("salih","Yılmaz1");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const myList = (param1, param2) => param1.concat(param2);
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ] concat metodu 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let movie = { 

    name : "La la land",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
    };
    movie.thisInArrow(); // output : Movie name is
    movie.thisInRegular(); // output : Movie name is La la land
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Soru: Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların herbirini 1'den başlayarak alt alta yazalım.

const movieList = (liste) => {
    liste.forEach((series, index) => {
        console.log(`${index+1}. ${series} `);
    });
};

movieList(["batman","spiderman","superman"]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Soru: [1,2,3,4,5] arrayini parametre alan bir arrow fonksiyonumuz olsun. Bu arrayin sonucu bize yeni bir array döndürsün. 
Oluşan yeni arraydaki çift sayılar 2,  tek sayılar ise 3 ile çarpılmış olsun.
 [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.*/

 const newArray = (nums) => {
    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }
        else if(e%2==1){
            return e*3
        }
    });
   return newNums 
}
console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]