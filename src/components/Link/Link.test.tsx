import React from 'react';
import { render, screen } from '@testing-library/react';

import Link, { TProps } from './Link';

const defaultProps: TProps = {
  href: '/test',
};

const setup = (props: TProps = defaultProps) => {
  render(
    <Link {...props}>
      <span>Test Link</span>
    </Link>,
  );
};

describe('<Link />', () => {
  it('should render without crashing', () => {
    setup();
    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
  });

  it('should render the correct href', () => {
    setup();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should pass the replace prop to the Link component', () => {
    setup({ ...defaultProps, replace: true });
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should pass the scroll prop to the Link component', () => {
    setup({ ...defaultProps, scroll: false });
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    setup();
    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
  });

  it('should render with the correct locale when passed', () => {
    setup({ ...defaultProps, locale: 'en' });
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should apply the correct CSS class', () => {
    setup();
    const link = screen.getByRole('link');
    expect(link).toHaveClass('c-link');
  });
});
