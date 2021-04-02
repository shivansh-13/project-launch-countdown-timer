var dDay = new Date("apr  4,2021 00:00:01").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var diff = dDay - now;


    var day = Math.floor(diff / (1000 * 3600 * 24));
    var hours = Math.floor(diff % (1000 * 3600 * 24) / (1000 * 60 * 60));
    var min = Math.floor(diff % (1000 * 3600) / (1000 * 60));
    var sec = Math.floor(diff % (1000 * 60) / (1000));


    sec = sec<10? '0' + sec :sec;
    min = min<10? '0' + min :min;
    hours = hours<10? '0' + hours :hours;
    day = day<10? '0' + day :day;


    document.getElementById("day").innerHTML = ` ${day}`
    document.getElementById("hours").innerHTML = ` ${hours}`
    document.getElementById("minutes").innerHTML = ` ${min}`
    document.getElementById("sec").innerHTML = ` ${sec}`
    
    
}, 1000);