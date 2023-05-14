function solve(a,b,c)
{
    if (a>b && a>c) {
        return a;
    }
    if (b>a && b>c) {
        return b;
    }
   return c;
}
console.log(solve(5, -3, 16));