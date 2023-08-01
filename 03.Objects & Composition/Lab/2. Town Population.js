let data = ['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

function solve(data)
{
    let towns = []
    for (let i = 0; i < data.length; i++) {
        let info = data[i].split(" <-> ");
        let town = {townName:info[0],townPopulation:Number(info[1])}
        let index = towns.findIndex(x=>x.townName==town.townName)
        if (index != -1)
        {
            towns[index].townPopulation+=town.townPopulation;
        }
        else
        {
            towns.push(town)
        }
    }
    return towns;
}
let arr = solve(data);
for (const town of arr) {
    console.log(town.townName + " : " + town.townPopulation)
}