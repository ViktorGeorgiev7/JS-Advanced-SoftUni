function carFactory(){
    let cars = [];
    return {
        create(name){
            cars.push({name});
        },
        createChild(name,parentName){
            let car = cars.filter(x=>x.name == parentName)[0];
            let deepCloneChild = JSON.parse(JSON.stringify(car));
            deepCloneChild.name = name;
            cars.push(deepCloneChild);
        },
        set(name,key,value){
            let car = cars.filter(x=>x.name == name)[0];
            car[key] = value;
        },
        print(name){
            console.log(JSON.stringify(cars.filter(x=>x.name == name)[0]))
        }

    }
}
let factory = carFactory();
let input = ['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
for (const line of input) {
    let argList = line.split(' ');
    let cmdArg = argList[0];
    let actionArg = argList[1];
    if (cmdArg == 'create'&&argList.length<3) {
        factory.create(actionArg);
    }
    else if(cmdArg == 'create'){
        factory.createChild(actionArg,argList[3]);
    }
    else if(cmdArg == 'set'){
        factory.set(actionArg,argList[2],argList[3]);
    }
    else if(cmdArg == 'print'){
        factory.print(actionArg);
    }
    else{console.log('error 101');return;}
}
