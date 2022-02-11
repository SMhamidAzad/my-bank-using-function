function getInputValue(InputId){
    const inputField = document.getElementById(InputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(inputFieldTotal,amonunt){
    const totalElement = document.getElementById(inputFieldTotal);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amonunt;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(Amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + Amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - Amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount>0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);
    }
    else{
        alert('Please, enter a valid amount!!!')
    }
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value; */
    // get and update deposit total 
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    // update balance 
    /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */   
})

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount>0 && getCurrentBalance()>withdrawAmount){
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount,false)
    }
    else{
        alert('Please, enter a valid amount!!!')
    }
    if(getCurrentBalance()<withdrawAmount){
        alert('You have not much money in your account what you want!!!');
    }
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value; */
     // Update withdraw total 
   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
     */   
    // update balance 
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
     */ 
})