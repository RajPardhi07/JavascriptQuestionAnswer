

// function Outer(){
//     var outervariable = "hello"

//     function inner(name){
//         console.log(outervariable + name)
//     }

//     return inner
// }

// var ans = Outer()

// ans(" John")


// function outer(){
//     var count = 0;

//     function inner(){
//         count++;

//         console.log(count)
//     }
//     return inner
// }

// var ans = outer()

// ans()
// ans()
// ans()
// ans()
// ans()


function sayHello(){
    return "hello" +  this.name
}

var obj = {name:"Raj"}

sayHello.call(obj)











