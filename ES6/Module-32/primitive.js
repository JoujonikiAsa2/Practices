//Primitive data type
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

// Object(Non-Primitive)
let p = {job: 'Web developer'};
let q = p;
// q = {job: 'Graphic'} // Purota reassign korle se notun man ta niye ney
// console.log(p,q)
q.job = 'Graphic' //particular kono jaygay change korte chaile ager reference dhore se duitatei change kore
console.log(p,q)

let a =  'Asa Roy from bangladesh';
let b = a;
b = 45;
console.log(a,b)

c = {name: 'Asa', age: 23}
b = c;
b = {name:'Shawon', age: 45}
console.log(b,c)