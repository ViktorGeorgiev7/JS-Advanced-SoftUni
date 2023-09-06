let json = JSON.parse('[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')
json.forEach(element => {
    element.area = function(){return Math.abs(Number(this.x) * Number(this.y));}; 
    element.vol = function(){return Math.abs(Number(this.x) * (this.y * this.z));}; 
});//add functions to elements
let outputData = [];
for (const el of json) {//get output data
    let elArea = el.area();
    let elVol = el.vol();
    let elObj = {area:elArea,volume:elVol}
    outputData.push(elObj);
}
console.log(JSON.stringify(outputData))
