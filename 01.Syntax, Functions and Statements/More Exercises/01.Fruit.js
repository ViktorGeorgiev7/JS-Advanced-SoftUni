function getPrice(fruit,grams,price)
{
    return ('I need ' + '$' + price + ' to buy ' + grams + ' kilograms ' +  fruit + '.')
}
let fruit = 'orange'
let grams = (2500/1000).toFixed(2)
let price = ((grams*1.80)).toFixed(2)
console.log(getPrice(fruit,grams,price))