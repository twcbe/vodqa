import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Home } from "../src/home/index";
import { mockEvent } from "./mock-data.js";

describe("Home Page", () => {
  test("Verify home page renders peoperly with mock data", () => {
    const { asFragment } = render(
      <Router>
        <Home config={mockEvent} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
