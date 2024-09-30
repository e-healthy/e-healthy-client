import classNames from 'classnames';
import { FC } from 'react';

import Icon from '@/components/Icon';
import Link from '@/components/Link';

import styles from './Breadcrumb.module.scss';

type TProps = {
  breadcrumbs: Array<{ text: string; href: string }>;
};

const Breadcrumb: FC<TProps> = ({ breadcrumbs }) => {
  const classes = {
    default: classNames(styles['c-breadcrumb']),
    list: classNames(styles['c-breadcrumb__list']),
    item: classNames(styles['c-breadcrumb__list__item']),
    icon: classNames(styles['c-breadcrumb__list__item__icon']),
  };

  return (
    <div className={classes.default}>
      <ul className={classes.list}>
        {breadcrumbs.map(({ text, href }, id) => {
          return (
            <li className={classes.item} key={id}>
              {text === 'Home' || text === 'Página Inicial' ? (
                <Link href={href}>
                  <Icon
                    className={classes.icon}
                    name="circle-arrow-left"
                    alt="Ícone de voltar à página anterior"
                    size="xsmall"
                  />
                  {text}
                </Link>
              ) : (
                <Link href={href}>{text}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
