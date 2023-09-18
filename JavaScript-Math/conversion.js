// Inch to feet calculate
function feet(inch) {
    var inFeet = inch / 12;
    console.log(inFeet.toFixed(2), "Feet");
}
feet(166);
feet(300);

// Sum of array elements
var arr = [20, 40, 50, 23, 32];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log("The sum of the array elements is: ", sum);

// Find sum using function
function getSumOfArray(numbers) {
    console.log(numbers);
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log("The sum of the array elements is: ", sum);
}
var arr = [5, 7, 8, 10, 45, 30];
getSumOfArray(arr)

// Miles to KM

function milesToKillometer(miles) {
    const km = miles * 1.609;
    return km;

}
console.log(milesToKillometer(16));

// Check either the number is even or odd

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}
checkEvenOdd(97);
checkEvenOdd(80);

// Check either a year is leap year or not

function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeapYear = leapYear(2045);
console.log(isLeapYear);
const isLeapYear2 = leapYear(2000);
console.log(isLeapYear2);
const isLeapYear3 = leapYear(1952);
console.log(isLeapYear3);
const isLeapYear4 = leapYear(1994);
console.log(isLeapYear4);

// Find sum of  odd numebers and even numbers separately

function getSumOfEvenAndOdd(numbers) {
    console.log(numbers);
    var evenSum = 0;
    var oddSum = 0;
    var even = [];
    var odd = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            even.push(numbers[i]);
            evenSum = evenSum + numbers[i];
        }
        if (numbers[i] % 2 != 0) {
            odd.push(numbers[i]);
            oddSum = oddSum + numbers[i];
        }
    }
    console.log('Even: ', even);
    console.log('Odd: ', odd);
    console.log('Even sum: ', evenSum);
    console.log('Odd Sum: ', oddSum);
}
var arr = [5, 7, 8, 10, 45, 30];
getSumOfEvenAndOdd(arr);

// Factorial
function fact(n) {
    for (var i = 1; i <= n; i++) {
        var s = n * (n - i);
        return s + s
    }
}
console.log(fact(5));