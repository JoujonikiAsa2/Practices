// Function declaration
function add (a,b){
    return a+b;
}

// function expression
const add2 = function(a,b){
    return a + b;
}

// arrow function
const add3 = (a,b) => {return a + b;}
const add4 = (a,b,c,d) => a * b + c * d;


console.log(add3(50,90));
console.log(add4(10,20,50,90));
const sum = add(20,59);
console.log(sum)