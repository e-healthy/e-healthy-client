'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import useMediaQuery from '@/hooks/useMediaQuery';

import styles from './Footer.module.scss';

type TFooter = {
  children: React.ReactNode;
};

const Footer: FC<TFooter> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const typographyVariant = isMobile ? 'small' : 'label';

  const classes = {
    default: classNames(styles['c-footer']),
    text: classNames(styles['c-footer__text']),
    image: classNames(styles['c-footer__image']),
  };

  return (
    <footer className={classes.default}>
      <div className={classes.text}>
        <Typography
          variant={typographyVariant}
          as="small"
          color="secondary"
          className={classes.text}
        >
          {children}
        </Typography>
      </div>
      <div className={classes.image}>
        <Icon name="pipoca-agil" alt="Logo do Pipoca Ágil" size="small" />
      </div>
    </footer>
  );
};

export default Footer;
