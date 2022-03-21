// background.js

let color = '#679179';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

/* let button = document.createElement("button");
button.innerHTML = "Click Me";
btn.onclick = function () {
  location.href = "to-do.html";
};
btn.type = "submit";
btn.name = "to-do";
document.body.appendChild(button); */