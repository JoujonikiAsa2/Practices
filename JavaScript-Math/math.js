// max count
let maximum = Math.max(20,23);
console.log(maximum);

// min count
let minimum = Math.min(20,23);
console.log(minimum);

// abs = absolute value of a number [remove the sign]
let num1 = 30;
let num2 = 40;
let gap = Math.abs(num1-num2);
console.log(gap);
if(gap < 5){
    console.log("minimum gap")
}
else{
    console.log("maximum gap")
}
const number = 5.892742;
// round value
console.log(Math.round(number));

// floor value
console.log(Math.floor(number));

// ceiling value
console.log(Math.ceil(number));

// pi
console.log(number * Math.PI);

// random
console.log(Math.round(Math.random()*100));

// power
const arr = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i<arr.length; i++){
    let newName = parseInt(arr[i]);
    console.log(Math.pow(newName, 3));
}