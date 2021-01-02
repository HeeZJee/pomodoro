import React from "react";
import { render } from "@testing-library/react";
import Pomodoro from "./../Pomodoro";

it("renders Pomodoro", () => {
  const { container } = render(<Pomodoro />);
  expect(container.childElementCount).toBeGreaterThanOrEqual(1);
});

it("snapshot Pomodoro", () => {
  const { getByTestId } = render(<Pomodoro />);
  expect(getByTestId("pomodoro")).toMatchSnapshot();
});
