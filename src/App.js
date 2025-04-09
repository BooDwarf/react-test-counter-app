// App.js
import { Container } from "./styles";
import { InitialNumberContainer } from "./components/Initial_Number/styles";
import {  IncreaseDecreaseButtonContainer} from "./components/Increase_Decrease/styles";

import { Increase, Decrease, Reset } from "./components/Increase_Decrease";
import { History } from "./components/Number_History/index"
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [history, setHistory] = useState([]);

  const handleIncrease = () => {
    const newValue = currentNumber + 1;
    setCurrentNumber(newValue);
    setHistory(prevHistory => [`Increased to ${newValue}`, ...prevHistory]);
  };

  const handleDecrease = () => {
    const newValue = (currentNumber - 1);
    setCurrentNumber(newValue);
    setHistory(prevHistory => [`Decreased to ${newValue}`, ...prevHistory]);
    
    };

  const handleReset = () => {
    setCurrentNumber(0);
    setHistory(prevHistory => ["Reset to 0", ...prevHistory])
  };

  return (
    <Container>
      <h1 id="title">Counter</h1>

      <InitialNumberContainer>
        {currentNumber}
      </InitialNumberContainer>

      <IncreaseDecreaseButtonContainer>
        <Decrease label="-" onClick={handleDecrease} />
        <Increase label="+" onClick={handleIncrease} />
        <Reset label="Reset" onClick={handleReset} />
      </IncreaseDecreaseButtonContainer>

      <History>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </History>

    </Container>
  );
};

export default App;
