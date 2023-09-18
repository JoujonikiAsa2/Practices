//a) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (a,b,c) => a*b*c;
console.log(multiply(50,6,6))

//b) Write the following sentence in three lines and print the result:I am web developer. I love to code. I love to eat biryani.
const newLines = `I am web developer.
I love to code.
I love to eat biryani.`
console.log(newLines)

//c) Write an arrow function that will take 2 parameters, one prameter will come from you and another will be default parameter. Add these two parameter and return the result

const add = (a,b=99) => a+b;
console.log(add(3))
console.log(add(3,5)) 