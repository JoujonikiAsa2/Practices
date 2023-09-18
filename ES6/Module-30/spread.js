const max = Math.max(2,46,80,34,50,3)
const numbers = [3,5,2,45,5,43,90,32,15]
const arrayMax = Math.max(...numbers);
console.log(max)
console.log(numbers)
// console.log(...numbers) //(...) spread operator access the number of array
console.log(arrayMax)

// use spread operator to copy;
const friends = ['akhi','pakhi','takhi','naki'];
const bondhu =  friends;
const dosto = [...friends];
// friends.push('nabita');
dosto.push('nabita');
console.log(friends)
console.log(bondhu)
console.log(dosto)