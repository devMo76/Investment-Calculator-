import { useState } from "react";

import UserInput from "./Components/userInput";
import Header from "./Components/Header";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

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
    </>
  );
}
