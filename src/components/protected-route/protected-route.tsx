import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { TProtectedRouteProps } from "./protected-route.types";
import { TLocation, TStore } from "../../types/generalTypes";

const ProtectedRoute: FC<TProtectedRouteProps> = ({
  authRequired = false,
  children,
  ...rest
}) => {
  const user = useSelector((store: TStore) => store.auth.user);
  const location = useLocation<TLocation>();

  if (user && !authRequired) {
    const from = location.state?.from || { pathname: "/" };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (!user && authRequired) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
