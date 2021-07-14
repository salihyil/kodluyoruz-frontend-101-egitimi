// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click", domClick)

// function domClick() {
//     console.log("etkinlik denetlendi")
//     this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
// }

let greetings = document.querySelector("#greeting");
let operator1 = document.querySelector("#operator1");
let info = document.querySelector("#info");
let myInput = document.querySelector("#myInput");
//id=select olan nesne çağrılarak color değişkenine atandı
let color1 = document.querySelector("#select");


greetings.addEventListener("click",domClick )
operator1.addEventListener("mouseover", mouseOver )
myInput.addEventListener("cut", cutFunc)
myInput.addEventListener("copy", copyFunc)
color1.addEventListener("change",selectBox1)


function domClick () {
    info.innerHTML=`browser: Beni çağırmışsın buyur.  `
    console.log(this.innerHTML="tıkladığın için bilgi değişti.");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"

}
function mouseOver() {
    operator1.innerHTML="üzerine geldin."
    console.log("üstüne gelindi.");
    this.style.color == "violet" ? this.style.color = "black" : this.style.color = "violet"
}

function cutFunc () {
    alert("Cut işlemi yapıldı.")
}

function copyFunc(event) {
    alert("Kopyalama işlemi yapıldı.")
    console.log("etkinlik tipi: " , event.type) //çıktı: etkinlik tipi:  copy
}

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
function selectBox1 (event) {
    console.log("Etkinlik tipi : " + event.type);
    console.log("deger : " + event.target.value);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// -1.Kabarcıklanma Etkinliği(Event Bubbling)

  //iç içe elementler çağrıldı  
  let selectBox = document.querySelector('#selectColor')
  let button = document.querySelector('#button');
  let form = document.querySelector('.inputText');  
  let cerceve = document.querySelector('.container');

  selectBox.addEventListener('click' ,function(){
  console.log("selectBox"); })    //çıktı form cerceve

  form.addEventListener('click',function(){
  console.log("form"); })  //çıktı form

 cerceve.addEventListener('click',function(){
    console.log('cerceve');}) //çıktı cerceve