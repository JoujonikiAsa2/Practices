// For object
const student = {
    name: 'Asa',
    id: '201-15-13928',
    age: 23,
    phone: 1788084582
}

const {name:fullName, id, age, phone} = student;
console.log(fullName,id,age,phone)

// For array
const [first, second, ...remaining] = [50,79,99,80,45];
