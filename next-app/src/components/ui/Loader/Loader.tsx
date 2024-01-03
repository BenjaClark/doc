import React from "react";

import styles from "./Loader.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "@/components/layout/Modal";

interface IImage {
  width?: number;
}

const Loader = ({ width }: IImage) => {
  return (
    <>
      <Modal>
        <div className={styles.loader} style={{ width, height: width }}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Modal>
    </>
  );
};

export default Loader;
