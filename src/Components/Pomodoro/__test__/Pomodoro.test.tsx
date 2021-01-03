import React from "react";
import { cleanup, render } from "@testing-library/react";
import Pomodoro from "./../Pomodoro";

afterEach(cleanup);

it("renders Pomodoro", () => {
  const { container } = render(<Pomodoro />);
  expect(container.childElementCount).toBeGreaterThanOrEqual(1);
});

it("snapshot Pomodoro", () => {
  const { getByTestId } = render(<Pomodoro />);
  expect(getByTestId("pomodoro")).toMatchSnapshot();
});
