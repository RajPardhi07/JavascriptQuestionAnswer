

// var arr = [1,23,4,5,6,7]

// function doouble(n){

//     return n*2;
// }

// var ans = arr.map(doouble)

// console.log(ans)

// arrow function
// var arr = [1,23,4,5,6,7]

// const output = arr.map((n) => {
//     return n*2
// })

// console.log(output)

//---------------------------------------------------FILTER QUESTION ODD NUMBER

// var  number = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,18,19,20,21]

// var output = number.filter((n) => {
//     return n<4;
// })
// console.log(output)

// -----------------------------------------------FILTER && MAP
// var users = [
//     {firstname:"Anil", lastname:"Lodhi", age:20},
//     {firstname:"Ayush", lastname:"Acharya", age:22},
//     {firstname:"Manas", lastname:"Rajput", age:23},
//     {firstname:"Divyansh", lastname:"Agrawal", age:24},

// ]

// const output = users.map((e) => {
//     return e.firstname + " " + e.lastname
// })

// console.log(output)
//-----------------------------------------------------FILTER

// const output = users.filter((e) => {
//     return e.age>20
// })
// console.log(output)


// var users = [
//     {firstname:"Anil", lastname:"Lodhi", age:20, marks:70},
//     {firstname:"Ayush", lastname:"Acharya", age:22, marks:67},
//     {firstname:"Manas", lastname:"Rajput", age:23, marks:87},
//     {firstname:"Divyansh", lastname:"Agrawal", age:24, marks:78},

// ]

// const output = users.filter((e) => {
//     return e.age>20 && e.marks>70
// })
// console.log(output)
// const ans = users.filter((e) => e.age>20 && e.marks>80)
// console.log(ans)

//Q5.List of all firstName from array whose age is more than 30

// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"Cob",age:75},
//     {firstName:"Sam",lastName:"Lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ]

//this is arrow function
//   const output = users.filter((e) => e.age>30 ).map((e) => e.firstName)
//   console.log(output)



// const output = users.filter(function(e){
//     return e.age>30;
//   }).map(function(e){
//     return e.firstName;
//   })
//   console.log(output)





// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"Cob",age:75},
//     {firstName:"Sam",lastName:"Lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ]


//   const output = users.filter(function(n){
//   return n.age>30
//   }).map(function(n){
//     return n.firstName + " "+n.lastName
//   })

//   console.log(output)

//   https://dev.to/srishtikprasad/mapfilterreduce-with-important-interview-questions-1ae5

// const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const output = inputNumbers.filter(function(e){
//     return e%2;
// }).map(function(oddnum){
//     return oddnum*2;
// })
//------------------------------8/1/2024----------------------------------
// console.log(output)
// const array = [10, 20, 30, 40];

// const output = array.map((num ) => num /2).filter((num) => num>=15)

// console.log(output)

// const output = array.map(function (num){
//     return num/2;
// }).filter(function (num){
//     return num>=15;
// })
// console.log(output)


//--------------------------------------------------------------------------------------
// let counter =0;

// for(var i=0; i<=10; i++){

//     counter += i;
// }

// console.log(counter)
// console.log(i)





