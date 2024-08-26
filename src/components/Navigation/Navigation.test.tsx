import { render, screen } from '@testing-library/react';
import { createMatchMedia } from '@/utils/test';

import Navigation from './Navigation';

const setup = () => render(<Navigation />);

describe('<Navigation />', () => {
  it('renders the Logo component with the correct variant and size', () => {
    createMatchMedia(1024);
    setup();
    const logo = screen.getByAltText('Logo do E-Healthy');
    expect(logo).toHaveAttribute('src', 'wordmark.svg');
    expect(logo).toHaveAttribute('width', '144');
    expect(logo).toHaveAttribute('height', '48');
  });

  it('renders the Logo component with the correct size for smaller viewports', () => {
    createMatchMedia(768);
    setup();
    const logo = screen.getByAltText('Logo do E-Healthy');
    expect(logo).toHaveAttribute('src', 'wordmark.svg');
    expect(logo).toHaveAttribute('width', '104');
    expect(logo).toHaveAttribute('height', `${104 / 3}`);
  });
});
