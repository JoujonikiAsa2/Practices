let input = prompt("What would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while(input !== 'quit'){
    if(input == 'list'){
        console.log('******************')
        for(let i = 0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('******************')
    }
    else if(input == 'new'){
        const newTodo = prompt("Ok, What is new to do?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input == 'delete'){
        const index = prompt("Ok, What is the index to delete?");
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(todos);
        }
        console.log(`${index} deleted from the list`);
    }
    input = prompt("What would you like to do?");
}
console.log("Ok QUIT THE APP!");