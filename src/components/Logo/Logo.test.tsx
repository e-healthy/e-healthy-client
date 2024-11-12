import { render, screen } from '@testing-library/react';

import Logo, { TProps } from './Logo';

const defaultProps: TProps = {
  variant: 'core',
  size: 'medium',
  color: 'default',
};

const setup = (props = defaultProps) => render(<Logo {...props} />);

describe('<Logo />', () => {
  it('should render the default logo', () => {
    render(<Logo />);
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/core.svg');
    expect(image).toHaveAttribute('height', '144');
    expect(image).toHaveAttribute('width', '144');
  });

  it('should render the correct image based on the variant', () => {
    setup({ ...defaultProps, variant: 'logomark' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('src', '/logomark.svg');
  });

  it('should render the correct white variant when color is passed', () => {
    setup({ ...defaultProps, variant: 'logomark', color: 'white' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('src', '/logomark-white.svg');
  });

  it('should render the correct smaller height and width', () => {
    setup({ ...defaultProps, size: 'small' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('height', '128');
    expect(image).toHaveAttribute('width', '128');
  });

  it('should render the correct medium height and width', () => {
    setup();
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('height', '144');
    expect(image).toHaveAttribute('width', '144');
  });

  it('should render the correct larger height and width', () => {
    setup({ ...defaultProps, size: 'large' });
    const image = screen.getByAltText('Logo da E-Healthy');
    expect(image).toHaveAttribute('height', '160');
    expect(image).toHaveAttribute('width', '160');
  });
});
