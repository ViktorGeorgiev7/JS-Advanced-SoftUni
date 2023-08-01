let rect = rectangle(4, 5, 'red');
function rectangle(width,height,color){
return {width,height,color:color.toUpperCase(),calcArea:function(){return this.height*this.width}}
}
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
