import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Wrapper } from "./Timer.style";

interface iProps {
  minute: number;
  second: number;
}

const Timer = ({ minute, second }: iProps) => {
  return (
    <Wrapper data-testid="timer">
      <CircularProgressbarWithChildren
        value={24}
        minValue={0}
        maxValue={25}
        // strokeWidth={10}
        styles={buildStyles({
          //   rotation: ,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 60,

          // Can specify path transition in more detail, or remove it entirely
          pathTransition: "none",

          // Colors
          pathColor: `rgba(106, 89, 157, 1)`,
          trailColor: "rgba(106, 89, 157, 0.3)",
        })}
      >
        <p>
          <span data-testid="minute">{minute}</span>:
          <span data-testid="second">{second}</span>
        </p>
      </CircularProgressbarWithChildren>
    </Wrapper>
  );
};

export default Timer;