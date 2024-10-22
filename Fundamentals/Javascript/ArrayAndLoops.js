
const array = [10 , 20 , 30];

console.log(array);

const thisarray =[1, 'hello' , true , {name: 'hello1'} , [1,3]];

console.log(thisarray);

console.log(thisarray[3]);
array.push(100);
console.log(array);
array.splice(0,2);//starting index , no of element to remove after starting index
console.log(array);


//arrays are also referecenses as 
//arrays are also speacial type of object

//anoher way of looping an array using forEach() loop


['hello' , 'konichiwa' , 'hi'].forEach(function(value , index){
    console.log(value);
    console.log(index);
})