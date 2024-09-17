'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import useMediaQuery from '@/hooks/useMediaQuery';

import styles from './Card.module.scss';

type TProps = {
  iconName: string;
  iconAlt: string;
  iconSize?: number;
  title: string;
  text: string;
};

const Card: FC<TProps> = ({ iconName, iconAlt, title, text }) => {
  const classes = {
    default: classNames(styles['c-card']),
    icon: classNames(styles['c-card__icon']),
    title: classNames(styles['c-card__title']),
    text: classNames(styles['c-card__text']),
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const titleVariant = isMobile ? 'h6' : 'h5';
  const textVariant = isMobile ? 'bodySmall' : 'body';
  const iconSize = isMobile ? 'small' : 'medium';

  return (
    <div className={classes.default}>
      <div className={classes.icon}>
        <Icon name={iconName} alt={iconAlt} size={iconSize} />
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
