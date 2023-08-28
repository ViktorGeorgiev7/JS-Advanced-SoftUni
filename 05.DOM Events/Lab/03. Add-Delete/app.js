function addItem() {
    let item = document.querySelector('#newItemText');
    let liItem = document.createElement('li');
    liItem.textContent = item.value;
    let ul = document.querySelector('#items');
    let href = document.createElement('a');
    let textNode = document.createTextNode('Delete');
    href.setAttribute('href',"#");
    href.onclick = ()=>{liItem.remove()};
    href.appendChild(textNode);
    liItem.appendChild(href);
    ul.appendChild(liItem);
    item.value='';
    //
}