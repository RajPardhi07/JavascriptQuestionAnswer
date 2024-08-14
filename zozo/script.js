

// let num =[1,2,3,4,5,67,8,9,78,33,78,77,45,324,5,75,964,3245, 564,98,9867]

// let even = num.filter(num % 2 === 0)

// console.log(even)

// Date Object having date and time
// const currentDate = new Date()

// date object's string value
// const currentDate_String = currentDate.toString()

// console.log("Date Object's String Value: " + currentDate_String)
// --------------------------------------------------------------------------
//  function abcd() {
//     let srt = "It"

//     let newval = srt.concat(" is", " a", " great", " day")

//     console.log(newval)

//   }

//   abcd();
// ---------------------------------------------------------------------------

// let srt1 = "geek"
// let srt2 = "for"
// let srt3 = "geeks"

// function abcd() {
//     // let result = srt1.concat(srt2,srt3)

//     let res = srt1.concat(' ',srt2,' ',srt3)

//     console.log(res)
// }

// abcd()

// --------------------------------------------------------------------------
// 31/12/2023
// let person = {
//     name:"ved",
//     age:5,
//     class:"UKG",

//     address:{
//         street:"123 main srt",
//         city:"Gondia",
//         suberb:"Nagpur",
//         stat:"Maharashtra"
//     }
    
// }

// console.log(person.address.city)


// ----------------------------------------------------------------

// let person1 = {
//     name:"john",
//     age:"30"
// }

// let person2 = person1

// person2.name ="elon"
// person2.age = "55"

// console.log(person1)

// output = "elon", 55

//----------------------------------------------------

// let person = {
//     name:"sam",
//     age:20,
    
// }

// delete person.age

// console.log(person.hasOwnProperty("city"))   ----false
// console.log(person.hasOwnProperty("name"))   ----true

// console.log(Object.values(person))   -----sam, 20
// console.log(Object.keys(person)) -------name, age

// --------------------------------------------



//this are closure
// function outerFunction () {

//     var outerVariable = "Hello,"

//     function innerfunction(name) {
// console.log(outerVariable + name)
//     }

//     return innerfunction()
// }

// var inner = outerFunction()

// inner("john")

// -------------------------------------------------------------

//   function createCounter() {
//     var count = 0;

//     function counter() {
//         count++;
//         console.log(count)

//     }

//     return counter();
//   }

//   var increment = createCounter()

//   increment()

// ----------------------------------------------------------------

// function abcd() {
//     let p = 89


//     function inner() {
//         p++;
//         console.log(p)
//     }

//     return inner;
// }

// let ans = abcd()

// ans()
//------------------------------------------------------------------






// function abcd() {

//     var x = 100;

//     function inner() {
//        var y = 200;

//         console.log(x+y)

//     }

// var x = 10
//     return inner;
// }

// var ans = abcd();

// ans()

// output = 210


// ------------------------------------------------------


// function abcd() {
//     var x = 10

//     function inner() {
//         var y = 20

//         console.log(x+y)
//             x = 50
//     }

//     return inner
// }

// var ans = abcd()

// ans()
// output = 30
//----------------------------------------------


// var arr = [1,2,3,4,5,6,7]

// function modifyarray(arr, callback) {
//     arr.push(100)

//     callback()
// }


// modifyarray(arr, function(){
//     console.log("arr modified ", arr)
// })

//--------------------------------------------------------


// var string = "Welcome to javascript guide"


// function reverseBySeparator(string, seperator){
//     return string.split(seperator).reverse().join(seperator);
// }
// var reverseSentence = reverseBySeparator(string, "")

// var reverseWord = reverseBySeparator(reverseSentence,"")

// console.log(reverseSentence)


// var n = "NAMANGAUTAM".split("").reverse().join("")

// console.log(n)

// var arrlist = [1,2,3.4,5,7]

// arrlist = []

// console.log(arrlist)

// output = []

//----------------------------------------

//  var arrlist = [1,2,3.4,5,7]

//  var newarrylist = arrlist; = ye direct main value hi copy/pass kar dete hai/reference pas nhi krte
           // or
//  var newarrylist = [...arrlist];

// arrlist.pop()
// newarrylist.pop()

// console.log(arrlist)
//  console.log(newarrylist)

//  output = [1,2,3.4,5,7],
//  [1,2,3.4,5,7]
// --------------------------

// 7 multiplication table
// for(var i =0; i<=10; i++){
//     var ans = i*7
//     console.log(ans)
// }

// for(let i=0; i<=10; i++){
//     let ans = i*11
//     console.log(ans)
// }
//--------------------------------------------------------------------
// #5: Calculate the sum of numbers from 1 to 10

// let sum =0

// for(let i=0; i<=10; i++){
//     sum = sum + i;
//     console.log(sum)
// }
//--------------------------------------------------------------------
// multipliction
// let a = 1;

// for(let i=1; i<=10; i++){
//     a = a*i
//     console.log(a)
// }
//--------------------------------------------------------------------


// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
// function celsiustofahrenheit(n){

//     return n*1.8 + 32

// }
// var ans = celsiustofahrenheit(20)
// console.log(ans)
//--------------------------------------------------------------------

// Coding challenge #10: Calculate the sum of numbers in an array of numbers


// function averageArray(ar)
// {
//     let n = ar.length;
//     let sum = 0;
    
//     for(let i = 0; i < n; i++)
//     {
//         sum += ar[i];
//     }
    
//     return sum / n;
// }

// let ar = [1, 3, 9, 15, 90];
// let avg = averageArray(ar);

// console.log("Average: ", avg);

// https://codeguppy.com/blog/javascript-coding-challenges-for-beginners/index.html




