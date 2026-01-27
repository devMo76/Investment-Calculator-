import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

import ReasultTable from "./Components/ResultTable";
import UserInput from "./Components/userInput";
import Header from "./Components/Header";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const results = calculateInvestmentResults(userInput);

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }
  console.log(userInput);

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <ReasultTable results={results} />
    </>
  );
}
