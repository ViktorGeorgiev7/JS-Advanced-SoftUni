let matrix = [[3, 5, 7, 12], 
[-1, 4, 33, 2], 
[8, 3, 0, 4]] 

function getBiggest(matrix)
{
    let num=-1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (num<matrix[i][j]) {
              num = matrix[i][j]  
            }
        }
    }
    return num
}
console.log(getBiggest(matrix))
