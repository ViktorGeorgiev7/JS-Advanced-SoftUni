function solve() {
    let task = document.querySelector('#task');
    let description = document.querySelector('#description');
    let date = document.querySelector('#date');
    let addBtn = document.querySelector('#add');
    let sections = document.querySelectorAll('section');
    let openSection = sections[1];
    let inProgressSection = sections[2];
    let completeSection = sections[3];
    let div = openSection.querySelectorAll('div')[1];
    console.log(div);
    addBtn.addEventListener('click',function(){
        if (task.value == '' || description.value =='' || date.value == '') {
            return;
        }
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let descriptionParagraph = document.createElement('p');
        let dueDateParagraph = document.createElement('p');
        let divFlex = document.createElement('div');
        divFlex.classList.add('flex');//toadd
        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.classList.add('red');
        let btnAdd = document.createElement('button');
        btnAdd.id = 'btnAdd';
        btnAdd.textContent = 'Start';
        btnAdd.classList.add('green');
        divFlex.appendChild(btnAdd);
        divFlex.appendChild(btnDelete);
        dueDateParagraph.textContent = date.value;
        descriptionParagraph.textContent = description.value;
        h3.textContent = task.value;
        article.appendChild(h3);
        article.appendChild(descriptionParagraph);
        article.appendChild(dueDateParagraph);
        article.appendChild(divFlex);
        div.appendChild(article);
        btnDelete.addEventListener('click',function(e){
            e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
        })
        let startBtn = document.querySelector('#btnAdd');
        console.log(startBtn);
        startBtn.addEventListener('click',function(e){
            inProgressSection.appendChild(e.currentTarget.parentNode.parentNode);
            btnAdd.classList.replace('red','orange');
            btnAdd.textContent = 'Finish';
            btnDelete.classList.replace('green','red');
            btnDelete.textContent = 'Delete';
            //newcode
            startBtn.addEventListener('click',function(e){
                completeSection.appendChild(e.currentTarget.parentNode.parentNode);
                article.removeChild(e.currentTarget.parentNode);
            })
        })//Add finish functionality
    });
}