let car = { model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 };

/*{ model: 'VW Golf II',
 engine: { power: 90,
 volume: 1800 },
 carriage: { type: 'hatchback',
 color: 'blue' },
 wheels: [13, 13, 13, 13] }*/

function getCar(car){
    let engine = getEngine(car.power);
    let carriage = getCarriage(car.carriage,car.color);
    let wheels = getWheels(car.wheelsize)
    let output = {model:car.model,engine,carriage,wheels}
    return output;

}
function getEngine(carPower){
    let engine = { power: 0,
        volume: 0 };
    if (car.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    }
    else if (car.power<=120) {
        engine.power = 120;
        engine.volume = 2400;
    }
    else{
        engine.power = 200;
        engine.volume = 3500;
    }
    return engine;
}
function getCarriage(carriage,color){
    return {type:carriage,color}
}
function getWheels(wheelSize){
    if (wheelSize % 2 != 0) {
        return [wheelSize,wheelSize,wheelSize,wheelSize];
    }
    wheelSize--;
    return [wheelSize,wheelSize,wheelSize,wheelSize];

}
console.log(getCar(car))