chrome.browserAction.onClicked.addListener(onclick)

function onclick(tab) {
    console.log('megahamster (%s)', tab.url)

    chrome.storage.sync.get({
        mongolab_api_key: ''
    }, function (options) {
        if (typeof options.mongolab_api_key == 'string' && options.mongolab_api_key) {
            var url = 'https://api.mongolab.com/api/1/databases/mongobaka'
            + '/collections/megahamster?apiKey=' + options.mongolab_api_key

            console.log(url)

            reqwest({
                method: 'post',
                url: url,
                contentType: 'application/json',
                data: JSON.stringify({url: tab.url}),
            })
            .then(function (res) {
                console.log(res)

                chrome.tabs.executeScript(tab.id, {file: 'content_script.js'}, onerror)
            })
            .catch(function (err) {
                console.error(err)
            })
        }
        else
            console.error('Options: want MongoLab API key')
    })
}

function onerror() {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message)
    }
}
