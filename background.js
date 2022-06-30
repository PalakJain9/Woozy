console.log("in background js");
let alarmTime = 1.0;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request.time + " background.js");
      alarmTime = request.time * 1.0;
      createAlarm();
      sendResponse({success: true});
});

// to be executed once alarmTime is elapsed & its time to notify the person
chrome.alarms.onAlarm.addListener(
  function(alarm){
    //console.log(alarm.name);
    console.log(alarm);
    chrome.notifications.create("your drink water notification",{
        type: "basic",
        iconUrl: "./assets/leaves.jpg",
        title: "your drink water notification",
        message: "Time to take a sip of water"
      },
      function(notificationID){
        console.log("notification displayed");
      }
    )
});

function createAlarm(){
  chrome.alarms.create("drink water", {delayInMinutes: alarmTime});
}