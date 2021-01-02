import React from "react";
import Pomodoro from "../Pomodoro/Pomodoro";
import { Wrapper } from "./App.style";

function App() {
  return (
    <Wrapper data-testid="App">
      <Pomodoro />
    </Wrapper>
  );
}

export default App;
