function solve(array){
    let arr =[]
for (let i = 0; i < array.length-1; i+=2) {
    arr.push({name:array[i],calories:array[i+1]})
}
return arr;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 
'Apple', '52']))