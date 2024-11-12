'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Logo from '@/components/Logo';
import useMediaQuery from '@/hooks/useMediaQuery';

import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const logoSize = isMobile ? 'small' : 'medium';

  return (
    <nav className={classNames(styles['c-navigation'])}>
      <div>
        <Logo variant="wordmark" size={logoSize} />
      </div>
    </nav>
  );
};

export default Navigation;
