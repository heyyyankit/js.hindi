// console.log("ankit")
// s1 = "aks"
// console.log("my short form is" $(s1) ", whats ur short form?")

let num = new Number(100)
console.log(num)
// console.log(num.toString())
// console.log(num.toFixed(2))
// console.log(Number.MAX_VALUE.toPrecision(30))
// console.log(Number.MAX_SAFE_INTEGER.toPrecision(20))
// console.log(Math.PI.toPrecision(3))
// console.log((Math.random()*100).toPrecision(2) %6 +1)   // bw 1 and 6

const min = 12
const max = 15
// want bw 12 and 15
let a = Math.random()    // bw 0 and 1 (inclusive)
console.log(a)

a*=(max-min+1)             // bw 0 and 4 // as taking floor
console.log(a)

a = Math.floor(a)   // decimal removed
console.log(a)

a+=min               // bw 12 and 15
console.log(a)

// random
// multiply by range
// take floor
// add min