const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const form = document.querySelector(".form")
const input = document.querySelector(".input")

const question = document.querySelector('.Question')




const scoreEL = document.querySelector(".score")
let score = JSON.parse(localStorage.getItem("Score"));
if (!score){
  score = 0;
}
scoreEL.innerText = `Score: ${score}`



const wrongEl = document.querySelector(".wrong")
let wrong = JSON.parse(localStorage.getItem("Wrong"));
if (!wrong){
  wrong = 0;
}
wrongEl.innerText = `Wrong : ${wrong}`




question.innerText = `What is ${num1} multiply by ${num2}?`
const correctAns = num1 * num2

var onlyNum = /^[-+]?[0-9]+$/
form.addEventListener("submit",()=>{
    const userAns = +input.value.match(onlyNum)
    // console.log(userAns , typeof userAns);
    if(userAns === correctAns){
      score ++
      updatelocalstorage()
      }
    else if(userAns !== correctAns){
      wrong++
      wrongupdatelocalstorage()

    }
    if(userAns){
    }
    else{
      alert('Please input numeric characters only');
    }
    
})

function updatelocalstorage(){
  localStorage.setItem("Score", JSON.stringify(score))
}
function wrongupdatelocalstorage(){
  localStorage.setItem("Wrong", JSON.stringify(wrong))
}