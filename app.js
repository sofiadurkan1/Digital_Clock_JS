function updateClock(){
    let now = new Date();
    let dname = now.getDay(),
    month = now.getMonth(),
    daynum = now.getDate(),
    year = now.getFullYear(),
    hourOrg = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    period = "AM";

    if(hourOrg == 0){
        hour =12;
        period = "AM";
    } else if(hourOrg > 12){
        hour = hour-12;
    } else {
        hour = hourOrg;
    }

    if(hourOrg >11){
        period = "PM";

    }
    if(minute <10 ){
        minute = "0" + minute;
    }

    if(second <10 ){
        second = "0" + second;
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