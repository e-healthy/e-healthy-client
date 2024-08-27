import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const variants: Record<string, string> = {
  core: 'core.svg',
  logomark: 'logomark.svg',
  wordmark: 'wordmark.svg',
};

const sizes: Record<string, number> = {
  xxsmall: 104,
  xsmall: 144,
  small: 176,
  medium: 240,
  large: 360,
  xlarge: 480,
};

type TProps = {
  variant?: string;
  size?: string;
};

const Logo: FC<TProps> = ({ variant = 'core', size = 'medium' }) => {
  const wordmarkHeight = variant === 'wordmark' ? sizes[size] / 3 : sizes[size];

  return (
    <Image
      className={classNames('c-logo')}
      src={variants[variant]}
      alt="Logo do E-Healthy"
      width={sizes[size]}
      height={wordmarkHeight}
      priority
    />
  );
};

export default Logo;
