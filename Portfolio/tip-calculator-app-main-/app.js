const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerson = document.getElementById("tip-amount");
const totalPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const btnReset = document.querySelector(".reset");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
    val.addEventListener("click", handleClick);
});
tipCustom.addEventListener('input', tipInputFun);
btnReset.addEventListener("click", reset);


billInput.value = '';
peopleInput.value = '1';
tipPerson.innerHTML = "$"+(0.0).toFixed(2);
totalPerson.innerHTML =  "$"+(0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;

function billInputFun() {
    billValue = parseFloat(billInput.value);
    if(billInput.value != '' && peopleInput.value != ''){
        calculateTip();
    }
}

function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value);
    if(peopleValue < 1){
        error.style.display = 'flex';
        peopleInput.className += ' people-error';
    }
    else{
        peopleInput.className = 'input people-input'
        error.style.display = 'none';
        peopleInput.style.border = 'none';
        if(billInput.value != '' && peopleInput.value != ''){
            calculateTip();
        }
    }  
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active");
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active");
            tipValue = parseFloat(val.innerHTML)/100;
            tipCustom.value = ''; 
        }
    })
    if(billInput.value != '' && peopleInput.value != ''){
        calculateTip();
    }
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value / 100);
    tips.forEach(function(val){
        val.classList.remove("active");
    })
    if(billInput.value != '' && peopleInput.value != ''){
        calculateTip();
    }
}

function calculateTip(){
    if(peopleValue > 0){
        let tipAmout = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmout) / peopleValue;
        tipPerson.innerHTML = "$" + tipAmout.toFixed(2);
        totalPerson.innerHTML = "$" + total.toFixed(2);
    } 
}

function reset(){
    billInput.value = '';
    peopleInput.value = '';
    tipPerson.innerHTML = "$"+(0.0).toFixed(2);
    totalPerson.innerHTML =  "$"+(0.0).toFixed(2);
    tipCustom.value = '';
}

