const inputObj = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function UserInput({ inputValue }) {
  function handleIntialInvestment(event) {
    console.log("I.I: ", event.target.value);
    inputObj.initialInvestment = +event.target.value;
    inputValue(inputObj);
  }
  function handleAnnualInvestment(event) {
    inputObj.annualInvestment = +event.target.value;
    inputValue(inputObj);
  }
  function handleExprectedReturn(event) {
    inputObj.expectedReturn = +event.target.value;
    inputValue(inputObj);
  }
  function handleDuration(event) {
    // console.log("Duration: ", event.target.value);
    inputObj.duration = +event.target.value;
    inputValue(inputObj);
  }
  return (
    <>
      <div id="user-input">
        <form className="input-group">
          <div>
            <label>Initial Investment</label>
            <input type="number" onChange={handleIntialInvestment} />
          </div>
          <div>
            <label>Annual Investment</label>
            <input type="number" onChange={handleAnnualInvestment} />
          </div>
          <div>
            <label>Expected Return</label>
            <input type="number" onChange={handleExprectedReturn} />
          </div>
          <div>
            <label>Duration</label>
            <input type="number" onChange={handleDuration} />
          </div>
        </form>
      </div>
    </>
  );
}
