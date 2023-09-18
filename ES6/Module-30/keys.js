const glass = {
    name:'glass',
    color:'golden',
    price:12, 
    isCleaned: true
};

// // Keys return kore
// console.log(glass)
// const keys = Object.keys(glass);
// console.log(keys)

// // Values return kore
// const values = Object.values(glass);
// console.log(values)

// // 2D array return korbe
// const entries =  Object.entries(glass)
// console.log(entries)

// // [
// //     [ 'name', 'glass' ],
// //     [ 'color', 'golden' ],
// //     [ 'price', 12 ],
// //     [ 'isCleaned', true ]
// // ]

// // we can delete property in object
// delete glass.isCleaned;
// console.log(glass)

// // another way
// const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass)

// freeze helps to unchanged the object
// Object.freeze(glass)
glass.foo = 'Bangladesh';
console.log(glass)

// // seal kora
// Object.seal(glass)
// glass.source = 'Bangladesh';
// console.log(glass)
// glass.price =500;
// delete glass.name;
// console.log(glass)