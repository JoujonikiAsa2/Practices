function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ul =document.getElementById('users-lists');
    for(const user of data){
        // console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)
    }
}