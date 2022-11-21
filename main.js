setInterval(() => {
    let videosContainer = document.querySelector('ytd-rich-grid-renderer');
    if (videosContainer && videosContainer.style) videosContainer.style.display = 'none';
}, 1000);
