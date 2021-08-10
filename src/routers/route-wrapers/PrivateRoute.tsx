/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { HOME, PRIVATE } from "../routes";

type PrivateRouteProps = {
  component: React.FC;
  path: string;
};

const PrivateRoute = ({
  component,
  path = PRIVATE,
  ...rest
}: PrivateRouteProps) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      exact
      path={path}
      render={({ location }) =>
        auth?.user?.isAuthenticated ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: HOME,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
