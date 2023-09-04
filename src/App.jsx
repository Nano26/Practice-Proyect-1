import React, { useState } from "react";
import Form from "./components/Form/Form";
import CustomTable from "./components/CustomTable/CustomTable";
import CustomHeader from "./components/CustomHeader/CustomHeader";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <CustomHeader />
      <Form formHandler={calculateHandler} />
      {userInput ? (
        <CustomTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      ) : (
        <p>No investments calculated yet!</p>
      )}
    </div>
  );
}

export default App;
