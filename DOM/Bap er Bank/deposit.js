document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2:
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    const depositTotalElement = document.getElementById('deposit-total');
    const balanceTotalElement = document.getElementById('balance-total');
    depositTotal = parseFloat(depositTotalElement.innerText);
    balanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 3:
    if (depositAmount <= 0) {
        alert("Sorry! You can not deposite this amount.")
    }
    else if (isNaN(depositAmount)) {
        alert("Please! Provide a valid number.");
        depositField.value = '';
    }
    else if (depositField.value != '') {
        depositTotalElement.innerText = depositTotal + depositAmount;
        balanceTotalElement.innerText = balanceTotal + depositAmount;
        depositField.value = '';
    }
    else {
        alert('Enter a amount to deposite')
    }
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    // step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const balanceTotalElement = document.getElementById('balance-total');
    withdrawTotal = parseFloat(withdrawTotalElement.innerText);
    balanceTotal = parseFloat(balanceTotalElement.innerText);
    if (withdrawAmount > balanceTotal || withdrawAmount <= 0) {
        alert("Sorry! You can naot withdraw this amount.")
    }
    else if (isNaN(withdrawAmount)) {
        alert("Please! Provide a valid number.");
        withdrawField.value = '';
    }
    else if (withdrawField.value != '') {
        withdrawTotalElement.innerText = withdrawTotal + withdrawAmount;
        balanceTotalElement.innerText = balanceTotal - withdrawAmount;
        withdrawField.value = '';
    }
    else {
        alert('Enter a amount to withdraw')
    }
})