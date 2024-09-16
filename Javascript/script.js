
function factor(n)
{
    if(n == 0)
    {
        return 1;
    }
    else
    {
        return factor(n-1)*n;
    }
}
// template literals   `  ` 

var str = `this is my string with my arithmatic ${ 10 / 2}`;

// varialbe 

// number 
let num2 = 12;
let num1 = 11;

var str2 = `this is addtion of num 1 +  num2\n ${num2 + num1}`;

console.log(str);
console.log(factor(8));
console.log(str2);