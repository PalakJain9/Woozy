let btn_start = document.getElementById("start");
let temp;
let time_prd;

function remind(){
    const time = document.getElementById("time").value;
    let error_msg = document.getElementById("error_msg");
    //create reminder for specified time
    if(time != ''){
        error_msg.style.display = "none";
        /*document.getElementById("time").value = ''; doing this, because the input field contained the last input value, hence repetitive alarms were scheduled */
        chrome.runtime.sendMessage({time}, function(response) {
            console.log(response);
        });
        alarmRunning(time);
    }
    else {
        error_msg.style.display = "flex";
        error_msg.innerHTML = "Please enter time";
    }
}
btn_start.addEventListener('click', remind);

const alarmRunning = (time) => {
    document.getElementById("stop").style.display = "flex";
    document.getElementById("time_label").style.display = "none";
    document.getElementById("time").style.display = "none";
    btn_start.style.display = "none";
    temp = time;
    document.getElementById("running").innerHTML = "Alarm running, time remaining: " + temp + " mins";
    time_prd = setInterval(getTime, 60000);
}

const getTime = () => {
    if (Math.ceil(temp) != 0) {
        --temp;
        document.getElementById("running").innerHTML = "Alarm running, time remaining: " + temp + " mins";
    }
    else {
        clearInterval(time_prd);
    }
}

const startAllOver = () => {
    document.getElementById("stop").style.display = "none";
    document.getElementById("time_label").style.display = "flex";
    document.getElementById("time").style.display = "flex";
    btn_start.style.display = "flex";
    temp = 0;
}