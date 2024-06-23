import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import ResultTable from "./Component/ResultTable";

import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentValue, setInvestmentValue] = useState([]);
  function collectInvestmentValue(obj) {
    console.log("In App: ", obj);
    //calculateInvestmentResults(obj);
    setInvestmentValue(calculateInvestmentResults(obj));
  }
  return (
    <>
      <Header />
      <UserInput inputValue={collectInvestmentValue} />
      <ResultTable calculateResult={investmentValue} />
    </>
  );
}

export default App;
