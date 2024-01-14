const prevBtn = document.querySelectorAll(".btn-back");
const stepOneButton = document.querySelectorAll("#stepOneBtn");
const stepOne = document.querySelector("#stepOneDiv");
const stepTwo = document.querySelector("#stepTwoDiv");
const stepThree = document.querySelector("#stepThreeDiv");
const progress1 = document.querySelector("#progressStepOne");
const progress2 = document.querySelector("#progressStepTwo");
const progress3 = document.querySelector("#progressStepThree");


function showStepTwo(){
  stepOne.classList.remove("active");
  stepTwo.classList.add("active");
  stepThree.classList.remove("active");
  
  progress1.classList.add("action");
  progress2.classList.add("action");
  progress3.classList.remove("action");


}

function showStepThree(){
  stepOne.classList.remove("active");
  stepTwo.classList.remove("active");
  stepThree.classList.add("active");

  progress1.classList.add("action");
  progress2.classList.add("action");
  progress3.classList.add("action");

}

function showStepBackThree(){
  stepOne.classList.remove("active");
  stepTwo.classList.add("active");
  stepThree.classList.remove("active");

  progress1.classList.add("action");
  progress2.classList.add("action");
  progress3.classList.remove("action");


}

function showStepBackTwo(){
  stepOne.classList.add("active");
  stepTwo.classList.remove("active");
  stepThree.classList.remove("active");

  progress1.classList.add("action");
  progress2.classList.remove("action");
  progress3.classList.remove("action");

}




























/*

let currentStep = 1;


formSteps.forEach(formStep => {
   
  if(prevBtn){
     prevBtn.addEventListener('click',() =>{
        
      formStep.style.display = "none";

      currentStep--;
      console.log(currentStep);

      document.querySelector(`.form_${currentStep}`).style.display = "flex";

      currentStep++;
     });

  }



});






nextBtn.forEach(btn => {
  btn.addEventListener('click',() =>{
   formStepsNum++;
   updateFormSteps();


  });
});


nextBtnBtn.addEventListener('click', e =>{


  

});


let formStepsNum = 0;

nextBtn.forEach(btn => {
  btn.addEventListener('click',() =>{
   formStepsNum++;
   updateFormSteps();


  });
});

function updateFormSteps(){

  formSteps.forEach(formStep =>{
        formStep.classList.contains("active") && formStep.classList.remove("active");
  })

   formSteps[formStepsNum].classList.add("active");

}

*/