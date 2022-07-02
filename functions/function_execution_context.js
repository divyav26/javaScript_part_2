// function execution context

let var1="foo"
console.log(var1)

function myfun(firstname,lastname)
{
    console.log(arguments)
    let var2="this is variable"
    console.log(var2)
    let fullname=firstname+ " "+lastname
    return fullname
}
// myfun("divya","mishra")
const myans=myfun("annie","mishra")
console.log(myans)


