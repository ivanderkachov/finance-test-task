import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import App from './App';

test('Test button toggle name', () => {
  render(<App />);
  const buttonEl = screen.getByText(/Stop/i);
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/Go/i);
});

// test("Test button toggle visible", () => {
//   render(<App />);
//   const buttonEl = screen.getByText(/Stop/i);
//   userEvent.click(buttonEl);

//   const buttonInterval = screen.getByText(/1/i)

//   expect(buttonInterval).toBeInTheDocument();
// });