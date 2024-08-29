import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from './Modal';

const mockOnClose = jest.fn();
const text = /modal/i;

const defaultProps = {
  isOpen: false,
  onClose: mockOnClose,
  closeByIcon: false,
  closeByButton: true,
};

const setup = (props = defaultProps) =>
  render(<Modal {...props}>Modal content</Modal>);

describe('<Modal />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render when `isOpen` is false', () => {
    setup();
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  it('should render when `isOpen` is true', () => {
    setup({ ...defaultProps, isOpen: true });
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(text);
  });

  it('should call onClose when clicking the close icon', () => {
    setup({
      ...defaultProps,
      isOpen: true,
      closeByButton: false,
      closeByIcon: true,
    });

    const closeButton = screen.getByLabelText('Fechar o modal');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when clicking the close button', () => {
    setup({
      ...defaultProps,
      isOpen: true,
      closeByButton: true,
      closeByIcon: false,
    });

    const closeButton = screen.getByText('Fechar');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
