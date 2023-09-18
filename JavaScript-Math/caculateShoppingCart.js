const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 1},
];

function totalCost(products) {
    let totalExpence = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        totalExpence += product.price * product.quantity;
    }
    return totalExpence;
}

const total = totalCost(shoppingCart);
console.log('Your total expense:', total);