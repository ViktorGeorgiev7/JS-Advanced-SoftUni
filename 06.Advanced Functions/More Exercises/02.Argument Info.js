let data = ['cat', 'dog',42, function(){console.log('mew')},function () { console.log('Hello world!'); }]
function solve(data){
    let stringCounter = 0;
    let numCounter = 0;
    let functionCounter = 0;
    let isString = value => typeof value === 'string' || value instanceof String;
for (const object of data) {
    if (!isNaN(object)) {//object is number
        console.log('number: ' + object);
        numCounter++;
    }
    else if(isString(object)){
        console.log('string: ' + object);
        stringCounter++;
    }
    else{
        console.log('function: ' + object);
        functionCounter++;
    }
}
console.log('string counter = ' + stringCounter);
console.log('num counter = ' + numCounter);
console.log('function counter = ' + functionCounter);
}
solve(data);