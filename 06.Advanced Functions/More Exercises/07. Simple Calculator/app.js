function calculator() {
    let value1,value2,result;
    return {
        init(num1Id,num2Id,resultId){
            value1 = document.querySelector(num1Id);
            value2 = document.querySelector(num2Id);
            result = document.querySelector(resultId);
        },
        add(){
            result.value = Number(value1.value) + Number(value2.value);
        },
        subtract(){
            result.value = Number(value1.value) - Number(value2.value);
        }
    }
}
const calculate = calculator (); 
calculate.init('#num1', '#num2', '#result'); 
calculate.add();





