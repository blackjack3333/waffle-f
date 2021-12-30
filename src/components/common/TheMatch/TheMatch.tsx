import React, { FC } from "react";
import styles from "./TheMatch.module.css";

export const TheMatch: FC = () => {
  return (
    <div className={styles.match}>
      <span>97% match</span>
    </div>
  );
};

export default TheMatch;
