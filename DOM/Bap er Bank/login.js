document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2: get the eamil address inside the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    if(email == "sontan@bap.com" && password == "secretuser"){
        window.location.href= 'bank.html';
    }
    else{
        alert("Age account khul pore login er try koris")
    }
});