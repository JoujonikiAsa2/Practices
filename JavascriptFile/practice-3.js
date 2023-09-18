var a,b,c;
a = 9;
b = 8;
c = 9;
if(a == b && a != c){
    console.log("The triangle is isoscele");
}
else if(b == c && b != a){
    console.log("The triangle is isoscele");
}
else if(b == a && b != c){
    console.log("The triangle is isoscele");
}
else if(a == c && a != b){
    console.log("The triangle is isoscele");
}
else{
    console.log("The triangle is not isoscele");
}