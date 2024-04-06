let a=5, b=8
let ans = add(a, b)

console.log(ans)
//1. no return type so write function in place of return type
function add(num1, num2){
    return num1+num2
}

// let ans2 = mul(a, b)    // error
// like variable
const mul = function(num1, num2){   // its treated like variable
    return num1*num2                // cant use it before declaring
}

//3
const div = (num1, num2) => {
    return num1/num2
}

// const div = (num1, num2) => (num1/num2)  // this also correct (no need of return if no {})

let ans2 = mul(a, b);
console.log(ans2)

let ans3 = div(a,b)
console.log(ans3)

//4 IIFE
;   // use semicolon before so that it can know there is end
(function print_abc(){
    console.log(`abc`)
})();