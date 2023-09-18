console.log('--------------------');
for (var year = 92014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    console.log(d);
    if (d.getDay() === 1)
        console.log("1st January is being a Sunday  " + year);
}
console.log('--------------------');