const prompt = require("prompt-sync")();
numbers = [];
for(let i=0; i<5; i++){
    let num = prompt("Enter number: ");
    numbers.push(num);
}
console.log(numbers);