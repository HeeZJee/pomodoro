import React, { useState } from "react";
import Timer from "../TImer/Timer";
import { Wrapper } from "./Pomodoro.style";

interface iState {
  minute: number;
  second: number;
  isOn: boolean;
}

const initialState = {
  minute: 25,
  second: 0,
  isOn: false,
};

const Pomodoro = () => {
  const [state, setState] = useState<iState>(initialState);
  const { minute, second, isOn } = state;

  return (
    <Wrapper data-testid="pomodoro">
      <Timer minute={minute} second={second} />
    </Wrapper>
  );
};

export default Pomodoro;
