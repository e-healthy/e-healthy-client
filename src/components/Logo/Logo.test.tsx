import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('<Logo />', () => {
  it('renders the correct image based on the variant', () => {
    render(<Logo variant="logomark" />);
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('src', 'logomark.svg');
  });

  it('renders the core image if no variant is provided', () => {
    render(<Logo />);
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('src', 'core.svg');
  });
});
