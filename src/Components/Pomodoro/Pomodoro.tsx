import React, { useState } from "react";
import Button from "../../Button/Button";
import Timer from "../TImer/Timer";
import { ButtonsWrapper, Wrapper } from "./Pomodoro.style";
import { FaPlay, FaStop, FaRedoAlt, FaMusic } from "react-icons/fa";
import useAudio from "../../Custom Hook/useAudio";

interface iState {
  minute: number;
  second: number;
  counter: number;
  isOn: boolean;
}

const initialState = {
  minute: 25,
  second: 0,
  isOn: false,
  counter: 1500,
};

const Pomodoro = () => {
  const [state, setState] = useState<iState>(initialState);
  const [timerInterval, setTimerInterval] = useState<any>();
  const { isOn } = state;
  const [playing, toggle] = useAudio(
    "http://www.noiseaddicts.com/samples_1w72b820/1453.mp3"
  );

  const startTimer = () => {
    setState((prev) => ({ ...prev, isOn: true }));

    setTimerInterval(setInterval(run, 1000));
    clearInterval(timerInterval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setState((prev) => ({ ...prev, isOn: false }));
  };

  const resetTimer = () => {
    stopTimer();
    setState((prev) => ({ ...prev, minute: 25, second: 0, counter: 1500 }));
  };

  let { minute, second, counter } = state;

  const run = () => {
    if (minute === 0 && second === 0) {
      resetTimer();
      return;
    } else if (second === 0 && minute > 0) {
      minute--;
      counter--;
      second = 59;
      setState((prev) => ({
        ...prev,
        minute,
        second,
        counter,
      }));
    } else if (second > 0) {
      second--;
      counter--;
      setState((prev) => ({
        ...prev,
        second,
        counter,
      }));
    }
  };

  return (
    <Wrapper data-testid="pomodoro">
      <Timer minute={minute} second={second} counter={counter} />
      <ButtonsWrapper data-testid="buttons">
        <Button
          title="Play music"
          icon={<FaMusic color="rgb(106, 89, 157)" size={18} />}
          active={playing}
          callback={toggle}
        />
        {!isOn ? (
          <Button
            title="Start pomodoro"
            text="Start"
            icon={<FaPlay />}
            callback={startTimer}
          />
        ) : (
          <Button
            title="Stop pomodoro"
            text="Stop"
            icon={<FaStop />}
            callback={stopTimer}
          />
        )}
        <Button
          title="Reset pomodoro"
          icon={<FaRedoAlt color="rgb(106, 89, 157)" size={18} />}
          callback={resetTimer}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Pomodoro;
