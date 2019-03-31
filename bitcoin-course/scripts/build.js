"use strict";
/**================================================
 * @name RefreshBitcoin
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
var btn = document.querySelector(".refresh");
var result = document.querySelector(".result");

/**========================
 * XHR MEHTOD
 ========================*/
btn.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var price = JSON.parse(xhr.responseText).bpi.EUR.rate_float;
      result.textContent = price;
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  xhr.send();
});

/**========================
 * FETCH MEHTOD
 ========================*/
// btn.addEventListener("click", function() {
//   var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//   fetch(url)
//     .then(function(responseData) {
//       return responseData.json();
//     })
//     .then(function(data) {
//       var price = data.bpi.EUR.rate_float;
//       result.textContent = price;
//     });
// });