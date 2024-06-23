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
            <tr>
              <td>{row.year}</td>
              <td>{row.interest}</td>
              <td>{row.annualInvestment}</td>
              <td>{row.valueEndOfYear}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
