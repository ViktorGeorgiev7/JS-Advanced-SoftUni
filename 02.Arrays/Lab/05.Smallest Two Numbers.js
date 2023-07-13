let arr = [30, 15, 50, 5];
arr.sort(function(a, b){return a - b});
console.log(getSmallest(arr))
function getSmallest(arr){
return arr.shift() + ' ' + arr.shift();
}