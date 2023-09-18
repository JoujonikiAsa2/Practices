function canPay(changeArray, totalDue) {
    var sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];
    }
    if (changeArray.length == 0) {
        return "You have no money";
    }
    else if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}

var changeArray0 = [1,2,5];
var totalDue = 10;
console.log(canPay(changeArray0,totalDue));

var changeArray1 = [1,5,5];
console.log(canPay(changeArray1,totalDue));

var changeArray2 = [];
console.log(canPay(changeArray2,totalDue));