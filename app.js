const startingMinutes=10;
let time= startingMinutes*60;

const countDownTimerMinutes=document.getElementById("minutes");
const countDownTimerSeconds=document.getElementById("seconds");

function updateDownTimer(){
    const minutes=Math.floor(time/60);
    let seconds=time % 60;
    seconds=seconds<10?"0"+seconds:seconds;
    countDownTimerMinutes.innerHTML=minutes;
    countDownTimerSeconds.classList.toggle("seconds-color");
    countDownTimerSeconds.innerHTML=seconds;
    time--;
    if(time===10){
        time=10;
    }
}

setInterval(updateDownTimer,1000);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('slideUpForm').style.bottom = '0';
    }, 15000);
});

const closeForm=document.getElementById("cancle-form");
closeForm.addEventListener("click",function(){
  document.getElementById('slideUpForm').style.display="none";
  // var widt=window.innerWidth > 0 ? window.innerWidth :screen.width;
  // console.log(widt);
})
  