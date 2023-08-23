function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function GetAvrgSalary(restaurant){
      let sum = restaurant.for
   }
   function GetHighestSalary(restaurant){
      restaurant[workers].sort(x=>x.salary);
      return restaurant[workers][0].salary;
   }
   function onClick () {
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      let outputRestraurantDiv = document.querySelector("#bestRestaurant");
      let outputWorkerDiv = document.querySelector("#workers");
      let arr=[];
      for (let i = 0; i < input.length; i++) {
         let sentence = input[i].split(' - ')
         let workersArr = sentence[1].split(', ');
         if (arr.filter(x=>x.name == sentence[0]).length > 0) {
            for (const obj of workersArr) {
               let workerArr = obj.split(' ');
               restaurant = arr.filter(x=>x.name == sentence[0])[0];
               restaurant.workers.push({name:workerArr[0],salary:Number(workerArr[1])});
            }
         }
         else{
         let restaurant = {name:sentence.shift(),workers:[]};
         for (const obj of workersArr) {
            let workerArr = obj.split(' ');
            restaurant.workers.push({name:workerArr[0],salary:Number(workerArr[1])});
         }
         arr.push(restaurant);
      }
      }
      console.log(arr)
   }
}
//"PizzaHut - Peter 500, George 300, Mark 800"
//    1     2   3    4      5    6     7   8