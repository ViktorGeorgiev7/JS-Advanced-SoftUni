function attachEventsListeners() {
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let daysBtn = document.querySelector('#daysBtn');
    let hoursBtn = document.querySelector('#hoursBtn');
    let minutesBtn = document.querySelector('#minutesBtn');
    let secondsBtn = document.querySelector('#secondsBtn');
    secondsBtn.onclick = () =>{let secondsValue = Number(seconds.value);minutes.value = (secondsValue/60);hours.value = (minutes.value/60);days.value = (hours.value/24);}
    minutesBtn.onclick = () =>{let minutesValue = Number(minutes.value);seconds.value = minutesValue*60;hours.value = minutesValue/60;days.value = hours.value/24;}
    hoursBtn.onclick = () =>{let hoursValue = Number(hours.value);minutes.value = hoursValue*60;seconds.value = minutes.value*60;days.value = hoursValue/24;}
    daysBtn.onclick = ()=>{let daysValue = Number(days.value);hours.value = daysValue*24;minutes.value = hours.value*60;seconds.value = minutes.value*60;}
}