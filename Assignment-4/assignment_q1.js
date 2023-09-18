function cubeNumber(number) {
    if(typeof number == 'number'){
        cube = number ** 3;
        return cube;
    }
    else{
        return "Please give a positive number";
    }
}
console.log(cubeNumber(3));
console.log(cubeNumber(-5));
console.log(cubeNumber(0));
console.log(cubeNumber('4'));