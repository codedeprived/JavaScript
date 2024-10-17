// two type of data types in js 

/*

 1. primitive                                      2. non primitive 

 - number                                               - object
 - string 
 - boolean 
 - undefined 
 - null
 - symbol 

 total : 6                                                1
*/

/*

    1.number : integer , float; eg , 1 23  , 54 , 5.500;
    2. string ; "helllo this is me ! "
    3. boolean : true , false;
    4 . undefined - represent a variable whose value is not assigned 
    5. null  - intentional absence of value.
    6. symbol : represents an unique value ;

    non primitive 

    object - represent (key - value ) pair 



*/

//code 
var a = 10 ;// integer 
var b = 10.001; // float ;
var c = true; // boolean 
var s = "hello world"; // string;
var z ; // undefined;
var zz = null; // null 

var obj = {
    num : "this",
    age : 10
}

console.log(a);
console.log(b);
console.log(c);
console.log(s);
console.log(z);
console.log(zz);

console.log(obj);
