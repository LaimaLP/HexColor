console.log("veikia")
const span = document.querySelector("span")
const btn = document.querySelector(".btn")
const body = document.querySelector("body")

const generateHexColor = () => {
   // const randomColor = Math.floor(Math.random()*10000000).toString(16)
    const randomColor =Math.random().toString(16).slice(2, 8)
    span.innerHTML =`#${randomColor}`
    
    body.style.backgroundColor = `#${randomColor}`


    console.log(randomColor)


}

btn.addEventListener("click", generateHexColor)

body.addEventListener("mousewheel", generateHexColor)