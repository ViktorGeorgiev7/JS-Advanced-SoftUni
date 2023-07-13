let array = ['Isacc', 
'Aheodo', 'Jack', 
'Harrison', 
'George']
console.log(array.sort((a,b)=>
{if(a.length>b.length) {return 1;}
else if (a.length < b.length) {return -1;}

if (a<b) { return -1;}
else if (a>b) {return 1;}
else {return 0;}}
))
