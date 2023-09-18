const names = ['anu','anu','monu','sonu','janu','monu','janu'];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);