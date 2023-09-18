// // Adding a constractor
// function Person(name, age, address, phone){
//     this.name = name;    
//     this.age = age;    
//     this.address = address;    
//     this.phone = phone;  
//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.address);
//         console.log(this.phone);
//     }  
// }

// var person1 = new Person("Asa",23,"Lalmonirhat",88263782);
// var person2 = new Person("Roy",20,"Dhaka",88263772);
// var person3 = new Person("Nibedita",21,"Rangpur", 98263782);

// person1.display();
// person2.display();
// person3.display();

const nayok = {
    name: 'Sakib khan',
    id: 121,
    address: 'Movie chinema',
    isSingle: false,
    friends: ['Apu','Raz','Salman','Amir'],
    movie: [{name: 'No 1', year: 2015},{name: 'Kink khan', year: 2018}],
    act: function() {
        console.log("Acting Like Shakib Khan")
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        menufacturer: {
            name: 'tesla',
            ceo: 'Elonmask',
            country: 'USA'
        }
    }
}
// console.log(student);
// console.log(student.friends);
// console.log(student.car);

console.log(nayok.act);
nayok.act();