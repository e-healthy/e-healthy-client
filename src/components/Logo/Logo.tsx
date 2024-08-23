import { FC } from 'react';
import Image from 'next/image';

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

type Props = {
  variant?: string;
  size?: string;
};

const Logo: FC<Props> = ({ variant = 'core', size = 'medium' }) => {
  const wordmarkHeight = variant === 'wordmark' ? sizes[size] / 3 : sizes[size];

  return (
    <Image
      src={variants[variant]}
      alt="Logo do E-Healthy"
      width={sizes[size]}
      height={wordmarkHeight}
    />
  );
};

export default Logo;
