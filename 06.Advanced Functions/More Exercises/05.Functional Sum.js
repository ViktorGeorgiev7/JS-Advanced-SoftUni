function add(num){
let sum = 0;
    function inner(n)
    {
        sum+=n;
        return inner;
    }
    inner.toString = () =>{return sum;};
    return inner(num);
}
console.log(add(2)(3).toString());