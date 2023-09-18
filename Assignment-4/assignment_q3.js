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
var arr = [2,3];
console.log(sortMaker(arr));
var arr1 = [0,2];
console.log(sortMaker(arr1));
var arr2 = [4,4];
console.log(sortMaker(arr2));
var arr3 = [1,2];
console.log(sortMaker(arr3));
var arr4 = [4,-2];
console.log(sortMaker(arr4));