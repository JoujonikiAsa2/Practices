function addition(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return "Enter numbers for addition";
    }
    return a + b;
}

console.log(addition(5,'7'));
console.log(addition(5,7));
console.log(addition('5','7'));