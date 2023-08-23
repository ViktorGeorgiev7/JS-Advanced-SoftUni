let input = ['Montana | Apple | 1000',
'Montana | Orange | 2',
'Montana | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Apple | 1000.1',
'New York | Burger | 10'];
let sentence;
let product;
let cheapestPrices = []
for (let i = 0; i < input.length; i++) {
    sentence = input[i].split(' | ')
    product = {
        town:sentence[0],
        name:sentence[1],
        price:Number(sentence[2])
    }
    if (cheapestPrices.filter(x=>x.name==product.name).length>0) {
        let alreadyExisting = cheapestPrices.filter(x=>x.name==product.name).shift();
        if (alreadyExisting.price>product.price) {
            let index = cheapestPrices.findIndex(x=>x.name == alreadyExisting.name)
            cheapestPrices = cheapestPrices.filter((x,i)=>i!=index);
            cheapestPrices.push(product);
        }
    }
    else{cheapestPrices.push(product)}
}
cheapestPrices.forEach(element => {console.log(element.name +'-> '+ element.price + ' ' +element.town)});
