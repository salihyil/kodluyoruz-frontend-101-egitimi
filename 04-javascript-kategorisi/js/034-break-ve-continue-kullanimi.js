// Break & Continue
// https://www.w3schools.com/js/js_break.asp

/*
const LOREM_LIST = [
  'lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit'
]

let counter = 0

// for (; counter < 10; counter++) {
//   console.log(counter)
//   if (counter === 5) {break}
// }

// for (; counter < 10; counter++) {
//   if (counter === 5) {continue}
//   console.log(counter)
// }

const UL_DOM = document.querySelector('#userList')

let index = 0

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") {break}
//   let LI_DOM = document.createElement('li')
//   LI_DOM.innerHTML = LOREM_LIST[index]
//   UL_DOM.append(LI_DOM)
// }

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {continue}
  let LI_DOM = document.createElement('li')
  LI_DOM.innerHTML = LOREM_LIST[index]
  UL_DOM.append(LI_DOM)
}
*/

const LOREM_LIST = [
  'salih', 'yılmaz', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit'
]

// let counter = 0;
// for (let counter = 0; counter < 10 ; counter++) {
//   if (counter === 5) {
//     break;
//   }
//   console.log(counter); //çıktı: 0 1 2 3 4
// }

// let counter = 0;
// for (let counter = 0; counter < 10 ; counter++) {
//   if (counter === 5) { continue } 
//   console.log(counter); //çıktı: 0 1 2 3 4 6 7 8 9   5'i geçip devam etti.
// }

const UL_DOM = document.querySelector('#userList');
let index = 0;
for (let index = 0; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {
    break;
  }

  let LI_DOM = document.createElement('li')
  LI_DOM.innerHTML = LOREM_LIST[index];
  UL_DOM.appendChild(LI_DOM); // çıktı salih yılmaz 
}  

//Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <=5; i++) {
  for (var j = 0; j <= 4; j++) {
    if (j == 2) {
      continue gec_etiketi; 
    }
    console.log("iç döngüden j :" + j);
  }
  
 }

