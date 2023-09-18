function tallestFriend(numArrays){
    return Math.min(...numArrays);
    // let big = Math.max(numArrays[0],numArrays[1]);
    // for(let i=1; i<numArrays.length; i++){
    //     if(big<numArrays[i])
    //      big=numArrays[i];
    // }
    // return big;
}
const arr = [1,20,12,34,54];
console.log(tallestFriend(arr));

