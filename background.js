chrome.omnibox.onInputEntered.addListener(function (text) {
    if (text[0]=="v"&&text[1]==" ") {
		var sr = text.replace("v ", "");
		var createProperties = {
        url : "http://www.youtube.com/results?search_query="
         + encodeURIComponent(sr) + "&filters=video&lclk=video"
    	};
		chrome.tabs.update(createProperties);
	}
	else if (text[0]=="u"&&text[1]==" ") {
		var sr = text.replace("u ", "");
		var createProperties = {
        url : "http://www.youtube.com/results?search_query="
         + encodeURIComponent(sr) + "&filters=user&lclk=user"
    	};
		chrome.tabs.update(createProperties);
	}
	else if (text[0]=="c"&&text[1]==" ") {
		var sr = text.replace("c ", "");
		var createProperties = {
        url : "http://www.youtube.com/results?search_query="
         + encodeURIComponent(sr) + "&filters=channel&lclk=channel"
    	};
		chrome.tabs.update(createProperties);
	}
	else {
		var createProperties = {
        url : "http://www.youtube.com/results?search_query="
         + encodeURIComponent(text)};
		chrome.tabs.update(createProperties);
	}
});
chrome.omnibox.onInputStarted.addListener(function () {
    var suggestion = {
        description : "Open in YouSearch: %s "
    }
    chrome.omnibox.setDefaultSuggestion(suggestion);
});
