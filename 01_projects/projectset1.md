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
