// write an arrow function it will do the following: x^2
// squre each array element
// calculate the sum of the squared elements
// return the average of the sum of the squared elements
let sum = 0;
const square = (arr) =>{
    for (let i=0; i<arr.length; i++){
        const squareValue = arr[i]**2;
        console.log(`Squre of ${i} is ${squareValue}`)
        sum  = sum + squareValue;
        average = sum/arr.length
    }
    return sum, average;
}
square([1,2,3,5]);
console.log('Sum is:',sum, 'Average is:', average)