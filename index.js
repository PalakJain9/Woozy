let btn_start = document.getElementById("start");

function remind(){
    const time = document.getElementById("time").value;
    //create reminder for specified time
    if(time != ''){
        console.log("inside index.js remind function, time = " + time);
        document.getElementById("time").value = ''; /* doing this, because the input field contained the last input value, hence repetitive alarms were scheduled */
        chrome.runtime.sendMessage({time}, function(response) {
            console.log(response);
        });
    }
}
btn_start.addEventListener('click', remind);