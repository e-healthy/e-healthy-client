import { render, screen } from '@testing-library/react';
import { createMatchMedia } from '@/utils/setupTest';

import Navigation from './Navigation';

const setup = () => render(<Navigation />);

describe('<Navigation />', () => {
  it('should render the Logo component with the correct variant and size', () => {
    createMatchMedia(1024);
    setup();
    const logo = screen.getByAltText('Logo da E-Healthy');
    expect(logo).toHaveAttribute('src', '/wordmark.svg');
    expect(logo).toHaveAttribute('height', `${144 / 4}`);
    expect(logo).toHaveAttribute('width', '144');
  });

  it('should render the Logo component with the correct size for smaller viewports', () => {
    createMatchMedia(768);
    setup();
    const logo = screen.getByAltText('Logo da E-Healthy');
    expect(logo).toHaveAttribute('src', '/wordmark.svg');
    expect(logo).toHaveAttribute('height', `${128 / 4}`);
    expect(logo).toHaveAttribute('width', '128');
  });
});
