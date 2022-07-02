

//traversing dom tree

// const Domtree=document.getRootNode()
// console.log(Domtree) //it  return =>document


const rootNode=document.getRootNode()
// console.log(rootNode.childNodes)// RootNode ka ak hi child node h =>html

const HtmlElementNode=rootNode.childNodes[0]
console.log(HtmlElementNode.childNodes)

const headElementNode=HtmlElementNode.childNodes[0]
console.log(headElementNode.childNodes)

const textNode=HtmlElementNode.childNodes[1]
console.log(textNode.childNodes)

const bodyElementNode=HtmlElementNode.childNodes[2]
console.log(bodyElementNode.childNodes)


console.log(headElementNode.parentNode)

//sibling relationship
//head ka next sibling kaun h 
console.log(headElementNode.nextSibling)

//property j nextElementSibling=>text ko nhi dega uske age ka node dega like=>body

console.log(headElementNode.nextElementSibling)

//head ke child node 
console.log(headElementNode.childNodes)

const h1=document.querySelector("h1")
console.log(h1.parentNode)

// const div=h1.parentNode//
// div.style.backgroundColor="pink"
// div.style.color="black"

// const body=h1.parentNode.parentNode
// body.style.backgroundColor="pink"
// body.style.color="black"

const body=document.body
body.style.backgroundColor="pink"
body.style.color="black"

const head=document.querySelector("head")
console.log(head)

const title=document.querySelector("title")
console.log(title)

const div=document.querySelector(".container")
console.log(div.childNodes)
//text and space line nhi chahiye =>uske liy children use karege

console.log(div.children)

