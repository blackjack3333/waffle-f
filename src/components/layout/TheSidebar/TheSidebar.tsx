import classNames from "classnames";
import { map, truncate } from "lodash";
import React, { FC } from "react";
import styles from "./TheSidebar.module.css";
import { VolumeUpIcon } from "@heroicons/react/outline";
import { ISpacesResponse } from "src/models";
import { ReactComponent as Loader } from "src/assets/loader.svg";
import { NavLink } from "react-router-dom";

interface ITheSidebarProps {
  className?: string;
  items?: ISpacesResponse["spaces"];
  loading?: boolean;
}

export const TheSidebar: FC<ITheSidebarProps> = ({
  className,
  items,
  loading,
}) => {
  const renderList = () => {
    return items?.length ? (
      map(items, ({ id, name }) => (
        <NavLink key={id} to={`/spaces/${id}`} style={{ width: "100%" }}>
          <button className={styles.item} onClick={() => {}}>
            <VolumeUpIcon className={styles.icon} />
            <span className={styles.label}>
              {name
                ? truncate(name, { length: 20 })
                : truncate(id, { length: 20 })}
            </span>
          </button>
        </NavLink>
      ))
    ) : (
      <span className="text-DUSTY_ORANGE">You do not have spaces yet</span>
    );
  };
  return (
    <div className={classNames(styles.sidebar, className)}>
      {loading ? <Loader className="animate-spin" /> : renderList()}
    </div>
  );
};

export default TheSidebar;
