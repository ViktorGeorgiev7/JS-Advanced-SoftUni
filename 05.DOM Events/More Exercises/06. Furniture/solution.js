function solve() {
  let mainDiv = document.querySelector('#exercise');
  let textArea = mainDiv.querySelector('textarea');
  let textAreas = mainDiv.querySelectorAll('textarea');
  let boughtItems = textAreas[1];
  let buttons = mainDiv.querySelectorAll('button');
  let buyBtn = buttons[1];
  let button = mainDiv.querySelector('button');
  let tbody = mainDiv.querySelector('tbody');
  button.addEventListener('click',function(){
    let json = JSON.parse(textArea.value);
    for (const element of json) {
      let tr = document.createElement('tr');//create new table row element
      let tdImg = document.createElement('img');
      tdImg.src = element.img;
      tr.appendChild(tdImg);
      let tdName = document.createElement('td');
      tdName.textContent = element.name;
      tr.appendChild(tdName);
      let tdPrice = document.createElement('td');
      tdPrice.textContent = element.price;
      tr.appendChild(tdPrice);
      let tdFactor = document.createElement('td');
      tdFactor.textContent = element.decFactor;
      tr.appendChild(tdFactor);
      let checkBox = document.createElement('input');
      checkBox.setAttribute("type", "checkbox");
      tr.appendChild(checkBox);
      tbody.appendChild(tr)}});
  let tableRows = mainDiv.querySelector('tbody tr');
  buyBtn.addEventListener('click',function(){
    let productNames = [];
    let sum = 0;
    let decorationFactor = 0;
      for (let i = 1; i < tableRows.length; i++) {
      const checkbox = tableRows[i].querySelector('input');
      if (checkbox.checked) {
          productNames.push(tableRows[i].querySelectorAll('td')[1].textContent);
          sum+=Number(tableRows[i].querySelectorAll('td')[2].textContent);
          decorationFactor+=Number(tableRows[i].querySelectorAll('td')[3].textContent);
      }
    }
    decorationFactor = decorationFactor/productNames.length;//get avrg decoration factor
    boughtItems.textContent+=productNames.join(', ') + '\n';
    boughtItems.textContent+=sum + '\n';
    boughtItems.textContent+=decorationFactor;

  }
  ) 
}
