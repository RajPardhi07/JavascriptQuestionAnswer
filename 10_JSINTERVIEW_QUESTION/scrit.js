
// write the function that check whether a given string is 
// a palindrome or not in javascript  /


// function isPalindrome(str){

//     const ans = str.split('').reverse().join('')

//     return str === ans
// }

// console.log(isPalindrome("rar"))

// function Reverseword(sentence){

//     const answer = sentence.split('').reverse().join('')

//     return answer



// }

// console.log(Reverseword("Tu chal kis liye hatash"))


// function isPalindrome(str){

//     const ans = str.split('').reverse().join('')

//     return ans === str;
// }

// console.log(isPalindrome("LAL"))


//----------------------------------------------------------------------------------
// write function that return the longest word in the sentence in javascript

// function abcd(sentence){

//     const words = sentence.split(' ')

//     let longestword = "";

//     words.forEach(word => {

//         if(word.length > longestword.length){
//             longestword = word;
//         }
//     });

//     return longestword;

// }

// console.log(abcd("This is a javascript"))

//----------------------------------------------------------------------------------------

// write the function to remove duplicate element from array


// function abcd(arr){
// let uniqueelement = []

// for(var i =0; i<arr.length; i++){

//     if(uniqueelement.indexOf(arr[i]) === -1){

//         uniqueelement.push(arr[i])
//     }
// }

// return uniqueelement;

// }

// function abcd(arr){

//     return [...new Set(arr)]

// }

// console.log(abcd([1,2,3,4,4,5,6,6]))

//-------------------------------------------------------------------------------------
// write a function that check whether two string are anagram or not ?


// function abcd(str1, str2){

//     const sortedStr1 = str1.split('').sort().join('')
//     const soredStr2 = str2.split('').sort().join('')

//     return sortedStr1 === soredStr2
// }

// console.log(abcd("night", "thing"))
// console.log(abcd("elbow", "below"))
// console.log(abcd("cat", "act"))

//----------------------------------------------------------------------------------

// write a function that return the number of vowels in a string?

// function isVowel(str){

//     let vowels = ["a", "e", "i", "o", "u"]

//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(isVowel("Hello world aii"))




// function abcd(str){

//     const vowels = ["a", "e", "i", "o", "u"]

//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++
//         }
//     }

//     return count
// }

// console.log(abcd("uniques and innovative design"))



// write the function find the largest number in array?

// function abcd(arr){

//     let largest = arr[0]

//     for(var i = 1; i< arr.length; i++){

//         if(arr[i] > largest){
//             largest = arr[i]

//         }
//     }

//     return largest
// }

// console.log(abcd([1,2,3,4,5,6,78,]))





// function abcd(arr){

// let largest = 0

// for(var i=1; i< arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }

// return largest


// }

// console.log(abcd([1,2,3,4]))



// class car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year
//     }

// }

// const myCar = new car("BWM", 2028)

// console.log(myCar.name)
// console.log(myCar.year)

// class biodata{
//     constructor(name, salary){
//         this.name = name;
//         this.package = salary;

//     }
// }

// const myProfile = new biodata("Raj", 10)

// console.log(myProfile.name)
// console.log(myProfile.salary)


// let currentDate = new Date()

// const date = currentDate.getDate();
// const month = currentDate.getMonth() +1
// const year = currentDate.getFullYear()
// const hour = currentDate.getHours()
// const min = currentDate.getMinutes()
// const sec = currentDate.getSeconds()

// console.log(hour,min,sec)



// console.log(date)
// console.log(month)
// console.log(year)

// let myDate = Date.now()

// console.log(myDate)

// console.log(myDate.toLocaleString())

// console.log(Math.floor(Date.now()/1000))


// const dc = ["Batman", "Superman", "Flash"]

// const IndianHero = ["Shaktiman", "Vikram", "Sonpari"]

// const newHero = ["Bahubali", "Krish", "Raavan"]
// const marvel = ["Spiderman", "Ironman", "Thor", "Captain America"]


// marvel.push(dc)
// console.log(marvel)


// const newall = marvel.concat(dc)
// console.log(newall)

// const all = [...marvel, ...dc, ...IndianHero, ...newHero]

// console.log(all)


// const fruit = ["Banana", "Apple", "Kiwi", "Graps"]

// const removeelem = fruit.splice(2, 2, "Lemon","mango")

// console.log(removeelem)


// const tinderUser = {}

// tinderUser.id = "123awd",
// tinderUser.name = "sam"
// tinderUser.isLoggedIn = true

// console.log(tinderUser)



// function isPrime(number){

//     for(var i=2; i <= number/2; i++){

//         if(number % i === 0){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7))
// console.log(isPrime(10))


// function factorial(number){

//     if(number === 0){
//         return 1;
//     }

//     let factorial = 1;

//     for(var i=1; i<= number; i++){

//         factorial *= i;
//     }

//     return factorial;
// }

// console.log(factorial(5))


// array in for...of loop
// let arr = [1,2,3,4,5,5,6,7,89,10]

// for(const val of arr){

//     console.log(`value = ${val}`)
// } 


function isVowel(str){

    const vowels = ["a","e", "i","o", "u"]

    let count = 0;

    for(const char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }

    return count
}

// console.log(isVowel("VIVO"))

function Duplicates(arr){

    return [...new Set(arr)]
}

// console.log(Duplicates([1,2,2,3,4,4,5,6]))


function LargetNumber(sentence){

    let words = sentence.split(' ')

    let longest = ""

    words.forEach( word => {

        if(word.length > longest.length){
            longest = word
            
        }
    })
 
    return longest;
}

console.log(LargetNumber("This is a javascript"))