import classNames from 'classnames';
import {
  createElement,
  FC,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from 'react';

import styles from './Typography.module.scss';

const headings = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export const tagsMapping = {
  ...headings,
  p: 'p',
  b: 'b',
  em: 'em',
  small: 'small',
  span: 'span',
  strong: 'strong',
  legend: 'legend',
  q: 'q',
  label: 'label',
};

export type TTypographyElements = keyof typeof tagsMapping;
type THeadingElements = keyof typeof headings;

export type TVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'bodyLarge'
  | 'bodySmall'
  | 'label'
  | 'small';

type TConditionalProps =
  | ({ as?: 'label' } & LabelHTMLAttributes<HTMLLabelElement>)
  | ({ as?: THeadingElements } & HTMLAttributes<HTMLHeadingElement>)
  | { as?: TTypographyElements };

const aligns = {
  center: 'center',
  justify: 'justify',
  left: 'left',
  right: 'right',
} as const;

export type TAlignments = keyof typeof aligns;

const stylings = {
  bold: 'bold',
  italic: 'italic',
  normal: 'normal',
} as const;

export type TStylings = keyof typeof stylings;

const transforms = {
  lowercase: 'lowercase',
  uppercase: 'uppercase',
} as const;

export type TTransforms = keyof typeof transforms;

const colors = {
  primary: 'primary',
  secondary: 'secondary',
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
} as const;

export type TColors = keyof typeof colors;

type Props = {
  variant?: TVariants;
  align?: TAlignments;
  styling?: TStylings;
  transform?: TTransforms;
  color?: TColors;
  className?: string;
  children: ReactNode;
} & TConditionalProps;

const Typography: FC<Props> = (
  {
    variant = 'body',
    as = 'p',
    align,
    styling,
    transform,
    color = 'primary',
    className,
    children,
  },
  props,
) => {
  const Component = createElement(
    as,
    {
      className: classNames('c-typography', className, {
        [styles[`c-typography--${variant}`]]: variant,
        [styles[`c-typography--${align}`]]: align,
        [styles[`c-typography--${styling}`]]: styling,
        [styles[`c-typography--${transform}`]]: transform,
        [styles[`c-typography--color-${color}`]]: color,
      }),
      ...props,
    },
    children,
  );

  return Component;
};

export default Typography;
