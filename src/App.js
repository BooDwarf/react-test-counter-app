// App.js
import { Container } from "./styles";
import { InitialNumberContainer } from "./components/Initial_Number/styles";
import {
  IncreaseNumberContainer,
  DecreaseNumberContainer,
  IncreaseDecreaseButtonContainer
} from "./components/Increase_Decrease/styles";

import { Increase, Decrease, Reset } from "./components/Increase_Decrease";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleIncrease = () => {
    setCurrentNumber(prev => prev + 1);
  };

  const handleDecrease = () => {
    setCurrentNumber(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleReset = () => {
    setCurrentNumber(0);
  };

  return (
    <Container>
      <h1 id="title">Counter</h1>

      <InitialNumberContainer>
        {currentNumber}
      </InitialNumberContainer>

      <IncreaseDecreaseButtonContainer>
        <DecreaseNumberContainer>
          <Decrease label="-" onClick={handleDecrease} />
        </DecreaseNumberContainer>

        <IncreaseNumberContainer>
          <Increase label="+" onClick={handleIncrease} />
        </IncreaseNumberContainer>

        <Reset label="Reset" onClick={handleReset} />
      </IncreaseDecreaseButtonContainer>
    </Container>
  );
};

export default App;
