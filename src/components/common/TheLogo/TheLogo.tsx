import React, { FC } from "react";
import styles from "./TheLogo.module.css";
import logoSrc from "src/assets/logo.png";

export const TheLogo: FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <img className={styles.logo} src={logoSrc} alt="logo" />
    </div>
  );
};

export default TheLogo;
