import React from "react";
import styles from "./Modal.module.css";
type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <dialog className={styles.modal} open={isOpen}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
