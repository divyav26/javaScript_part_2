//mini project based on event delegation 


const FormTodo=document.querySelector(".form-todo")
const TodoInput=document.querySelector(".form-todo input[type='text'] ")
const TodoList=document.querySelector(".todo-list")

FormTodo.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("submit")
    const newTodotext=TodoInput.value 
    const newLi=document.createElement("li")
    const newLiInnertHTML=`
    <span class="text">${newTodotext}</span>
    <div class="button-todo">
        <button class="button-todo done">Done</button>
        <button class="button-todo remove ">Remove</button>
    </div>
    `

    newLi.innerHTML=newLiInnertHTML
    TodoList.append(newLi)
    TodoInput.value=""
})

TodoList.addEventListener("click",(e)=>
{
    if(e.target.classList.contains("remove"))
    {
        const newliTarget=e.target.parentNode.parentNode
        newliTarget.remove()
    }

    if(e.target.classList.contains("done"))
    {
        const lispane=e.target.parentNode.previousElementSibling
        lispane.style.textDecoration="line-through"
    }
})

