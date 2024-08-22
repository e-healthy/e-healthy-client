import { FC } from 'react';
import Image from 'next/image';

const variants: Record<string, string> = {
  core: 'core.svg',
  logomark: 'logomark.svg',
  wordmark: 'wordmark.svg',
};

type Props = {
  variant?: string;
};

const Logo: FC<Props> = ({ variant = 'core' }) => {
  return (
    <Image
      src={variants[variant]}
      alt="Logo do E-Healthy"
      width={200}
      height={200}
    />
  );
};

export default Logo;
