function findingBadData(arr){
    let numbers = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i]<0){
            numbers.push(arr[i]);
        }
    }
    if (numbers.length === 0) {
        return 0;
    } else {
        return numbers.length;
    }
}
const arr = [1,2,5];
console.log(findingBadData(arr));

const arr1 = [2,-5,-7,-13];
console.log(findingBadData(arr1));

const arr2 = [-4,-9,-5,-33,-55];
console.log(findingBadData(arr2));



