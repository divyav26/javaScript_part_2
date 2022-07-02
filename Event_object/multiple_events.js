
//multiple events

const allButton=document.querySelectorAll(".m-button button")
console.log(allButton)

// const FirstButton=document.querySelector("#one")
// console.log(FirstButton)



// allButton.addEventListener("click", function()
// {
//     console.log("click me")
// })


// for of loop
// for(let button of allButton)
// {
//     button.addEventListener("click",function()
//     {
//         console.log(this)
//     })
// }


//simple for loop
// for(let i=0; i<allButton.length; i++)
// {
//     allButton[i].addEventListener("click", function()
//     {
//         console.log("click to simple loop")
//     })
// }

//forEach

allButton.forEach(function(button)
{
    button.addEventListener("click", function()
{
    console.log("click me")
})
})


