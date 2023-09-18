const products = [
    {id:1, name:'lenevo',price:6500},
    {id:2, name:'dell',price:45000},
    {id:3, name:'hp',price:4000},
    {id:4, name:'mac',price:15000},
]

// map
const productNames = products.map(product=>product.name)
console.log(productNames)

// map
const productPrices = products.map(product=>product.price)
console.log(productPrices)

// filter
const lowerPrices = products.filter(product=>product.price <= 6500)
console.log(lowerPrices)

// find
const higerPrices = products.find(product=>product.price > 10000)
console.log(higerPrices)

// reduce
const totalProductPrice = products.reduce((acum, current) => acum + current.price, 10000)
console.log(totalProductPrice)