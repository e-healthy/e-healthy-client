import { render, screen } from '@testing-library/react';

import Logo from './Logo';

const defaultProps = {
  variant: 'core',
  size: 'medium',
};

const setup = (props = defaultProps) => render(<Logo {...props} />);

describe('<Logo />', () => {
  it('should render the correct image based on the variant', () => {
    setup({ ...defaultProps, variant: 'logomark' });
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('src', 'logomark.svg');
  });

  it('should render the correct size based on the size prop', () => {
    setup({ ...defaultProps, size: 'large' });
    const image = screen.getByAltText('Logo do E-Healthy');
    expect(image).toHaveAttribute('height', '360');
    expect(image).toHaveAttribute('width', '360');
  });
});
