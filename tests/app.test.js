import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Home } from "../src/home/index";
import { mockEvent } from "./mock-data.js";

describe("Home Page", () => {
  test("Verify home page renders peoperly with mock data", () => {
    const { asFragment } = render(<Home config={mockEvent} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
