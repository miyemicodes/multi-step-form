const prevBtn = document.querySelectorAll(".btn-back");
const stepOneButton = document.querySelectorAll("#stepOneBtn");
const progressSteps = document.querySelector(".multi-steps");
const num = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".forms-container");
const stepOne = document.querySelector("#stepOneDiv");
const stepTwo = document.querySelector("#stepTwoDiv");
const stepThree = document.querySelector("#stepThreeDiv");

function displayForm(stepName){

  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }


}


function showStepOne(){
  const formOne = `
  <div class="forms-container" id="stepOneDiv">
  <div class="section-title">
    <span>Step 1/3</span>

    <h3>Personal Info</h3>
  </div>

  <div class="forms-fields to_flex">
    <div class="form-name">
      <label for="fname">First name</label>
      <input type="text" name="fname" placeholder="First name" />
    </div>

    <div class="form-name">
      <label for="lname">Last name</label>
      <input type="text" name="lname" placeholder="Last name" />
    </div>
  </div>

  <div class="forms-fields">
    <label for="mname">Middle name</label>
    <input type="text" name="mname" placeholder="Middle name" />
  </div>

  <div class="forms-fields">
    <label for="DOB">Date of Birth</label>
    <input type="date" name="DOB" />
  </div>

  <div class="forms-fields">
    <label for="Email">Email Address</label>
    <input type="Email" name="Email" placeholder="Email" />
  </div>

  <button
    class="btn btn-next"
    id="stepOneBtn"
    type="button"
    onclick="showStepTwo()"
  >
    Continue
  </button>
</div>
  `

}

function showStepTwo(){
  const formTwo = `
  <div class="forms-container" id="stepTwoDiv">
  <div class="section-title">
    <span>Step 2/3</span>

    <h3>Contact Info</h3>
  </div>

  <div class="forms-fields">
    <label for="Phone">Phone Number</label>
    <input type="text" name="Phone" placeholder="Phone number" />
  </div>

  <div class="forms-fields to_flex">
    <div class="zip">
      <label for="zip c">Zip Code</label>
      <input type="text" name="zip" placeholder="Zip Code" />
    </div>

    <div class="city">
      <label for="city/state">City,State</label>
      <select name="city" id="states">
        <option value="NGN">Nigeria</option>
        <option value="GBP">United Kingdom</option>
        <option value="USD">United States of America</option>
        <option value="PRT">Portugal</option>
        <option value="CAN">Canada</option>
      </select>
    </div>
  </div>

  <div class="forms-fields">
    <label for="Address"> Mailing Address</label>
    <input type="text" name="address" placeholder="Street Address" />
  </div>

  <div class="button">
    <button class="btn-next">Continue</button>

    <button class="btn-back">
      <i class="fa-solid fa-arrow-left"></i> Back
    </button>
  </div>
</div>
  `
}

function showStepThree(){
  const stepThree = `
  
  <div class="forms-container" id="stepThreeDiv">
  <div class="section-title">
    <span>Step 3/3</span>

    <h3>Secure Info</h3>
  </div>

  <div class="forms-fields">
    <label for="SSN">Social Security Number</label>
    <input type="text" name="SSN" placeholder="XXX XX XXXX" />
  </div>

  <div class="forms-fields">
    <div class="POH">
      <label for="POF">Proof of Identity</label>
      <span>Please select one option</span>
    </div>
    <div class="POH-select">
      <select name="POH SELECT" id="POH-s">
        <option value="select">Select an option</option>
        <option value="NIN">National Identity Number</option>
        <option value="PASSPORT">International Passport</option>
      </select>
      <input type="file" />
    </div>
  </div>

  <div class="forms-fields">
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Password" />
  </div>

  <div class="button">
    <button class="btn-next">Continue</button>

    <button class="btn-back">SUBMIT</button>
  </div>
</div>
  `
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