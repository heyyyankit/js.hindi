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
