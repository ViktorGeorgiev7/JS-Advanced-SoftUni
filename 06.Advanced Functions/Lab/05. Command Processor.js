function solution(){
    let string = '';
    return {
        append(text)
        {
        string +=text;
        }
        ,
        removeStart(n){
            let remove = string.substring(0,n);
            string = string.replace(remove,'');
        }
        ,
        removeEnd(n){
            let remove = string.substring(string.length-n,string.length);
            string = string.replace(remove,'');
        }
        ,
        print(){
            console.log(string);
        }
}
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();