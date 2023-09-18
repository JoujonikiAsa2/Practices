const glass = {
    name:'glass',
    color:'golden',
    price:12, 
    isCleaned: true
};

// Object এর উপরে for of চালাইতে পারবো না।
// for(const key of glass){
//     console.log(key)
// }

// for(const key in glass)
// {
//     const value = glass[key];
//     console.log(key, value)
// }

// optional way:
const keys = Object.keys(glass);
// console.log(keys)
for(const key of keys){
    const value = glass[key];
    console.log(key, value)
}