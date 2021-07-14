// INPUT icindeki degeri(value) almak

// let formDOM = document.querySelector("#userForm")
// formDOM.addEventListener('submit', formSubmit)


// function formSubmit(event) {
//     event.preventDefault() // default islemi engelledik...
//     console.log("islem gerceklesti")
    
//     let scoreInputDOM = document.querySelector('#score')
//     console.log(scoreInputDOM.value)
//     localStorage.setItem('score', scoreInputDOM.value)
// }

let formDOM = document.querySelector("#userForm1 ");
formDOM.addEventListener("submit", formSubmit)

function formSubmit (event) {
    event.preventDefault(); // js code to stop form submission  
    console.log("islem gerceklesti");
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value);
    let scoreInputValue = scoreInputDOM.value;
    localStorage.setItem("score", scoreInputValue) //key:score value:girdiğimiz sayı
}

var myInput=document.createElement("input");
myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type","text");
myInput.setAttribute("value","Buraya Yazın");
var myDiv = document.createElement("div"); 
myDiv.appendChild(myInput);
var inputDeger = document.querySelector("#inputumuz").value;
window.alert(inputDeger)  // Değerimiz burada yazacak