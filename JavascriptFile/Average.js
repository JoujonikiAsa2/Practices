// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the first number: ', (num1) => {
//   rl.question('Enter the second number: ', (num2) => {
//     rl.question('Enter the third number: ', (num3) => {
//       const number1 = parseFloat(num1);
//       const number2 = parseFloat(num2);
//       const number3 = parseFloat(num3);

//       const average = (number1 + number2 + number3) / 3;

//       console.log(`The average is: ${average}`);
//       rl.close();
//     });
//   });
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numberOfInputs = 3;
const numbers = [];

function takeUserInput(index) {
  if (index < numberOfInputs) {
    rl.question(`Enter number ${index + 1}: `, (num) => {
      const parsedNum = parseFloat(num);
      if (!isNaN(parsedNum)) {
        numbers.push(parsedNum);
        takeUserInput(index + 1);
      } else {
        console.log(`Invalid input. Please enter a valid number.`);
        takeUserInput(index);
      }
    });
  } else {
    rl.close();
    calculateAverage(numbers);
  }
}

function calculateAverage(numbersArray) {
  const sum = numbersArray.reduce((acc, num) => acc + num, 0);
  const average = sum / numbersArray.length;
  console.log(`The average of the entered numbers is: ${average}`);
}

takeUserInput(6);
