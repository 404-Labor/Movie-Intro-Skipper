function searchInTab(tabId) {
    chrome.storage.local.get(['skipTexts'], (result) => {
        const searchText = result.skipTexts;
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: (searchText) => {
                const bodyText = document.body.innerText;
                searchText.forEach(text => {
                    if (bodyText.includes(text)) {
                        console.log(`Found text: ${text}`);

                        const buttons = Array.from(document.getElementsByTagName('button'));
                        buttons.forEach(button => {
                            if (button.innerText === text) {
                                console.log('button.click');
                                button.click();
                            }
                        });
                    }
                });
            },
            args: [searchText]
        });
    });
}

function searchActiveTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            searchInTab(tabs[0].id);
        }
    });
}

// Search every 5 seconds
setInterval(searchActiveTab, 1000);