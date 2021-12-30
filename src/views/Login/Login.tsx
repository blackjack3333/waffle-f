import { useAuth0 } from "@auth0/auth0-react";
import { FC, useEffect } from "react";
import { useQueryParams } from "src/hooks";

export const Login: FC = () => {
  const { loginWithRedirect } = useAuth0();
  const query = useQueryParams();

  useEffect(() => {
    const source = query.get("source");
    const uid = query.get("uid");
    if (source && uid) {
      loginWithRedirect({
        redirectUri: `${window.location.origin}/spaces`,
        appState: {
          source,
          uid,
        },
      });
    } else {
      loginWithRedirect({
        redirectUri: `${window.location.origin}/spaces`,
      });
    }
  }, [loginWithRedirect, query]);
  return null;
};

export default Login;
