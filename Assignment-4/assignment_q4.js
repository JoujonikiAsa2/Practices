function findAddress(obj) {
    let values = Object.values(obj);
    return values.toString();
    obj.hasOwnPropery

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