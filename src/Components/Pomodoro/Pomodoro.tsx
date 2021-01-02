import React, { useState } from "react";
import { Wrapper } from "./Pomodoro.style";

interface iState {
  pomodoro: number;
  break: number;
  isOn: boolean;
}

const initialState = {
  pomodoro: 25,
  break: 5,
  isOn: false,
};

const Pomodoro = () => {
  const [state, setState] = useState<iState>(initialState);

  return <Wrapper data-testid="pomodoro">Pomodoro</Wrapper>;
};

export default Pomodoro;
