//lexical and scope chain

const firstname="divya"
console.log(firstname)

function myfun()
{
    const lastname="mishra"
    console.log(firstname)
    console.log(lastname)
}
myfun()

//second example

const value1="34"
function sum()
{
    let name="divya"
    console.log(value1)

    function fun1()
    {
        console.log(name)
    }
    fun1()
}
sum()