function focused() {
    let sections = Array.from(document.querySelector('div').getElementsByTagName('div'));
    let counter = 1;
    let onClickClearClasses = ()=>{sections.forEach(x=>x.className = '')};
    for (const section of sections) {
        let inputField = section.querySelector('input');
        inputField.addEventListener('click',(e)=>
        {
            onClickClearClasses();
            e.currentTarget.parentNode.classList.add('focused');
        })
    }
}