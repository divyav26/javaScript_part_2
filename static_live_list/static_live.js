//static list vs live list



//static=>NodeList(6) [li.first-todo, li, li, li, li, li]
// static return =>NodeList 
//NodeList =>not increase


// const newTodoItem=document.querySelectorAll(".todo-list li")
// console.log(newTodoItem)
// const sixItem=document.createElement("li")
// sixItem.textContent="item6"
// const ul=document.querySelector(".todo-list")
// ul.append(sixItem)



//live list =>HTMLCollection(6) [li, li, li, li, li, li]
//live list=>it return HTMLCollection
//live list=>increases

const ul=document.querySelector(".todo-list")
const liItem=ul.getElementsByTagName("li")
const sixItem=document.createElement("li")
sixItem.textContent="divya annie"
ul.append(sixItem)
console.log(liItem)