
// 1.question 1
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

//  Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.



// if(Array.prototype.last){
//     Array.prototype.last  = function() {
//         if(this.length > 0) {
//             return this[this.length-1]
//         }else{
//             return -1;
//         }
//     }
// }

// let num1 = [null, {}, 3, 4]

// console.log(num1.last());


// list1 = [1,2,4], list2 = [1,3,4]
// let output = [...list1,...list2]
// console.log(output)


// function longestcommonprefix(str) {

//     if(str.length === 0) return "";

//     let prefix = str[0];

//     for(let i=0; i< str.length; i++){
//         while(str[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1);
//             if(prefix === "") return ""
//         }
//     }

//     return prefix;
// }

// console.log(longestcommonprefix(["ppflower", "ppflow", "ppflight"]));




// let nums = [12,33,7,2,5,2,6,2,65,234];


// let target = 5;

// let ans = nums.forEach(item => item === target ? "Good" : "Bad" )

// console.log(ans)



// 1. Write a JavaScript program that displays the largest integer among two integers.

function LargestNumber(num1, num2) {

    console.log(num1,num2)
    if(num1 > num2){
        return console.log(`Largest Number is ${num1}`)
    }else{
        return console.log(`Largest Number is ${num2}`)
    }

}

LargestNumber(23,32);