// function randomNumber(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(Math.random(arr[i]));
//     }
// }
// var arr = [12,34,4,45,56,67,4];
// randomNumber(arr);

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`; 

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
planets.shift(0);
planets.push('Saturn');
planets.unshift('Mercury');
// YOUR CODE GOES BELOW THIS LINE:
console.log(planets);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats);

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(fullAddress);