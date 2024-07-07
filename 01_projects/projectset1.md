# Project related to DOM

## All basic projects [link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Project 1 : [Background color changer](https://stackblitz.com/edit/dom-project-chaiaurcode-cpllzq?file=1-colorChanger%2Fchaiaurcode.js)

#### Code Javascript
```Javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
      console.log(e)
      console.log(e.target)
      body.style.backgroundColor = e.target.id;
      // body.style.backgroundColor = 'orange';
      // or can check each color individually and then put color
    })
});

```
### Project 2 : [BMI Calculator](https://stackblitz.com/edit/dom-project-chaiaurcode-cpllzq?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

#### Code Javascript
```Javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(events){
  // submit, calc after submitting (not after landing on webpage)

  events.preventDefault();  // for stopping default events

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if(height === '' || height <= 0 || isNaN(height)){
    result.innerHTML=`${height} is not a valid height`;
    // results.innerHTML(`${height} is not a valid height`);
  }
  else if(weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML=`${weight} is not a valid weight`;
  }
  else{
    const bmi = height*weight; // original formula diff
    document.querySelector('#results').innerHTML = `<span>${height*weight}</span>`;
    // result.innerHTML = `<span>${bmi}</span>`;  // same as above
  }

});
```
### Project 3 : [Display time](https://stackblitz.com/edit/dom-project-chaiaurcode-cpllzq?file=2-BMICalculator%2Findex.html,3-DigitalClock%2Fchaiaurcode.js)

#### Code Javascript
```Javascript
const clock1 = document.querySelector('#clock')
const clock2 = document.getElementById('clock')

// setInterval(function(){}, (time in ms));
setInterval(function(){
  let date = new Date();
  // clock.innerHTML = date.toLocaleTimeString();   //1
  clock1.innerHTML = date.toLocaleTimeString() + " ho rha h";     //2
  // clock2.innerHTML = date.toLocaleTimeString();  //3
}, 1000);
// all 1,2,3 works. how 1 works?
```

### Project 4 : [Guess random number](https://stackblitz.com/edit/dom-project-chaiaurcode-cpllzq?file=2-BMICalculator%2Findex.html,3-DigitalClock%2Fchaiaurcode.js)

#### Code Javascript
```Javascript
// const randomNumber = (parseInt(Math.random()*100 + 1))
let randomNumber = (Math.floor(Math.random()*100) + 1)
// console.log(randomNumber)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = []

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Not a valid number`)
  }
  else if(guess<1 || guess>100){
    alert(`Out of range`)
  }
  else{
    prevGuess.push(guess)
    if(numGuess>10){
      displayGuess(guess)
      displayMessage(`GameOver. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`OS, your guess is right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`OOPS! your guess is too low`)
  }
  else{
    displayMessage(`DBMS, your guess is too high`)
  }
}

// clean guess
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML=`${11  - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame"> Start new game </h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    e.preventDefault()
    randomNumber = (Math.floor(Math.random()*100) + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML=`${11  - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
```

### Project 5 : [keyboard button](https://stackblitz.com/edit/dom-project-chaiaurcode-cpllzq?file=5-keyboard%2Fchaiaurcode.js,5-keyboard%2Findex.html)
#### Code Javascript
```Javascript
console.log('Project 5');
const insertId = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insertId.innerHTML = `
    <div class='color'>
      <h1> key pressed: ${e.key}---<h1>
      <br>
      <h1>${e.keyCode}---<h1>
      <h1>${e.code}<h1>
    </div>
  `
})
```

### Project 6 : [color change](https://stackblitz.com/edit/dom-project-chaiaurcode-cpllzq?file=6-unlimitedColors%2Fchaiaurcode.js)
#### Code Javascript
```Javasctipt
const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = '#';
  for(let i=1; i<=6; ++i){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};

const changeColor = function(){
  document.body.style.backgroundColor = randomColor();
}

let idChange = null;
document.querySelector('#start').
addEventListener('click', function(){
  // for removing case of clicking start multiple times
  if(idChange===null)idChange = setInterval(changeColor, 1000);
})

document.querySelector('#stop').
addEventListener('click', function(){
  clearInterval(idChange);
  idChange = null;
})

```

### Code HTML for start-stop
```HTML
<!-- start stop button -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>chai code</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
let cnt = 1;
const startChanging = function(){
    console.log(cnt++);
}
let idInterval;
document.querySelector('#start').
addEventListener('click', function(){
    console.log('started');
    // below
    // writing like this means right side wala to execute hoga hi
    // bss hmlog usko ek variable m store kr rhe
    // agr chate h ki store krle aur execute v na ho
    // to uske liye function bna do
    idInterval = setInterval(startChanging, 1000);
});

const stopChanging = function(){
    clearInterval(idInterval);
    // clearInterval(startChangingl);
}

document.querySelector('#stop').
addEventListener('click', function(){
    console.log('stopped');
    stopChanging();
});

    
</script>
</html>
```