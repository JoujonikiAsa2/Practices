var results = [95, 66, 80, 59, 47, 77];
console.log('Aliya: ',results[0])
if(results[0] < 50){
    console.log('You got F');
}
else if(results[0] >= 50 && results[0] <= 60){
    console.log('You got D');
}
else if(results[0] >= 60 && results[0] <= 70){
    console.log('You got C');
}
else if(results[0] >= 70 && results[0] <= 80){
    console.log('You got B');
}
else if(results[0] >= 80 && results[0] <= 90){
    console.log('You got A');
}
else{
    console.log('You got A+');
}