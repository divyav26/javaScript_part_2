const allButton=document.querySelectorAll(".m-button button")
console.log(allButton)


console.log("script start")
allButton.forEach((button)=>
{
    button.addEventListener("click", (e)=>{
        let num=0
    for(let i=0; i<=1000000000; i++)
    {
        num+=i;
    }
    console.log(e.currentTarget.textContent, num)
    })
})

let outerVar=0
for(let i=0; i<=100000000; i++)
{
    outerVar+=i
}
console.log("the value of outer variable", outerVar)
console.log("end")