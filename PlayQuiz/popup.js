// const options = document.querySelectorAll('input')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')



const submit = document.getElementById('submit')
submit.addEventListener('click', ()=> {
    // console.log('enter')
    // for(let i=0;i<options.length;i++) {
        if(option1.value == 'on') {
           console.log(option1.value, '1')
        }else  if(option2.value == 'on') {
            console.log(option2.value)
         }else  if(option3.value == 'on') {
            console.log(option3.value)
         }else if(option4.value == 'on') {
            console.log(option4.value)
         }
    // }
    
})