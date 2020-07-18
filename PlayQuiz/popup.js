var optionsDiv = document.getElementById('optionsDiv')
var catSelect = document.getElementById('catSelect')
var diffSelect = document.getElementById('diffSelect')
var loadingDiv = document.getElementById('loadingDiv')
var startQuiz = document.getElementById('startQuiz')
var selectTags = document.getElementById('selectTags')
var loadingPara = document.getElementById('loadingPara')
var submitBtn = document.getElementById('submit')


var loadFlag = false


let labels = document.querySelectorAll('label')

var bol1 = document.getElementById('bol1')
var bol2 = document.getElementById('bol2')

var question = document.getElementById('question')

var allData = []

let count = 0
var selectData

let category = ''
let difficulty = ''

var diffFlag = false

catSelect.addEventListener('change', async () => {
  console.log(event.target.value)
  // let selectData = []
  //  for(let i=0;i<allData.length;i++) {
  //       if(allData.category == event.target.value  ) {
  //         selectData.push(allData[i])
  //       }
  //  }
  diffFlag = true

  category = event.target.value
  selectData = await getData(event.target.value)
  // console.log(selectData.results)
  allData = selectData.results

  count = 0
  // selectData = allData.filter(elem => elem.category == event.target.value && elem)
  if (loadFlag) {
    displayOptions()
  }
})


diffSelect.addEventListener('change', async () => {
  console.log(event.target.value)

  //  if(selectData.length > 0) {
  //    allData = selectData.filter(elem => elem.difficulty == 'event.target.value')
  //  }else {
  //     allData = allData.filter(elem => elem.difficulty == 'event.target.value')
  //  }
  // if(category) {

  difficulty = event.target.value

  selectData = await getData(event.target.value)
  allData = selectData.results
  // }

  diffFlag = true

  // allData = allData.filter(elem => elem.difficulty == event.target.value && elem)

  count = 0
  console.log(allData)
  if (loadFlag) {

    displayOptions()
  }
})


async function checkData() {
  let i = 9
  while (i <= 32) {
    var res = await getData(i)
    console.log(res.results[0].category)
    let cat = res.results[0].category
    // let diff = res.results[0].difficulty
    //  selectData.push(res.results[0].category)

    for (let j = 0; j < res.results.length; j++) {
      allData.push(res.results[j])
    }

    var catOpt = document.createElement('option')
    catOpt.value = i
    catOpt.textContent = cat
    catSelect.append(catOpt)
    // var diffOpt = document.createElement('option')
    // diffOpt.value = diff
    // diffOpt.textContent = diff
    // diffSelect.append(diffOpt)
    i++
  }
  console.log(allData)
  // let data = await fetch("https://opentdb.com/api.php?amount=200").then(res => res.json())
  // console.log(data)

  loadingPara.textContent = 'Hi Welcome to Play Quiz'
  // displayOptions()


}

function getData(x) {
  if (!diffFlag) {
    return fetch("https://opentdb.com/api.php?amount=20&category=" + x)
      .then(data => data.json())
  } else {
    return fetch("https://opentdb.com/api.php?amount=10&category=" + category + "&difficulty=" + x)
      .then(data => data.json())
      // .then(data => {
      //    // if(data.length == null){
      //    //    console.log("ash")
      //    // }
      //    console.log(data.length,"asf")
      //    return data
      // })
  }
}

checkData()

// function onSubmit() {
   submitBtn.addEventListener('click',()=>{

   
  event.preventDefault()
  var radioInput = document.querySelectorAll("input");
  var txt = "";
  var uncheck = 0
  console.log(event.target.nextSibling)
  for (var i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      // txt = txt + radioInput[i].value;
      if (allData[count].correct_answer == radioInput[i].nextSibling.textContent) {
        count++
        displayOptions()
      } 
      // else {
      //   alert('incorrect')
      // }
      radioInput[i].checked = false
      // uncheck = i
      break
    }
  }
  // console.log(txt)
  // console.log(selectData)
  console.log(allData[count].correct_answer, option1.textContent)
  radioInput[uncheck].checked = false

})

console.log(option1.textContent)

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function displayOptions() {
  console.log(allData[count].type, allData[count].correct_answer, allData[count].incorrect_answers[0])
  loadingDiv.style.display = 'none'
  optionsDiv.style.display = 'block'
  question.innerHTML = count + 1 + " " + allData[count].question

  if (allData[count].type == "boolean") {
    option1.textContent = "True"
    option2.textContent = "False"
    bol1.style.display = 'none'
    bol2.style.display = 'none'
  } else if (allData[count].type == 'multiple') {

    bol1.style.display = 'block'
    bol2.style.display = 'block'

    allData[count].incorrect_answers.push(allData[count].correct_answer)
  
    console.log(allData[count].incorrect_answers ,"incorrect")
    console.log(shuffle(allData[count].incorrect_answers))

    shuffle(allData[count].incorrect_answers)
    for (i = 0; i < 4; i++) {

      labels[i].textContent = allData[count].incorrect_answers[i]
    }

  }
}

startQuiz.addEventListener('click', () => {
  if (category != '' && difficulty != '') {
    selectTags.style.display = 'none'
    loadFlag = true

    displayOptions()
  } else {
    loadingPara.textContent = "Please Choose Category and Difficulty"
  }

})

if (!loadFlag) {
  optionsDiv.style.display = 'none'
  loadingPara.textContent = 'Loading please wait...'
}





