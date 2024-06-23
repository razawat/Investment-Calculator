let inputObj = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function UserInput({ inputValue }) {
  // function handleIntialInvestment(event) {
  //   // console.log("I.I: ", event.target.value);
  //   inputObj.initialInvestment = +event.target.value;
  //   inputValue(inputObj);
  // }
  // function handleAnnualInvestment(event) {
  //   inputObj.annualInvestment = +event.target.value;
  //   inputValue(inputObj);
  // }
  // function handleExprectedReturn(event) {
  //   inputObj.expectedReturn = +event.target.value;
  //   inputValue(inputObj);
  // }
  // function handleDuration(event) {
  //   // console.log("Duration: ", event.target.value);
  //   inputObj.duration = +event.target.value;
  //   inputValue(inputObj);
  // }
  function handleInput(key, event) {
    console.log(key, event.target.value);
    inputObj = { ...inputObj, [key]: +event.target.value };
    inputValue(inputObj);
  }
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(event) => handleInput("initialInvestment", event)}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(event) => handleInput("annualInvestment", event)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(event) => handleInput("expectedReturn", event)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(event) => handleInput("duration", event)}
            />
          </p>
        </div>
      </section>
    </>
  );
}
