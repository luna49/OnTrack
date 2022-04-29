// background.js

let color = '#F7F7F7';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgrey', `color: ${color}`);
});

