"use client";

import React from "react";

import styles from "./Button.module.scss";

interface IButton {
  label?: string;
  onClick?: () => void;
  value?: string;
  width?: string;
  isLoading?: boolean;
  backgroundColor?: string;
  color?: string;
  marginTop?: string;
  right?: string;
}

const Button = ({
  label,
  onClick,
  value,
  width,
  isLoading,
  backgroundColor,
  color,
  marginTop,
  right,
}: IButton) => {
  return (
    <div className={styles.button} style={{ marginRight: right }}>
      <button
        style={{
          backgroundColor,
          width,
          color: color,
          marginTop,
          right,
        }}
        onClick={onClick}
      >
        {isLoading ? "Espere..." : label}
      </button>
    </div>
  );
};

export default Button;
