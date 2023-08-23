function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.querySelector("#searchField")
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      rows.forEach(x=>x.className = '');
      for (const row of rows) {
         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = "select";
         }
      }
   }
}