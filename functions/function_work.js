// how to work javacript in function


console.log(this)
console.log(window)
console.log(myfunc)
// console.log(fullname)
function myfunc()
{
    // console.log("This is function")
    console.log(`${fname} ${lname}`)
}
var fname="divya";
var lname="mishra"
fullname=fname+" "+lname
console.log(fullname)
myfunc()
