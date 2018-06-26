﻿var live = 0;
var myAlarm = {
    delayInMinutes: 5,
    periodInMinutes:5
}
chrome.alarms.create("timer1", myAlarm);
chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === "timer1") {
        search();
    }
});
search();
function search() {
    var data ={
        channelId: 'UCUHzH3aSxoa9wRudh4V1H-A',
        eventType: 'live',
        key : "AIzaSyD-fqEPrCcCoDUAu6LMAzjsWGgkoiwbVPk",
        type: 'video',
        order: 'viewCount',
        part: 'snippet'
    };                
    $.get("https://www.googleapis.com/youtube/v3/search", data, function (response) {
        results = response.items;
        if (results.length == 0) {
            console.log('Hampton Brandon is offline now');
            chrome.browserAction.setIcon({ "path": "/icon/TTD_Black_16.png" });
			live = 0;
        } else {
			if(live===0){
				alert('Hampton Brandon is live');
				chrome.browserAction.setIcon({ "path": "/icon/TTD_Red_16.png" });
				live=1;
			}
        }
    });     
}
