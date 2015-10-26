load_options()

document.getElementById('save').addEventListener('click', save_options)

var mongolab_api_key = document.getElementById('mongolab_api_key')

function load_options() {
    chrome.storage.sync.get({
        mongolab_api_key: ''
    }, function (options) {
        mongolab_api_key.value = options.mongolab_api_key
    })
}

function save_options() {
    chrome.storage.sync.set({
        mongolab_api_key: mongolab_api_key.value
    }, function () {
    })
}
