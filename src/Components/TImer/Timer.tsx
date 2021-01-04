import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Wrapper } from "./Timer.style";

interface iProps {
  minute: number;
  second: number;
  counter: number;
}

const Timer = ({ minute, second, counter }: iProps) => {
  return (
    <Wrapper data-testid="timer">
      <CircularProgressbarWithChildren
        minValue={0}
        value={counter}
        maxValue={1500}
        styles={buildStyles({
          pathTransition: "all",
          pathTransitionDuration: 1,
          strokeLinecap: "round",
          pathColor: `rgba(106, 89, 157, 1)`,
          trailColor: "rgba(106, 89, 157, 0.4)",
        })}
      >
        <p>
          <span data-testid="minute">{minute > 9 ? minute : `0${minute}`}</span>
          :
          <span data-testid="second">{second > 9 ? second : `0${second}`}</span>
        </p>
      </CircularProgressbarWithChildren>
    </Wrapper>
  );
};

export default Timer;
