let array = ['Banana', 
'Orange', 
'Coconut', 
'Apple']
let rotations = 15;
for (let i = 0; i < rotations; i++) {
    array.unshift(array.pop())
}
console.log(array.join(" "))