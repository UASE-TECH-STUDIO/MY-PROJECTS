function calculate() {
   loanAmont =  document.getElementById("amount").value;
   loanRate =  document.getElementById("intrest").value;
   loanDuration = document.getAnimations("month").value;
   

interest = (loanAmont * (loanRate * 0.01)) / loanDuration;

MonthlyPayment = (loanAmount / loanDuration + interest).toFixed(2);

document.getElementById("monthPay").innerHTML = 
`Monthly Payment: ${MonthlyPayment}`;

}

function calculate() {
    loanAmount = document.getElementById("amount").value;
    loanRate = document.getElementById("intrest").value;
    loanDuration = document.getElementById("month").value;

    interest = (loanAmount * (loanRate * 0.01)) / loanDuration;

    monthlyPayment = (loanAmount / loanDuration + interest).toFixed(2);

    document.getElementById("monthPay").innerHTML =
        `Monthly Payment: ${monthlyPayment}`;
}

