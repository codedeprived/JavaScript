//Filters And Maps in javascript;


// you have an array remove -1 integers from it using filter 

console.log([1,-2,5].filter((value , index)=> {
    // if(value <= 0)
    // {
    //     return false;
    // }
    // return true;
    return value >= 0;
}));


// MAP

console.log([1,1,3].map((value , index) => {
    return value + 10;
}));

//shortcuts of array functions
console.log([1,1,3].map(value => value*2));

// Closure

var expect = function(val) {
    const obj = {
        func1: function toBe(val)
        {
            if(this.val === val)
            {
                return true;
            }
            else
            return "Not Equal"
        } ,
        func2: function notTobe(val)
        {
            if()
        }
        
    }
};