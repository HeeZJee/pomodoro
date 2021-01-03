import React from "react";
import { cleanup, render } from "@testing-library/react";
import Timer from "../Timer";

afterEach(cleanup);

it("snapshot Timer", () => {
  const { getByTestId } = render(<Timer minute={25} second={0} />);
  expect(getByTestId("timer")).toMatchSnapshot();
});

it("render Timer", () => {
  const { getByTestId } = render(<Timer minute={25} second={0} />);
  expect(getByTestId("timer")).toBeInTheDocument();
});

it("minute should be between 0 and 25", () => {
  const { getByTestId } = render(<Timer minute={25} second={0} />);
  expect(parseInt(getByTestId("minute").innerHTML)).toBeLessThanOrEqual(25);
  expect(parseInt(getByTestId("minute").innerHTML)).toBeGreaterThanOrEqual(0);
});

it("second should be between 0 and 25", () => {
  const { getByTestId } = render(<Timer minute={25} second={0} />);
  expect(parseInt(getByTestId("second").innerHTML)).toBeLessThanOrEqual(59);
  expect(parseInt(getByTestId("second").innerHTML)).toBeGreaterThanOrEqual(0);
});
