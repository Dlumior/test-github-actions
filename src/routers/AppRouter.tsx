import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./route-wrapers/PrivateRoute";
import PublicRoute from "./route-wrapers/PublicRoute";

import About from "../pages/About";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";

import * as ROUTES from "./routes";
import Login from "../pages/Login";
import { ProvideAuth } from "../hooks/useAuth";

const AppRouter = () => (
  <ProvideAuth>
    <Router basename={import.meta.env.PROD ? import.meta.env.BASE_URL : ""}>
      <Switch>
        <PrivateRoute Component={Profile} path={ROUTES.PROFILE} />
        <PublicRoute component={About} path={ROUTES.ABOUT} />
        <PublicRoute component={Login} path={ROUTES.LOGIN} />
        <PublicRoute component={HomePage} path={ROUTES.HOME} />
      </Switch>
    </Router>
  </ProvideAuth>
);

export default AppRouter;
