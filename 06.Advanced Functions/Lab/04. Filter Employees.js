let data = JSON.parse(`[{ "id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female" }, { "id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }]`);
let criteria = 'gender-Female';
let arr = criteria.split('-');
let prop = arr[0];
let value = arr[1];
function filter(data,prop,value){
data.forEach(element => {
    if (element[prop] == value) {
    console.log(element.first_name + ' ' +element.last_name)}});
}
filter(data,prop,value)