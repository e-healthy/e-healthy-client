import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import classNames from 'classnames';

import Typography from '@/components/Typography';

import styles from './Checkbox.module.scss';

export type TProps = {
  id: string;
  label: string | ReactElement;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, TProps>(
  ({ id, label, checked, onChange, error, ...props }, ref) => {
    const classes = {
      default: classNames(styles['c-checkbox']),
      container: classNames(styles['c-checkbox__container'], {
        [styles['c-checkbox__container--checked']]: checked,
      }),
      checkbox: classNames(styles['c-checkbox__input']),
      checkmark: classNames(styles['c-checkbox__checkmark']),
      error: classNames(styles['c-checkbox__error']),
    };

    return (
      <div className={classes.default}>
        <label htmlFor={id} className={classes.container}>
          <input
            id={id}
            type="checkbox"
            className={classes.checkbox}
            checked={checked}
            onChange={onChange}
            ref={ref}
            {...props}
          />
          {label}
          <span className={classes.checkmark} />
        </label>
        <Typography
          variant="small"
          as="small"
          color="error"
          className={classes.error}
        >
          {error}
        </Typography>
      </div>
    );
  },
);

export default Checkbox;
