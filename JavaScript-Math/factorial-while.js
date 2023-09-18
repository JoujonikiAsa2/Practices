function fact(num){
    result = 1;
    while(num >= 1){
        result = result * num;
        num--;
    }
    return result;
}
console.log(fact(5));
console.log(fact(6));
console.log(fact(7));