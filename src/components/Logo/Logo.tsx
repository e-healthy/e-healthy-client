import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const variants: Record<string, string> = {
  core: '/core.svg',
  logomark: '/logomark.svg',
  wordmark: '/wordmark.svg',
};

const sizes: Record<string, number> = {
  small: 128,
  medium: 144,
  large: 160,
};

type TProps = {
  variant?: string;
  size?: string;
};

const Logo: FC<TProps> = ({ variant = 'core', size = 'medium' }) => {
  const wordmarkHeight = variant === 'wordmark' ? sizes[size] / 4 : sizes[size];

  return (
    <Image
      className={classNames('c-logo')}
      src={variants[variant]}
      alt="Logo da E-Healthy"
      width={sizes[size]}
      height={wordmarkHeight}
      priority
    />
  );
};

export default Logo;
