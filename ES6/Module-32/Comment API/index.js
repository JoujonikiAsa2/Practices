function getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(comments){
    const commentContainer = document.getElementById('comment-lists');
    for(const comment of comments){
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <h4>Name: ${comment.name}</h4>
        <h5>Email: ${comment.email}</h5>
        <p>Comment: ${comment.body}</p>`
        commentContainer.appendChild(commentDiv)
        commentDiv.classList.add('comment-section')
    }
}
getComments()