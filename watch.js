window.onload=function(){
    var seconds=00;
    var tens=00;
    var hours=00;
    var appendshours=document.getElementById("hours");
    var appendseconds=document.getElementById("seconds");
    var appendtens=document.getElementById("tens");
    var buttonstart=document.getElementById("button-start");
    var buttonstop=document.getElementById("button-stop");
    var buttonreset =document.getElementById("button-reset");
    var Interval;
    
    buttonstart.onclick=function(){

        clearInterval(Interval);
        Interval=setInterval(starttimer,1000);
    }
    buttonstop.onclick=function(){
        clearInterval(Interval);
    }
    buttonreset.onclick=function(){
        clearInterval(Interval);
        tens="00";
        seconds="00";
        appendseconds.innerHTML=seconds;
        appendtens.innerHTML=tens;
    }
    function starttimer(){
        tens++;
            
            if(tens<=9){
                appendtens.innerHTML="0"+tens;
            }
            if(tens>9){
                appendtens.innerHTML=tens;
            }
            if(tens>60){
                seconds++;
                appendseconds.innerHTML="0"+seconds;
                tens=0;
                appendtens.innerHTML="0"+0;
            }
            if(seconds>9){
                appendseconds.innerHTML=seconds;
            }
            if(seconds>60){
                hours++;
                appendshours.innerHTML="0"+hours;
                tens=0;
                seconds=0;
                appendseconds.innerHTML="0"+0;
                appendtens.innerHTML="0"+0;
            }
    }

}