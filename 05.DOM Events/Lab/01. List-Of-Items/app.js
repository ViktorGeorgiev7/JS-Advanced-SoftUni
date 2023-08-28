function addItem() {
    let item = document.querySelector('#newItemText');
    let liItem = document.createElement('li');
    liItem.textContent = item.value;
    let ul = document.querySelector('#items');
    ul.appendChild(liItem);
    item.value='';
}