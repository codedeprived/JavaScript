// why we need objects

//let us group multiple values together
// display/use all values at once together


// // object syntax
// const product = {
//     name: 'best product',
//     price: 100,
// };
// console.log(product)

// console.log(product.price);
// console.log(product.name);
// // and new property value 
// product.quantity = 10;

// console.log(product);
// // delete a property from the object

// delete product.name;

// console.log(product);

// use dot notation by defualt 
// if you find a notation that don't work  with dot nottation , use sqare bracket notation
const product = {
    name: 'shirt' ,
    'delivery-time': '1 day',
    rating:{
        stars: 4.5,
        count: 87
    },// object nesting
    fun: function func1()
    {
        console.log('fucntion inside the object');
    }
};
console.log(product);
console.log(product.name);
console.log(product['name']);
console.log(product['delivery-time'])
console.log(product.rating.stars);
console.log(product.rating.count);
console.log(product.fun());

console.log(typeof console.log);

//built In Objects 


//1. JSON Built on Built in object
//JavaScript Object Notation

//why we use -> json is universal - so we use it to send data bt/w computers ,

// json built in fucntions , used to convert javascript object to a json format.

//e.g

console.log(JSON.stringify(product));

const temp = JSON.parse(JSON.stringify(product))

console.log(temp);

// 2. LOCAL STORAGE - used  to store information on harddrive locally , 

// localStorage.setItem('message' , 'hello');
// console.log(localStorage.getItem('message'));

// null = falsy value - use use null when we intentionaly want something to be empty
// eg 

function nullfucn1(parameter = 'default')
{
    console.log(parameter);
}

nullfucn1(); //=> 'default';
nullfucn1(undefined)// => default;
nullfucn1(null);// => default;

// - in most cases null and undefined works the same way


// AUTO BOXING

/*
    objects can have property and methods

    in below example we can use property of length to tell string's length and also use toUpperCase() method to 
    convert the string to upper case.
    
    But 'hello' is string how can it has property like length ans toUpperCase() method , 

    Ans: this is beause in javascript we have the autoboxing which wraps the string to an special object which has length and toUpperCase() method ,  
    => Autoboxing works with other types of data like numbers and booleans
    =>however autoboxing does not work with null & undefined

*/

console.log('hello'.length);
console.log('hello'.toUpperCase());

/*
-- Objects are references 


*/

//obj1 is a referece to the data on memory 
const obj1 = {
    message: 'hello'
};

// instead of coping whole object to another object , only 
//reference are linked so its more memory efficient 
// This is called copy by reference;
const obj2 = obj1;
// instead 
console.log(obj2);

obj1.message = 'Good job!';
console.log(obj1);
console.log(obj2);
// now the obj1 was const ? right why does message field is changed and how ?

/*
    obj1 is nolding a refernce variable to making it cost 
    means we can not change the referece itself however 
    the , data that is stored inside that reference can be 
    changed 
    // so even if we make object const we can still change the data inside of it.
*/

// We can't compare objects directly ;

const obj3 = {
    messgae: 'Good job!',
    price: 901
};

console.log(obj3 === obj1); // false but why?
// obj3 holds referece which is != obj1's reference
//however 

console.log(obj2 === obj1);//true

//destructuring

const {messgae , price} = obj3;

console.log(messgae);
console.log(price);

// shortHand property
// if the variable and property are same we onlcy type it once

let cost =100;
const obj4 = {
    messgae,
    cost,
}
console.log(obj4);

// method shortHand

const obj5 = {
    messgae,
    cost,
    //old way
    // method: function newfunc1() {
    //     console.log('method called');
    // }
    //shorthand

    method() {
        console.log('method called');
    }
}
console.log(obj5.method())