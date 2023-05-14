function solve(n)
{
    if (!isNaN(n)) {
        return ((n*n)*Math.PI).toFixed(2);
    }
    return `We can not calculate the circle area, because we received a string.`;
}
console.log(solve(5))