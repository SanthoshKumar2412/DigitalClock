var hr=document.querySelectorAll('.hr');
var mm=document.querySelectorAll('.mm');
var sc=document.querySelectorAll('.se');
var dy=document.querySelector('.dd');
function fun(){
    var time=new Date();
    const weekday=['sun','mon','tue','wed','thu','fri','sat']
    var day=weekday[time.getDay()];
    dy.innerHTML=day;
    var hrs =time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    if(hrs>=12)
    {
        hrs=(hrs-12==0)?12:hrs-12;
    }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    hrs=hrs.toString();
    min=min.toString();
    sec=sec.toString();
    hr[0].innerHTML=hrs[0];
    hr[1].innerHTML=hrs[1];
    mm[0].innerHTML=min[0];
    mm[1].innerHTML=min[1];
    sc[0].innerHTML=sec[0];
    sc[1].innerHTML=sec[1];

 
}
setInterval(fun,1000);