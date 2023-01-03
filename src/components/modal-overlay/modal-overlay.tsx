import React, { FC } from "react";
import styles from "./modal-overlay.module.scss";
import { TModalOverlayProps } from "./modal-overlay.types";

const ModalOverlay: FC<TModalOverlayProps> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default ModalOverlay;
