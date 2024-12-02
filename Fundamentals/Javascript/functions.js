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




//hoisting example 

console.log(demo1);//prints = undifiend as declaration is moved not the definition.

//however we can make use of function hoisting.

console.log(square(10));
function square(n)
{
    return n*n;//returns sqare of a number
}

var demo1 = "hello im declared below";

// for example if the functions is defined in a expression like thsi 

//demo2();//this will result in an error as declartion of demo2 not contains its definition

// const demo2 = function(){
//     console.log("hello");
// }


//in javascript we have function within a function

function totalCount()
{
    var count = 0;
    //parent function can not accesss child variables;
    function increaseCount() {

        //nested function can access the parent's varialbes
        let var2;
        count++;
    }
    increaseCount();
    increaseCount();

    return count;
}
console.log(totalCount());//output should be 2;

/**
 * This is called fucntion nesting 
 * why do we need function nesting?
 * 
 * - when we want to create a varialbel that needs to be passed to a function. however making it global is not good as other funtions can modify it . So, using nested fucntions will prevent the other fucntions from using this variable.
 * 
 */

//scope chain

/** variable first is loooked in inside of a fucntion if its not there the the javascript interpreter looks for that variable inside the function. if the variable is not foudn there , then at last it looks for it in the outer scope of that parent funcitons then global scope if still not found then javascript interpreter throw an error */

/**
 * Function Definition - Creating a function using function keyword and function name.
Function Expression - Creating a function as an expression and storing it in a variable.
 */

function change(answer)
{
    answer = "what";
}

let answer = "hello";
change(answer);
console.log(answer);


//callback => passing a function as an argument


function abc(a, b, compute) { 
    compute( a , b ) ;
     }
    function multiple(a, b) { 
    console.log(a*b) ;
     }
    function add(a, b) { 
    console.log(a+b) ;
    }
     
    abc(5, 2, multiple) ; // Prints - 10 
    abc(5, 2, add)    ; // Prints - 3

    //why callbacks?
    /**
     * : JavaScript is an event-driven language, meaning that instead of waiting for a response from a function, it keeps executing the code in sequence. So if you want to execute something after some line of code, then callbacks are very useful.
*/
// arrow functions


/**
 * allows us to write shorter function syntax
 */

print = () => "hello wordl"

returnMultile = (param1, param2) => {
    return param1%param2  === 0 ? true : false;
};
console.log(print());
console.log(returnMultile(10, 5));

// in js we can send more paramters than we difined 

foo = (a , b ) => {
    return a+b;
}

console.log(foo(1 , 2, 3 , 4));