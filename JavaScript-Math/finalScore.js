function finalScore(arr){
    let totalScore = 0;
    for(let i=0; i<arr.length; i++){
        totalScore += arr[i];
    }
    console.log(totalScore);
}
let arr = [1,20,12,34,54];
finalScore(arr)
let arr1 = [34,254];
finalScore(arr1)
let arr2 = [1,5,47];
finalScore(arr2)
let arr3 = [10,20,102,304,9,102,304,9];
finalScore(arr3)