let matrix = [[4, 5, 6],
              [6, 5, 4],
              [5, 5, 5]];
function checkMagic(matrix){
 let sumLastRow=0;
for (let i = 0; i < matrix.length; i++) {
 let sum = 0;
for (let j = 0; j < matrix[i].length; j++) {
sum += matrix[i][j]

}
if (i!=0) {
if (sum != sumLastRow) {
return false;
}
}
sumLastRow=sum;
}
return true;
}
console.log(checkMagic(matrix))