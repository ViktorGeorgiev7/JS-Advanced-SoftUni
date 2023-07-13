let arr = [3, 19, 14, 7, 2, 19, 6] 
function getBiggerHalf(arr){
    arr.sort(function(a, b){return a - b});
    return arr.splice(arr.length/2)
}
console.log(getBiggerHalf(arr))