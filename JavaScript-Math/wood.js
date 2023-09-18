function woodCalculation(chairQuanntity,tableQuantity,bedQuantity){
    const  perChairWood = 3;
    const  perTableWood = 10;
    const  perbedWood = 50;
    
    const chairWood = chairQuanntity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perbedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculation(1,1,1);
console.log('Total wood required: ',totalWood);