let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
function createSortedList(){
    return {list:[],add:
        function(num){
            this.list.push(num);
            this.list.sort((a,b) =>a-b);
        }
        ,get:function(index){return this.list[index];}
        ,remove:function(index){
            this.list.splice(index, 1);
        }
        ,size:function(){return this.list.length();}
        }
    }