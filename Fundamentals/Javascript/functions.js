// function - are the reusable block of code that perform a specific task.


function func1(num1 , num2)
{
    console.log(num1*num2);
}

func1(10,10);

// 1

// function greet()
// {
//     console.log("Hello babe!");
// }

//2 
function greet(name)
{
    if(name === undefined)
    {
        console.log("Hi there!");
    }
    
    else
    console.log(`Hello ${name}`);
}

greet()
greet('girl')