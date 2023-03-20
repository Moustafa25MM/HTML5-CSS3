const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const passwordInput = document.querySelector('.input-password');
const ageInput = document.querySelector('.input-age');
const salary = document.querySelector('.input-salary');

LoadAllEvents();

function LoadAllEvents(){
    nameInput.addEventListener('keyup',checkName);
    emailInput.addEventListener('keyup',checkEmail);
    passwordInput.addEventListener('keyup',checkPassword);
    ageInput.addEventListener('keyup',checkAge);
    salary.addEventListener('input',outputSalary);
}


function checkName(e){
    const er = document.querySelector('.error-name')
    let input = e.target.value
    var nameRegex = /^[a-zA-Z\-]+$/;
    var validfirstUsername = nameRegex.test(input);
    if(validfirstUsername == null || validfirstUsername == false){
        er.innerHTML = "Your name is not valid. Only characters A-Z, a-z and '-' are  acceptable.";
        return false;
    }else {
        er.innerHTML= "";
    }
}
function checkEmail(e){
    const er = document.querySelector('.error-email')
    let input = e.target.value
    er.innerHTML=''
    if(/(@gmail)|(@yahoo)/.test(input)){
        er.innerHTML=''
    }else{
        er.innerHTML = 'we accept only gmails or yahoos ' ;
    }
}
function checkPassword(e){
    const er = document.querySelector('.error-password')
    let input = e.target.value
   
    if(input.length > 8){
        er.innerHTML = 'password exceeded 8 characters'
    }else{
        er.innerHTML=''
    }
}
function checkAge(e){
    const er = document.querySelector('.error-age')
    let input = e.target.value
    
    if(input==''){
        er.innerHTML='missing your age'
    }
    else if(input < 21){
        er.innerHTML = 'Age must be greater than 21'
    }else{
        er.innerHTML=''
    }
}
function outputSalary(e){
    const er = document.querySelector('.output-salary')
    let input = e.target.value
    input = input *100;
    er.innerHTML= input + "$";
}