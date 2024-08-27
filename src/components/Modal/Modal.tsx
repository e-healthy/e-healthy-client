import { FC, PropsWithChildren, useCallback } from 'react';
import classNames from 'classnames';

import styles from './Modal.module.scss';
import Button from '../Form/Button';

type TProps = {
  closeByIcon?: boolean;
  closeByButton?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<TProps>> = ({
  closeByIcon,
  closeByButton,
  isOpen,
  onClose,
  children,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  const classes = {
    default: classNames(styles['c-modal']),
    close: classNames(styles['c-modal__close']),
    body: classNames(styles['c-modal__body']),
    overlay: classNames(styles['c-modal__overlay']),
  };

  return (
    <>
      <div
        className={classes.overlay}
        onClick={handleClose}
        aria-hidden="true"
      />
      <div className={classes.default} role="dialog" aria-modal="true">
        {closeByIcon && (
          <button
            type="button"
            className={classes.close}
            onClick={handleClose}
            aria-label="Fechar o modal"
          >
            &times;
          </button>
        )}
        <div className={classes.body}>
          {children}

          {closeByButton && (
            <div className={styles['c-modal__footer']}>
              <Button
                type="button"
                onClick={handleClose}
                aria-label="Fechar o modal"
              >
                Fechar
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
