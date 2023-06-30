const allPageSelector = 'ytd-rich-grid-renderer';
const shortsSelector = 'ytd-rich-section-renderer';
const watchNextSelector = 'ytd-watch-next-secondary-results-renderer';
let sessionState = null;

const rowLimit = 1;

function changeDisplay(identifier, hide) {
	let elements = document.querySelectorAll(identifier);
	elements.forEach(element => element.style.display = hide ? 'none' : 'block');
}

function updatePage(cache) {
	changeDisplay(allPageSelector, cache.all);	
	changeDisplay(shortsSelector, cache.shorts);
	changeDisplay(watchNextSelector, cache.next);
}


function initiate() {
	//alert("reloaded !!!");
    chrome.storage.local.get(['cache'], function(items) {
        const { cache } = items;
		console.log(items);
		if (cache) {
		    sessionState = {...cache};
			updatePage(cache);
		}
	});
    setInterval(() => {
        updatePage(sessionState);
    }, 1000);
}

initiate();


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender, sendResponse);
	const { element, state } = request;
	chrome.storage.local.get(['cache'], function(items) {
		const cache = items.cache || {};
		console.log(cache)
		cache[element] = state;
		sessionState = {...cache};
		updatePage(cache);
		chrome.storage.local.set({cache: cache});
	});
});