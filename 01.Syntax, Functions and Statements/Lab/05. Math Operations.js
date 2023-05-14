function solve(num1,num2,operation){
switch (operation) {
    case '+':
        return num1+num2;
    case '-':
        return num1-num2;
    case '*':
        return num1*num2;
    case '/':
        return num1/num2;
    case '%':
        return num1%num2;
    case '**':
        return Math.pow(num1,num2)
}
return 'wrong input';
}
console.log(solve(5,455,'**'))