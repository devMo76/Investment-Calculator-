export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;

    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    const investedCapital = initialInvestment + year * annualInvestment;

    annualData.push({
      year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      investedCapital, // <-- added
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
