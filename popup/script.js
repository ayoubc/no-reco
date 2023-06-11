

function sendMessage(obj) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, obj);
    });
}

function updateCheckboxes(cache) {
    const shortsCheckbox = document.getElementById('shorts');
    const allCheckbox = document.getElementById('all');
    const nextCheckbox = document.getElementById('next');
    shortsCheckbox.checked = cache.shorts;
    allCheckbox.checked = cache.all;
    nextCheckbox.checked = cache.next;
}

function initiate() {

    chrome.storage.local.get(['cache'], function(items) {
        const {cache} = items;
		if (cache) {
			updateCheckboxes(cache);
		}
	});

}


document.addEventListener('DOMContentLoaded', function() {

    initiate();
    document.addEventListener("click", (e) => { 
        if (e.target.type === "checkbox") {
            sendMessage({element: e.target.id, state: e.target.checked});
        }
    });        
});
