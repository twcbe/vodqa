import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { EditionCard } from "../../src/edition/card.jsx";

describe("Cards Section", () => {
  test("edition card with mising details", () => {
    const { asFragment } = render(<EditionCard edition={{}} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
