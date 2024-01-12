const prevBtn = document.querySelectorAll(".btn-back");
const stepOneButton = document.querySelectorAll("#stepOneBtn");
const progressSteps = document.querySelector(".multi-steps");
const num = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".forms-container");
const stepOne = document.querySelector("#stepOneDiv");
const stepTwo = document.querySelector("#stepTwoDiv");
const stepThree = document.querySelector("#stepThreeDiv");

function showStepTwo(){
  stepOne.classList.remove("active");
  stepTwo.classList.add("active");
  stepThree.classList.remove("active");

console.log(stepOne,stepTwo,stepThree);
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