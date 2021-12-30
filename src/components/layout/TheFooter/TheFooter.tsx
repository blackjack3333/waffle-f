import classNames from "classnames";
import React, { FC } from "react";
import styles from "./TheFooter.module.css";

interface ITheFooterProps {
  className?: string;
}

export const TheFooter: FC<ITheFooterProps> = ({ className }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      <span className={styles.privacy}>Privacy</span>
      <span className={styles.text}>© 2021 Waffly, Inc</span>
    </footer>
  );
};

export default TheFooter;
