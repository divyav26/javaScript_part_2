//closures


function myfunc1(firstname, lastname)
{
    function myfunc2()
    {
        console.log(firstname+" "+ lastname)
    }
    return myfunc2()
}
myfunc1("divya", "mishra ")

//second example


function myagru(argu)
{
    const a="v1";
    const b="v2";
    return function()
    {
        console.log(a,b,argu)
    }
}
const ans=myagru("x")
ans()

//Third example 
function myfunction(power)
{
    return function(number)
    {
        return number**power
    }
}
const power=myfunction(2)
const ans1=power(2)
console.log(ans1)

const cude=myfunction(3)
const ans2=cude(3)
console.log(ans2)