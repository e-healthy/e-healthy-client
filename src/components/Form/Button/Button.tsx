import classNames from 'classnames';
import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

import styles from './Button.module.scss';

type TProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<TProps>> = forwardRef<
  HTMLButtonElement,
  TProps
>(({ children, ...props }, ref) => {
  const classes = {
    default: classNames(styles['c-button']),
  };

  return (
    <button ref={ref} className={classes.default} {...props}>
      {children}
    </button>
  );
});

export default Button;
