
//arrow function
const arrowFunction = (param , param2) => {
    console.log('hello');
    return 5;
}

arrowFunction();


 const regularFunction = function(param , param1) {
    console.log('hello');
    return 5;
 }

 const OnneParam = param => {
    console.log(param + 1)
 }

 OnneParam(2);


//  const oneLine = () => {
//     return 2+3;//only one line
//  }
// //alternate way to write this one line function

const oneLine = () => 2+3;
 console.log(oneLine());

 const array = ['hello' , 'hi' , 'what' , 10];

 array.forEach((value, index) => {
    console.log(value);
    console.log(index);

 });

 // use of array fucntion inside an object 

 const obj = {
   method: () => {
      console.log('hi im arrow function')
   },
   //short hand way (by this mostly)
   method2() {

   }
 }