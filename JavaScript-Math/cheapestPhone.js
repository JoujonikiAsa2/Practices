const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
];
// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const result = cheapestPhone(phones);
// console.log(result);

function highestCamera(){
    let highestCamera = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.camera > highestCamera.camera){
            highestCamera = phone;
        }
    }
    return highestCamera;
}

const result = highestCamera(phones);
console.log(result);