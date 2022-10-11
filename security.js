// cookies
// xxs
// http vs https
// cors
//Referrer-Policy, Feature-Policy, "X-Frame-Options", "X-XSS-Protection", Content-Security-Policy HTTP header 

/* очищення user inputs
(очищення інпутів юзера від скріптів і тд всередині)
stack - DOMPurify 
*/

// don't use innerHTML

/* 
same origin policy
доступ до попапів і айфреймів можливий тільки з однаковим протоколом, доменом і портом

або можна використовувати postmessage

  відправник
  let win = window.frames[0];
  win.postMessage("messageBody", "http://example.com"); (або win.postMessage("message", "*");)

  отримувач
  window.addEventListener("message", (event) => {
    if (event.origin != 'http://javascript.info') {
      // щось з невідомого домену
      return;
    }

    alert( "received: " + event.data );

    // можна надіслати щось назад event.source.postMessage(...)
  });
*/

/*
clickjacking
накладання айфрейму поверх кнопки (юзер натисне на прозорий айфрейм)
рішення 
заголовок X-Frame-Options зі сторони серверу може забороняти показувати сторінку в айфреймі
cookie: samesite (дозволяє використовувати кукі тільки, якщо сторінка не айфрейм)
створиити дів, який буде перехватувати всі кліки, якщо сторінка відкрита, як айфрейм
*/

/* 
CORS
можливість доступу до сайту з інших сайтів (з іншими доменом і тд)

1. браузер вказує в заголовках Origin (сайт з якого іде запит)
2. якщо сервер готовий прийняти запит з цього сайту - він повертає Access-Control-Allow-Origin
*/

/* 
за замовчуванням клієнт не має доступу до всіх заголовків відповіді 
(щоб дозволити, треба вказувати на сервері Access-Control-Expose-Headers: Content-Length,API-Key і тд)

*/