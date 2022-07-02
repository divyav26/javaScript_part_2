//new elements to add=>document.createElement("")
// add html using javascript

//append
//prepend
//remove
//before
//After


//second way
// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="divya annie"
// const todoList=document.querySelector(".todo-list")
// todoList.append(newTodoItem)


// prepend 
// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="divya annie"
// const todoList1=document.querySelector(".todo-list")
// todoList1.prepend(newTodoItem)



// //remove

// const todoList2=document.querySelector(".todo-list li")
// todoList2.remove()

//befor

// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="divya annie"
// const todoList1=document.querySelector(".todo-list")
// todoList1.before(newTodoItem)



// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="divya annie"
// const todoList3=document.querySelector(".todo-list")
// todoList3.after(newTodoItem)


//seconde example
//append=>it add last 
// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="new todo list"
// const todoList=document.querySelector(".todo-list")
// todoList.append(newTodoItem)




//prepend
// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="new todo list"
// const todoList=document.querySelector(".todo-list")
// todoList.append(newTodoItem)


//remove
// const todoList2=document.querySelector(".todo-list")
// todoList2.remove()//remove all li


// befor =>it add li first

// const newTodoItem=document.createElement("li")
// newTodoItem.textContent="new todo list"
// const todoList=document.querySelector(".todo-list")
// todoList.before(newTodoItem)

// after 

const newTodoItem=document.createElement("li")
newTodoItem.textContent="new todo list"
const todoList=document.querySelector(".todo-list")
todoList.after(newTodoItem)