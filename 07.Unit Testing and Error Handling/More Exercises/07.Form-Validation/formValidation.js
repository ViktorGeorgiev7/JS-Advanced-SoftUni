const { use } = require("chai");

function validate() {
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');
    let isCompany = document.querySelector('#company');
    let companyInfo = document.querySelector('#companyInfo');
    let submit = document.querySelector('#submit');
    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^\w{5,15}$/;
    let otherPasswordRegex = /^\w{5,15}$/;
    getOnchangeListener(usernameRegex,username);
    getOnchangeListener(emailRegex,email);
    getOnchangeListener(passwordRegex,password);
    getOnchangeListener(otherPasswordRegex,confirmPassword);
    setPasswordProtection(password,confirmPassword);
    setCheckbox(isCompany,companyInfo);
    setSubmit(submit,username,email,password,confirmPassword,isCompany,companyInfo);
}
function getOnchangeListener(regex,field){
    let onclick = () => {if (!regex.test(field.value)) {
        field.style.borderColor = "red";
    }else{
        field.style.borderColor = "none";}}
        field.addEventListener('change',onclick);
    }
function setPasswordProtection(password,confirmPassword){
    confirmPassword.addEventListener('change',function(){
    if (confirmPassword.value != password.value) {
        confirmPassword.style.borderColor = "red";
    }
    else{
        confirmPassword.style.borderColor = "none";}
    });
}
function setCheckbox(checkbox,companyInfo){
    setCompanyNumberValidation(checkbox,companyInfo);
    checkbox.addEventListener('change', function() {
    if (this.checked) {
            companyInfo.style.display = 'block';
    } else {
    companyInfo.style.display = 'none';}
});
}
function setCompanyNumberValidation(companyInfo){
companyInfo.addEventListener('change',function(){
    if (companyInfo.value > 999 && companyInfo.value < 10000) {
        confirmPassword.style.borderColor = "red";
    }
    else{
        confirmPassword.style.borderColor = "none";}
    });
}
function setSubmit(submit,username,email,password,confirmPassword,isCompany,companyInfo){
submit.addEventListener('click',function(e){
    e.preventDefault();
})
submit.addEventListener('click',function(){
if (username.style.borderColor == 'red' ||email.style.borderColor == 'red' ||password.style.borderColor == 'red' ||
confirmPassword.style.borderColor == 'red' ||companyInfo.style.borderColor == 'red') {
    alert('Wrong input!')
}
else{
    let valid = document.querySelector('#valid');
    valid.style.display = 'block';
}
});
}