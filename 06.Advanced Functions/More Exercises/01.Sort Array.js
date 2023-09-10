let array = [14, 7, 17, 6, 8];
let sorting = 'desc';
function solve(sorting,array){
    if (sorting == 'asc') {
        return array.sort((a,b) => a-b);
    }
    else if(sorting=='desc'){
        return array.sort((a,b) => b-a);
    }
}
console.log(solve(sorting,array));