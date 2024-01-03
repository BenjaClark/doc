import React, { ReactNode } from "react";

import NavBar from "@/components/ui/NavBar";
import Menu from "@/components/ui/Menu/Menu";

import styles from "./Option.module.scss";

interface IOption {
  children: ReactNode;
  userName?: string;
}

const Option = ({ children }: IOption) => {
  return (
    <div className={styles.option}>
      <NavBar />
      <Menu />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Option;
