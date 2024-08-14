
function addLanguage(langName, desc){

    const li = document.createElement('li');
    



    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)

}

addLanguage("python")

addLanguage("typescript")
addLanguage("python")
addLanguage("uuu")



// function addOptiLanguage(langName){

//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(langName))
//     document.querySelector('.language').appendChild(li)
//     // li.innerHTML = langName

// }

// addOptiLanguage('golang')
// addOptiLanguage("Rust")
// addOptiLanguage("Typescript")
// addOptiLanguage("python")


//edit
// const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "mojo"

// const firstLang = document.querySelector("li:first-child")
// firstLang.innerHTML = "typescript"

// //remove

// const lastLang = document.querySelector("li:last-child")
// lastLang.remove()


