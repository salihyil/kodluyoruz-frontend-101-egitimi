// ********** Coklu Kosullarla Calismak **********

let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")
let operator1 = document.querySelector("#operator1")

if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanici Adiniz Yok"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
}




let sayi1 = prompt("sayi1 gir:")
let sayi2 = prompt("sayi2 gir:")
// console.log(typeof(a));

let hava = function(sayi1, sayi2 , operator)
{
    switch (operator) {
        case "topla":
            return console.log(sayi1+sayi2);
        case "cikar":
            return sayi1 - sayi2;
        default:
            return "tanımlanmamış işlem";
    }
}

let islem = function(a, b, operator) {
    switch(operator) {
        case "topla":
            return a + b;
        case 'cikar':
            return a - b;
        case 'carp':
            return a * b;
        case 'bol':
            return a / b;
        default:
            return 'Tanimlanmamis islem';
    }
};
operator1.innerHTML= (islem(23, 14, "topla"));  // 37

console.log("Çıkarma işlemi: ",(islem(10, 3, 'cikar')));
// console.log("sayi1 + sayi2 : ", (hava(sayi1,sayi2,"topla")));
hava(sayi1,sayi2,"topla")



console.log(("5-3"),"5"-"3"); //2