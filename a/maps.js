let arr = [2,4,6,8]
console.log(arr)
var arr2 = arr.filter( (num) => num>4 )
console.log(arr2)
arr2 = arr
          .map( (num) => {return num*10} ) //   20,40,60,80     
          .map( (num2) => {return num2+5} ) //  25,45,65,85   
          .filter( (num3) => {return num3>40 && num3<70} ) //   45,65
console.log(arr2)   // => 45,65

let initial_val = 100
const sum = arr.reduce(
    (accumulator, curr_val) => accumulator + curr_val,
    initial_val
);
const mul = arr.reduce( (acc,curr) => acc*curr, 1)
console.log(sum)    // 120
console.log(mul)    // 2*4*6*8=384