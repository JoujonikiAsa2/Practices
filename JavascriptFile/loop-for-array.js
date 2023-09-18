var x = [10, 20, 30, 40, 50, 60];
for(var i = 0; i < x.length; i++ ){
    if(x[i] < 39 ){
        console.log('You got F');
    }
    else if(x[i] >= 40 && x[i] < 50){
        console.log('You got E');
    }
    else if(x[i] >= 50 && x[i] <= 60){
        console.log('You got D');
    }
    else if(x[i] >= 60 && x[i] <= 70){
        console.log('You got C');
    }
    else if(x[i] >= 70 && x[i] <= 80){
        console.log('You got B');
    }
    else if(x[i] >= 80 && x[i] <= 90){
        console.log('You got A');
    }
    else{
        console.log('You got A+');
    }

}