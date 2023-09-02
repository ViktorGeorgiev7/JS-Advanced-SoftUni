function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');
    let counter = 1;
    for (const user of profiles) {
        console.log('User ' + counter)
        let lockBtn = user.querySelector('input[value="lock"]');
        let hideIt = document.createElement('input');
        hideIt.setAttribute("type", "button");
        let textNode = document.createTextNode('Hide it');
        hideIt.appendChild(textNode);
        let hiddenInfoString = '#user'+counter+'HiddenFields';
        let hiddenInfo = user.querySelector(hiddenInfoString);
        let showMore= user.querySelector('button');
        hideIt.addEventListener('click',function(){
            if (!lockBtn.checked) {
                showMore.style.display = 'block';
                hiddenInfo.style.display = 'none';

            }
        });
        showMore.addEventListener('click',function(e){
            if(!lockBtn.checked){
                e.currentTarget.style.display = 'none';
                hiddenInfo.appendChild(hideIt);
                hiddenInfo.style.display = 'block';
            }
        });
        console.log(hiddenInfo);
        counter++;
    }
    console.log(profiles)
}