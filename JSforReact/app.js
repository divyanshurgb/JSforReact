// // ## 1. var let const

// var x 
// // 1. hoisting is done in var keyword, not in let and const
// console.log(x)
// x = 30
// var x = 60
// let y = 50
// y = 60 
// // 2. redeclaration is not allowed
// const z = 40 
// console.log(x)
// console.log(y)

// for(var i = 0; i <= 3; i++) {
//     console.log(i) 
// } // Scoping issue in for loop because outside loop due to var i is also incremented

// console.log(i)

// const z = 30   
// // can not be changed, use when var is not changed
// console.log(z)

// const is predictable
// const price = 100
// const lastprice = price - 50

// // Code

// console.log(lastprice)

// // ## 2. Template Literals

// const name = "ramesh" 
// const age = 22
// const weight = 60

// // `` use backticks for Template literals

// const greet = `after dieting, my weight is ${weight - 10}`

// console.log(greet);

// // ## 3. Conditionals, Truthy, falsy

// const age = 5
// const username = ""
// // "", false, undefined, null, 0

// if(!username) {
//     console.log("user doesn't exist")
// }
// // else {
// //     console.log("You are noob")
// // }

// // ##4 Ternary Operator

// const age = 3
// let user = false

// if(token) {
//     user = true
// }
// else {
//     user = false
// }

// const user = age >= 18 ? 'adult' : 'child'

// console.log(user)

// // ##5 Short Circuiting Operators

// const emailVerified = true
// const name = "mukesh"
// const username = (emailVerified && name)|| "User"  // false || user => User , true || user => user

// console.log(username)

// // ##6 Object Destructuring

const person = {
    name: "ramesh",
    age: 20
}

console.log(person["name"])

