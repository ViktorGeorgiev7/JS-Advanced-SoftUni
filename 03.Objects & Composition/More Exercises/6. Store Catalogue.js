let array = ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'];
let splitter;
let letter=array[0].charAt(0);//A
console.log(letter)
for (let string of array.sort()) {
    splitter = string.split(' : ');
    if (letter != splitter[0].charAt(0))/* write out the letter */ {
        console.log(splitter[0].charAt(0))
    }
    letter = splitter[0].charAt(0);
    console.log(splitter[0]+': '+splitter[1])
}