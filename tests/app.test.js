import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "../src/home/index";

describe("aa", () => {
  test("Snapshot of Body", () => {
    const { asFragment } = render(<Home name="Hello!" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
