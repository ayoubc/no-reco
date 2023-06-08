const wholePageSelector = 'ytd-rich-grid-renderer';
const shortsSelector = '.ytd-rich-section-renderer';
const rowLimit = 1;

const hideElement = (identifier) => {
	let element = document.querySelector(identifier);
	if (element && element.style) element.style.display = 'none';
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender, sendResponse);
	const { element, state } = request;
	alert("Got a message from PopUp");
	if (element === 'all') {
		hideElement(wholePageSelector);
	}
	else if (element === 'shorts') {
		hideElement(shortsSelector);
	}
	// setInterval(() => {
	//     hideElement(wholePageSelector);
	//     // hideElement('#secondary');
	//     // hideElement(shortsSelector);
	// }, 1000);
});