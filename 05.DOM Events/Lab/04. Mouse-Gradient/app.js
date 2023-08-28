function attachGradientEvents() {
    let gradient = document.querySelector('#gradient');
    let result = document.querySelector('#result');
    result.style.display = 'none'
    let width = 300;
    let localMousePos;
    window.addEventListener('mousemove', (event) => {
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;
    localMousePos = { x: localX, y: localY };})
    
    gradient.onmousemove = () =>
    {
        result.style.display ='inline';
        result.textContent = Math.round((localMousePos.x/width)*100)+'%';
    }
    gradient.onmouseout = () =>
    {
        result.style.display = 'none';
    }
}