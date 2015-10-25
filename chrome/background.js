chrome.browserAction.onClicked.addListener(onclick)
function onclick(tab) {
    console.log('megahamster (tab.id=%d tab.url=%s)', tab.id, tab.url)
}
