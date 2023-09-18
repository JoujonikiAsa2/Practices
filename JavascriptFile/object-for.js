var studentInfo = {
    name: 'Joujoniki Asa Roy',
    address: 'Dhaka',
    FatherName: 'Pobitro Roy',
    motherName: 'Sukla Roy',
    Siblings: 1,
    university: 'Daffodil International university',
    studentId: '201-15-13928'
}
var keys = Object.keys(studentInfo);
var values = Object.values(studentInfo);

// for (i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = studentInfo[propertyName];
//     console.log(propertyName, ":", propertyValue);
// }

for(propertyName in studentInfo){
    const value = studentInfo[propertyName];
    console.log(propertyName, value);
}