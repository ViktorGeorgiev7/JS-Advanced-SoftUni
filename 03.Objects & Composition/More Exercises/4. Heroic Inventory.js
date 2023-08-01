let input = ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'];
let mainInfoArr=[];
let itemsArr=[];
let register= [];
for (const string of input) {
    mainInfoArr = string.split(' / ')
    itemsArr = mainInfoArr[2].split(', ');
    let hero = {
        name:mainInfoArr[0],
        level:Number(mainInfoArr[1]),
        items:itemsArr
    }
    register.push(hero)
}
console.log(JSON.stringify(register))