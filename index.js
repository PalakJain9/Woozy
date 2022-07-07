let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let temp;
let time_prd;
let isReminder;
let isStopped;

const startAllOver = () => {
    console.log("inside startAllOver function");
    btn_stop.style.display = "none";
    document.getElementById("time_label").style.display = "flex";
    document.getElementById("time").style.display = "flex";
    btn_start.style.display = "flex";
    document.getElementById("running").style.display = "none";
    temp = 0;
}

const getTime = () => {
    if(temp != 0) {
        --temp;
        document.getElementById("running").innerHTML = "Reminder in: " + Math.round((temp/60) * 10)/10 + " mins";
    }
    else {
        clearInterval(time_prd);
        console.log("interval cleared");
        startAllOver();
    }
}

const alarmRunning = (time) => {
    btn_stop.style.display = "flex";
    document.getElementById("time_label").style.display = "none";
    document.getElementById("time").style.display = "none";
    btn_start.style.display = "none";
    temp = time * 60;
    document.getElementById("running").innerHTML = "Reminder in: " + Math.round((temp/60) * 10)/10 + " mins";
    time_prd = setInterval(getTime, 1000);
}

function messagePass(){
    let msg = "set-alarm";
    const time = document.getElementById("time").value;
    if(isReminder == true && isStopped == false){
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
    else {
        msg = "stop-alarm";
        chrome.runtime.sendMessage({msg}, function(response){
            console.log(response);
        });
    }
}

function remind(){
    isReminder = true;
    isStopped = false;
    messagePass();
}
btn_start.addEventListener('click', remind);

function stopReminder(){
    isReminder = false;
    isStopped = true;
    messagePass();
    startAllOver();
}

btn_stop.addEventListener('click', stopReminder);