console.log("asdf")
function onSubmit() {
   event.preventDefault()
   var option = document.querySelectorAll("input");
   var txt = "";
   for (var i = 0; i <option.length; i++) {
     if (option[i].checked) {
       txt = txt + option[i].value + " ";
     }
   }
   console.log(txt)
  }

let xhr = new XMLHttpRequest();

xhr.open('GET', '');

xhr.responseType = 'json';

xhr.send();

// the response is {"message": "Hello, world!"}
xhr.onload = function() {
  let responseObj = xhr.response;
  alert(responseObj.message); // Hello, world!
};