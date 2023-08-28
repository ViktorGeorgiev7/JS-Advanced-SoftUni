function validate() {
    let email = document.querySelector('#email');
    let pattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
    let onchange = () =>{
        if(email.value.match(pattern) != null)
        {//correct email
            email.className = '';
        }
        else{//wrong email
            email.className = 'error'
        }
    }
    email.addEventListener('change',onchange)
}