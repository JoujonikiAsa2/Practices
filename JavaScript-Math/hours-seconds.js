function checkNumberSeven(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const str = numbers[i].toString();
        if (str.includes('7')) {
            return true;
        }
    }
    return false;
}
 
function main(input) {
    const numberArray = [];
    const numbers = input.trim().split(' ');
    for (let i = 0; i < numbers.length; i++) {
        numberArray.push(parseInt(numbers[i]));
    }
 
    const res = checkNumberSeven(...numberArray);
 
    if (res) {
        console.log('Boom!');
    } else {
        console.log('There is no 7 in the array.');
    }
}
 
process.stdin.on('data', data => {
    main(data.toString());
});
 
