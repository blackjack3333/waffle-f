import { useAuth0 } from "@auth0/auth0-react";
import classNames from "classnames";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { useLocation, Outlet, useNavigate, useMatch } from "react-router-dom";
import { TheFooter, TheHeader, TheSidebar } from "src/components";
import styles from "./TheLayout.module.css";
import { BACK_API } from "src/config";
import axios from "axios";
import { useSpaces } from "src/hooks";
import RouteTypes from "src/router/types";

interface ITheLayoutProps {
  className?: string;
  getSearch: (input: string) => void;
}
export interface RefProps {
  sendUserMetadata: (data?: { source: string; uid: string }) => void;
}

export const TheLayout = forwardRef<RefProps, ITheLayoutProps>(
  ({ className, getSearch }, ref) => {
    const { pathname } = useLocation();
    const { isAuthenticated } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();
    const isNotSearchPage = pathname !== "/search";
    const navigate = useNavigate();
    const { data, isLoading, isFetched } = useSpaces();
    const match = useMatch(RouteTypes.transcriptions);

    const isTranscriptRoute = match?.pattern.path === RouteTypes.transcriptions;

    useImperativeHandle(ref, () => ({
      sendUserMetadata: async (data?: { source: string; uid: string }) => {
        if (data) {
          try {
            const accessToken = await getAccessTokenSilently();
            const { source, uid } = data;

            const userDetailsByIdUrl = `${BACK_API}/api/v1/users/profile?source=${encodeURIComponent(
              source
            )}&uid=${encodeURIComponent(uid)}`;

            await axios.get(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
          } catch (e) {
            console.warn(e);
          }
        }
      },
    }));

    useEffect(() => {
      if (isFetched && data?.spaces?.length && pathname === `/spaces`)
        navigate(`/spaces/${data?.spaces?.[0]?.id}`);
    }, [isFetched, data, navigate, pathname]);

    return (
      <div className={classNames(styles.layout, className)}>
        <TheHeader getSearch={getSearch} />
        <div className={styles.content}>
          {isNotSearchPage && isAuthenticated && (
            <div className={styles.sidebar}>
              <TheSidebar loading={isLoading} items={data?.spaces} />
            </div>
          )}
          <div className={styles.route}>
            <Outlet />
          </div>
        </div>
        {!isTranscriptRoute && <TheFooter />}
      </div>
    );
  }
);
