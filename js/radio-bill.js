// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");

const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

const callTotalTwoElem = document.querySelector(".callTotalTwo");

const smsTotalTwoElem = document.querySelector(".smsTotalTwo");

const totalTwoElem = document.querySelector(".totalTwo");

var callsTotals = 0;
var smsTotals = 0;

function radioBillTotal(){
//in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");
// * add the appropriate value to the running total
if (checkedRadioBtnElem){
    if (checkedRadioBtnElem.value === "call"){
        callsTotals += 2.75;
    }
    else if (checkedRadioBtnElem.value === "sms"){
        smsTotals += 0.75;
    }
}
// * add nothing for invalid values that is not 'call' or 'sms'.
callTotalTwoElem.innerHTML = callsTotals.toFixed(2);
smsTotalTwoElem.innerHTML = smsTotals.toFixed(2);
var totalCosts = callsTotals + smsTotals;
totalTwoElem.innerHTML = totalCosts.toFixed(2);
if (totalCosts > 50){
    //red
    totalTwoElem.classList.add("danger");
}
//orange
else if (totalCosts >= 30 && totalCosts < 50){
    totalTwoElem.classList.add("warning");
}
}
//add an event listener for when the add button is pressed
radioBillAddBtnElem.addEventListener('click', radioBillTotal);
