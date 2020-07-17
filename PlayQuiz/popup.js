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