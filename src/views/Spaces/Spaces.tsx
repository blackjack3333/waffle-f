import React, { FC } from "react";
import styles from "./Spaces.module.css";
import { Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

export const Spaces: FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.home}>
      {
        <h1 className={styles.title}>
          {isAuthenticated
            ? "All audios"
            : "Autorise please to work with service with Telegram Bot"}
        </h1>
      }
      <Outlet />
    </div>
  );
};
