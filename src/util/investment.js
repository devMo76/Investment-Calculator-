export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;

    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInterest += interestEarnedInYear;

    const investedCapital = initialInvestment + year * annualInvestment;

    annualData.push({
      year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      investedCapital,
      totalInterest,
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
