import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.scss'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ESC_KEY } from '../../constants/keys';


const modalRoot = document.getElementById("modal");

const Modal = ({ children, header, onClose }) => {


  useEffect(() => {
    const keyDownHandler = e => {
      if (e.key === ESC_KEY) onClose()
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={styles.modal}>
        <button className={styles.close_button} onClick={onClose}>
          <CloseIcon />
        </button>
        {header && (
          <h2 className="text text_type_main-large pt-3 pb-3">
            {header}
          </h2>
        )}
        {children}
      </div>
    </>
    ,
    modalRoot
  )
}

modalRoot.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired
}

export default Modal