//filter select elements based on a condition and return an array with the elements that fullfilled the condition
const numbers = [4,5,2,8,10];
const players = [75,65,67,72,55,59]
const selected = players.filter(n => n > 70)
const selectedEven = players.filter(n => n%2 == 0)
console.log(selectedEven)