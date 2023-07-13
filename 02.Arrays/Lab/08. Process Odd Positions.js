let array = [10, 15, 20, 25] 
function getOdds(array){
    let oddArray = []
    for (let i = array.length-1; i >= 0; i--) {
        if (!(i%2==0)) {
            oddArray.push(array[i]*2);
        }
    }
    return oddArray;
}
console.log(getOdds(array))