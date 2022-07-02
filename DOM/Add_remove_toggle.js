//remove add toggle contains

const sectionTodo=document.querySelector(".section-todo")
console.log(sectionTodo.classList)


// add bg color
sectionTodo.classList.add("bg-dark")//it is add background color



//toggle
// it is remove bg color if bg color is alredy in section 
//if bg color not in the section then toggle apply bg color

// const ans=sectionTodo.classList.toggle("bg-dark")
// console.log(ans)



//remove
sectionTodo.classList.remove("bg-dark")



//contains
const head=sectionTodo.classList.contains("section-todo")
console.log(head)
//if class is  present it return => true
//otherWise =>false







