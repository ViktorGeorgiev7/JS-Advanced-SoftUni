function solve() {
    let form = document.querySelector('#container').children;
    let movie = form[0];
    let hall = form[1];
    let ticket = form[2];
    let onScreenBtn = form[3];
    let movieList= document.querySelector('#movies ul');
    let clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click',function(){
        let archiveSection = document.querySelector('#archive ul');
        while (archiveSection.firstChild) {
            archiveSection.removeChild(archiveSection.firstChild);
          }
    })
    onScreenBtn.addEventListener('click',function(){
        if (movie.value == '' || hall.value == '' || ticket.value == '' || isNaN(ticket.value)) {
            return;
        }
        let liItem = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = movie.value;
        //
        let strong = document.createElement('a');
        strong.textContent = `Hall: ${hall.value}`;
        strong.style.fontWeight="bold";
        //   
        let ticketStrong = document.createElement('a');
        ticketStrong.textContent = Number(ticket.value).toFixed(2);
        ticketStrong.style.fontWeight="bold";//
        //
        let ticketDiv = document.createElement('div');
        let ticketInput = document.createElement('input');
        ticketInput.placeholder = 'Tickets Sold';
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        ticketDiv.appendChild(ticketStrong);
        ticketDiv.appendChild(ticketInput);
        ticketDiv.appendChild(archiveBtn);
        liItem.appendChild(span);
        liItem.appendChild(strong);
        liItem.appendChild(ticketDiv);
        movieList.appendChild(liItem);
        movie.value = '';
        ticket.value = '';
        hall.value = ''; 
        archiveBtn.addEventListener('click',function(e){
            let archiveSection = document.querySelector('#archive ul');
            let archivedItemName = e.currentTarget.parentNode.parentNode.querySelector('span');
            let archivedItemPrice = e.currentTarget.parentNode.querySelector('a');
            movieList.removeChild(e.currentTarget.parentNode.parentNode);
            let archivedItem = document.createElement('li');
            let mvName = document.createElement('span');
            mvName.textContent = archivedItemName.textContent;
            let mvPrice = document.createElement('a');
            mvPrice.textContent = 'Total amount: ' +archivedItemPrice.textContent;
            mvPrice.style.fontWeight = "bold";
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click',function(e){
                archiveSection.removeChild(e.currentTarget.parentNode);
            });
            archivedItem.appendChild(mvName);
            archivedItem.appendChild(mvPrice);
            archivedItem.appendChild(deleteBtn);
            archiveSection.appendChild(archivedItem);
        });
    });
}