let matrix = [[3, 5, 17], 
[-1, 7, 14], 
[1, -8, 89]] 
function getPrimary(matrix){
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum+=matrix[i][i];
    }
    return sum;
}
function getSecondary(matrix){
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum+=matrix[i][matrix.length - i - 1];
    }
    return sum;
}
console.log(getPrimary(matrix))
console.log(getSecondary(matrix))