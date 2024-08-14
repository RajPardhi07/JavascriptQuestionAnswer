


// var redbtn = document.querySelector("#red")
// var greenbtn = document.querySelector("#green")
// var yellowbtn = document.querySelector("#yellow")
// var bluebtn = document.querySelector("#blue")


// redbtn.addEventListener('click', function(){
//     main.style.backgroundColor = "red"
// })
// greenbtn.addEventListener('click', function(){
//     main.style.backgroundColor = "green"
// })
// yellowbtn.addEventListener('click', function(){
//     main.style.backgroundColor = "yellow"
// })
// bluebtn.addEventListener('click', function(){
//     main.style.backgroundColor = "blue"
// })


// var btn = document.querySelector("button")
// var main = document.querySelector("#main")

// btn.addEventListener("click", function(){

//     var color1 = Math.floor(Math.random() *225)
//     var color2 = Math.floor(Math.random() *225)
//     var color3 = Math.floor(Math.random() *225)

//     main.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
// })

document.getElementById('images')
.addEventListener("click", function(e){

    // console.log(e.target.parentNode)
    let removeIt = e.target.parentNode
    removeIt.remove()

})

var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")


document.addEventListener("mousemove", function(dets){

    cursor.style.top = `${dets.clientY}px`
    cursor.style.left = `${dets.clientX}px`
})