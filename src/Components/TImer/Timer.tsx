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
    <Wrapper>
      <CircularProgressbarWithChildren
        value={20}
        minValue={0}
        maxValue={25}
        // strokeWidth={10}
        styles={buildStyles({
          // rotation: 0.2,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          pathTransition: "none",

          // Colors
          pathColor: `rgba(106, 89, 157, 1)`,
          trailColor: "rgba(106, 89, 157, 0.3)",
        })}
      >
        <p>
          <span>{minute}</span>:<span>{second}</span>
        </p>
      </CircularProgressbarWithChildren>
    </Wrapper>
  );
};

export default Timer;
