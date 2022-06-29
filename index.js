let btn_start = document.getElementById("start");

function remind(){
    const time = document.getElementById("time").value;
    //create reminder for specified time
    console.log("inside index.js remind function, time = " + time);
    chrome.runtime.sendMessage({time}, function(response) {
        console.log(response);
    });
}
btn_start.addEventListener('click', remind);