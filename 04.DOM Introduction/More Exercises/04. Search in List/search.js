function search() {
   let list = document.querySelector("#towns");
   let towns = Array.from(document.getElementsByTagName("li"));
   let match = document.querySelector("#searchText");
   let div = document.querySelector("#result");
   let count = 0;
   clearApp(towns,div);
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(match.value)) {
         let town = towns[i];
         town.style.textDecorationLine = "underline";
         count++;
      }
   }
   div.textContent += count + ' matches found';
}


function clearApp(towns,div){
   towns.forEach(x=>x.style.textDecorationLine = "none")
   div.textContent ='';
}