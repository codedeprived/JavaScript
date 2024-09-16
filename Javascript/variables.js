// let - block scope , can't re declare , ES6 ECMAScript 5 int 2015 , values we can re assigned 

let a = 5;

a = 10; 
console.log(a);

function funa()
{
    a = 0;
    console.log(a);
}
console.log("\nfuna executed");
funa();
// var - functional or global scopes , can re declare , old language keyword.


var b = 10;

var b = 11;

console.log(b);

function funb()
{
     b = 0;
    console.log(b);
}

console.log("funb executed");
funb();
// const - same as let in propertise and scope however it can't be changed once assigned ;

const c = 100;



console.log(c);

// more example 



{
    var x = 5;
    let y = 10;
}


// function checkvar()
// {
//     var z = 10;
// }
console.log("================");

console.log(x);
//console.log(y);
//console.log(z);

