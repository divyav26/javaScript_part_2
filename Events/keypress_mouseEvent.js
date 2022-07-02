

const button=document.querySelector(".btn-headline")
// console.log(button)

const body=document.body
body.addEventListener("keypress",(e)=>
{
    console.log(e.key)
})


//mouseover
button.addEventListener("mouseover",(e)=>
{
    console.log(e.target)
    console.log("mouse occured !!!")
})


//mouseleave


button.addEventListener("mouseleave",(e)=>
{
    console.log(e.target)
    console.log("mouse leaved!!!")
})
