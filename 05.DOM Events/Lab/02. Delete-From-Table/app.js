function deleteByEmail() {
    let customers = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
    let inputElement = document.querySelector('input[name="email"]').value;
    let match = customers.find(x=>x.textContent == inputElement);
    let div = document.querySelector()
    if (match != undefined) {
        match.parentNode.remove();
    }
    else  {}
    
}