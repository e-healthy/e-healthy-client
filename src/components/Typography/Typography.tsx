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

const tagsMapping = {
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

type TTypographyElements = keyof typeof tagsMapping;
type THeadingElements = keyof typeof headings;

type TVariants =
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

type TAlignments = keyof typeof aligns;

const stylings = {
  bold: 'bold',
  italic: 'italic',
  normal: 'normal',
} as const;

type TStylings = keyof typeof stylings;

const transforms = {
  lowercase: 'lowercase',
  uppercase: 'uppercase',
} as const;

type TTransforms = keyof typeof transforms;

type Props = {
  variant?: TVariants;
  align?: TAlignments;
  styling?: TStylings;
  transform?: TTransforms;
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
    children,
    className,
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
      }),
      ...props,
    },
    children,
  );

  return Component;
};

export default Typography;
