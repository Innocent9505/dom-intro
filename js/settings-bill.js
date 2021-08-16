var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
var primaryElem = document.querySelector(".addBtn");
//Settings
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
var updateSettingsElem = document.querySelector(".updateSettings");
// get a reference to the sms or call radio buttons
var callTotalSettingsX = 0;
var smsTotalSettingsX = 0;
var totalSettingsX = 0;
//Settings
var callCostSettingX = 0;
var smsCostSettingX = 0;
var warningLevelSettingX = 0;
var criticalLevelSettingX = 0;
function updateSetting(){
    callCostSettingX = Number(callCostSettingElem.value);
    smsCostSettingX = Number(smsCostSettingElem.value);
    warningLevelSettingX = (warningLevelSettingElem.value);
    criticalLevelSettingX = (criticalLevelSettingElem.value);
   colorBehaviour();
}
updateSettingsElem.addEventListener("click", updateSetting);
function billSettingTotal(){
    var billItemTypeWithSettingsElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (billItemTypeWithSettingsElem){
        if(totalSettingsX < criticalLevelSettingX){
        var checkBtn = billItemTypeWithSettingsElem.value;
        if (checkBtn === 'call'){
            callTotalSettingsX += callCostSettingX;
        }else if (checkBtn === 'sms'){
            smsTotalSettingsX += smsCostSettingX;
        }
    }
}
    callTotalSettingsElem.innerHTML = callTotalSettingsX.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettingsX.toFixed(2);
    totalSettingsX = callTotalSettingsX + smsTotalSettingsX;
    totalSettingsElem.innerHTML = totalSettingsX.toFixed(2);
    colorBehaviour();
};
function colorBehaviour(){
    if (totalSettingsX >= criticalLevelSettingX) {
        //make the total to be in red
        totalSettingsElem.classList.remove("warning")
        totalSettingsElem.classList.add("danger")
    } else if (totalSettingsX >= warningLevelSettingX && totalSettingsX < criticalLevelSettingX){
        //make the total to be in orange
        totalSettingsElem.classList.remove("danger")
        totalSettingsElem.classList.add("warning")
    }
    else {
        totalSettingsElem.classList.remove("danger")
        totalSettingsElem.classList.remove("warning")
    }
}
primaryElem.addEventListener("click", billSettingTotal);
