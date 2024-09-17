import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';
import Icon from '@/components/Icon';

type TProps = {
  loading?: any;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<TProps>> = ({
  children,
  loading,
  ...props
}) => {
  const classes = {
    default: classNames(styles['c-button']),
  };

  return (
    <button className={classes.default} {...props}>
      {loading ? (
        <Icon name="loading" alt="Carregando..." size="xsmall" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
