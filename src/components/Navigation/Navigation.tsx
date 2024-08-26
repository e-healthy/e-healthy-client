'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Logo from '@/components/Logo';
import useMediaQuery from '@/hooks/useMediaQuery';

import styles from './Navigation.module.scss';

type TProps = {
  className?: string;
};

const Navigation: FC<TProps> = ({ className }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const logoSize = isMobile ? 'xxsmall' : 'xsmall';

  return (
    <nav className={classNames(styles['c-navigation'], className)}>
      <div>
        <Logo variant="wordmark" size={logoSize} />
      </div>
    </nav>
  );
};

export default Navigation;
