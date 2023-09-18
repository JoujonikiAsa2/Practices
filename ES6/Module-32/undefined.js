/*
1. Varibale tat is not initialized will give undefined.
2. Function with no return
3. Parameter that is not passed will undefined
4. if return has nothing on the right side will give undefined
5.if any property that doesnot exist on object will give undefined
6. Accessing array elements outside of the index range will give undefined
7. Deleting an element inside a array and set a value directly undefined
8. set a value directly undefined
*/ 


// 1. Varibale tat is not initialized will give undefined.
let marks;
console.log(marks)


// 2. Function with no return
function second(a,b){
    const total= a+b;
}
const result =  second()
console.log(result)

// 3.Parameter that is not passed will undefined
function third(a,b,c,d){
    const total= a+b+c+d;
    console.log(a,b,c,d)
}
const result1 =  third(2,5)

//4. if return has nothing on the right side will give undefined
function noNegative(a,b){
    if(a < 0 || b < 0 ){
        return
    }
    return a + b;
}
const total =  noNegative(-2,5)
console.log(total)

// 5.if any property that doesnot exist on object will give undefined
const fifth  = {id:1, name: 'ponchom', age:45}
console.log(fifth.age, fifth.salary)

// 6. Accessing array elements outside of the index range will give undefined
const sixth = [4,89,87,56,34];
console.log(sixth[3],sixth[200])

//7. Deleting an element inside a array

const eight = undefined;
console.log(eight)

// set a value directly undefined
const data = {result: [], update: null}
console.log(typeof null)