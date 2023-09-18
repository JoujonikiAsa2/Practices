// const numbers = [45,65,23,98,19];
// for(let i = 0; i < numbers.length; i++){
//     const number  =  numbers [i];
//     console.log(number);
// }

// for(const number in numbers){
//     console.log(number)
// }

const products = [
    {id:1, name: 'Walton Phone', price: 1900},
    {id:2, name: 'Samsung phone', price: 2000},
    {id:3, name: 'BlackBery Phone', price: 1200},
    {id:4, name: 'Lenevo laptop', price: 1000},
    {id:5, name: 'Iphone Phone', price: 2900},
    {id:6, name: 'Xiami phone', price: 1700},
    {id:7, name: 'LEG Laptop', price: 1500},
    {id:8, name: 'Singer Phone', price: 1900},
    {id:9, name: 'Sony Laptop', price: 4900},
    {id:10, name: 'Infinix Phone', price: 1100},
];

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result =  matchedProducts(products, 'Laptop');
console.log(result);