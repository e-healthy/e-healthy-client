import React from 'react';
import { render, screen } from '@testing-library/react';

import Typography from './Typography';

describe('<Typography />', () => {
  it('renders with default props', () => {
    render(<Typography>Default Text</Typography>);
    const element = screen.getByText('Default Text');
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('c-typography');
  });

  it('renders correct HTML element for variant', () => {
    render(
      <Typography variant="h1" as="h1">
        Heading Text
      </Typography>,
    );
    const element = screen.getByText('Heading Text');
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('c-typography--h1');
  });

  it('renders with different "as" elements', () => {
    render(<Typography as="label">Label Text</Typography>);
    const element = screen.getByText('Label Text');
    expect(element.tagName).toBe('LABEL');
  });

  it('applies alignment class correctly', () => {
    render(<Typography align="center">Center Aligned Text</Typography>);
    const element = screen.getByText('Center Aligned Text');
    expect(element).toHaveClass('c-typography--center');
  });

  it('applies styling class correctly', () => {
    render(<Typography styling="bold">Bold Text</Typography>);
    const element = screen.getByText('Bold Text');
    expect(element).toHaveClass('c-typography--bold');
  });

  it('applies transform class correctly', () => {
    render(<Typography transform="uppercase">Uppercase Text</Typography>);
    const element = screen.getByText('Uppercase Text');
    expect(element).toHaveClass('c-typography--uppercase');
  });

  it('accepts additional className', () => {
    render(
      <Typography className="extra-class">Text with Extra Class</Typography>,
    );
    const element = screen.getByText('Text with Extra Class');
    expect(element).toHaveClass('extra-class');
  });
});
