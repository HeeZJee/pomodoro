import React from "react";
import { render } from "@testing-library/react";
import App from "./../App";
import Pomodoro from "../../Pomodoro/Pomodoro";

it("renders App", () => {
  const { container } = render(<App />);
  expect(container.childElementCount).toBeGreaterThanOrEqual(1);
});

it("snapshot App", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("App")).toMatchSnapshot();
});
