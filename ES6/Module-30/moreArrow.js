const difference = (x,y) => x - y;
const multiply = (first,second,third) => first * second * third;
const getAge = (person) => person.age;
const student = {name: 'Antara', age: 30}
const age = getAge(student);
console.log(age)

const getThird = numbers => numbers[2]; // single parameter declare korar sommoye bracket na dileo hobe;
const third = getThird([5,9,88,2,13]);
console.log(third)

// No parameter
const getPi = () => Math.PI;
console.log(getPi().toFixed(4))

// Large arrow function
const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}

console.log(doMath(10,6,40));

