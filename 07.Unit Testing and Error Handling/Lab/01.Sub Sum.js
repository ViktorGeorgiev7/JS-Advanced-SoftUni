function solve(array,start,end){
if (!Array.isArray(array)) {
    return NaN;
}
let startIndex = Math.max(start,0);
let endIndex = Math.min(end,array.length-1);

array = array.splice(startIndex,endIndex+1);
let sum = array.reduce((a,x)=>a+Number(x),0);
return sum;
}
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));