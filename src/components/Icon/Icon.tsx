import Image from 'next/image';
import { FC } from 'react';

const sizes = {
  xxsmall: 15,
  xsmall: 25,
  small: 50,
  medium: 75,
  large: 100,
} as const;

export type TSizes = keyof typeof sizes;

type TProps = {
  name: string;
  alt: string;
  size: TSizes;
};

const Icon: FC<TProps> = ({ name, alt, size }) => {
  const path = `/icons/${name}.svg`;
  const iconSize = sizes[size];

  return <Image src={path} alt={alt} height={iconSize} width={iconSize} />;
};

export default Icon;
