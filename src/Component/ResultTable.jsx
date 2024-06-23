import { formatter } from "../util/investment";

const tableHeader = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];

// const temp = [
//   [1, 2, 3, 4, 5],
//   [, 9, 8, 7, 6, 8],
// ];

export default function ResultTable({ calculateResult }) {
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            {tableHeader.map((val, index) => (
              <th key={index}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calculateResult.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.totalInterest)}</td>
              <td>{formatter.format(row.totalInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
