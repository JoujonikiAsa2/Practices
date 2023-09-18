/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
 */

function discountTicketPrice(ticketQuantity){
    const first100ticket = 100;
    const second100ticet = 90;
    const restTicket = 70;
    if(ticketQuantity<=100){
        const first100ticketPrice = ticketQuantity * first100ticket;
        return first100ticketPrice;
    }
    else if(ticketQuantity<=200){
        const first100ticketPrice = 100 * first100ticket;
        const second100ticetPrice = (ticketQuantity - 100)*second100ticet;
        const totalTicketPrice = first100ticketPrice+second100ticetPrice;
        return totalTicketPrice;
    }
    else{
        const first100ticketPrice = ticketQuantity * first100ticket;
        const second100ticetPrice = 100*second100ticet;
        const restTicketPrice = (ticketQuantity-200)*restTicket;
        const totalTicketPrice = first100ticketPrice+second100ticetPrice + restTicketPrice;
        return totalTicketPrice;
    }
}

const totalTicketPrice =  discountTicketPrice(120);

console.log("Price: ",totalTicketPrice);