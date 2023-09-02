function create(words) {
   let contentDiv = document.querySelector('#content');
   for (const word of words) {
      let square = document.createElement('div');
      let textDiv = document.createElement('p');
      textDiv.textContent = word;
      square.id = '#content div'
      square.onclick = () =>{square.appendChild(textDiv);};
      contentDiv.appendChild(square)
   }
}