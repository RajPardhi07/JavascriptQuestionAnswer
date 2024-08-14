

// class Car {
//     constructor(company, model, year){
//         this.company = company,
//         this.model = model,
//         this.year = year
//     }

    
// }

// const myCar = new Car("TATA", "Safari", 2024)
// console.log(myCar.company)
// console.log(myCar.model)
// console.log(myCar.year)




// class Rectangle {
//     constructor(width, height){
// this.width = width,
// this.height = height
//     }
// }
// const myrectangle = new Rectangle(20, 30)
// console.log(myrectangle.width)
// console.log(myrectangle.height)





// https://arctutorials.gumroad.com/l/100-js-coding-interview-questions








// function isInteger(number) {
//     return Number.isInteger(number);
// }

// console.log(isInteger(45))




// let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let newarray = [...array]
//========================Ascending order ======================
// let sortedarray = newarray.sort((a, b) => a - b)


// let sortedarraydescending = newarray.sort((a,b) => b - a)

// console.log(sortedarray)
// console.log(sortedarraydescending)


//=========================Find the average of the numbers in the numbered array?===================
// let array = [3, 1, 4, 1, 5, 9,200, 2, 6, 5, 3, 5];
// let newarray = [...array]
// const sorted = newarray.filter((a,b) => a<2)
// console.log(sorted)

// let maxnumber = Math.max(...array)
// let minnumber = Math.min(...array)
// console.log(minnumber)
// console.log(maxnumber)

//==============================How can you uppercase the first character in a string array?====

// let stringArray = ["apple", "banana", "cherry"];
// const output = stringArray.map((str) => {
//     return str.charAt(0).toUpperCase() +str.slice(1)
// })
// console.log(output)
//==============================How can you lowercase the first character in a string array?====

// let stringArray = ["Apple", "Banana", "Cherry"];
// const output = stringArray.map((e)=> {
//     return e.charAt(0).toLowerCase() + e.slice(1)
// })

// console.log(output)

// =====================How to make a sentence out of the given string array?==================

// let Arr = ["This", "is", "a", "string", "array"];

// let sentence = Arr.join(" ");

// console.log(sentence);
// Output: "This is a string array"


//=====How can you extract a few fields from the given JSON
//  object and form a new array in javascript=====================================


// let jsonData = [
//     { id: 1, name: "John", age: 25, city: "New York" },
//     { id: 2, name: "Jane", age: 30, city: "San Francisco" },
//     { id: 3, name: "Bob", age: 28, city: "Seattle" }
// ];



// let newarr = jsonData.map((item) => {
//     return {age:item.age, city:item.city}
// })

// console.log(newarr)

// Filter the given object based on certain conditions and return 
// the corresponding object in javascript

// let newarr = people.filter((item) => item.age>= 25)
// console.log(newarr)

//============================ Given an array of strings, reverse each word in the sentence in javascript?

// function reverseWord(sentence){
//       return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ')

// }

// let originalsentence = "Congratulation man, You are in mars"
// let outut = reverseWord(originalsentence)

// console.log(outut)

// function reverseWords(sentence) {
//     return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// let originalSentence = "Hello World, how are you?";
// let reversedSentence = reverseWords(originalSentence);

// console.log(reversedSentence);
// Output: "olleH ,dlroW woh era ?uoy"


// How do you sort and reverse an array without changing the original array?
// in javascript

// let originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let sortedarray = [...originalArray].sort((a, b) => a -b)
// let reversearray = [...sortedarray].reverse()
// console.log(originalArray)
// console.log(sortedarray)
// console.log(reversearray)


// const array1 = [1,2,3]
// const array2 = [4,5,6]

// const combinearray = [...array1, ...array2]
// console.log(combinearray)




//You can insert an element at a specific index in an array in
// JavaScript using various methods. Here are a couple of common approaches:
// const myArray = [1, 2, 3, 4, 5];
// const indexToInsert = 2;
// const elementToInsert = 10;

// myArray.splice(indexToInsert, 0, elementToInsert);
// myArray.splice(4,0,200)
// console.log(myArray);


//===================How can you Replace an element at a specific index in an Array? in js===========
// const arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17]
// arr[5] = 999
// console.log(arr)


// const arr = [1,2,3,4,5,8,9,16,17]

// delete arr[2]
// console.log(arr)

//==============How can you replace an existing element in an object in js?======
// let profile ={
//     name:"Sam",
//     age:20,
//     city:"Bhopal",
// }
// profile.name = "Anil"
// console.log(profile.name)

//==============How do you write a function which can take (x) number of parameters?======
// function sum(){
//     let result = 0
//     for(let i =0; i<arguments.length; i++){
//         result += arguments[i]
//     }
//     return result
// }

// console.log(sum(4,4,4))

//=====How do you return a character from a string at a specific index(15)?=============

// let myString = "Congratulation Raj, you are selected"
// 15 - is index number
// let output = myString[15]
// console.log(output)
// output = R


//===================How do you create an Array out of a given sentence in js

// let sentence = "Congratulation Man, you are in mars"

// let output = sentence.split(' ')
// console.log(output)

//=============== How do you write an add() function using javascript currying concept?

// function add(x){
//     return function(y){
//         return x+y
//     }

// }
// let add5 = add(5) 
// console.log(add5(3))


// function logMessage(){
//     console.log("Congratulation Man, you are in paris.")
// }

// logMessage()

// setInterval(logMessage, 2000)
//==========================How can we delay calling a function after 5 seconds?===========
// function logMessage(){
//     setTimeout(function(){
// console.log("You are selected")
//     }, 5000)
//     console.log("Congratulation man")
// }
// logMessage()

//================How can we parse a given JSON object?


// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const output = JSON.parse(jsonString)
// console.log(output.name)

// console.log(output.city)
// console.log(output.age)
// const jsObject = { name: "John", age: 30, city: "New York" };
// const output = JSON.stringify(jsObject)
// console.log(output)


// How to display the current date in javascript?


// let currentDate = new Date()
// var day = currentDate.getDate();
// var month = currentDate.getMonth()+1;
// var year = currentDate.getFullYear();

// console.log(day+ '/' + month+ '/' + year)

// console.log(currentDate.toLocaleDateString())



// =======================How do you remove whitespaces from a given string in js
// let stringwithspace = "Congratulation Raj, you are selected in our company"
// let stringwithoutspace = stringwithspace.trim()
// console.log(stringwithoutspace)



// function generaterandomnumber(){
//     var randomnumbers = []

//     for(var i=0; i<5; i++){
//         var randomnumber = Math.floor(Math.random() * 100)+1 

//         randomnumbers.push(randomnumber)


//     }
//     return randomnumbers
// }
// var result = generaterandomnumber()
// console.log(result)





// ======================PROMISE=======================================================


// function fetchdata() {
//     return new Promise((resolve, reject) => {

//         setTimeout(function(){
//           const success = true
//         //   const Failed = false

//           if(success){

//             const data = {Message:"Data successfully fetch"}
//             resolve(data)
//           }
//           else{
//             const error = new Error("Failed to resolve")
//             reject(error)
//           }
//         },2000)
//     })
// }

// fetchdata()
// .then((result) => {
//     console.log("Suceess", result.Message)
// })
// .catch((Error) => {
//     console.log("Failed", Error)
// })




// let currentDate = new Date()
// console.log(currentDate.toLocaleDateString())



