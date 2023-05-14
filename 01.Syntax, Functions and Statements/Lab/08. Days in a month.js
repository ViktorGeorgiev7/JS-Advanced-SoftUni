function getCount(month,year)
{
    let date= new Date(year,month,0)
    return date.getDate();
}
console.log(getCount(1,2012));