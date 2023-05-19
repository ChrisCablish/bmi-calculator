// variables
const metInput = document.getElementById('metric__input');
const impInput = document.getElementById('imperial__input');
const metRadio = document.getElementById('metric__radio');
const impRadio = document.getElementById('imperial__radio');
const cmInput= document.getElementById('cm__input');
const kgInput= document.getElementById('kg__input');
const ftInput= document.getElementById('ft__input');
const inInput= document.getElementById('in__input');
const stInput= document.getElementById('st__input');
const lbsInput= document.getElementById('lbs__input');
const allForms = document.querySelectorAll('.form-control');
let measurementType;
let cmUser;
let kgUser;
let ftUser;
let inUser;
let stUser;
let lbsUser;
let heightInMeters = cmUser/100;
let bmi;


// functions
function handleRadioChange() {
  if (metRadio.checked) {
    metInput.style.display = 'block';
    impInput.style.display = 'none';
    measurementType = 'metric';
  } else {
    metInput.style.display = 'none';
    impInput.style.display = 'block';
    measurementType = 'imperial';
  }
}


const calculateBMIMetric = () => {
    return kgUser/(cmUser*100)**2
}

const calculateBMIImperial = () => {
    
}

//execution
handleRadioChange();
metRadio.addEventListener('click', handleRadioChange);
impRadio.addEventListener('click', handleRadioChange);


//event listener on each input form
allForms.forEach((input) => {
    input.addEventListener('input', (event) => {
        let input = parseInt(event.target.value);
        let inputId = event.target.id;
        console.log(`You entered ${input}. That inputs fields id is ${inputId}.`);

        if (inputId === 'cm__input') {  
            cmUser = input;  
        } else if (inputId === 'kg__input') {  
            kgUser = input;
        } else if (inputId === 'ft__input') {
            ftUser = input;  
        } else if (inputId === 'in__input') {
            inUser = input; 
        } else if (inputId === 'st__input') {
            stUser = input;
        } else if (inputId === 'lbs__input') {
            lbsUser = input;
        }

        bmi = kgUser / (cmUser/100)**2;
        console.log(bmi);


    })
})


//   if (!isNaN(input) && input > 0) {
    
//   }








  