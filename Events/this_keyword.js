// this kwyword 


//arrow function =>object
const btn=document.querySelector(".btn-headline")
btn.addEventListener("click",()=>
{
    console.log("arrow function")
    console.log("the value of this is ")
    console.log(this)//windon dega this arrow 
})


//normal function =>btn returns 

const btn1=document.querySelector(".btn-headline")
btn1.addEventListener("click", function()
{
    console.log("Expression function")
    console.log("value of this is")
    console.log(this)//this ki value button khud h 
})
