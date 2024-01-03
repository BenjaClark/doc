"use client";

import React from "react";

import styles from "./ButtonIcon.module.scss";

interface IButtonIcon {
  onClick?: () => void;
  icon: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  width?: string;
}

const ButtonIcon = ({
  onClick,
  icon,
  backgroundColor,
  borderRadius,
  color,
  width,
}: IButtonIcon) => {
  return (
    <div className="containerCompanyButton">
      <button
        style={{ backgroundColor, borderRadius, color, width, height: width }}
        className={styles.buttonIcon}
        onClick={onClick}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </button>
    </div>
  );
};

export default ButtonIcon;
