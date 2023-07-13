let array = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];

array.sort((a,b)=> a-b)
let smallerNums =array.slice(0,array.length/2)
let biggerNums = array.slice(array.length/2,array.length+1)
biggerNums.sort((a,b)=>b-a)
let newArr = []
for (let i = 0; i < array.length/2; i++) {
    newArr.push(smallerNums[i])
    newArr.push(biggerNums[i])
}
console.log(newArr)