import React, { FC } from "react";
import styles from "./Space.module.css";
import { HomeItem } from "src/components/views";
import { useParams } from "react-router";
import { useSpaceById } from "src/hooks/useSpaceById";
import { map } from "lodash";
import { ReactComponent as Loader } from "src/assets/loader.svg";

interface ISpaceProps {
  spaceId?: string;
}

export const Space: FC<ISpaceProps> = () => {
  const { spaceId } = useParams();
  const { data, isFetched } = useSpaceById(spaceId as string);

  return (
    <div className={styles.wrapper}>
      {isFetched ? (
        <div className={styles.list}>
          {map(data?.transcriptions, ({ id, text }, idx) => (
            <HomeItem
              message={text}
              index={1 + idx}
              id={id}
              duration={"12:00"}
              playCounter={111}
              key={id}
            />
          ))}
        </div>
      ) : (
        <Loader className="animate-spin" />
      )}
    </div>
  );
};
