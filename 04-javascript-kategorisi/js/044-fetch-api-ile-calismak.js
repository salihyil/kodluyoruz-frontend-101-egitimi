// fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
/*
// JSON dosyadan veri cekmek:
fetch("data/settings.json").then(
  response => response.json()
).then(responseJson => {
  console.log(responseJson)
  console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")

// API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => response.json()
).then(responseJson => {
  responseJson.forEach(item => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = item.title
    userListDOM.appendChild(liDOM)
  })
})*/
  

//JSON dosyadan veri çekmek
fetch("data/settings1.json")
.then(response => response.json())
.then((json) => {
  json.forEach((item) =>{
    console.log(item)
    console.log("item.userName",item.userName);
  })
})

let userListDOM = document.querySelector("#userList")
//API üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    json.forEach(item => {  
      let liDOM = document.createElement('li');
      liDOM.innerHTML = item.title;
      userListDOM.appendChild(liDOM);
    })
  })

  /////////////////////////////////////////////////////////
  //POST İsteği Yapma

  let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId:1
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json)
.then(function(todos){
  todos.forEach(todo => {
      console.log(todo.title);//Başlıkları console' a yazdırma
  });
})
.catch((err) => console.log(err)) //en sonunda catch() metoduyla herhangi bir aşamada hata oluşursa, bu hatayı parametre olarak alıp console’a yazdırıyoruz.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then((json) => console.log(json))
.catch(err => console.log(err))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then((json) => {
  json.forEach((item) => {
    console.log(item.email);
  })
})