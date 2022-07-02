// get set attribute

const link=document.querySelector("a")
console.log(link.getAttribute("href"))//it return href name
console.log(link.getAttribute("href").slice(1))// it return link name
link.setAttribute("href", "https://google.co.in")//home ke jagah pe google.co.in set kiya 
console.log(link.getAttribute("href"))

const linkElement=document.querySelector(".form-todo input")
console.log(linkElement.getAttribute("type"))// input ka type =>text 