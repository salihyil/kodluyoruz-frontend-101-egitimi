// // Local Storage Islemleri:
// // Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

// let user = {userName: "hakanyalcinkaya", isActive: true}
// console.log(user)
// localStorage.setItem('userInfo', JSON.stringify(user) )


// let userInfo = localStorage.getItem('userInfo') // bilgiyi al
// userInfo = JSON.parse(userInfo)
// console.log(userInfo)


// // 2. egzersiz:
// let items = [1,2,3, user]
// // localStorage.setItem('newItems', items) // hatali :(
// localStorage.setItem('newItems', JSON.stringify(items))

// let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..

let user = {username:"hakanyalcinkaya", isActive:true }
console.log(user); //çıktı: {username: "hakanyalcinkaya", isActive: true}
localStorage.setItem("userInfo",JSON.stringify(user))
//Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

let userInfo = localStorage.getItem('userInfo') //bilgiyi al
userInfo = JSON.parse(userInfo)
console.log("console.log(userInfo.isActive); ", userInfo.isActive);
console.log(userInfo); //çıktı: JSON.stringify kullanmayınca [object Object] yazıyor. JSON.stringify ile yazınca {"username":"hakanyalcinkaya","isActive":true}

let items = [3,2,1,user]
/////////////////////////////////////////////////////////////////////////////