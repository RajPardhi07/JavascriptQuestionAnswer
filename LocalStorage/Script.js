const Username = document.getElementById("username")
const Button = document.getElementById("button")
const Input = document.getElementById("input-name")


Button.addEventListener("click", () => {
    const value = Input.value
    console.log(value)
    localStorage.setItem('name', value)
    location.reload()
})


const value = localStorage.getItem('name')
Username.innerText = value