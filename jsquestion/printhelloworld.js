// for(i=100; i>=1; --i ){
//     console.log(i)
// }

// let num=20;

// for(i=1; i<=num; i++){
//     if(num% i === 0){
//         console.log(i)
//     }
// }


// let arr = [12,34,56,78,3,56,2,345]

// let max=0;

// for(let i=1; i< arr.length; i++){
//     if(arr[i] > arr[max]){
//         max=i;
//     }
// }

// console.log(arr[max])

// let arr = [12,34,56,78,3,56,2,345]


// let min=0;

// for(let i=1; i<arr.length; i++){
//     if(arr[i]< arr[min]){
// min =i;
//     }
// }

// console.log(arr[min])


// var fs = require("fs")

// fs.writeFile("hello.txt", "kaise ho bhai", function(err){
//     if(err)  console.log(err)
//     else console.log("ban gayi")
// })


// fs.appendFile("hello.txt" , "khana khaya kya kya bbahi", function(err, data){
//     if(err) console.log(err)

//     else console.log(data)
// })


// fs.readFile("hello.txt", "utf8", function(err, data){
//     if(err) console.log(err)

//     else console.log(data)
// })


// fs.unlink("hello.txt", function(err){
// if(err) console.log(err)
// else console.log("file delete ho gayi")
// })


var http = require("http")

var server = http.createServer(function(req, res){
    res.end("Harsh bhiyya kaise ho");
})

server.listen(3000)

