console.log("hello");

chrome.action.onClicked.addListener(buttonClicked);
function buttonClicked(){
    console.log("button clicked");
    /*chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup"
    }); */
}