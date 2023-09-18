//map loop through each element of the array and do the operation that you passed in a call back and hold the result from each operation in a array and return it

const numbers = [4,5,2,8,10];

function doubledIt (num){
    console.log('Num now', num)
    return num * 2;
}
const doubleResult = numbers.map(doubledIt)
console.log(doubleResult)


// ES6
const double2 = (x) => x *2;
const result = numbers.map(double2) 
console.log(result)

// Another

const output2 = numbers.map(n=>n*2);
console.log(output2)

// Old way
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled)