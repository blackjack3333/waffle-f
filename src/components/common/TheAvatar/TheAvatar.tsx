import classNames from "classnames";
import React, { FC, useState } from "react";
import styles from "./TheAvatar.module.css";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ThePopover } from "src/components/common/ThePopover";

interface ITheAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  isAuthenticated?: boolean;
}

export const TheAvatar: FC<ITheAvatarProps> = ({
  className,
  src,
  size = 42,
  isAuthenticated,
}) => {
  const [isError, setIsError] = useState(false);

  return (
    <span
      className={classNames(styles.avatar, className)}
      style={{ width: size, height: size }}
    >
      {src && !isError ? (
        <img src={src} alt="avatar" onError={() => setIsError(true)} />
      ) : (
        <UserCircleIcon />
      )}
      {isAuthenticated && (
        <div className={styles.popoverWrapper}>
          <ThePopover isAvatar />
        </div>
      )}
    </span>
  );
};
