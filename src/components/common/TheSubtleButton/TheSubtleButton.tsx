import { LinkIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { FC } from "react";
import styles from "./TheSubtleButton.module.css";

interface ITheSubtleButtonProps {
  className?: string;
  isIcon?: boolean;
  link?: string;
  onClick?: () => void;
}

export const TheSubtleButton: FC<ITheSubtleButtonProps> = (props) => {
  const { className, children, isIcon, link, onClick } = props;
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {link ? (
        <a href={link}>
          {isIcon && <LinkIcon className={styles.icon} />}
          {children}
        </a>
      ) : (
        <>
          {isIcon && <LinkIcon className={styles.icon} />}
          {children}
        </>
      )}
    </button>
  );
};

export default TheSubtleButton;
