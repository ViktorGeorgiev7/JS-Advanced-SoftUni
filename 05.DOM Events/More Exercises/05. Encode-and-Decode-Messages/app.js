function encodeAndDecodeMessages() {
    let main = document.querySelector('#main');
    let divs = main.querySelectorAll('div');
    console.log(divs)
    let encodeTextArea = divs[0].querySelector('textarea');
    let decodeTextArea = divs[1].querySelector('textarea');
    let encodeBtn = divs[0].querySelector('button');
    let decodeBtn =divs[1].querySelector('button');
    console.log(encodeTextArea);
    console.log(decodeTextArea);
    let encode = ()=>{
        let text = encodeTextArea.value;
        for (let i = 0; i < encodeTextArea.value.length; i++) {
            let char = text.charCodeAt(i)+1;
            decodeTextArea.value += String.fromCharCode(char);
        }
        encodeTextArea.value='';
    };
    encodeBtn.addEventListener('click',encode)
    let decode = ()=>{
        let text = decodeTextArea.value;
        for (let i = 0; i < decodeTextArea.value.length; i++) {
            let char = text.charCodeAt(i)-1;
            decodeTextArea.value[i] = String.fromCharCode(char);
        }
    };
    decodeBtn.addEventListener('click',decode)
}