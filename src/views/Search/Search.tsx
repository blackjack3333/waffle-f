import React, { FC } from "react";
// import { HomeItem } from "src/components";
import styles from "./Search.module.css";

interface ISearchProps {
  searchTerm: string;
  getMessageId: (id: string) => void;
}

export const Search: FC<ISearchProps> = ({ searchTerm, getMessageId }) => {
  return (
    <div className={styles.search}>
      <h2 className={styles.title}>
        Found {"222"} results in {}0.01s
      </h2>
      <div className={styles.list}>
        {/* <HomeItem
          isSearch
          message={item.message[0].messageTime}
          index={i + 1}
          id={item.id}
          duration={item.duration}
          playCounter={item.playCounter}
          key={item.message[0].messageTime}
          getMessageId={getMessageId}
        /> */}
      </div>
    </div>
  );
};

export default Search;
