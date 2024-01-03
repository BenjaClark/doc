import React from "react";
import styles from "./Box.module.scss";

interface IButton {
  name?: string;
  onClick?: () => void;
}

const Box = ({ name, onClick }: IButton) => {
  return (
    <div className={styles.box} onClick={onClick}>
      {name}
    </div>
  );
};

export default Box;
