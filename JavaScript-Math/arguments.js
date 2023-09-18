// Argument is not a array. It is a array like object.

function add (num1, num2){
    console.log(num1, num2);
    console.log(arguments); 
    // we can get element by index but can not use pop, push at this
    console.log(arguments[4]); 
}
add( 12,23,4,56,0);