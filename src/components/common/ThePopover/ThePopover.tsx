import React, { FC } from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import styles from "./ThePopover.module.css";
import classNames from "classnames";
import { useAuth0 } from "@auth0/auth0-react";

export type TriggersType = "hover" | "click" | "focus";

export type PlacementsType =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

interface IThePopoverProps {
  placement?: PlacementsType;
  text?: string;
  trigger?: TriggersType;
  isAvatar?: boolean;
}

export const ThePopover: FC<IThePopoverProps> = ({
  placement = "left",
  text = "Tooltip Text",
  trigger = "click",
  isAvatar,
}) => {
  const rowStyle = {
    display: "table-row",
  };

  const { logout } = useAuth0();
  const logoutButton = () => {
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    );
  };
  return (
    <div style={{ display: "table" }}>
      <div style={rowStyle}>
        <Tooltip
          placement={!isAvatar ? placement : "bottom"}
          overlay={!isAvatar ? text : logoutButton}
          trigger={[trigger]}
          arrowContent={<div className="rc-tooltip-arrow-inner" />}
        >
          <div
            className={classNames(styles.dots, { [styles.isAvatar]: isAvatar })}
          >
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default ThePopover;
