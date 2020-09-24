var request = require('request');

window.onload = function(){
    console.log("loaded")
    let quotep = document.querySelector("#quote")
    let quoteauthor = document.querySelector("#quoteauthor");
    request('https://quotes.rest/qod.json', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var quote = JSON.parse(body).contents.quotes[0]
        quotep.innerHTML = quote.quote;
        quoteauthor.innerHTML = quote.author
    });
}

let emailbtn = document.querySelector("#emailbtn")
emailbtn.addEventListener("click", function(){
    console.log("email");
   
})

let sendbtn = document.querySelector("#sendbtn");
let emailfield = document.querySelector("#emailfield");
let textfield = document.querySelector("#textfield")
let dialogsuccess = document.querySelector("#dialog-success");
let subjectfield = document.querySelector("#subjectfield");

sendbtn.addEventListener('click', () => {
    
    let body = {
        data: {
            from: emailfield.value,
            subject: subjectfield.value,
            text: textfield.value
        }
    }
    console.log("data:  " + body);
    let options = {
        method: 'POST',
        body:body,
        json:true
    }
    request(options, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
       console.log(body);
       if(body === 'success'){
           dialogsuccess.showModal();
       }
    })
 
 
})

$("#myBtn").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: 0
    }, 1000);
  });
  window.onscroll = function () { scrollFunction() };

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  document.getElementById("myBtn").style.display = "block";
} else {
  document.getElementById("myBtn").style.display = "none";
}
}
