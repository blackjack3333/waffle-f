import React, { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TheMatch } from "src/components";
import { ThePopover } from "src/components/common/ThePopover";
import styles from "./HomeItem.module.css";

interface IHomeItemProps {
  isSearch?: boolean;
  message: string;
  index: number;
  id: string;
  playCounter: number;
  duration: string;
  getMessageId?: (id: string) => void;
}

export const HomeItem: FC<IHomeItemProps> = ({
  isSearch,
  message,
  index,
  id,
  playCounter,
  duration,
}) => {
  const { spaceId } = useParams();

  return (
    <NavLink
      to={`/spaces/${spaceId}/transcriptions/${id}`}
      className={styles.item}
    >
      <span className={styles.number}>{index}</span>
      <span className={styles.id}>{id}</span>
      <div className={styles.wrapperNames}>
        <span className={styles.name}>{message}</span>
        <span className={styles.resourse}>Telegram voice message</span>
      </div>
      {!isSearch ? (
        <>
          <div className={styles.wrapperMeta}>
            <span className={styles.name}>{duration}</span>
            <span className={styles.resourse}>{playCounter} plays</span>
          </div>
          <ThePopover />
        </>
      ) : (
        <TheMatch />
      )}
    </NavLink>
  );
};
