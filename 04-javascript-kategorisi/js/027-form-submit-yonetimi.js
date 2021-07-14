// // FORM SUBMIT:

// let formDOM = document.querySelector("#userForm")
// formDOM.addEventListener('submit', formSubmit)

// function formSubmit(event) {
//     event.preventDefault() // default islemi engelledik...
//     console.log("islem gerceklesti")
// }

let formDOM = document.querySelector("#userForm1 ");
formDOM.addEventListener("submit", formSubmit)

function formSubmit (event) {
    event.preventDefault(); // js code to stop form submission  
    console.log("islem gerceklesti");
}

//UYARI: Get metodu önemsiz verilerde kullanılmalıdır, kullanıcı adı, şifre gibi bilgilerin bu method ile gönderilmesi uygun değildir.
//----------------------------------------------------------------

// Temel Input Tipleri

// <input type="text"> :
// İnput(giriş) elementi text tipinde belirlenir. Yani klasik textbox kullanımı olarak ifade etsek yanlış olmaz. Örn; kullanıcı adı girişi için idealdir.

// <input type="password">:
// Şifre tipinde veri girişi için kullanılır. Textbox’a girilen ifadeler “*” şeklinde gizlenerek gösterilir.

// <input type=”radio”> :

// Radio button tipinde, istenilen verileri seçmek için geliştirilen giriş yöntemidir.

// <input type="checkbox">
// Checkbox tipinde, onay gerektiren durumlarda kullanılması için geliştirilen giriş yöntemidir.

// <input type=”button”> :

// Klasik buton oluşturur. Varsayılan olarak herhangi bir işlem yapmaz. Javascript vb. programlama dilleri ile birlikte işlevsel hale gelir.

// <input type="submit">
// Form içerisindeki elementlere girilen verileri, gönderme işlemini yapar. action ile açılacak yeni sayfaya veya mevcut sayfanın kendisine, get veya post metoduna göre değişecek şekilde veri gönderme işlevini gerçekleştirir. methot=”get” kullanılmışsa action durumunda göre sayfanın adres çubuğundaki url’nin sonunda, methot=”post” kullanılmışsa sayfanın arka planında veriler saklanır.

// <input type="reset">
// Buton tipinde bir nesne oluşturur. Form içerisindeki elementlere veriler girilmiş halde iken reset’e tıklandığında görünen tüm verileri temizler ve elementleri ilk haline getirir.

// <input type="color">
// Renk çeşitlerini tasarımcıya sunan ve seçimini sağlayan giriş tipidir.

// <input type=”date”> :

// Tarayıcıda tarih gösterimini sağlayan tipdir. gg.aa.yyyy varsayılan formatında görünür.

// <input type="email">
// Sadece e-mail girişi yapabilmek için kullanılır. Email formatı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir. Safari dışındaki tüm tarayıcılar desteklemektedir.

// <input type="number">
// Sadece sayı girişi yapabilmek için kullanılır. Sayı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir. Safari dışındaki tüm tarayıcılar desteklemektedir.

// <input type="range">
// Bir aralık belirtmemiz gerektiğinde, bu giriş tipini kullanmamız gerekmektedir. Dizi şeklinde veri gösterimi yapar. min=”başlangıç değer” ve max=”son değer” ile aralık belirlemesi yapılır. Tüm tarayıcılar tarafından desteklenmektedir.

// <input type="search">
// Arama yapmamızı sağlayan giriş tipidir. Aktif olacak form içerisinde, girilecek olan veri aranır. Sadece Google Chrome ve Safari tarafından desteklenmektedir.

// <input type="time">
// Tarayıcıda saat gösterimini sağlayan tipdir. hh.mm varsayılan formatında görünür. Element üzerinde saat belirlemesi yapılması mümkündür. İnternet Explorer ve Mozilla Firefox dışındaki tarayıcılar tarafından desteklenmetedir.