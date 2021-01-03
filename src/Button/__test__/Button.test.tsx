import React from "react";
import { cleanup, render } from "@testing-library/react";
import Button from "./../Button";
import { FaPlay, FaStop, FaRedoAlt, FaMusic } from "react-icons/fa";

afterEach(cleanup);

it("renders Start Button", () => {
  const { container } = render(
    <Button title="Start pomodoro" text="Start" icon={<FaPlay />} />
  );
  expect(container).toBeInTheDocument();
});

it("renders Stop Button", () => {
  const { container } = render(
    <Button title="Stop pomodoro" text="Stop" icon={<FaStop />} />
  );

  expect(container).toBeInTheDocument();
});

it("renders Reset Button", () => {
  const { container } = render(
    <Button
      title="Reset pomodoro"
      icon={<FaRedoAlt color="rgb(106, 89, 157)" size={18} />}
    />
  );

  expect(container).toBeInTheDocument();
});

it("renders Music Button", () => {
  const { container } = render(
    <Button
      title="Play music"
      icon={<FaMusic color="rgb(106, 89, 157)" size={18} />}
      active={false}
    />
  );

  expect(container).toBeInTheDocument();
});
