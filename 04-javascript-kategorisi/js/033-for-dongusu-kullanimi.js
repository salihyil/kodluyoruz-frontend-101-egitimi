// For Dongusu
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapilacak islem
// }
/*
let users = ["Lorem", "Ipsum", "Dolor", ]

// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

// let index = 0

// for (; index < 10; index++) {
//   console.log(index)
// }

const userListDOM = document.querySelector('#userList')

for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement('li')
  liDOM.innerHTML = users[index]
  userListDOM.appendChild(liDOM)
}
*/

let users = ["Lorem", "Ipsum", "Dolor", ];
const userListDOM = document.querySelector('#userList');

for (let index = 0; index < users.length; index++) {
  const liDOM = document.createElement('li')
  
  liDOM.innerHTML = users[index];
  userListDOM.appendChild(liDOM);
}

for (var i = 0; i < 50; i++) {
  if (i % 2 == 1) {
      console.log(i);
  };
};

var s = "HackerRank";
console.log(s.slice(0, 6) + " " + s.slice(6)); //çıktı: Hacker Rank