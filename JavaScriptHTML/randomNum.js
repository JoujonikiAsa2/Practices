// const num = Math.ceil(Math.random() * 10);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    document.write('Matched');
//   else
//    document.write('Not matched, the number was '+num);

// DEFINE YOUR FUNCTION BELOW:
// DEFINE YOUR FUNCTION BELOW:
// DEFINE YOUR FUNCTION BELOW
function returnDay(num){
  let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  if(num<1 || num>7){
      return null;
  }
  else{
      if(num==1){
          return 'Monday';
      }
      else if(num==2){
          return 'Tuesday';
      }
      if(num==3){
          return 'Wednesday';
      }
      if(num==4){
          return 'Thursday';
      }
      if(num==5){
          return 'Friday';
      }
      if(num==6){
          return 'Saturday';
      }
      if(num==7){
          return 'Sunday';
      }
  }
}

console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Monday"
console.log(returnDay(4)); // "Monday"
console.log(returnDay(0)); // "Monday"
