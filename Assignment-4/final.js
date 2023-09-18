function cubeNumber(number) {
    if(typeof number == 'number'){
        cube = number ** 3;
        return cube;
    }
    else{
        return "Please give a positive number";
    }
}

function matchFinder(string1, string2) {
    if(typeof string1 == 'string' && typeof string2 == 'string')
    {
        return string1.includes(string2);
    }
    else{
        return "Please give a string";
    }
}

function sortMaker(arr) {
    for(let i=0; i<2; i++){
        if(arr[i] == arr[i+1]){
            return "equal";
        }
        else if(arr[i]>=0 && arr[i+1]>=0 && arr[i]>arr[i+1]){
            return [arr[i],arr[i+1]];
        }
        else if(arr[i]>=0 && arr[i+1]>=0 && arr[i]<arr[i+1]){
            return [arr[i+1],arr[i]];
        }
        else if(arr[i]<0 || arr[i+1]<0){
            return "Invalid Input";
        }
        else{
            return "Invalid Input";
        }
    }
}

function findAddress(obj) {
    const objkeys = ["street", "house", "society"];
    const output=[];

    for (const i of objkeys) {
        if (obj[i]== undefined) {
            output.push('__');
        } else {
            output.push(obj[i]);
        }
    }

    return output.toString();
}

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
