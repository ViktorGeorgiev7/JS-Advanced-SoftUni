function breakfastFactory(){
let recipes = [
    {name:'apple',carbohydrate:1,flavour:2},
    {name:'lemonade',carbohydrate:10,flavour:20},
    {name:'burger',carbohydrate:5,fat:7,flavour:3},
    {name:'eggs',protein:5,fat:1,flavour:1},
    {name:'turkey',carbohydrate:10,protein:10,fat:10,flavour:10}
]
let ingridients ={carbohydrate:0,flavour:0,fat:0,protein:0};
return {
restock(ingridient,quantity){
    ingridients[ingridient]+=quantity;
    console.log('Success');
},
prepare(recipeName,quantity){
    let recipe = recipes.filter(x=>x.name==recipeName)[0];
    if (recipeName=='apple') {
        if (ingridients['carbohydrate']>=recipe['carbohydrate'])
        {
            if (ingridients['flavour']>=recipe['flavour']) {
                ingridients['carbohydrate']-=recipe['carbohydrate'];
                ingridients['flavour']-=recipe['flavour'];
                console.log('Success');
            }
            else{console.log('not enough flavour')}
        }
        else{console.log('not enough carbs')} 
    }//to.do....
},
report(){
    console.log('protein='+ingridients['protein']+' carbohydrate='+ingridients['carbohydrate']+' fat='+ingridients['fat']+' flavour='+ingridients['flavour']+'')
}
};
}
let factory = breakfastFactory();
factory.restock('flavour',10);
factory.restock('carbohydrate',10);
factory.report();
factory.prepare('apple',1);