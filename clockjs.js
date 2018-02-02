var second = document.querySelector('#clocksecond img');
var minute = document.getElementById("clockminute");
var hour = document.querySelector('#clockhour img');
function mysecond(){
   setInterval(function(){

    var mytime = new Date();


    var mysecond = mytime.getSeconds();
    var myreelsec = mysecond * 6;
     second.style.transform = "rotate("+myreelsec + 'deg' +")";

    var myminut = mytime.getMinutes();
    var myreelmin = myminut * 6 ;
     minute.style.transform = "rotate("+ myreelmin +'deg' +")";

    var myhour = mytime.getHours();
    var myreelhour = myhour * 30 ;
     hour.style.transform = "rotate("+ myreelhour +'deg' +")";

   },100);
}
mysecond();