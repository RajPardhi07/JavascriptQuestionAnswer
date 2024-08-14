


// const roko = setTimeout(function(){

//     document.querySelector('h1').innerHTML = "Mai change ho gya"

// }, 2000)


// document.querySelector("#stop").addEventListener("click", function(){

//     clearTimeout(roko)

// })



// const www = setInterval(function(){

// console.log("Raj", Date.now())
// },1000)

// document.querySelector("#stop").addEventListener("click", function(){

//     clearInterval(www)
// })




// var main = document.querySelector(".main")

// let roko;
// const startInterval = function () {
//     roko = setInterval(function () {

//         var color1 = Math.floor(Math.random() * 227)
//         var color2 = Math.floor(Math.random() * 227)
//         var color3 = Math.floor(Math.random() * 227)

//         main.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`

//     }, 1000)
// }

// startInterval();

// document.querySelector("#stop").addEventListener("click", function () {

//     clearInterval(roko)
// })

// document.querySelector("#start").addEventListener("click", function () {

//     startInterval();

// })






var main = document.querySelector(".main")
let roko;

const suruKaro = function(){

    roko = setInterval(function(){
        var color1 = Math.floor(Math.random() *227)
        var color2 = Math.floor(Math.random() *227)
        var color3 = Math.floor(Math.random() *227)


        main.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`


    }, 1000)
}

// suruKaro()

document.querySelector("#stop").addEventListener("click", function(){

    clearInterval(roko)
})

document.querySelector("#start").addEventListener("click", function(){

suruKaro()
})









