import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Talks } from "../../../src/home/banner/talks.jsx";
import { singleSession, multipleSessions } from "../../mock-data.js";

describe("Talks Section", () => {
  test("Don't show talks section if sessions list is empty", () => {
    const { asFragment } = render(<Talks sessions={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Display talks from one session", () => {
    const { asFragment } = render(<Talks sessions={singleSession} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Display talks from more than one session", () => {
    const { asFragment } = render(<Talks sessions={multipleSessions} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Display talks - move to next talk", () => {
    const { asFragment } = render(<Talks sessions={multipleSessions} />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Display talks - move to prev talk", () => {
    const { asFragment } = render(<Talks sessions={multipleSessions} />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[0]);

    expect(asFragment()).toMatchSnapshot();
  });
});
