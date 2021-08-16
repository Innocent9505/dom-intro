// get a reference to the sms or call radio buttons
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");


// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");


const updateSettingsbtn = document.querySelector(".updateSettingsbtn");


//get a reference to the add button
const billTypeBtnElem = document.querySelector(".billTypeBtn");

//get a reference to the 'Update settings' button
const updateSettingElem = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings

var settings = 0

// create a variables that will keep track of all three totals.
var totalSettingBill = 0
 
//add an event listener for when the 'Update settings' button is pressed
updateSettingElem.addEventListener("click", updateSettingsbtn) 

//add an event listener for when the add button is pressed
billTypeBtnElem.addEventListener("click", billItemTypeWithSettingBtn) 

function billItemTypeWithSettingBtn(){
//in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
// * add the appropriate value to the call / sms total
if (checkedRadioBtnElem){
    if (checkedRadioBtnElem.value === "call1"){
        totalSettingBill + "callCostSetting";
    }
    else if (checkedRadioBtnElem.value === "sms1"){
        totalSettingBill += "smsCostSetting";
    }
}
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
callTotalSettings.innerHTML = totalSettingBill.toFixed(2);
smsTotalSettings.innerHTML = totalSettingBill.toFixed(2);
var totalCosts = totalSettingBill + totalSettingBill;
totalSettings.innerHTML = totalCosts.toFixed(2);
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

}