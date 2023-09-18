function second(a,b){
    const total = a + b; // Function scope
    if(b>5){
        const sum = 25+a+b;
    }
    else{
        const sum = 5+a+b; //Block scope
        // const current = sum;
        // var current = sum; // global scope
    }
    console.log(current);
    return total
}
second(5,3)