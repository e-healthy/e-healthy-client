import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

import styles from './Link.module.scss';

export type TProps = {
  href: string | object;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string;
};

export const LinkComponent: FC<PropsWithChildren<TProps>> = ({
  href,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  children,
}) => {
  const classes = {
    default: classNames(styles['c-link']),
  };

  return (
    <Link
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      className={classes.default}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
