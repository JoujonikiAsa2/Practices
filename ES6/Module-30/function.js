// function add(num1, num2){
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }
// // const sum = add(5,7);
// // const sum = add(7);
// const sum = add();

// যদি প্যারামিটার কম দেওয়া হয় না দেওয়া হয় তাহলে undefined দেখাবে
// এইক্ষেত্রে আমরা default মান দেওয়া হয়

function add(num1=99, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5,7);
// const sum = add(7);
// const sum = add(6);
const sum = add();

function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}
// const name = fullName('Asa','Roy');
// console.log(name)
const name = fullName('Asa'); //যখন আমরা কোনো ২টা প্যারামিটারের জায়গায় একটা ইউজ করি তাহলে অপরটা default মান নিয়ে নেয়
console.log(name)
