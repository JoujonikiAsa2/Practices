// //Object
// const products = [
//     {id:1, name:'lenevo',price:6500},
//     {id:2, name:'dell',price:45000},
//     {id:3, name:'hp',price:4000},
//     {id:4, name:'mac',price:15000},
// ]

// //Class Has some properties, method
// class Product{
//     country = 'bangladesh';
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     speak(talk){
//         console.log(`talking about, ${talk}`);
//     }
// }
// const lenevo = new Product('lenevo', 600)
// console.log(lenevo)
// lenevo.speak('Oma ki kow!')

class Teacher{
    constructor(name,subject){
        this.name =  name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapan sir', 'Bangla')
console.log(tapan)
const robin = new Teacher('Robin sir', 'English')
console.log(robin)