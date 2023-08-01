let arr = [
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];
let towns = [];
let delimiters = [' | ','| ',' |']
const pattern = /\|/;
for (let sentence of arr) {
    const modifiedSentence = sentence.replace(pattern, '').replace(' ','').split(' ');
    towns.push({town:modifiedSentence[0],latitude:Number(modifiedSentence[2]).toFixed(2),longitude:Number(modifiedSentence[4]).toFixed(2)})
}
console.log(JSON.stringify(towns))
