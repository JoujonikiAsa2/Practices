const friends = [12,45,32,22,44,62,29,69,87];
const partial = friends.slice(2,5);
const partial2 = friends.splice(2,5,partial);
console.log(friends);
const newArr = [];
newArr.push(partial);
console.log(partial2);
console.log(newArr);