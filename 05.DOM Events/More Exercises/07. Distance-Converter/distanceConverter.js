function attachEventsListeners() {
    let inputNumber = document.querySelector('#inputDistance');
    let outputField = document.querySelector('#outputDistance');
    let inputUnit = document.querySelector('#inputUnits');
    let outputUnit = document.querySelector('#outputUnits');
    let convertBtn = document.querySelector('#convert');
    console.log(inputUnit.value)
    console.log(outputUnit.value)
    convertBtn.addEventListener('click',function(){
    let numberAsMeters = getInputAsMeters(inputNumber,inputUnit);
    console.log(numberAsMeters);
    let outputNum = getOutputAsInputUnit(numberAsMeters,outputUnit);
    outputField.value = outputNum;
    console.log(outputNum);
    });

}
function getInputAsMeters(inputNumber,inputUnit){
    let n = Number(inputNumber.value);
    switch(inputUnit.value){
        case 'km':
            return n*1000;
        case 'm':
            return n;
        case 'cm':
            return n*0.01;
        case 'mm':
            return n*0.001;
        case 'mi':
            return n*1609.34;
        case 'yrd':
            return n*0.9144;
        case 'ft':
            return n*0.3048;
        case 'in':
            return n*0.0254;
        }
}
function getOutputAsInputUnit(numberAsMeters,outputUnit){
switch(outputUnit.value){
    case 'km':
        return numberAsMeters/1000;
    case 'm':
        return numberAsMeters;
    case 'cm':
        return numberAsMeters*100;
    case 'mm':
        return numberAsMeters*1000;
    case 'mi':
        return numberAsMeters/1609.34;
    case 'yrd':
        return numberAsMeters/0.9144;
    case 'ft':
        return numberAsMeters/0.3048;
    case 'in':
        return numberAsMeters/0.0254;
    }
}