
const darts = () => {
  let dart = document.querySelector('.dart')
  dart.classList.toggle('darthidden')
}

let num = 0
let num2 = 0
const scoreLeft = () => {
  let score = document.querySelector('.leftScore')
  num += 10
  score.innerHTML = `Score: ${num}`

}

const scoreRight = () => {
  let score = document.querySelector('.rightScore')
  num2 += 10
  score.innerHTML = `Score: ${num2}`
}

const restart = () => {
  let score = document.querySelector('.rightScore') 
  let point = document.querySelector('.leftScore')
  score.innerHTML = "Score"
  point.innerHTML = "Score"
  num = 0 
  num2 = 0
}