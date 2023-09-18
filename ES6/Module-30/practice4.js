// write an arrow function it will do the following:
// it will take two array
// combine the two arrays and assign them in a new array
// Find the maximum number from the new array and return the result

const twoArray = (arr1, arr2) =>{
    const newArray = [...arr1,...arr2]
    return newArray;
}
console.log(twoArray([1,2,3,5],[3,4,5,7]))