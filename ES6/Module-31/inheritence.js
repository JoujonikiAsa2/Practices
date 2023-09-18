class Vehicle {
    constructor(name, price){
        this.name = 'Transport';
        this.price = 700000;
    }
    move(){
        console.log('Gari chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    counter(){
        console.log('Le tui counter a aisos');
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price)
        this.load = load
    }
    load(){
        console.log('Onek load nite pare')
    }
}

const vehicle1 =  new Vehicle()
const bus =  new Bus('','',40,60)
const truck = new Truck('','',700)
console.log(vehicle1)
console.log(bus)
console.log(truck)