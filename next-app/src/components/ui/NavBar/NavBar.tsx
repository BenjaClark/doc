import React, { useState, useContext } from "react";
import styles from "./NavBar.module.scss";
import ButtonIcon from "../ButtonIcon";
import { useMenu } from "@/store/hooks";

const NavBar = () => {
  const { showMenu, setShowMenu } = useMenu();

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navBar}>
      <nav>
        <ul className={styles.left}>
          <li className={styles.button}>
            <ButtonIcon onClick={handleToggle} icon=">" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
