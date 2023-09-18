x = [10,40,2,30,400,40,700];
for(var i = 0; i < x.length; i++){
    var y = x[i];
    if(y>30){
        continue;
    }
    console.log("continue",y);
}