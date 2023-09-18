function ticketPrice(ticketQuantity) {
    const first100rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else if (ticketQuantity > 200) {
        const first100Price = 100 * first100rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

function print(number) {
    const money = number;
    const cost = console.log(ticketPrice(200));
    if(cost > money){
        console.log("Not possible to buy")
    }
    else{
        console.log("Let's buy tickets")
    }
}
print(900);
print(1900);