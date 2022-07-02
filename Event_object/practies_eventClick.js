// console.log("hello")


const allButton=document.querySelectorAll(".m-button button")
console.log(allButton.length)

allButton.forEach((button)=>
{
    button.addEventListener("click", (e)=>
    {
        console.log(e.target)
        e.target.style.color="red"
        e.target.style.backgroundColor="pink"
       
    })
})