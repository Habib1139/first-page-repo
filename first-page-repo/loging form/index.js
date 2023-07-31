document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field')
    const email = emailField.value;
    emailField.value ='';
    
    const passwordField = document.getElementById('pass-field')
    const password = passwordField.value;
    passwordField.value = '';

    if(email=='habib@gmail.com' && password=='12345'){
        window.location = 'bank.html'
    }
    else{
       alert('invalid User, enter your valid email and password')
    }
})