import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const SIZES = {
  small: 128,
  medium: 144,
  large: 160,
} as const;

type Color = 'default' | 'white';
type Variant = 'core' | 'logomark' | 'wordmark';
type Size = keyof typeof SIZES;

export type TProps = {
  variant?: Variant;
  size?: Size;
  color?: Color;
};

const getVariantPath = (variant: Variant, color: Color) => {
  const colorSuffix = color === 'white' ? '-white' : '';
  return `/${variant}${colorSuffix}.svg`;
};

const Logo: FC<TProps> = ({
  variant = 'core',
  size = 'medium',
  color = 'default',
}) => {
  const wordmarkHeight = variant.startsWith('wordmark')
    ? SIZES[size] / 4
    : SIZES[size];

  const src = getVariantPath(variant, color);
  console.log(src);
  return (
    <Image
      className={classNames('c-logo')}
      src={src}
      alt="Logo da E-Healthy"
      height={wordmarkHeight}
      width={SIZES[size] ?? SIZES['medium']}
      priority
    />
  );
};

export default Logo;
