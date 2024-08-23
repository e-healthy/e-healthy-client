import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo component', () => {
  it('renders the correct image based on the variant', () => {
    render(<Logo variant="logomark" />);
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('src', 'logomark.svg');
  });

  it('renders the correct size based on the size prop', () => {
    render(<Logo size="large" />);
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('width', '360');
    expect(image).toHaveAttribute('height', '360');
  });

  it('renders the correct height for the wordmark variant', () => {
    render(<Logo variant="wordmark" size="medium" />);
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('height', '120');
  });
});
