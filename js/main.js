document.getElementById('btn').addEventListener('click', function(){
    const emailField = document.getElementById('mail');
    const email = emailField.value;
    
    const passwordField = document.getElementById('pass');
    const password = passwordField.value;
    if (email === 'avishekchy71@gmail.com' && password === 'abcdef'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid username or password');
    }
})