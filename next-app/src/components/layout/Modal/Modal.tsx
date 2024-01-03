import React, { ReactNode } from "react";

import styles from "./Modal.module.scss";

interface IModal {
  children: ReactNode;
}

const Modal = ({ children }: IModal) => {
  return <div className={styles.modal}>{children}</div>;
};

export default Modal;
