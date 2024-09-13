chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id}, 
    files: ['replace_container_xl.js']
  });
});