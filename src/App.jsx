import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

import ReasultTable from "./Components/ResultTable";
import UserInput from "./Components/userInput";
import Header from "./Components/Header.jsx";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1,
  });
  let inputValidity = userInput.duration >= 1;

  const results = calculateInvestmentResults(userInput);
  function handleChange(event) {
    const { name, value } = event.target;

    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: +value,
    }));
  }
  console.log(userInput);

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputValidity ? (
        <ReasultTable results={results} />
      ) : (
        <p className="center">Enter a valid duration time</p>
      )}
    </>
  );
}
