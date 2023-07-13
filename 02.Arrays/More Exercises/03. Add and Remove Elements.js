let array = ['add', 
'add', 
'remove', 
'add', 
'add']
function getNums(array){
    let nums = []
    let n = 0;
for (const obj of array) {
    n++;
    if (obj == 'add') {
        nums.push(n)
    } 
    else {
        nums.pop()
    }
}
if (nums.length == 0) {
    return 'Empty';
}
return nums;
}
console.log(getNums(array))
