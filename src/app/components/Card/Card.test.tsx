import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { createMatchMedia } from '@/utils/setupTest';

import Card from './Card';

const defaultProps = {
  iconName: 'calendar',
  iconAlt: 'Ícone de Calendário',
  title: 'Título do Card',
  text: 'Conteúdo do Card',
};

const setup = (props = defaultProps) => render(<Card {...props} />);

describe('<Card />', () => {
  it('should render the icon, title, and text correctly', () => {
    setup();

    const icon = screen.getByAltText('Ícone de Calendário');
    expect(icon).toHaveAttribute('src', '/icons/calendar.svg');

    const title = screen.getByRole('heading', { name: 'Título do Card' });
    expect(title).toBeInTheDocument();

    const text = screen.getByText('Conteúdo do Card');
    expect(text).toBeInTheDocument();
  });

  it('should render mobile-specific styles/sizes when screen width is less than 768px', () => {
    createMatchMedia(767);
    setup();

    const icon = screen.getByAltText('Ícone de Calendário');
    expect(icon).toHaveAttribute('height', '50');
    expect(icon).toHaveAttribute('width', '50');

    const title = screen.getByRole('heading', { name: 'Título do Card' });
    expect(title.tagName).toBe('H2');

    const text = screen.getByText('Conteúdo do Card');
    expect(text.tagName).toBe('P');
  });

  it('should render desktop-specific styles/sizes when screen width is greater than 768px', () => {
    createMatchMedia(769);
    setup();

    const icon = screen.getByAltText('Ícone de Calendário');
    expect(icon).toHaveAttribute('height', '75');
    expect(icon).toHaveAttribute('width', '75');

    const title = screen.getByRole('heading', { name: 'Título do Card' });
    expect(title.tagName).toBe('H2');

    const text = screen.getByText('Conteúdo do Card');
    expect(text.tagName).toBe('P');
  });
});
