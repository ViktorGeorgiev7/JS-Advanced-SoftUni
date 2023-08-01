function solve(name,population,treasury)
{
    let city = {name
        ,population
        ,treasury
        ,taxRate:10
        ,collectTaxes: function(){city.treasury+=city.population*city.taxRate}
        ,applyGrowth: function(percentage){city.population+=Math.round(city.population*(percentage/100))}
        ,applyRecession: function(percentage){city.treasury=Math.round(city.treasury*(1-(percentage/100)))}
    }
    return city;
}
let city = solve('Tortuga',7000,15000)
//console.log(JSON.stringify(city))
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

