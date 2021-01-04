import React, { useState, useEffect } from "react";
import Button from "../../Button/Button";
import Timer from "../TImer/Timer";
import { ButtonsWrapper, Wrapper } from "./Pomodoro.style";
import { FaPlay, FaStop, FaRedoAlt, FaMusic } from "react-icons/fa";

interface iState {
  minute: number;
  second: number;
  counter: number;
  isOn: boolean;
  playMusic: boolean;
}

const initialState = {
  minute: 25,
  second: 0,
  isOn: false,
  counter: 0,
  playMusic: false,
};

const Pomodoro = () => {
  const [state, setState] = useState<iState>(initialState);
  const [timerInterval, setTimerInterval] = useState<any>();
  const { isOn, playMusic } = state;

  const startTimer = () => {
    setState((prev) => ({ ...prev, isOn: true }));

    setTimerInterval(setInterval(run, 1000));
    clearInterval(timerInterval);
  };

  const stopTimer = () => {
    console.log("stop");
    clearInterval(timerInterval);
    setState((prev) => ({ ...prev, isOn: false }));
  };

  const resetTimer = () => {
    console.log("reset");
    stopTimer();
    setState((prev) => ({ ...prev, minute: 25, second: 0, counter: 0 }));
  };

  const musicHandler = () => {};

  let { minute, second, counter } = state;

  const run = () => {
    console.log("run");
    if (minute === 0 && second === 0) {
      console.log("0 min, 0 sec");
      resetTimer();
      // clearInterval(timerInterval);
      // setState((prev) => ({ ...prev, minute: 25, second: 0 }));
      return;
    } else if (second === 0 && minute > 0) {
      console.log("min dec ");
      minute--;
      counter++;
      second = 59;
      setState((prev) => ({
        ...prev,
        minute,
        second,
        counter,
      }));
    } else if (second > 0) {
      console.log("sec dec");
      second--;
      counter++;
      setState((prev) => ({
        ...prev,
        second,
        counter,
      }));
    }

    // if (newSec > 0) {
    //   newSec--;
    // }
    // if (newSec === 0) {
    //   if (newMin === 0) {
    //     resetTimer();
    //     return;
    //   } else {
    //     newMin--;
    //     newSec = 59;
    //   }
    // }
    // setState((p) => ({ ...p, minute, second }));
  };

  console.log(state.minute, state.second, state.counter);

  return (
    <Wrapper data-testid="pomodoro">
      <Timer minute={minute} second={second} counter={counter} />
      <ButtonsWrapper data-testid="buttons">
        <Button
          title="Play music"
          icon={<FaMusic color="rgb(106, 89, 157)" size={18} />}
          active={playMusic}
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
