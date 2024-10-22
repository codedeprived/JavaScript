//FUNCTIONS ARE VALUES 
const num =2;

fun3();
//function inside a variable
const fun1 = function func1() {
    console.log('hello')// 
}

//# function inside a variable does not support hositing.
console.log(fun1);
fun1();

//anonymous fucntion , i.e function 
//withou a name
const fun2 = function () {
    console.log('hello')// 
}


function fun3()
{
    console.log('hoisting');
}

//function with parameter 

function run(param)
{
    console.log('heloo');
}


//callbacks 

function callThis(param)
{
    //this parameter recieved is callback function
    param();
}

callThis(function()
{
    console.log('calling this fucntion using callThis')
})

// setTimeout(); - built-in function
// after 2.5 sec this fuction is called 
setTimeout(function() {
    console.log('timeout');
} , 2500)
// This asynchronous code 


console.log('next line');
// computer wont wait for the settimeout line to execute , it will go to the next line , so next line is printed first ,

//Advantabe - 
/*
does'nt block out code , it just set the timer and run it in background*/

//setInterval();

setInterval(function() {
    console.log('interval');
}, 3000)