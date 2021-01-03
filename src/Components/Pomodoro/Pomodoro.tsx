import React, { useState } from "react";
import Button from "../../Button/Button";
import Timer from "../TImer/Timer";
import { ButtonsWrapper, Wrapper } from "./Pomodoro.style";
import { FaPlay, FaStop } from "react-icons/fa";

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
      <ButtonsWrapper>
        {!isOn ? (
          <Button title="Start" text="Start" icon={<FaPlay />}></Button>
        ) : (
          <Button title="Stop" text="Stop" icon={<FaStop />}></Button>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Pomodoro;
