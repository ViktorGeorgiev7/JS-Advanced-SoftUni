function toggle() {
    let div = document.querySelector("#extra");
    let button = document.getElementsByClassName("button")[0];
    if (button.textContent == 'Less')//hide
    {
        div.style.display = 'none';
        button.textContent = 'More';
    }
    else{
        div.style.display = 'inline-block';
        button.textContent = 'Less';
    }
}