


const mainButton=document.querySelector("button")
console.log(mainButton)

const body=document.body

const currentColor=document.querySelector(".current")
console.log(currentColor)

function randomcolorGenerator()
{
    const red=Math.floor(Math.random() * 256)
    const green=Math.floor(Math.random() * 256)
    const blue=Math.floor(Math.random() * 256)
    const RandomColor=`rgb(${red},${green},${blue})`
    return RandomColor
}

mainButton.addEventListener("click",()=>
{
    const RandomColor=randomcolorGenerator()
    console.log(RandomColor)
    body.style.backgroundColor=RandomColor
    currentColor.textContent=RandomColor
})



