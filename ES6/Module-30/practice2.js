// Write an arrow function it will take an array where the array elements will be the name of your friends
// check if the length of each element is even, push elemments with evenn length to a new array and return the result

let evenLength = [];
const arrMax =(arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i].length %2 == 0){
            evenLength.push(arr[i]);
        }
    }
    return evenLength;
}
const names = ['asa','shawon','nabila'];
console.log(arrMax(names));