# flow of program:

* we don't need a content script
* we created logic in index.js
* send the input time to background.js via message
* receive message in background.js
* extract the time from message
* create an alarm for the specified time
* create onAlarm event to handle tasks after time is elapsed & we remind the person
* clearly, we need some ways to notify the person -- chrome notifications
create notification

* add js logic to handle stop button
* then get info about the ongoing alarm & stop it

* meanwhile the alarm is running, notify through the frontend about the running operations, maybe through a clock

# chrome notifications require 3 parameters: 
notificationId, NotificationOptions, callback function
inside NotificationOptions, we need 4 properties compulsorily to be included:
type, iconUrl, title, message

# NOTE:
while working with notification, few important pointers to note:
* check if notifications are turned on in your system. Check in settings.
* sometimes, notifications come for once only. This is because the notificationId requires unique parameter sometimes. So you may use Date.now() method to make it unique