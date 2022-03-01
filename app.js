// Arrays //        // 0 1 2 3 
// const numbers1 = [10, 20, 30, 40]
// const numbers2 = [50,60, 70, 80]

// const [a, b] = numbers1


// console.table(b)

// const fruits = ['mango, 'apple', 'banana']

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// fruits.forEach((fruit) => {
//     console.log(fruit)
// })

// Map // replacement forEach
// const employees = [
//     {name: "ramesh", salary: 1000},
//     {name: "suresh", salary: 2000},
//     {name: "hitesh", salary: 3000},
// ]

// const empNew = []

// employees.map(item => {
//     item.salary = item.salary + 1000
//     return item; 
// })

// // map is like for each
// console.log(empNew)

// Filter //
// const Todos = [
//     { id: 1, todo: "eat"},
//     { id: 2, todo: "sleep"},
//     { id: 3, todo: "code"},
// ]

// const removeTodos = () => {
//     const newTodos = Todos.filter((item) => item.id != id)
//     console.table(newTodos)
// }

// removeTodos(1)

// ARRAY FILTER 
// const Todos = [
//     {id: 1, todo: "eat"},
//     {id: 2, todo: "sleep"},
//     {id: 3, todo: "code"},
// ]

// const newTodos = Todos.filter((item) => {
//     return item.id > 2
// })

// console.log(newTodos)

// // Reduce // // 
// const arr = [5,1,3,2,6];

// function findSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function(acc, curr) {}  {
//     acc = acc + curr;
//     return acc;
// });

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for(let n of numbers) 
//     sum += n;


// console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// Reduce
// const sum = numbers.reduce(
//     (accumlator, currentValue) => {
//     return accumulator + currentValue;
// }) -> old way

// const sum = numbers.reduce(
//     (accumlator, currentValue) => accumulator + currentValue;
// );

// Reduce way
// it reduces the code by removing return and all
// let sum = 0;
// for(let n of numbers) {
// sum += n;
// }
// console.log(sum);

