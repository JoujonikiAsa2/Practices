// Access Value, Nested Object, Optional Chaining

// Data access
const data = [{id: 1, name: 'abul', address: 'Kochu Kata'}];
console.log(data[0].name)

// example of Access Value
const product = {
    count: 500,
    data: [
        {name: 'lenevo', price: 12000},{name: 'lenevo', price: 12000}
    ]
}
// second product price
console.log(product.data[1].name,product.data[1].price)

// another example of access value from chain
const user = {
    id:5001,
    name:'Shoriful Islam',
    address: {
        street:{
            first: '54/1 South side',
            second: 'poribag er goli',
            third: 'No dorai'
        },
        city: 'dhaka'
    }
}
console.log(user.address.street?.second)

const user2 = {
    id:5001,
    name:'Shoriful Islam',
    address: {
        city: 'dhaka',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.second) //Optional chaining