console.log("in background js");
let alarmTime = 1.0;
let notify;
let alarmName;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.msg == "stop-alarm") {
        console.log(request.msg + " in stop alarm");
        stopAlarm();
        sendResponse({success: true});
      }
      else {
        console.log(request.time + " reminder");
        alarmTime = request.time * 1.0;
        createAlarm();
        sendResponse({success: true});
      }
});

// to be executed once alarmTime is elapsed & its time to notify the person
chrome.alarms.onAlarm.addListener(
  function(alarm){
    //console.log(alarm.name);
    console.log(alarm);
    notify = "my-notification-" + Date.now() + "-";
    chrome.notifications.create(notify, {
        iconUrl: "./assets/leaves.jpg",
        type: "basic",
        title: "Drink Water",
        priority: 1,
        message: "Buddy, time to take a sip of water!"
      },
      function(notificationId){
        console.log(notificationId);
      }
    )
});

function createAlarm(){
  alarmName = "my-alarm-" + Date.now() + "-";
  chrome.alarms.create(alarmName, {delayInMinutes: alarmTime});
  //alarmTime = 0.0;
}

function stopAlarm(){
  chrome.alarms.clear(alarmName,
    function(wasCleared){
      console.log(wasCleared + " " + alarmName + " alarm stopped");
    });
}