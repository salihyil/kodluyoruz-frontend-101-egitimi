// // FORMLARLA CALISMAK: Bolum Sonu Egzersizi

// /*
// 1: Formu Sec
// 2: Input Bilgisini UL icerisine Ekle
// 3: Form icindeki bilgiyi sifirla
// 4: Eger forma bilgi girilmezse kullaniciyi uyar
// */

let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener("submit", formHandler)

let alertDOM = document.querySelector('#alert');

const alertFunction = (title,message, className) => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title} </strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault(); // Bunu yazmazsak sayfa gönder(submit)'e her basışta yenilenir.  js code to stop form submission  
    const USER_NAME = document.querySelector("#username1");
    const SCORE = document.querySelector("#score1");


    if(USER_NAME.value && (SCORE.value>=0 && SCORE.value<=100)) {
        addItem(USER_NAME.value, SCORE.value);  //göndere batıktan sonra sıfırla
        USER_NAME.value = "";
        SCORE.value= "";
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi","Veri eklendi.","success");
    }
    else{
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi","Eksik Bilgi Girdin! ya da 0 ile 100 arası not bilgisi girmedin!","danger");
    }

}

/* <li class="list-group-item d-flex justify-content-between align-items-center">
        A list item
        <span class="badge bg-primary rounded-pill">14</span>
    </li> 
*/


// Bu alanda ul içine id="userList" yaptık ve fonksiyon ile girilen userName ve score bilgilerini listeye ekledik(append)

let userListDOM = document.querySelector('#userList');

const addItem = (userName,score) => {    //arrow function
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}
    </span>
    `
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    //append =Eklemek
    userListDOM.append(liDOM);
}
