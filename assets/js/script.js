var step0= document.querySelector('[data-id="1"]');
var step1 = document.querySelector('[data-id="2"]');
var step2 = document.querySelector('[data-id="3"]');
var rond = document.getElementsByClassName('tunnel_rond');

var step_button = document.querySelector('[data-button="1"]')




step_button.addEventListener('click',()=>{
  for(var i=0;i<rond.length;i++){
    if(rond[i].classList.contains("active")){
      rond[i].classList.remove("active");
      rond[i+1].classList.add("active");
      step1.style.opacity = "1";
      step1.style.pointerEvents = "auto";
      step0.style.opacity = "0";
      step0.style.pointerEvents = "none";
    }
  }
})