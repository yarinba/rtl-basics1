import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button colors and text', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const button = screen.getByRole('button');
  expect(button).toBeEnabled();

  // check that the checkbox stats out uncheck
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox functionality', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

describe('spaces before camel-case letters', () => {
  it('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('red')).toBe('red');
  });

  it('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
