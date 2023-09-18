function findAddress(obj) {
    const objkeys = ["street", "house", "society"];
    const output=[];

    for (const i of objkeys) {
        if (obj[i]== undefined) {
            output.push('__');
        } else {
            output.push(obj[i]);
        }
    }

    return output.toString();
}
var obj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
var obj1 = {
    street: 10,
    society: 'Earth Perfect'
}
var obj2 = {
    street: 10,
}
console.log(findAddress(obj));
console.log(findAddress(obj1));
console.log(findAddress(obj2));
