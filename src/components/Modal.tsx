import React from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const navigate = useNavigate();
  const closeModalHandler = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <dialog className={styles.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
