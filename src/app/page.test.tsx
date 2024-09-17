import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { subscribe } from '@/services/subscribe';
import { createMatchMedia } from '@/utils/setupTest';

import Home from './page';

jest.mock('@/services/subscribe', () => ({
  subscribe: jest.fn(),
}));

const setup = (props = {}) => render(<Home {...props} />);

const terms = /de acordo com o termo/i;
const communications = /receber comunicações/i;
const email = /digite seu email/i;

describe('<Home />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createMatchMedia(768);
  });

  it('should render the navigation and logo', () => {
    setup();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByAltText(/logo/i)[0]).toBeInTheDocument();
  });

  it('should render the form with inputs and checkboxes', () => {
    setup();
    expect(screen.getByLabelText(terms)).toBeInTheDocument();
    expect(screen.getByLabelText(communications)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(email)).toBeInTheDocument();
  });

  it('should show error when terms checkbox is not checked', async () => {
    setup();

    fireEvent.click(screen.getByRole('button', { name: /email/i }));
    expect(await screen.findByText('Campo obrigatório.')).toBeInTheDocument();
  });

  it('should submit the form and opens the modal on success', async () => {
    (subscribe as jest.Mock).mockResolvedValueOnce({ error: false });
    setup();

    fireEvent.click(screen.getByLabelText(terms));
    fireEvent.click(screen.getByLabelText(communications));
    fireEvent.change(screen.getByPlaceholderText(email), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByRole('button', { name: /email/i }));

    await waitFor(() => {
      expect(
        screen.getByText('Obrigado por demonstrar interesse!'),
      ).toBeInTheDocument();
    });
  });

  it('should display error message when subscription fails', async () => {
    (subscribe as jest.Mock).mockResolvedValueOnce({ error: true });

    setup();

    fireEvent.click(screen.getByLabelText(terms));
    fireEvent.click(screen.getByLabelText(communications));
    fireEvent.change(screen.getByPlaceholderText(email), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByRole('button', { name: /email/i }));

    await waitFor(() => {
      expect(screen.getByText(/já está cadastrado/i)).toBeInTheDocument();
    });
  });

  it('renders the cards section with icons and text', () => {
    setup();

    const cards = screen.getAllByRole('heading', { level: 2 });
    expect(cards.length).toBeGreaterThan(0);
    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });
});
