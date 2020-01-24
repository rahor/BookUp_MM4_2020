const stepElems = document.getElementsByClassName("step");
const roundStepElems = document.getElementsByClassName("tunnel_rond");
const buttonElems = document.getElementsByClassName("bouton_confirmation");
const stepTitle = document.getElementById("stepTitle");

const stepTitles = ["Mode de retrait", "Récapitulatif", "Confirmation"];

function clickHandler(e) {
  const target = e.target;
  const intent = parseInt(target.dataset.intent, 10);

  stepTitle.innerHTML = stepTitles[intent];

  for (const step of stepElems) {
    const stepIndex = parseInt(step.dataset.step, 10);
    
    if (stepIndex === intent+1) {
      step.classList.add("step-active");
    } else {
      step.classList.remove("step-active");
    }
  }
}

for (const buttonElem of buttonElems) {
  buttonElem.addEventListener("click", clickHandler);
}








// var steps = [
//   step0 = document.querySelector('[data-id="1"]'),
//   step1 = document.querySelector('[data-id="2"]'),
//   step2 = document.querySelector('[data-id="3"]'),
// ]

// // Rond/Etape du tunnel
// var rond = document.getElementsByClassName('tunnel_rond');

// // Boutton de confirmation
// var step_button = document.getElementsByClassName('bouton_confirmation')

// //Mode de retrait
// var retraitCarte = document.getElementsByClassName("retrait_carte");

// // gestion de la sélection du mode de retrait
// for (var l = 0; l < retraitCarte.length; l++) {
//   retraitCarte[l].addEventListener("click", function() {
//   var selected = document.getElementsByClassName("selected");
//   if (selected.length > 0) { 
//     selected[0].className = selected[0].className.replace(" selected", "");
//   }
//   this.className += " selected";

//   // On autorise le clic sur le bouton si un mode de retrait a été sélectionné
//   step_button[0].style.pointerEvents = "auto"; 
//   step_button[0].style.opacity = 1; 

//   });

// }


// for (var j = 0; j < step_button.length; j++) {

//   step_button[j].addEventListener('click', () => {


//     for (var i = 0; i < rond.length - 1; i++) {

//       if (rond[i].classList.contains("active")) {
//         rond[i].classList.remove("active");
//         rond[i + 1].classList.add("active");
//         steps[i].style.opacity = "0"; 
//         steps[i].style.pointerEvents = "none";
//         steps[i + 1].style.opacity = "1";
//         steps[i + 1].style.transform = "scale(1)";
//         steps[i + 1].style.pointerEvents = "auto";
        
//         step_button[i].style.opacity = 0;
//         step_button[i+1].style.opacity = 1;
//         step_button[i + 1].style.pointerEvents = "auto";

//         break;
//       }
//     }
//   })
// }