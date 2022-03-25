import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter test", () => {
  it("should render Counter", () => {
    render(<Counter />);
  });
  it("should increment Counter", () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: "+" });

    userEvent.click(incrementBtn);

    expect(screen.getByText("Count: 1")).toBeTruthy();
  });
  it("should decrement Counter", () => {
    render(<Counter />);

    const decrementBtn = screen.getByRole("button", { name: "-" });

    userEvent.click(decrementBtn);

    expect(screen.getByText("Count: -1")).toBeTruthy();
  });
});
