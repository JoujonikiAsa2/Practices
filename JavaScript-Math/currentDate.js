var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth()+1
var dd = today.getDay()
if(dd < 10){
    dd = "0"+dd;
}
if(mm < 10){
    mm = "0"+mm;
}
console.log(mm+"-"+dd+"-"+yyyy);
console.log(mm+"/"+dd+"/"+yyyy);
console.log(dd+"-"+mm+"-"+yyyy);
console.log(dd+"/"+mm+"/"+yyyy);
