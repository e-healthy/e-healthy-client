'use client';

import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Typography from '@/components/Typography';

import styles from './Card.module.scss';
import useMediaQuery from '@/hooks/useMediaQuery';

type TProps = {
  icon: string;
  iconAlt: string;
  iconSize?: number;
  title: string;
  text: string;
};

const Card: FC<TProps> = ({ icon, iconAlt, title, text }) => {
  const classes = {
    default: classNames(styles['c-card']),
    icon: classNames(styles['c-card__icon']),
    title: classNames(styles['c-card__title']),
    text: classNames(styles['c-card__text']),
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const titleVariant = isMobile ? 'h6' : 'h5';
  const textVariant = isMobile ? 'bodySmall' : 'body';
  const iconSize = isMobile ? 50 : 75;

  return (
    <div className={classes.default}>
      <div className={classes.icon}>
        <Image src={icon} alt={iconAlt} height={iconSize} width={iconSize} />
      </div>

      <Typography
        variant={titleVariant}
        as="h2"
        color="secondary"
        align="center"
        className={classes.title}
      >
        {title}
      </Typography>

      <Typography
        variant={textVariant}
        as="p"
        color="secondary"
        align="justify"
        className={classes.text}
      >
        {text}
      </Typography>
    </div>
  );
};

export default Card;
