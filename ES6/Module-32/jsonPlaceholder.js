// fetch('http://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response))
//     // .then(response => response.json()) //.json is not similar but close to JSON.parse
//     // .then(json => console.log(json))

// fetch('')

// const url = 'https://jsonplaceholder.typicode.com/photos/1';
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}