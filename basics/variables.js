"use strict";   // newer version
console.log("start")
// alert("something went wrong")    // using node js, not browser
// type
// changed
let isTrue = false
console.log(isTrue)
isTrue = !isTrue
console.log(isTrue)

var a = null        // object
let b = undefined   // undefined is undefined
console.log(typeof isTrue)
console.log(typeof a)
console.log(typeof undefined)

// var n=5;
// for(var i=0; i<=n-1; ++i){
//     for(let j=0; j<=i+1; ++j){
//         console.log("*")
//     }
//     console.log("\n")
// }
// n=10
// let m=5
// m=8
// const k=1e5
// // k=1e9
// console.table([n,m,k])

// // dont use var, use let
// // var doesnt depend on scope, changes same var in any scope

// for(var l=0; l<=50; ++l){
//     i++;
//     var j=0;
//     j++;
// }
// console.log(i)  // var
// // console.log(j)  // let (cant use it outside scope as not defined)
