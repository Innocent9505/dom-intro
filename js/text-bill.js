// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

const addToBillBtn = document.querySelector(".addToBillBtn");

const callTotalOne = document.querySelector(".callTotalOne");

const smsTotalOne = document.querySelector(".smsTotalOne");

const totalOne = document.querySelector(".totalOne");

const textBillAddBtn = document.querySelector(".addToBillBtn");

const callsTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCostElem = document.querySelector(".totalOne");



//get a reference to the add button
textBillAddBtn.addEventListener("click", textBillTotal) 

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }


};
