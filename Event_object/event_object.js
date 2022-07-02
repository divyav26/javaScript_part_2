//event object


function hello(abc)
{
    console.log(abc)
}

hello("{firstname: 'divya', secondname:'annie'}")

const allButton=document.querySelectorAll(".m-button button")
console.log(allButton)


for(let button of allButton)
button.addEventListener("click", function(e)
{
    console.log(e.currentTarget)
    console.log(e)
    console.log(this)
    console.log(this.textContent)
})

