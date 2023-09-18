function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

document.getElementById('btn-deposit').addEventListener('click', function () {
   const newDepositAmount =  getInputValueById('deposit-field');
   const previousDepositTotal = getElementValueById('deposit-total');
   const newDepositTotal =  newDepositAmount + previousDepositTotal;
   setTextElementValueById('deposit-total', newDepositTotal);
   document.getElementById('deposit-field').value = '';
   
   const previousBalanceTotal = getElementValueById('balance-total');
   const balanceTotal =  newDepositAmount + previousBalanceTotal;
   setTextElementValueById('balance-total', balanceTotal);

});

document.getElementById('btn-withdraw').addEventListener('click', function () {
   const newDepositAmount =  getInputValueById('withdraw-field');
   const previousDepositTotal = getElementValueById('withdraw-total');
   const newDepositTotal =  newDepositAmount + previousDepositTotal;
   setTextElementValueById('withdraw-total', newDepositTotal);
   document.getElementById('withdraw-field').value = '';
   
   const previousBalanceTotal = getElementValueById('balance-total');
   const balanceTotal =  previousBalanceTotal - newDepositAmount;
   setTextElementValueById('balance-total', balanceTotal);

})