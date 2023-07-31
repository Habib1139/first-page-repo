document.getElementById('btn-deposite').addEventListener('click', function(){

    const depositeField = document.getElementById('deposite-field');
    const newDeposite = depositeField.value;
    const depositeString = parseFloat(newDeposite);
   
    const totalDeposite = document.getElementById('total-deposite')
    const PreviusDeposite = totalDeposite.innerText
    const totalDepositeString = parseFloat(PreviusDeposite)
    

    const currentDepositeTotal = depositeString +totalDepositeString;
    totalDeposite.innerText = currentDepositeTotal;

   

    const preniousBalance = document.getElementById('balance-total')
    const preniousBalanceTotalString = preniousBalance.innerText;
    const preasentBalance = parseFloat(preniousBalanceTotalString);

    const totalBalance = depositeString + preasentBalance;
   preniousBalance.innerText = totalBalance;

    depositeField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const previousWithdraw = document.getElementById('withdraw-field')
    const previousWithdrawString = previousWithdraw.value;
    const previousTotal = parseFloat(previousWithdrawString);

    const preWithdraw = document.getElementById('total-withdraw');
    const preWithdrawString = preWithdraw.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawString)

    const currentWithdraw = previousTotal + preWithdrawTotal;
    preWithdraw.innerText = currentWithdraw;

    const previousBalanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);

    const balance = previousBalance - previousTotal;
    previousBalanceTotal.innerText = balance;

    previousWithdraw.value='';


})