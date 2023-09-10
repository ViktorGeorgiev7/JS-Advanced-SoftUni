function getArticleGenerator(articles) {
    let contentDiv = document.querySelector('#content');
    let data = Array.from(articles);
    return function(){
        if(data.length==0){return;}
    let domEl = document.createElement('article');
    domEl.textContent = data.shift();
    contentDiv.appendChild(domEl);
    }
}
