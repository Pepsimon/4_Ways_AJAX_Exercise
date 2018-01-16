var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var quote = document.getElementById("quote");

// XHR

var xhrBtn = document.getElementById("xhr");

xhrBtn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var parsedData = JSON.parse(XHR.responseText);
      quote.textContent = parsedData[0];
    }
  }
  XHR.open("GET", url);
  XHR.send();
})


// FETCH

var fetchBtn = document.getElementById("fetch");

fetchBtn.addEventListener("click", function() {
  fetch(url)
  .then(parseData)
  .then(updateQuote)
  .catch(error)
})

function parseData (res) {
    return res.json();
}

function updateQuote (text) {
    quote.textContent = text[0];
}

function error (err) {
  alert(err);
}

// jQuery

$("#jquery").click(function() {
  $.getJSON(url)
  .done(function(data) {
    $("#quote").text(data[0]);
  });
});

// AXIOS

var axiosBtn = document.getElementById('axios');

axiosBtn.addEventListener('click', function() {
  axios.get(url)
  .then(function(res) {
    quote.textContent = res.data[0];
  })
  .catch(function() {
    alert("Error!");
  })
})
