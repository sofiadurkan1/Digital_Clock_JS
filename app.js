function updateClock(){
    let now = new Date();
    let dname = now.getDay(),
    month = now.getMonth(),
    daynum = now.getDate(),
    year = now.getFullYear(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    period = "AM";

    if(hour == 0){
        hour =12;
    }
    if(hour > 12){
        hour = hour-12;
        period = "PM";

    }
    Number.prototype.pad = function(digits){
        for (let n = this.toString(); n.length<digits; n = 0 + n)
            return n;
    }


    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"]
    const values =[week[dname],months[month],daynum,year,hour, minute,second,period ];

    for (let i = 0; i < ids.length;i++) 
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
       

    


}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}

initClock();