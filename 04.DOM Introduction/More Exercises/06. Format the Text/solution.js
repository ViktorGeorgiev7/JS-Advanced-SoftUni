function solve() {
  let textArea = document.querySelector("#input").value;
  let array = Array.from(textArea.split('.'));
  let div = document.querySelector("#output");
  div.textContent = '';
  for (let i = 0; i < array.length; i++) {//remove last index dot
        let text = array.splice(0,3).join('. ')
        const paragraph = document.createElement("p");
        paragraph.textContent = text  + '.';
        div.appendChild(paragraph);
  }
}