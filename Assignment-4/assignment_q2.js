function matchFinder(string1, string2) {
    if(typeof string1 == 'string' && typeof string2 == 'string')
    {
        return string1.includes(string2);
    }
    else{
        return "Please give a string";
    }
}
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder(0, 0));
console.log(matchFinder("peter parker", "Pet"));