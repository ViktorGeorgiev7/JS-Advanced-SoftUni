function listProccesor(){
let list = [];
return {
    add(text){
        list.push(text);
    },
    remove(text){
        list.forEach(x=>{
            if (x==text) {
                let index = list.indexOf(x);
                list.splice(index,1);
            }
        })
    },
    print(){
        console.log(list.join(', '));
    }
};
}
let data = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
let proccesor = listProccesor();
for (const sequence of data) {
    let arr = sequence.split(' ');
    let cmdArg = arr[0];
    let textArg = arr[1];
    if (cmdArg=='add') {
        proccesor.add(textArg);
    }
    else if (cmdArg =='remove') {
        proccesor.remove(textArg);
    }
    else if (cmdArg == 'print'){
        proccesor.print();
    }
    else{console.log('Wrong input!')}
}