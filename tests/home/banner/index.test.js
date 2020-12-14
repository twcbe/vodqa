import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Banner } from "../../../src/home/banner/index.jsx";
import {
  mockEvent,
  activeEdition,
  activeEditionEvening,
} from "../../mock-data.js";

describe("Banner Section", () => {
  test("Banner with an active editon", () => {
    const eventWithActiveEdition = {
      ...mockEvent,
      editions: [activeEdition, ...mockEvent.editions],
    };
    const { asFragment } = render(<Banner event={eventWithActiveEdition} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Banner with an active evening editon", () => {
    const eventWithActiveEdition = {
      ...mockEvent,
      editions: [activeEditionEvening, ...mockEvent.editions],
    };
    const { asFragment } = render(<Banner event={eventWithActiveEdition} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Banner with only past editon", () => {
    const { asFragment } = render(<Banner event={mockEvent} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Banner with only one editon", () => {
    const eventWithOneEdition = {
      ...mockEvent,
      editions: [mockEvent.editions[mockEvent.editions.length - 1]],
    };
    const { asFragment } = render(<Banner event={eventWithOneEdition} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Banner when blank event data", () => {
    const { asFragment } = render(<Banner event={{}} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
