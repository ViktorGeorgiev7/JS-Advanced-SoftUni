let array = ['Apple Crisp', 
'Mississippi Mud Pie', 
'Pot Pie', 
'Steak and Cheese Pie', 
'Butter Chicken Pie', 
'Smoked Fish Pie']
let start = 'Pot Pie'
let end = 'Smoked Fish Pie' 
function getArray(array,start,end)
{
    let startIndex = array.indexOf(start);
    let endIndex = array.lastIndexOf(end);
    let arr = []
   for (let i = startIndex; i <= endIndex; i++) {
    arr.push(array[i]);
   }
    return arr;
}
console.log(getArray(array,start,end));

