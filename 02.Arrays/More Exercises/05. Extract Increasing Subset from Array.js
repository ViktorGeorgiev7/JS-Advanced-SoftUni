let array = [1, 
    2, 
    1,
    4];
    function getIncreasingSubset(array)
    {
        
        let biggest= array.shift();
        let subset = [biggest]
    for (const num of array) {
        if (biggest < num) {
            subset.push(num)
            biggest = num
        }
    }
    return subset;
    }
console.log(getIncreasingSubset(array))

    