// Test button

import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";

test('should render the button with the text "Click works!"', () => {
  const handleClick = jest.fn();

  render(
    <Button
      type="button"
      onClick={handleClick}
      label="Click works!"
      disabled={false}
    />
  );

  fireEvent.click(screen.getByText("Click works!"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("button should be disabled", () => {
  const handleClick = jest.fn();

  render(
    <Button
      type="button"
      label="Click don't works!"
      onClick={handleClick}
      disabled={true}
    />
  );

  expect(screen.getByText("Click don't works!")).toBeDisabled();
});
