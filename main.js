const hideElement = (identifier) => {
    let element = document.querySelector(identifier);
    if(element && element.style) element.style.display = 'none';
}


setInterval(() => {
    hideElement('ytd-rich-grid-renderer');
    hideElement('#secondary');
}, 1000);
