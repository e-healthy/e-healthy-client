import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import classNames from 'classnames';

import Button from '../Form/Button';

import styles from './Modal.module.scss';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

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
        data-testid="modal-overlay"
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
