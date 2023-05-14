let n = 11111
let lastnum=0;
while (n>9) {
    lastnum= Math.round(n%10);
    n/=10;
    n= Math.round(n)
    if (lastnum != n % 10) {
        console.log('problem')
        return;
    }
}
console.log('success')
