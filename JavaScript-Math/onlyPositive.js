function onlyPositive(arr){
    let positive = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>=0){
            positive.push(arr[i]);
        }
    }
    return positive;
}

const arr = [1,2,3,4,-5,0,7,-9];
console.log(onlyPositive(arr));