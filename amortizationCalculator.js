document.getElementById("Button1").addEventListener("click", calculateBudget);

function calculateBudget() {
    try {

        let loanAmnt = window.prompt("What is the loan amount? Numeric, no commas")
        let downPmnt = window.prompt("What is the down payment as a percentage?")
        let loanTerm = window.prompt("What is the loan term in years? Must be 15 or 30")

        loan = parseFloat(loanAmnt);
        downPcnt = parseFloat(downPmnt);
        term = parseInt(loanTerm);

        if (isNaN(loan) || isNaN(downPcnt) || isNaN(term)) {
            throw "Invalid input! Please enter numeric values.";
        }

        let downDec = downPcnt / 100
        let down = downDec * loan

        let principal = loan - down
        let annualRate = 5.75
        let monthlyInterestRate = annualRate / 12
        let monthlyPayment = ((monthlyInterestRate * principal) / (1 - Math.pow(1 + monthlyInterestRate, -term))).toFixed(2);
        let totalInterestPaid = (monthlyPayment * (term*12)) - principal
        let totalLoanCost = principal + totalInterestPaid


        let loanDiv = document.getElementById("loanDiv");
        let annualRateDiv = document.getElementById("annualRateDiv");
        let monthlyRateDiv = document.getElementById("monthlyRateDiv");
        let principalDiv = document.getElementById("principalDiv");
        let totalInterestDiv = document.getElementById("totalInterestDiv");
        let totalLoanDiv = document.getElementById("totalLoanDiv");
        let paymentDiv = document.getElementById("paymentDiv");


        loanDiv.innerHTML += "Term (Years): " + term
        annualRateDiv.innerHTML += "Annual Interest Rate: " + annualRate + "%"
        monthlyRateDiv.innerHTML += "Monthly Interest Rate: " + annualRate/12
        principalDiv.innerHTML += "Principal Loan Amount: " + principal
        totalInterestDiv.innerHTML += "Total Interest Paid: " + totalInterestPaid
        totalLoanDiv.innerHTML += "Total Loan Cost: " + totalLoanCost
        paymentDiv.innerHTML += "Monthly Payment: " + monthlyPayment


        // for (let i = 1; i <= term; i++) {
        //     let Interest = 0.0575/12

        //     let p = document.createElement("p");
        //     p.textContent = "Month " + i + " payment: " + monthlyPayment + " Interest: " + Interest + ;
        //     resultsDiv.appendChild(p);
        // }

    } catch (error) {
        alert(error);
    }
}