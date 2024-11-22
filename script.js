document.querySelector('.calculate-button').addEventListener('click', () => {
    // Get form values
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const mortgageType = document.querySelector('input[name="type"]:checked').value;
  
    // Validate input
    if (isNaN(amount) || isNaN(term) || isNaN(rate) || term <= 0 || rate <= 0 || amount <= 0) {
      alert('Please enter valid input values!');
      return;
    }
  
    // Calculation
    let result;
    const monthlyRate = rate / 100 / 12; // Monthly interest rate
    const totalMonths = term * 12; // Total months in the loan term
  
    if (mortgageType === 'repayment') {
      // Repayment formula: M = P[r(1+r)^n] / [(1+r)^n - 1]
      result =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else if (mortgageType === 'interest-only') {
      // Interest-only formula: M = P * r
      result = amount * monthlyRate;
    }
  
    // Update results
    document.querySelector('.calculator-results').innerHTML = `
      <h2>Monthly Repayment</h2>
      <p>${mortgageType === 'repayment' ? 'Repayment' : 'Interest Only'}: £${result.toFixed(2)}</p>
    `;
  });
  