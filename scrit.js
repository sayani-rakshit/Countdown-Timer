var minutesinput= document.getElementById('input');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var timer=document.getElementById('timebox');
var min=document.getElementById('min');
var sec=document.getElementById('sec');
let countdown;
// let starttime=parent( minutesinput.value);
// let time=starttime*60;
// setInterval(updatecoundown,1000);

// function updatecoundown(){
//     const x=math.floor(time/60);
//     let y=time%60;
//     timer.innerHTML=`${x}:${y}`;
//     time--;
// };
// function startcall(){
//     var minutes=parseInt( minutesinput.value);
//     if( isNaN(minutes) ||minutes<1|| minutes>60){
//         alert("input a number between 1 to 60");
//         return;
//     }else{
//         // let starttime=parent( minutesinput.value);
// let time=minutes*60;
// setInterval(updatecoundown,1000);

// function updatecoundown(){
//     const x =math.floor(time/60);
//     let y=time%60;
//     timer.innerHTML=`${x}:${y}`;
//     time--;
// };


//     }

// };
//..............................//
// function startcall(){
//     var minutes=parseInt( minutesinput.value);
//     if( isNaN(minutes)|| minutes<1|| minutes>60){
//         alert("input a number between 1 to 60");
//         return;
//     }
//     else{
//         timer.innerHTML=`0${minutes}:00`;
//     }
// }
    //...................//

var newtime=time=>{
     return time<10 ? `0${time}`: time;
}
 

    function startcall(){
        var minutes=parseInt( minutesinput.value);
        if( isNaN(minutes)|| minutes<1|| minutes>60){
            alert("input a number between 1 to 60");
            return;
        }

       let seconds=minutes*60;
       countdown=setInterval(()=>{
           seconds--;
           var newmin=newtime(Math.floor(seconds/60));
           var newsec=newtime(seconds%60);
           timer.innerHTML=`${newmin} : ${newsec}`;
           if(seconds==0){
            clearInterval(countdown);
            timer.textContent=`00:00`;
            start.disabled=false;
           }
       },1000);
       start.disabled=true;
    }
    
    let stopcall=()=>{
        clearInterval(countdown);
        start.disabled=false;
        
        timer.textContent=`00:00`;
        minutesinput.value="";
    
        

    }
    
    
    