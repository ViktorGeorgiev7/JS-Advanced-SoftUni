function solution(n){
    let num = n;
    return function (increment){
        num+=increment;
        console.log(num)
    }
}
let foo = solution(5);
foo(3);
foo(2);
foo(-5);