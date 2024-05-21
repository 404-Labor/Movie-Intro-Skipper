document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('textForm');
    const newTextInput = document.getElementById('newText');
    const textList = document.getElementById('textList');

    // Load stored texts and display them
    chrome.storage.local.get(['skipTexts'], (result) => {
        const skipTexts = result.skipTexts || [];
        skipTexts.forEach(text => addTextToList(text));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newText = newTextInput.value.trim();
        if (newText) {
            chrome.storage.local.get(['skipTexts'], (result) => {
                const skipTexts = result.skipTexts || [];
                skipTexts.push(newText);
                chrome.storage.local.set({ skipTexts }, () => {
                    addTextToList(newText);
                    newTextInput.value = '';
                });
            });
        }
    });

    function addTextToList(text) {
        const li = document.createElement('li');
        li.textContent = text;
        textList.appendChild(li);
    }
});