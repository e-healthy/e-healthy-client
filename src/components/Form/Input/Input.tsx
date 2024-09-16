import Typography from '@/components/Typography';
import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

type TProps = {
  id: string;
  label?: string;
  placeholder: string;
  startAdornment?: ReactElement;
  endAdorment?: ReactElement;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, TProps>(
  (
    { id, label, placeholder, startAdornment, endAdorment, error, ...props },
    ref,
  ) => {
    const classes = {
      default: classNames(styles['c-input']),
      container: classNames(styles['c-input__container']),
      input: classNames(styles['c-input__input']),
    };

    return (
      <div className={styles['c-input']}>
        {label && (
          <Typography variant="body" as="label" styling="bold">
            {label}
          </Typography>
        )}
        <div className={classes.container}>
          {startAdornment}
          <input
            id={id}
            placeholder={placeholder}
            ref={ref}
            className={classes.input}
            {...props}
          />
          {endAdorment}
        </div>

        {error && (
          <Typography variant="small" as="small" color="error">
            {error}
          </Typography>
        )}
      </div>
    );
  },
);

export default Input;
