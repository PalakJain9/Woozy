console.log("in background js");
let alarmTime = 1.0;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request.time + " background.js");
      alarmTime = request.time * 1.0;
      createAlarm();
      sendResponse({success: true});
});

function createAlarm(){
  chrome.alarms.create("drink water", {delayInMinutes: alarmTime});
}