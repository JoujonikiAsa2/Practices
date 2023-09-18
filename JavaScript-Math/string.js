let str = "geeks for geeks";

console.log(str.includes('word'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('for'));
console.log(str.lastIndexOf('e'));
let count = 0;
for(let i = 0; i < str.length; i++){
    if(str[i]=='e'){
        count++;
    }
}
console.log(count);
console.log(str.startsWith('ge'), str.endsWith('sh'));

// reversed string
let reverseStr = "";
for(let i = 0; i < str.length; i++){
    let x = str[str.length-1-i];
    reverseStr += x;
}
console.log(reverseStr);

// reverse word
function reverseWord(str) {
    const words = str.split(" ");
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const x = words[i];
        result.push(x);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'I am a good girl';
console.log(reverseWord(myString));