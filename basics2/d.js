const user = {
    name: "Ankit",
    score: 99.99
}

function printName(userObj){
    console.log(`user name is ${userObj.name}`)
    userObj.name = "Kumar"
}

printName(user)
printName(user) // as function is stored in heap => passed by reference


let myobj = {
    name: "ankit",
    score: 99.98,
}
console.log(myobj.score)

const myfunc = function(){
    console.log(x)
}

///////////////////////////////////////////////////////
// array, object and function in heap (reference)
// other variales in stack (int,string)



let myobj2 = myobj;
console.log(myobj.name)

myobj2.name = "kumar";
console.log(myobj.name)

// here changed at both places (as reference)

let string1 = "abcde"
let string2 = string1
console.log(string1)

string2 = "fghij"   // here changed in only string2, not in string1, as copy is made
console.log(string1)