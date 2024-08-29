import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

const defaultProps = {
  disabled: false,
  onClick: jest.fn(),
};

const setup = (props = defaultProps) =>
  render(<Button {...props}>Click Me</Button>);

describe('<Button />', () => {
  it('should render the button with the correct text', () => {
    setup();
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('should apply the default button class', () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toHaveClass('c-button');
  });

  it('should accept and apply the disabled attribute', () => {
    setup({ ...defaultProps, disabled: true });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should call onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    setup({ ...defaultProps, onClick: handleClick });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
