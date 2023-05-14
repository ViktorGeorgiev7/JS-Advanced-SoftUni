let arr = ['dice', 'spice', 'chop', 'bake', 'fillet'];
let n = 9;
function operate(n,arr)
{
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "chop":
                n/=2;
                break;
            case "dice":
                n=Math.sqrt(n);
                break;
            case "spice":
                n+=1;
                break;
            case "bake":
                n*=3;
                break;
            case "fillet":
                n*=0.80;
                n=(n).toFixed(1)
                break;
        }
        console.log((n));
    }
}
operate(n,arr)