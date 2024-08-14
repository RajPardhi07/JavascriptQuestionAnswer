

// class Car {

//     constructor(company, model, year){
//         this.company = company,
//         this.model = model,
//         this.year = year
//     }
// }

// const myCar = new Car("TATA", "Safari", "2025")
// console.log(myCar.company)
// console.log(myCar.model)
// console.log(myCar.year)


// let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let newarray = [...array]
// let sortedarray = newarray.sort((a,b) => a - b)
// console.log(sortedarray)




// let stringArray = ["apple", "banana", "cherry"];

// const output = stringArray.map((str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// })

// console.log(output)

// var originalSentence = "Hey Raj , You are Selected in our Company"

// var reversedSentence = reverseWords(originalSentence)

// function reverseWords(sentence){
//     return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ')

// }

// console.log(reversedSentence)
// let originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let sortedarray = [...originalArray].sort((a,b) => a-b)

// let reversearray = [...sortedarray].reverse()

// console.log(reversearray)
// console.log(sortedarray)


// function isInt(num){
//    return num % 1 === 0
// }

// console.log(isInt(4))

// function fetchdata(){
//     return new Promise((Resolve, Reject) => {

//         fetch("some url")
//         .then(res => res.json())
//         .then(data => Resolve(data))
//         .then(error => Reject(error))
//     })
// }

// fetchdata()
// .then(result => {
//     console.log("Success", result)
// })
// .catch(error => {
//     console.log("False", error)
    
// })

// let arr = [8,4,5.-5,6,-3,5,-55]

// let newarr = [...arr]

// let sorted = [...newarr].sort((a,b) => a - b)

//  console.log(sorted)



// Write a JavaScript program that accepts a number
//  as input and inserts dashes (-) between each even 
//  number. For example if you accept 025468 the
//   output should be 0-254-6-8.




// function inserDashes(inputNumber){
    
//     // Convert the number to a string
//     let numberString = inputNumber.toString()

    
//     // Split the string into an array of digits
//     let digitsArray = numberString.split('')

    
//     // Iterate through the array and insert dashes between even digits
//     for(let i =0; i< digitsArray.length -1; i++){
//         if(parseInt(digitsArray[i]) % 2 === 0 && parseInt(digitsArray[i+1]) % 2 === 0){
//             digitsArray.splice(i+1, 0, '-');
//             i++;
//         }
//     }

// let resultString = digitsArray.join('')

// console.log(resultString)

// }

// inserDashes(025468);







// let myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  

//   for(let i=0; i< myArray.length; i++){
//     for(let j=0; j< myArray[i].length; j++) {
//         console.log(myArray[i][j])

//     }
//   }


// function findLeapYears(startYear, endYear) {
//   let leapYears = [];

//   for (let year = startYear; year <= endYear; year++) {
//       // Check if the year is a leap year
//       if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//           leapYears.push(year);
//       }
//   }

//   return leapYears;
// }

// // Example usage:
// let startYear = 2000;
// let endYear = 2024;
// let leapYearsInRange = findLeapYears(startYear, endYear);

// console.log(`Leap years between ${startYear} and ${endYear}:`);
// console.log(leapYearsInRange);



// function filterFalsyValue(array){

// let filterarray = array.filter(value => value !== null && value !== "" && value !== 0 && value !== false && value !== undefined &&  !isNaN(value));

// return filterarray
  
// }

// let Samplearray = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// let result = filterFalsyValue(Samplearray)


// console.log(Samplearray)
// console.log(result)


// function sayHello(){
//   console.log( "hello" + " "+ this.name)
// }
// var obj = {name: "Piyush"};


// sayHello.call(obj); 



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const date = 