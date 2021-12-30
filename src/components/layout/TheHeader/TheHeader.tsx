import React, { FC } from "react";
import styles from "./TheHeader.module.css";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import classNames from "classnames";
import { TheInput, TheSubtleButton, TheLogo } from "src/components";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { TheAvatar } from "src/components/common";
import { useAuth0 } from "@auth0/auth0-react";

interface ITheHeaderProps {
  className?: string;
  getSearch: (input: string) => void;
}
export const TheHeader: FC<ITheHeaderProps> = (props) => {
  const { className, getSearch } = props;
  const { pathname } = useLocation();
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const isSearchPage = pathname === "/search";

  return (
    <header className={classNames(styles.header, className)}>
      <div
        className="flex flex-1 items-center gap-8"
        style={{
          maxWidth: isSearchPage ? "100%" : "initial",
          marginRight: isSearchPage ? 40 : 0,
        }}
      >
        {!isSearchPage ? (
          <Link to="/">
            <TheLogo />
          </Link>
        ) : (
          <button onClick={() => navigate(-1)}>
            <ArrowLeftIcon className={styles.arrow} />
          </button>
        )}
        <TheInput
          style={{ maxWidth: isSearchPage ? "initial" : 800 }}
          placeholder="Search and discover"
          className={styles.input}
          getSearch={getSearch}
        />
      </div>
      <div className="flex items-center justify-end gap-5">
        {isAuthenticated ? (
          !isSearchPage && (
            <div className="flex items-center gap-10">
              <TheSubtleButton>Mojo</TheSubtleButton>
              <TheSubtleButton>Feedback</TheSubtleButton>
            </div>
          )
        ) : (
          <TheSubtleButton link="/login">Login</TheSubtleButton>
        )}
        <TheAvatar isAuthenticated={isAuthenticated} src={user?.picture} />
      </div>
    </header>
  );
};
