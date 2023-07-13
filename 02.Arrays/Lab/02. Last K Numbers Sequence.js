let n = 8;
let k = 2;
let array = [1];
let sum;
    for (let i = 0; i+1 < n; i++) {
        sum = 0;
       for (let j = i-k+1; j <=i; j++) {
        if(!isNaN(array[j]))
        {
            sum+=array[j];
        }
       }
       array.push(sum)
}
console.log(array)
