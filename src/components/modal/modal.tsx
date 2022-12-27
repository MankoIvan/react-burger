import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ESC_KEY } from "../../constants/keys";
import { TModalProps } from "./modal.types";

const modalRoot = document.getElementById("modal");

const Modal: FC<TModalProps> = ({ children, header, onClose }) => {
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === ESC_KEY) onClose();
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onClose]);

  return modalRoot
    ? createPortal(
        <>
          <ModalOverlay onClick={onClose} />
          <div className={styles.modal}>
            <button className={styles.close_button} onClick={onClose}>
              <CloseIcon type="primary" />
            </button>
            {header && (
              <h2 className="text text_type_main-large pt-3 pb-3">{header}</h2>
            )}
            {children}
          </div>
        </>,
        modalRoot
      )
    : null;
};

export default Modal;
