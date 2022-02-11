document.getElementById('submit-btn').addEventListener('click', function(){
    // get user email 
    const mailField = document.getElementById('user-email');
    const userEmail = mailField.value;
    // get user password 
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    
    // check pass and email 
    if(userEmail == 'hamidazad020@gmail.com' && userPass == 'secret'){
        window.location.href = 'bank-site.html'
    }
})