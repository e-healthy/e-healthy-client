import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

type TProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<TProps>> = ({ children, ...props }) => {
  const classes = {
    default: classNames(styles['c-button']),
  };

  return (
    <button className={classes.default} {...props}>
      {children}
    </button>
  );
};

export default Button;
