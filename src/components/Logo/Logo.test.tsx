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
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('src', '/logomark.svg');
  });

  it('should render the correct larger height and width', () => {
    setup({ ...defaultProps, size: 'large' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('height', '160');
    expect(image).toHaveAttribute('width', '160');
  });

  it('should render the correct medium height and width', () => {
    setup({ ...defaultProps, size: 'medium' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('height', '144');
    expect(image).toHaveAttribute('width', '144');
  });

  it('should render the correct smaller height and width', () => {
    setup({ ...defaultProps, size: 'small' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('height', '128');
    expect(image).toHaveAttribute('width', '128');
  });
});
