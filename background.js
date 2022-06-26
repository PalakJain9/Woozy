console.log("hello");

/*chrome.action.onClicked.addListener(buttonClicked);
function buttonClicked(){
    console.log("button clicked");
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup"
    }); 
}

let isBtnClicked = false;
let timer = 0;
let default_msg = document.getElementById("default_msg");
let reminder_msg = document.getElementById("reminder");
let btn_setReminder = document.getElementById("start");
btn_setReminder.addEventListener('click', updateValue());

const updateValue = () => {
    isBtnClicked = true;
}

const getValue = (val) => {
    let time = val.value;
    if(isBtnClicked == true) runTimer(time);
}

const runTimer = (time) => {
    if(timer == time) displayReminder();
    ++timer;
    console.log(timer);
} 
setTimeout(runTimer,60000);

const displayReminder = () => {
    default_msg.style.display = "none";
}
*/

