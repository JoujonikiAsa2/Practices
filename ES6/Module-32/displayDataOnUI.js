function displayData2(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => display(data))
}

function display(data){
    const ul =  document.getElementById('users-lists');
    for(const album of data){
        const li = document.createElement('li');
        // const keys = Object.keys(album);
        li.style.listStyle = 'none'
        li.innerText = `${album.id}, ${album.title}`;
        ul.appendChild(li)
    }
}