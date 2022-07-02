
const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")

//capturing events

// grandparent.addEventListener("click", ()=>
// {
//     console.log("GrandParent Capturing!!!")
// },true)


// parent.addEventListener("click", ()=>
// {
//     console.log("Parent Capturing!!!")
// },true)

// child.addEventListener("click", ()=>
// {
//     console.log("child Capturing!!!")
// },true)

// document.body.addEventListener("click", ()=>
// {
//     console.log("body Capturing!!!")
// },true)


//bubbling

grandparent.addEventListener("click", ()=>
{
    console.log("GrandParent bubblig!!!")
})


parent.addEventListener("click", ()=>
{
    console.log("Parent bubbling!!!")
})

child.addEventListener("click", ()=>
{
    console.log("child bubbling!!!")
})


document.body.addEventListener("click", ()=>
{
    console.log("body bubbling!!!")
})



// delegation

// grandparent.addEventListener("click",(e)=>
// {
//     // console.log(e.target)
//     // console.log(e)
//     console.log(e.target.textContent)
// })
