import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ReasultTable({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row) => {
          <>
            <td>{row.year}</td>
            <td>{row.interest}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.annualInvestment)}</td>
          </>;
        })}
      </tbody>
    </table>
  );
}
