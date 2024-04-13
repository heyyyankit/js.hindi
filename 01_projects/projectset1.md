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
