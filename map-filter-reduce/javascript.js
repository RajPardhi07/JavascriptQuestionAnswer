// let string = "Welcome to jungle safari"


// let reverseEntiresentence = reverseBySeperator(string, "")

// let reversewords = reverseBySeperator(reverseEntiresentence, "")

// function reverseBySeperator(string, seperator){
//     return string.split(seperator).reverse().join(seperator)
// }

//---------------------------------------------------------------------------
// function greet(name){
//     return `Hello ${name}`
// }
// console.log(greet("Sam"))



// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// fetch("https://api.example.com/data")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .then(error => console.log(error))
  

  //--------------------------------------------------------


//   const person = {
//     firstname:"Hilery",
//     lastname:"quinton",
//     address:{
//         city:"Bhopal",
//         village:"mahua"
//     },
//     getfullname: function(){
//         return this.firstname + " " + this.lastname + " me rahti hai" + this.address
//     }
//   }
//   console.log(person.getfullname())
//   console.log(person.address.village)

// setTimeout(() => {
//     console.log("this will execute in 3 minute")
// }, 3000);

// setTimeout (function(){
//     console.log("3 minutes ke bad chalega")
// }, 3000)


// let arr = [1,2,3,4,6,7,8]

// arr.push(2,3,4)

// arr.splice(1,3,"a", "b", "c")
// console.log(arr)


// var emp = {
//   name: "Daniel",
//   age: 23
//   };

//   console.log(emp.name)

//-----------------------------------9/1/20224-------------------------------------------------

// var obj = {
//   name: "Daniel",
//   age:40,
//   sayhello:function(){
//     return "hello" + " "+ this.name
//   }
// }
// console.log(obj.sayhello())

//------------------------------------------CALL----------------------------------------------

// function sayhello(){
//   return "Hello" + this.name
// }

// var obj = {
//   name:"Daniel"
// }

// sayhello.call(obj)
//output - Hellow daniel




// function sayHello(){
//   console.log( "hello" + " "+ this.name)
// }
// var obj = {name: "Piyush"};


// sayHello.call(obj); 


// const age = 10;
// var person = {
//     name: "Piyush",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  24};
// person.getAge.call(person2); 
// show with apply and bind as well


//-----------------------APPLY--------------------------------------
// function sayHello(day,status){
//   return "Hello " + this.name + " today is " + day + " and feel "+ status;
// }

// var obj = {name: "Piyush"};

// sayHello.apply(obj,["tuesday", "good"]); // 'Hello Piyush today is tuesday'




// var status = "Smile"

// setTimeout(() => {
//   const status = "Love";

//   const data ={
//     status: "Fruit",
//      getStatus(){
//       return this.status
//      },
// }
//   console.log(data.getStatus())
//   console.log(data.getStatus.call())
// },0)




// function createcounter(){
//   var count =2

//   function inner(){
//     count++;
//     console.log(count)

//   }

//   return inner;
// }

// const output = createcounter()
// output()

// output()
// output()



//----------------------------SET TIMEOUT------------------------------------------

// function x(){
//   var i =10;
//    setTimeout(function(){
//   console.log(i)
//    }, 2000)
//    console.log("Learn")
// }

// x();


// function x(){
//   var i =1;
//   setTimeout(function(){
//     for( i; i<=10;i++){
//       console.log(i)
//     }
//   },  1000)
//   console.log("first")
// }

// x();


// function x(){
// for(var i=1; i<=10; i++){
//   setTimeout(function(){
//     console.log(i)
//   }, i*1000)
// }
// console.log("Learn")
// }
// x();

// function x(){
//   for (let i = 1; i <= 10; i++){
//     function close(i){
//       setTimeout(function (){
//       console.log(i);
//       }, i * 1000);
//     }
//     close(i);  
//   }
//   console.log("Learn")
// }
// x();
//------------------------------------------------------
// function x(){
//   for(let i =1; i<=10; i++){
//     setTimeout(function(){
//              console.log(i)
//     }, i* 1000)
//   }
//   console.log("Leran")
// }

// x()


// *********************THIS is IIFE

// var ans = (function(){
// var a =12

// return {
  
//   getter: function(){
//     console.log(a)
//   }
// }
// })()

// prototypal Inheritance

// let human = {
//   canTalK:true,
//   canFly:false,
//   canEat:true,
//   canDance:true
// }

// let SheryStudent = {
//   canSolveJSquestion:true,
//   canGetbestJobs:true
// }

// SheryStudent.__proto__ = human


// const numbers = [1, 2, 3];

// numbers.forEach((num) => {
//   console.log(num * 2); // Perform some action for each element
// });
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((num) => {
  return num * 2; // Create a new array with doubled values
});

console.log(doubledNumbers); // Output: [2, 4, 6]
