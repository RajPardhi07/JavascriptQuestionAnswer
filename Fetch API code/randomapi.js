



// function abcd(){

//     fetch("https://randomuser.me/api/")
//     .then(function(raw){
//         return raw.json()

//     }).then(function(data){
//         console.log(data)
//     }).catch(error => console.log(error))
// }

// abcd()



// function abcd(){
//     fetch("https://randomuser.me/api/")
//     .then(function(raw){
//         return res.json()
//     }).then(function(data){
//       console.log(data)
//     }).catch(error => console.log(error))
// }

// abcd()


// const abcd = async (req, res) => {
//     try {
//         const res = await fetch("https://randomuser.me/api/")
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// abcd()


// function abcd(){
//     fetch("https://randomuser.me/api/")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

// abcd()



// async function abcd(){
// let res = await fetch("https://randomuser.me/api/")
// let data = await res.json()
// console.log(data)
// }

// abcd()



// function merges(arg1, arg2){
//     return [...arg1, ...arg2]
// }

// const arg1 = [1,2,3,4,5]
// const arg2 = [2,4,6,8,10]

// console.log(merges(arg1, arg2))


// function ReverseString(str){

//     console.log(str.split('').reverse().join('')) 
// }

// ReverseString("I Am Best Developer In the World")


// function ReverseString(str){

//     if(typeof str !== 'string'){
//         throw new Error("Only string are allow");

//     }

//     let result = "";

//     for(let i= str.length -1; i >=0; i--){
//         result = result + str[i];
//     }

//     return result;

// }


// console.log((ReverseString("Software development dnul")))
// console.log((ReverseString(123456)))



// function Factorial(num) {

//     let factorial=1;
//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i
//     }

//     return factorial;


// }

// console.log(Factorial(5))
// console.log(Factorial(12))
// console.log(Factorial(23))


// function isLeapYear(year){

//     if( typeof year !== 'number'){
//         throw new Error("Year shuold be number");

//     }

//     if(year % 4 === 0){
//         return true;
//     }else{
//         return false;
//     }

//     return year % 4 === 0 ? true : false

// }

// console.log( isLeapYear(2002));
// console.log( isLeapYear(2023));
// console.log( isLeapYear(12));
// console.log( isLeapYear(2023));
// console.log("2000", isLeapYear("jhgfds"));
// console.log("2000", isLeapYear(2000));



// function SumofNumber(num) {
//     let sum = 0;

//     for (let i = 0; i <= num; i++) {
//         sum = sum + i
//     }
//     return sum;
// }

// console.log("Sum number", SumofNumber(23))


// function multiplicationTable(num) {

//     if (typeof num !== 'number' || num < 0) {
//         throw new Error("NUmber should be positive and type number");

//     }
//     let result = 1;
//     for (let i = 1; i <= 10; i++) {
//         result = num * i
//         console.log(result)
//     }
// }

// multiplicationTable(13);


// function LargestNumber(arrayNumber) {

//     let biggestNumber = 0

//     for (let i = 1; i <= arrayNumber.length; i++) {
//         if (biggestNumber < arrayNumber[i]) {
//             biggestNumber = arrayNumber[i];
//         }
//     }
//     return biggestNumber;

// }

// console.log(LargestNumber([12,54,76,8]))




// function Power(num, power) {

//     let result=1;
//     for (let i = 1; i <= power; i++) {
//         result = result * num
//     }
//     return result;
// }

// console.log(Power(2, 3));


// function countVowelAndConsonant(inputString){

//     inputString = inputString.toLowerCase();
//     inputString = inputString.replace(/ /g, '');

//     console.log(inputString)

//     const vowel = 'aeiou';
//     const consonant = "bcdfghjklmnpqrstvwxyz";

//     let vowelCount = 0;
//     let consonantCount = 0;

//     for(let i = 0; i<= inputString.length; i++){

//         if(vowel.includes(inputString[i])){
//             vowelCount++;
//         }
//         else if(consonant.includes(inputString[i])){
//             consonantCount++;
//         }
//         else{
//             console.log("Neigher be Vowel nor Consonants")
//         }
//     }

//     return {vowelCount, consonantCount};
// }

// console.log(countVowelAndConsonant("Hello World"));
// console.log(countVowelAndConsonant("Deep Work"));
// console.log(countVowelAndConsonant("Engaging And Subm  Mama Miya"));
// console.log(countVowelAndConsonant("abcdefghijklmnopqrstuvwxyz"));





// function FactorNumber(inputString) {

//     if(inputString < 1){
//         throw new Error("Input always greater than zero");

//     }

//     let result =[];

//     for(let i=1; i<= inputString; i++){

//         if(inputString % i === 0){
//             result.push(i)
//         }
//     }

//     return result;

// }

// console.log(FactorNumber(4));
// console.log(FactorNumber(14));
// console.log(FactorNumber(3876));
// console.log(FactorNumber(5));



// function AverageFind(arrayNumber){

//     let sum=0;
//     for(let i=0; i < arrayNumber.length; i++){

//         console.log(arrayNumber);
//         sum = sum + arrayNumber[i];

//     }

//     const average = sum / arrayNumber.length;

//     return average;

// }

// const numbers = [1,2,3];


//  console.log(AverageFind(numbers));



// function FindInterest(principleAmount, interest, time){

//     let simpleInterest = principleAmount * interest * time

//     let result = simpleInterest / 100
//     result = result.toFixed(2);


//     return result;

// }

// console.log(FindInterest(1000, 5, 1));
// console.log(FindInterest(20000, 10, 5));
// console.log(FindInterest(20000, 5.543332, 5));



// function CountWord(sentence){

//     console.log(sentence)

//     const splittedSentence = sentence.split(' ')
//     const notEmpty =  splittedSentence.filter((element) => element != '');
//     // console.log(splittedSentence)
//     console.log(notEmpty)


//     return notEmpty.length;


// }

// console.log(CountWord("Practice   Make MAn perfect and Strong"));


// function Sort(str){

//     const arrayNumber = str.split("")
//     arrayNumber =  arrayNumber.sort()
//     var result = arrayNumber.join('')

//     console.log(result)
//     return result;

// }

// Sort("Rakh")


// function WordCount(inputString){

//     console.log(inputString)

//     const splittedSentence = inputString.split(' ')
//     const notEmpty = splittedSentence.filter((element) => element != '')

//     console.log("notEmpty" , notEmpty)

//     return notEmpty.length
// }

// console.log(WordCount(" Deep work   do everyday practice     make mam perfect")); 



// function CelsiusToFaren(inputNum){

//     if( typeof inputNum !== 'number'){
//         throw new Error("Input should be Number");

//     }

//     let result = inputNum * 9/5


//     let finalResult = result + 32

//     finalResult = Math.round(finalResult);

//     return finalResult;

// }

// let ans = CelsiusToFaren(27);
// let ans3 = CelsiusToFaren(34);

// console.log(ans)
// console.log(ans3)


// function isArmstrongNumber(inputNumber) {

//     let number = inputNumber

//     let digit = [];

//     while (number > 0) {

//         let lastNumber = number % 10
//         number = Math.floor(number / 10);
//         digit.push(lastNumber)


//     }
//     // console.log(digit)
//     let sum = 0;

//     digit.forEach((d) => {

//         sum = sum + Math.pow(d, digit.length)

//     })

//     if (sum === inputNumber) {
//         return true
//     }

//     return false;

// }



// console.log(isArmstrongNumber(18273)); 



// function Soccer(inputNumber){

//     for(let i =1; i<= inputNumber; i++){


//         if(i % 3 === 0 && i % 5 === 0 ){
//             console.log("FIZZ-BIZZ")
//         }
//         if(i % 3 ==0 ){
//             console.log("FIZZ")
//         }
//         else if(i % 5 ==0 ){
//             console.log("BIZZ")
//         }

//         else{

//             console.log(i)
//         }
//     }
// }

// Soccer(36)


// var words = "Hello World"

// var result = words.split("").reverse().join('');

// console.log(result);


// function CountString(inputString) {


//     let result = {}
//     inputString = inputString.toLowerCase();
//     for (let i = 0; i < inputString.length; i++) {
//         if (!result[inputString[i]]) {
//             result[inputString[i]] = 0;
//         }

//         result[inputString[i]] = result[inputString[i]] + 1;
//     }
//      return result;


// }

// console.log(CountString("Ashish Saluja"))


// function Alphabetical(inputString) {

//     inputString = inputString.replace(/ /g, '');

// for(let i =0; i < inputString.length - 1; i++){
//     if(inputString[i] > inputString[i+1]){
//         return false;
//     }
// }

// return true

// }

// console.log(Alphabetical("abc def"));
// console.log(Alphabetical("acd rx"));
// console.log(Alphabetical("akjhgf"));
// console.log(Alphabetical("ahfujk"));


// function isAnagram(str1, str2) {

// let result1 = str1.split('').sort().join('')
// let result2 = str2.split('').sort().join('')

// console.log(result1)

// console.log(result2)


// if(result1 === result2){
//     return true
// }else{
//     return false
// }



// }


// console.log(isAnagram("cat", "act")); 
// console.log(isAnagram("raj", "kaj")); 
// console.log(isAnagram("night", "thing")); 


// function perfectNumber(inputNumber) {

//     const properDivisors = [];
//     for(let i=1; i< inputNumber; i++) {
//         if(inputNumber % i === 0) {
//             properDivisors.push(i);
//         }
//     }

//     let sum =0;
//     properDivisors.forEach(d => {sum = sum + d});
//     console.log("sum", sum)

//     if(sum === inputNumber){
//         return true;
//     }

//     return false

// }
// console.log(perfectNumber(4))




// function isPasswordCorrect(passwordString) {

//     passwordString = passwordString.trim();

//     if (passwordString.length < 8) {
//         return false;
//     }


//     const lowerCharecter = "abcdefghijklmnopqrstuvwxyz"
//     const upperCharecter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const numberstring = "1234567890"
//     const specialchar = "!@"

//     let lowerCharecterExit = false;
//     let upperCharecterExit = false;
//     let numberExits = false;
//     let specialcharExit = false;

//     for (let char of passwordString) {

//         if (lowerCharecter.includes(char)) {
//             lowerCharecterExit = true
//         }
//         else if (upperCharecter.includes(char)) {
//             upperCharecterExit = true
//         }
//         else if (numberstring.includes(char)) {
//             numberExits = true
//         }
//         else if (specialchar.includes(char)) {
//             specialcharExit = true
//         }
//     }

//     if(lowerCharecterExit && upperCharecterExit && numberExits && specialcharExit){
//         return true;
//     }

//     return false;


// }


// console.log(isPasswordCorrect("Flikart2"))


// function calculateTipAmount(baseAmount, tipPercentage) {

//     let result = [];

//     for (let i = 0; i < tipPercentage.length; i++) {

//         let tipAmount = baseAmount * tipPercentage[i] / 100

//         tipAmount = tipAmount.toFixed(2);
//         result.push(tipAmount);
//     }

//     return result;
// }
// console.log(calculateTipAmount(1000, [5, 10, 15]))
// console.log(calculateTipAmount(497, [5, 10, 15]))


// const bigString = "The big string with the word big repeated in the big string."

// const wordFind = "big"

// function findAllOccurence(big, word) {
//     console.log(big, word)
//     const result = [];

//     let index = big.indexOf(word);
//     while (index !== -1) {
//         result.push(index)
//         index = big.indexOf(word, index + 1)
//     }

//     return (result)


// }

//   console.log(findAllOccurence(bigString, wordFind)); 



const maxNumber = 5

let i =0

while(i < 20){
   let res=  Math.floor(Math.random())* 5 +1
    i++;
    console.log(res)
}
