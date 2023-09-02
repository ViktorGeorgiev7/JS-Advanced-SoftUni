function addItem() {
    let menuSelect = document.querySelector('#menu');
    let newItemText = document.querySelector('#newItemText');
    let newItemValue = document.querySelector('#newItemValue');
    let item = document.createElement('option');
    item.value = newItemValue.value;
    item.textContent = newItemText.value;
    newItemValue.value = '';
    newItemText.value = '';
    menuSelect.appendChild(item);
}