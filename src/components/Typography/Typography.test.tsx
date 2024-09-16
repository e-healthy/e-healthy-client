import React from 'react';
import { render, screen } from '@testing-library/react';

import Typography, {
  TVariants,
  TTypographyElements,
  TAlignments,
  TStylings,
  TTransforms,
  TColors,
} from './Typography';

const defaultProps = {
  variant: 'body' as TVariants,
  as: 'p' as TTypographyElements,
  align: 'right' as TAlignments,
  styling: 'normal' as TStylings,
  transform: 'uppercase' as TTransforms,
  color: 'primary' as TColors,
  className: '',
  children: 'Default Text',
};

const setup = (props = defaultProps) =>
  render(<Typography {...props}>{props.children}</Typography>);

describe('<Typography />', () => {
  it('should render with default props', () => {
    setup();
    const element = screen.getByText('Default Text');
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('c-typography');
  });

  it('should render correct HTML element for variant', () => {
    const text = 'Heading Text';
    setup({
      ...defaultProps,
      variant: 'h1',
      as: 'h1',
      children: text,
    });
    const element = screen.getByText(/text/i);
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('c-typography--h1');
  });

  it('should render with different "as" elements', () => {
    const text = 'Label Text';
    setup({ ...defaultProps, as: 'label', children: text });
    const element = screen.getByText(/text/i);
    expect(element.tagName).toBe('LABEL');
  });

  it('should apply alignment class correctly', () => {
    const text = 'Center Aligned Text';
    setup({
      ...defaultProps,
      align: 'center',
      children: text,
    });
    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('c-typography--center');
  });

  it('should apply styling class correctly', () => {
    const text = 'Bold Text';
    setup({ ...defaultProps, styling: 'bold', children: text });
    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('c-typography--bold');
  });

  it('should apply transform class correctly', () => {
    const text = 'Uppercase Text';
    setup({
      ...defaultProps,
      transform: 'uppercase',
      children: text,
    });
    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('c-typography--uppercase');
  });

  it('should apply color class correctly', () => {
    const text = 'Uppercase Text';
    setup({
      ...defaultProps,
      color: 'error',
      children: text,
    });
    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('c-typography--color-error');
  });

  it('should accept additional className', () => {
    const text = 'Text with Extra Class';
    setup({
      ...defaultProps,
      className: 'extra-class',
      children: text,
    });
    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('extra-class');
  });
});
