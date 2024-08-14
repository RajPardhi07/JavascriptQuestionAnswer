
// const coures = {
//     cousename:"Js hindi",
//     price:999,
//     instructor:"hitesh"
// }

// console.log((coures.cousename))


// const {instructor, price, cousename} = coures

// console.log(instructor,price,cousename)


// function loggedIn(username){

//     return `${username} is jus logged In`

// }

// console.log(loggedIn("ELon musk"))


// const user = {

//     username :"Raj",
//     lastname:"pardhi",
// welcome: function(){

//     console.log(`${this.username}`)
// }
// } 
// user.welcome()

// const chai = () => {

//     let username = "Raj"

//     console.log(this)
// }

// chai()


// ((name) => {
//     console.log(`DB CONNTECTED TO ${name}`)
// })("atlas")


//  Javascript execution context

//  - global execution context
// - function execution context
 

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

// --create phase/memory phase
//memory phase ke under sare variables ko collect kra jata hai aur rakha jata hai

// val1 -- undefined
// val2 -- undefined
// addNum -- defination
// result1-- undefined
// result2 -- undefined

// -- execution phase

// falsy value
// false, 0 ,-0, BigInt, "", null, undefined, NaN

// truthy value

// "0"  - string ke under agar 0 hai to o truthy value hai
// 'false - truthy
// " " - double quote ke under agar kuch bhi bi add ho gyi to o truthy value hai
//  [] - truthy
// {}  - truthy

// function(){} - truthy
 

// const useremail = []

// if(useremail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }


// for(let i = 1; i<= 10; i++){

//     console.log(i)
// }

// let myArray = ["flash", "batman", "superman"]


// for(let i=0; i< myArray.length; i++){

//     const element = myArray[i]
//     console.log(element)
// }


// print even number table in javascript

// for(let i = 1; i<=10; i++){

//     const evenmultiple = 2*i
//     console.log(` 2 x ${i} = ${evenmultiple}`)
// }


//------------------------------------break in loop

// for(let i =1; i<= 20; i++){

//     if(i == 5){
//         console.log('Detected 5')
//         continue;
//     }
    
//     console.log(`Number are ${i}`)
//     console.log(`Number are ${i}`)
// }

// const myArr = [1,2,3,4,5,6,7,78]

// for(const value of myArr){
//     console.log(value)
// }


// const safari = {
//     model:"TATA 2026",
//     price:"23lakh",
//     owner:"Raj Pardhi"
// }

// for(const key in safari){
//     console.log(`${key} = ${safari[key]}`)
// }






// const Legend = {

//     name:'Raj Pardhi',
//     work:"Founder & CEO of Raj group in India",
//     networth:"30 lakh millon doller",
//     city:"Bengluru"
// }

// for(const key in Legend){

//     console.log(`${key} = ${Legend[key]}`)
// }


const car = ["safari", "BMW", "Audi", "Jaguar","Range Rover"]

car.forEach(function(val){

    // console.log(val)

})


// car.forEach((dada) => {
//     console.log(dada)
// })

// const model = [
//     {
//         company:"TATA",
//         carname:"safari"
//     },
//     {
//         company:"Toyata",
//         carname:"Fortuner"
//     },
//     {
//         company:"Mahindra",
//         carname:"Thar"
//     },

// ]

// model.forEach((item) => {

//     console.log(item.carname, item.company)
// })


function largestNum(arr){

    let largest = 0;

    for(var i =1; i<=arr.length; i++){

        if(arr[i] > largest){
            largest = arr[i]

        }
    }

    return largest;
}

// console.log(largestNum([1,2,3,4,5,]))


// function findVowel(str){

//     const vowels = ["a", "e", "i", "o", "u"]

//     let count = 0;
// 
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++
//         }
//     }

//     return count
// }

// console.log(findVowel("red velvet"))


// function createAdd(number){

//     return function(val){

//         return val+number

//     }
// }

// const addtotal = createAdd(8)

// console.log(addtotal(5))




// var arr = [
//     { name: "John", age: 25, city: "New York" },
//     { name: "Alice", age: 30, city: "San Francisco" },
//     { name: "Bob", age: 28, city: "Los Angeles" }
// ];


// const  newdata = arr.filter((item) => item.age > 25 )

// console.log(newdata)


// const  arr = [1,2,3,4,5,6,7,8,9, 10]

// const newArr = arr.map((num) => num *10).map((num) => num+1)
// console.log(newArr)


const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc, currval){

//     console.log(`acc ${acc} and currval: ${currval}`)
//     return acc + currval

// }, 0)


// const myTotal = myNum.reduce((acc, currval) => acc+ currval ,0 )

// console.log(myTotal)


// const shoppingCart = [
//     {
//         itemname:"mobile",
//         price:70000
//     },
//     {
//         itemname:"earphone",
//         price:5000
//     },
//     {
//         itemname:"freez",
//         price:30000
//     },
//     {
//         itemname:"freez",
//         price:50000
//     },
//     {
//         itemname:"freez",
//         price:60000
//     },
//     {
//         itemname:"freez",
//         price:70000
//     },
//     {
//         itemname:"LED",
//         price:90000
//     },
//     {
//         itemname:"speaker",
//         price:70000
//     },
// ]

// const payment = shoppingCart.reduce((acc, item) => acc+ item.price, 0)


// console.log(payment)
//---------------------------------------------------------------------------------------

// let userbook = shoppingCart.filter(item => item.itemname === "freez" && item.price >= 60000) 

// console.log(userbook)

// const arr = [1,2,3]

// const ans =  arr.map(number => number * 10).map(number => number+1).filter(number => number>=60)

// console.log(ans)

//  const myTotal = arr.reduce((acc, curr) => acc + curr, 0)

//  console.log(myTotal)

//-----------------------------------------------------------------------------------------



// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];


// const totalVotes = (arr) => arr.reduce((acc, currval) => currval.voted ? acc+1 : acc, 0)

// const answer = totalVotes(voters)

// console.log(answer)
const users=[
    {firstName:"john",lastName:"Biden",marks:80},
    {firstName:"jimmy",lastName:"Cob",marks:75},
    {firstName:"Sam",lastName:"Lewis",marks:40},
    {firstName:"Ronald",lastName:"Mathew",marks:50},  
  ];

  
const answer = users.filter(item => item.marks > 60).map(item => item.firstName)

console.log(answer)