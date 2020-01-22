var step1 = document.querySelector('[data-id="1"]');
var step2 = document.querySelector('[data-id="2"]');
var step3 = document.querySelector('[data-id="3"]');

var step_button = document.querySelector('[data-button="1"]')




step_button.addEventListener('click',()=>{
  step1.style.opacity = "0";
  step2.style.opacity = "1";
  step1.style.pointerEvents = "none";
  step2.style.pointerEvents = "auto";
})