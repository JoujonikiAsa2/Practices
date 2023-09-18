const user = {id:1, name: 'Gorib Amir', job: 'Actor'};
const stringified = JSON.stringify(user)
console.log(user)
console.log(stringified)

// { id: 1, name: 'Gorib Amir', job: 'Actor' }
// {"id":1,"name":"Gorib Amir","job":"Actor"}

const shop = {
    owner:'Alia',
    address: {
        street: 'Kochukata voot er goli',
        city: 'Ranbir',
        country: 'BD'
    },
    products: ['Laptop', 'mic', 'mouse'],
    revenue: 45000,
    isOpen: true,
    inNew: false
}
console.log(shop)
const shopJSON = JSON.stringify(shop) 
console.log(shopJSON) //obj to string
const shopObj = JSON.parse(shopJSON)
console.log(shopObj) //string to obj