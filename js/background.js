function checkForValidUrl(tabId, changeInfo, tab) {
	if(tab.url.match(/https?:\/\/play.google.*\/music\/listen/) != null) {
		//this is a Play Music page, so we'd better show the page action in the nav bar
		chrome.pageAction.show(tabId);
	}
};

//listen for any changes to the URL of any tab
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "js/disp-twitter-win.js"});
});