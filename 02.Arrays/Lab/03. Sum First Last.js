let array = ['20','30','40']
function sum(array)
{
    return Number(array[0]) + Number(array[array.length-1]);
}
console.log(sum(array))