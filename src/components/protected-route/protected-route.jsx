import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect, Route, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ authRequired = false, children, ...rest }) => {
  const user = useSelector(store => store.auth.user);
  const location = useLocation();

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
    )
  }

  return <Route {...rest}>{children}</Route>;
}

ProtectedRoute.propTypes = {
  authRequired: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute