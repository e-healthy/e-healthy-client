import { render, screen, fireEvent } from '@testing-library/react';

import Checkbox from './Checkbox';

const defaultProps = {
  id: 'test-id',
  label: 'Test Label',
  checked: false,
  onChange: jest.fn(),
  error: '',
};

const setup = (props = defaultProps) => render(<Checkbox {...props} />);

describe('<Checkbox />', () => {
  it('should render the checkbox and label correctly', () => {
    setup();
    const label = screen.getByLabelText(/test/i);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('should render the checkbox as checked when checked prop is true', () => {
    setup({ ...defaultProps, checked: true });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('should call the onChange function when clicked', () => {
    setup();
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render the correct styles when checked', () => {
    setup({ ...defaultProps, checked: true });
    const label = screen.getByText('Test Label').closest('label');
    expect(label).toHaveClass('c-checkbox__container--checked');
  });

  it('should display an error message when error prop is provided', () => {
    const errorMessage = 'This is an error';
    setup({ ...defaultProps, error: errorMessage });

    const error = screen.getByText(errorMessage);

    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('c-checkbox__error');
  });
});
