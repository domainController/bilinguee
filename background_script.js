// Create context menu
browser.contextMenus.create({
	id: "LingueeSearch",
    title: "Search on Linguee", 
    contexts:["selection"]
});

// add action listener to the context menu


browser.contextMenus.onClicked.addListener(lingueeDictionaryLookUp);

function lingueeDictionaryLookUp(info, tab) {
    const frenglishSearchQuery = "https://www.linguee.com/english-french/search?source=auto&query=" + info.selectionText;
    
    browser.tabs.create({url:frenglishSearchQuery});
}


