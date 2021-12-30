import React, { FC, useRef } from "react";
import { RefProps, TheLayout } from "src/components";
import { Route, Routes, Navigate } from "react-router";
import RouteTypes from "src/router/types";
import { Details, Login, Space, Spaces } from "src/views";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUDIENCE, CLIENT_ID, DOMAIN } from "src/config";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const App: FC = () => {
  const childRef = useRef<RefProps>();
  const queryClient = new QueryClient();

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      audience={AUDIENCE}
      cacheLocation="localstorage"
      onRedirectCallback={(state) => {
        childRef.current?.sendUserMetadata(
          state as { source: string; uid: string }
        );
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              // @ts-ignore
              element={<TheLayout ref={childRef} />}
            >
              <Route path={RouteTypes.spaces} element={<Spaces />}>
                <Route path={RouteTypes.space} element={<Space />} />
              </Route>
              <Route path={RouteTypes.transcriptions} element={<Details />} />
            </Route>
            <Route path={RouteTypes.login} element={<Login />} />
            <Route path="*" element={<Navigate to={RouteTypes.spaces} />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>
  );
};

export default App;
