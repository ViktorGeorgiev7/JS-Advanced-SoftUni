function validate() {
    let emailField = document.querySelector('#email');
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailField.addEventListener('change',function(){
        if (!emailRegex.test(emailField.value)) {
            emailField.className = 'error';
            return;
        }
        emailField.className = '';
    });
}
