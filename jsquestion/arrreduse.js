
// var arr = [1,2,3,4,5,6,7]

// var output = arr.reduce(function(acc, cv){
// return acc+cv

// },0)

// console.log(output)


var fs = require("fs")

fs.readdir("focus", {withFileTypes:true}, function(err, files){
    console.log(err)

    files.forEach(function(elem){
console.log(elem.name, elem.isDirectory())
    })
})
