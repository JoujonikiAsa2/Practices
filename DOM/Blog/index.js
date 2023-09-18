function submitValue() {
    var name = document.getElementById('name');
    var value = name.value;
    var date = new Date;
    var value2 = date.toDateString();
    var message = document.getElementById('message');
    var value3 = message.value;
    // Store the value in localStorage
    localStorage.setItem('myValue', value);
    localStorage.setItem('myValue2', value2);
    localStorage.setItem('myValue3', value3);
    // Redirect to the second page
    // window.location.href = 'Blog.html';
    const blogContainer = document.getElementById('blog-writing-area');
        const div = document.createElement('div');
        div.innerHTML = 
        `
        <h4>Name: ${value}</h4>
        <h6>Name: ${value2}</h6>
        <p>Name: ${value3}</p>

        `
        blogContainer.appendChild(div)
        commentBox.value = '';
        commentBox.value2 = '';
        commentBox.value3 = '';
}