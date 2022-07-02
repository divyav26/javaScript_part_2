//there are three way to perform click events

//first way
// we cna wirte in html this is the first way 
/* <button class="btn btn-headline" onclick="console.log('hello click me')">Read More</button> */


//second way using method

// const btn=document.querySelector(".btn-headline")
// btn.onclick=function()
// {
//     console.log("click me!!!")
// }




//third way
// const btn1=document.querySelector(".btn-headline")
// function clickme()
// {
//     console.log("click here")
// }
// btn1.addEventListener("click", clickme)


//Expression funtion 

// const btn=document.querySelector(".btn-headline")
// btn.addEventListener("click", function()
// {
//     console.log("clicke expression function")
// })


//arrow function

// const btn=document.querySelector(".btn-headline")
// btn.addEventListener("click", ()=>
// {
//     console.log("click arrow function")
// })



//sort ways

// const btn=document.querySelector(".btn-headline")
// console.log(btn.addEventListener="sort way")

const btn=document.querySelector(".btn-headline")
// btn.addEventListener="Click me"
console.log(btn.addEventListener="Click second way")
