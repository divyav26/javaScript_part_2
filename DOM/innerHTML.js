//innerHTML =>it use replace Elements in dom

const head=document.querySelector(".headline")
console.log(head)

head.innerHTML="Change the Content"
head.innerHTML+="<button class=\"btn\">Learn More</button>"
console.log(head.innerHTML)