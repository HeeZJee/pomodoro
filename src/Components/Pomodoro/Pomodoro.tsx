import React, { useState } from "react";
import Button from "../../Button/Button";
import Timer from "../TImer/Timer";
import { ButtonsWrapper, Wrapper } from "./Pomodoro.style";
import { FaPlay, FaStop, FaRedoAlt, FaMusic } from "react-icons/fa";

interface iState {
  minute: number;
  second: number;
  isOn: boolean;
  playMusic: boolean;
}

const initialState = {
  minute: 25,
  second: 0,
  isOn: true,
  playMusic: false,
};

const Pomodoro = () => {
  const [state, setState] = useState<iState>(initialState);
  const { minute, second, isOn, playMusic } = state;

  return (
    <Wrapper data-testid="pomodoro">
      <Timer minute={minute} second={second} />
      <ButtonsWrapper data-testid="buttons">
        <Button
          title="Play music"
          icon={<FaMusic color="rgb(106, 89, 157)" size={18} />}
          active={playMusic}
        />
        {!isOn ? (
          <Button title="Start pomodoro" text="Start" icon={<FaPlay />} />
        ) : (
          <Button title="Stop pomodoro" text="Stop" icon={<FaStop />} />
        )}
        <Button
          title="Reset pomodoro"
          icon={<FaRedoAlt color="rgb(106, 89, 157)" size={18} />}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Pomodoro;
