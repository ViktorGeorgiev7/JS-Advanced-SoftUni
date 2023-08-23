function solve() {
  let text = document.querySelector("#text").value;
  let convention = document.querySelector("#naming-convention").value;
  let result = document.querySelector("#result");
  let arr = text.toLowerCase().split(' ');
  
  convention = convention.toLowerCase();
  if (!(convention == 'pascal case' || convention == 'camel case')){
    result.textContent += "Error!";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
      if (convention == 'camel case' && i == 0)
      {
        
      }
      else{
      let word = arr[i];
      word = word[0].toUpperCase() + word.slice(1,word.length);
      arr[i] = word;
    }
      
}
result.textContent = arr.join('');
}