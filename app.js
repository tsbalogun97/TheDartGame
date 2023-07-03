// making the dart disappear
const darts = () => {
  let dart = document.querySelector('.dart')
  dart.classList.toggle('darthidden')
  let dart2 = document.querySelector('.dart2')
  dart2.classList.toggle('darthidden')
}
// storing number where dart hit
let dartPosition;
// object that stores the point for hit location for both players 
let boardScore = { 
  1:0, 19:0, 6:0, 24:0, 2:20, 3:30, 4:30,
  5:10, 7:20, 8:50, 9:100, 10:100,
  11:50, 12:20, 13:20, 14:50, 15:70,
  16:70, 17:50, 18:10, 20:10, 21:20,
  22:20, 23:10 
}


// creating a function that shows messages like " you miss your shot along with mk1 character popping out
const checkMiss = () => {
  if(dartPosition === 1 || dartPosition === 19 || dartPosition === 24 || dartPosition === 6){
    console.log('checkMiss');
    playMusic()
    let img = document.querySelector('.mk')
    img.classList.remove('hidden')
    // setting timeout to rehidden mk
    setTimeout(() => {
      img.classList.add('hidden')
    }, 500)
  }
}

// creating a function that plays mk1 audion saying toasted!!
const playMusic =() => {
  let audio = new Audio('http://soundfxcenter.com/video-games/mortal-kombat-3-trilogy/8d82b5_Mortal_Kombat_3_Toasty_Sound_Effect.mp3')
  audio.play()
}
// adding background sound on page load
let audio = new Audio('music/03 Jungle Battle (Stage 1, 7).mp3')
const playContra=() => {
  audio.volume = 0.2
  audio.play()
}
  
  
window.onload = playContra()



// creating score count for both players
let num = 0
let num2 = 0
const scoreLeft = () => {
  moveDart('playerOne')
  let score = document.querySelector('.leftScore')
  num += boardScore[dartPosition]
  score.innerHTML = `Score: ${num}, dartPosition ${dartPosition}`
// calling scoreRight to shoot after scoreLeft
  setTimeout(scoreRight, 500)
}

const scoreRight = () => {
  moveDart('playerTwo')
  score = document.querySelector('.rightScore')
  num2 += boardScore[dartPosition]
  score.innerHTML = `Score: ${num2}, dartPosition ${dartPosition}`
  
  
}



//  resetting the game 
const restart = () => {
  location.reload()

}
let reset = document.querySelector('.reset')
reset.addEventListener('click', ()=>{
  location.reload()
})

// creating function to move the dart for both players

const moveDart = (shooter) => {
  let boxes = document.querySelectorAll('.box')
  console.log(boxes)
  dartPosition = randomSpots(1, 24)
  checkMiss()
  let currentBox = boxes[dartPosition -1]
  if(shooter === 'playerOne') {
    let dart = document.createElement('img')
    dart.className = "dart"
    currentBox.append(dart)
  }else{
    let dart = document.createElement('img')
    dart.className = "dart2"
    currentBox.append(dart)
  }
    
  
}

// random hitspots
const randomSpots =(min,max) => {
  return Math.floor(min + Math.random()* (max-min))
  
}
// creating countdowm timer

// creating win state and lose state






// create a function that checks the game is still ongoing.
const gameStatus = () =>{
  if(num >= 500) {
    audio.pause()
    alert( 'playerOne wins')
    num = 0; num2 = 0
    // restart()
    // location.reload()

  }else if(num2 >= 500){
    audio.pause()
    alert('playerTwo wins') 
    num = 0; num2 = 0
    // restart()
    // location.reload()
  }

}





// add a toggle function that shows "MK guy that says - Toasted!" possibly add the actual sound

setInterval(gameStatus,500)

