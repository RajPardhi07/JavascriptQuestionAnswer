// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let currentDate = new Date()

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// const date = currentDate.getDate()
// const month = months[currentDate.getMonth()]

// const year = currentDate.getFullYear()
// const time = currentDate.getHours()
// const minute = currentDate.getMinutes()

// console.log(date)
// console.log(month)
// console.log(year)
// console.log(time)
// console.log(minute)


// console.log("Today is " + date +" " +month + " "+ year + " and time is " +time+":"+ minute)

//=================================================================================

// Print the current window contents
// function printCurrentWindowContents() {
    // window.print();
//   }
  
  // Call the function to print
//   printCurrentWindowContents()


// function CalculateArea(side1, side2, side3){
//     const s = (side1+ side2+side3)/2
//     const result = Math.sqrt(s* (s-side1) * (s-side2) * (s-side3))
//     return result
// }
// const side1 =4;
// const side2 = 3;
// const side3 = 5;
// const ans = CalculateArea(side1, side2, side3)
// console.log(ans)

//============================================================================================
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  



// function isLeapYear(year){

//     return (year % 4 ===0 && year % 100 !== 0 || year % 400 ===0)
// }

// const givenyear = 2025;

// const output = isLeapYear(givenyear)

// if(isLeapYear(givenyear)){
// console.log(`${givenyear} is leap year`)
// }else{
//     console.log(`${givenyear} is not leap year`)
// }


//==============================================================================


// 12. Write a JavaScript program to get the website URL (loading page).  

// Get the website URL (loading page)
// const currentURL = window.location.href;

// Display the result
// console.log("Website URL: " + currentURL);

//============================================================================================
// 16. Write a JavaScript program to compute the sum of the two given
//  integers. If the two values are the same, then return triple their sum.  


// function sumTriple(a,b){

//   if(a=== b){
//     return 3 * (a+b)
//   }else{
//     return (a+b)
//   }
// }

// console.log(sumTriple(2,5));

// console.log(sumTriple(5,5));console.log(sumTriple(-1,1));
// console.log(sumTriple(0,0));



// ====================================================================================
// Write a JavaScript program to create another string from a given string
//  with the first character of the given string added to the front and back.  


// function newString(inputString){

//   if(inputString.length > 0){
//     const firstChar = inputString.charAt(0)

//     const answer = firstChar + inputString+ firstChar

//     return answer
//   }
// }
// console.log(newString("Hello"));


//=========================================================================================

// 25. Write a JavaScript program to check whether a given positive
//  number is a multiple of 3 or 7.  



// function isMultipal(number){

//   if(number > 0){
//      return (number % 3 ===0 || number % 7 ===0)
//   }
//   else{
//     return "not multipal "
//   }
// }

// console.log(isMultipal(9))

//=-----------------------------------------------------------------------------------

// 27. Write a JavaScript program to check whether
//  a string starts with 'Java' if it does not otherwise.  

// function abcd(inputString){

//   if(inputString.startsWith('Java')){
//     return true;
//   }
//   else{
//     return false;
//   }

// }

// console.log(abcd("Javascript"));
// console.log(abcd("python java is fun"));
// console.log(abcd("Java is easy"))
//------------------------------------------------------------------------------------------


//  Write a JavaScript program to check from two given integers whether
//  one of them is 8 or their sum or difference is 8.  

// function checknumber(a,b){

//   return (a === 8 || b === 8 || (a + b) === 8)
// }

// console.log(checknumber(8,3))
// console.log(checknumber(5,3))
// console.log(checknumber(2,5))


//-----------------------------------------------------------


// function findNumber(num1, num2, num3){

//   if(num1 >= num2 && num1 >= num3){
//     return num1
//   }
//   else if(num2 >= num1 && num2 >= num3){
//     return num2

//   }else{
//     return num3
//   }


// }

// let num1 = 25;
// let num2 = 40;
// let num3 = 57;

// const output = findNumber(num1, num2, num3)

// console.log(output)

// 39. Write a JavaScript program to compute the sum of the two
//  given integers. If the sum is in the range 50..80 return 65 
//  otherwise return 80.  


// function abcd(num1, num2){


//   let sum = num1 + num2

//   if(sum >=50 && sum <= 80){
//     return 65;
//   }
//   else{
//     return 80;
//   }
// }

// let result = abcd(12,45)
// console.log(result)

// num= 8 && num1+num2 = 8; num1-num2 = 8




// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

// function checknumber(num1, num2){

//   sum = num1+num2
//   diff = num1- num2

//   if(num1 === 8 || sum === 8 || diff === 8){
//     return true
//   }
//   else{
//     return false
//   }


// }

// console.log(checknumber(8,1))


function reverseString(str){

  return str.split('').reverse().join('')


}

const original = "Hellow WOrld";

const output = reverseString(original)
console.log(output)