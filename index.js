// in this, we are using iffy to create an annoymous function in which the function is stored in a parenthesis and is called right away and this is considered as one of 
// the best way to create a secure annoymous function.


document.addEventListener("DOMContentLoaded", function() {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");

  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countdownTimer = null;

  startBtn.addEventListener('click', function() {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial"; 

      countdownTimer= setInterval(()=>{
        timer()
      },1000);
    }
    startInterval();
  });
   
  function stopInterval(state){
    startBtn.innerHTML= state === "pause" ? "Continue" : "Start";

    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    clearInterval(countdownTimer);
  }
   function timer(){
    if(sec.value>60){
      min.value++;
      sec.value= parseInt(sec.value)-59;
    }
    if(min.value>60){
      hour.value++;
      min.value=parseInt(sec.value)-60;
    }
    if(hour.value==0 && min.value==0 && sec.value==0){
      hour.value="";
      min.value="";
      sec.value="";
      stopInterval();
    }
    else if(sec.value!=0){
      sec.value= `${sec.value<=10 ?'0':''}${sec.value-1}`;
    }
    else if(min.value!=0 && sec.value==0){
      sec.value=59
      min.value= `${min.value<=10 ?'0':''}${min.value-1}`;
    }
    else if(hour.value!=0 && min.value==0){
      min.value=60
      hour.value= `${hour.value<=10 ?'0':''}${hour.value-1}`;
    }
   }
   stopBtn.addEventListener('click',function(){
    stopInterval('pause');
   });

   resetBtn.addEventListener('click', function(){
    hour.value="";
    min.value="";
    sec.value="";

    stopInterval();
   })
});
