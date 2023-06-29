// making the dart disappear
const darts = () => {
  let dart = document.querySelector('.dart')
  dart.classList.toggle('darthidden')
}

// creating score count for both players
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


//  resetting the game 
const restart = () => {
  let score = document.querySelector('.rightScore') 
  let point = document.querySelector('.leftScore')
  score.innerHTML = "Score"
  point.innerHTML = "Score"
  num = 0 
  num2 = 0
}

// creating function to move the dart

const moveDart = () => {
  let boxes = document.querySelectorAll('.box')
  console.log(boxes)
  let currentBox = boxes[randomSpots(0,23)]
  let dart = document.createElement('img')
  dart.className = "dart"
  // let dart = document.querySelector('.dart').cloneNode()
  currentBox.append(dart)

}
// random hitspots
const randomSpots =(min,max) => {
  return Math.floor(min + Math.random()* (max-min))
  
}




// creating countdowm timer
// creating win state and lose state
// add a prompt that say "gamer over!""
const gameOver = () => {
  alert('GAMEOVER')
  location.reload() 
}

// add key frames that shows messages like " you miss your shot"

// add a toggle function that shows "MK guy that says - Toasted!" possibly add the actual sound