let text = "Hey, what you doing today?";
let delimiters= [ ",", "!", "?" ]
text = text.replace(",","");
text = text.replace("?","");
let myArray = text.split(" ").map(x=>x.toUpperCase());
console.log(myArray) 