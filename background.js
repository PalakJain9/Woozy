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
    let str = "my-notification-" + Date.now() + "-";
    chrome.notifications.create(str, {
        iconUrl: "./assets/leaves.jpg",
        type: "basic",
        title: "Drink Water",
        priority: 1,
        message: "Time to take a sip of water"
      },
      function(notificationId){
        console.log(notificationId);
      }
    )
});

function createAlarm(){
  chrome.alarms.create("drink water", {delayInMinutes: alarmTime});
  //alarmTime = 0.0;
}